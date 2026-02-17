// ==========================================
// LANGUAGE DETECTION & RTL MODE HANDLER
// ==========================================

// Configuration for supported languages
const LANGUAGE_CONFIG = {
  en: {
    code: 'en',
    direction: 'ltr',
    name: 'English'
  },
  ar: {
    code: 'ar',
    direction: 'rtl',
    name: 'العربية'
  }
};

// Storage key for user's language preference
const LANGUAGE_STORAGE_KEY = 'intel-sustainability-language';

// Detect browser's default language
function getBrowserLanguage() {
  const browserLang = navigator.language || navigator.userLanguage;
  // Extract language code (e.g., 'ar-AE' -> 'ar')
  const langCode = browserLang.split('-')[0];
  return LANGUAGE_CONFIG[langCode] ? langCode : 'en';
}

// Get the initial language preference
function getInitialLanguage() {
  // 1. Check if user has a saved preference in localStorage
  const savedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (savedLang && LANGUAGE_CONFIG[savedLang]) {
    return savedLang;
  }

  // 2. Fall back to browser's language preference
  return getBrowserLanguage();
}

// Apply language and RTL/LTR mode to the document
function applyLanguage(lang) {
  const config = LANGUAGE_CONFIG[lang];
  if (!config) {
    console.warn('Language not supported:', lang);
    return;
  }

  const htmlElement = document.documentElement;

  // Update HTML attributes for language and direction
  htmlElement.setAttribute('lang', config.code);
  htmlElement.setAttribute('dir', config.direction);

  // Store the language preference
  localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);

  // Dispatch custom event for other scripts to listen to
  window.dispatchEvent(new CustomEvent('languageChanged', {
    detail: { language: lang, direction: config.direction }
  }));

  console.log(`Language changed to: ${config.name} (${config.direction})`);
}

// Switch language function (called by language buttons)
function switchLanguage(lang) {
  applyLanguage(lang);
}

// Initialize language on page load
window.addEventListener('DOMContentLoaded', function() {
  // Set initial language
  const initialLang = getInitialLanguage();
  applyLanguage(initialLang);

  // ==========================================
  // INTERACTIVE ELEMENTS HANDLER
  // ==========================================

  // Handle flip cards
  const flipCards = document.querySelectorAll('.flip-card');
  flipCards.forEach(card => {
    // Make cards keyboard accessible
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    // Click handler
    card.addEventListener('click', function() {
      this.classList.toggle('flipped');
    });

    // Keyboard handler for Enter and Space
    card.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.classList.toggle('flipped');
      }
    });
  });

  // Handle regular cards
  const cards = document.querySelectorAll('section > div:not(.flip-card)');
  cards.forEach(card => {
    card.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  });

  // Handle newsletter form submission
  const form = document.getElementById('newsletterForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('emailInput').value;
      const successMessage = document.getElementById('successMessage');

      // Simple validation
      if (email && email.includes('@')) {
        successMessage.style.display = 'block';
        form.reset();

        // Hide message after 4 seconds
        setTimeout(() => {
          successMessage.style.display = 'none';
        }, 4000);
      }
    });
  }

  // ==========================================
  // CHECK-IN TRACKER (CLEAN REBUILD)
  // ==========================================
  let lastAttendeeName = '';
  const checkInForm = document.getElementById('checkInForm');
  if (checkInForm) {
    const attendeeNameInput = document.getElementById('attendeeName');
    const teamSelect = document.getElementById('teamSelect');
    const greeting = document.getElementById('greeting');
    const attendeeCount = document.getElementById('attendeeCount');
    const attendeeGoal = document.getElementById('attendeeGoal');
    const progressBar = document.getElementById('progressBar');
    const progressContainer = document.querySelector('.progress-container');
    const attendeeList = document.getElementById('attendeeList');
    const teamWinMessage = document.getElementById('teamWinMessage');
    const goalMessage = document.getElementById('goalMessage');
    const waterCount = document.getElementById('waterCount');
    const zeroCount = document.getElementById('zeroCount');
    const powerCount = document.getElementById('powerCount');

    const GOAL_NUMBER = 50;
    const goalNumber = GOAL_NUMBER;
    if (attendeeGoal) {
      attendeeGoal.textContent = String(GOAL_NUMBER);
    }
    if (progressContainer) {
      progressContainer.setAttribute('aria-valuemax', String(GOAL_NUMBER));
    }
    const STORAGE_KEY = 'intel-checkin-counts';
    const LIST_STORAGE_KEY = 'intel-checkin-attendees';
    const TEAM_WIN_KEY = 'intel-checkin-team-win-message';
    let totalCount = 0;
    let goalReached = false;
    const teamThresholdReached = {
      water: false,
      zero: false,
      power: false
    };
    const teamCounts = {
      water: 0,
      zero: 0,
      power: 0
    };

    const teamLabels = {
      water: '💧 Team Water Wise',
      zero: '🍃 Team Net Zero',
      power: '⚡ Team Renewables'
    };

    const teamEmojis = {
      water: '💧',
      zero: '🍃',
      power: '⚡'
    };

    const resetCountsBtn = document.getElementById('resetCountsBtn');

    function updateProgress() {
      const percent = Math.min((totalCount / goalNumber) * 100, 100);
      progressBar.style.width = percent + '%';
      progressBar.textContent = Math.round(percent) + '%';
      progressContainer.setAttribute('aria-valuenow', String(totalCount));
    }

    function saveCounts() {
      const payload = {
        totalCount,
        teamCounts: {
          water: teamCounts.water,
          zero: teamCounts.zero,
          power: teamCounts.power
        }
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    }

    function saveAttendeeList(list) {
      localStorage.setItem(LIST_STORAGE_KEY, JSON.stringify(list));
    }

    function saveTeamWinMessage(message) {
      localStorage.setItem(TEAM_WIN_KEY, message);
    }

    function loadTeamWinMessage() {
      return localStorage.getItem(TEAM_WIN_KEY) || '';
    }

    function loadAttendeeList() {
      const raw = localStorage.getItem(LIST_STORAGE_KEY);
      if (!raw) {
        return [];
      }

      try {
        const data = JSON.parse(raw);
        return Array.isArray(data) ? data : [];
      } catch (error) {
        return [];
      }
    }

    function loadCounts() {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return;
      }

      try {
        const data = JSON.parse(raw);
        if (typeof data.totalCount === 'number') {
          totalCount = data.totalCount;
        }
        if (data.teamCounts) {
          teamCounts.water = Number(data.teamCounts.water) || 0;
          teamCounts.zero = Number(data.teamCounts.zero) || 0;
          teamCounts.power = Number(data.teamCounts.power) || 0;
        }
      } catch (error) {
        // If localStorage is invalid, start fresh.
        totalCount = 0;
        teamCounts.water = 0;
        teamCounts.zero = 0;
        teamCounts.power = 0;
      }
    }

    function syncTeamThresholds() {
      teamThresholdReached.water = teamCounts.water > 16;
      teamThresholdReached.zero = teamCounts.zero > 16;
      teamThresholdReached.power = teamCounts.power > 16;
    }

    function getTeamWinMessage(teamKeys) {
      const labels = teamKeys.map(teamKey => teamLabels[teamKey]);
      if (labels.length === 1) {
        return 'Team won: ' + labels[0] + ' reached all members!';
      }
      return 'Teams won: ' + labels.join(' and ') + ' reached all members!';
    }

    function updateCounts() {
      attendeeCount.textContent = totalCount;
      waterCount.textContent = teamCounts.water;
      zeroCount.textContent = teamCounts.zero;
      powerCount.textContent = teamCounts.power;
      updateProgress();
      saveCounts();
    }

    function clearAttendeeList() {
      if (!attendeeList) {
        return;
      }
      attendeeList.innerHTML = '';
      localStorage.removeItem(LIST_STORAGE_KEY);
    }

    function getWinningTeamMessage() {
      const entries = Object.entries(teamCounts);
      let topCount = -1;
      let topTeams = [];

      entries.forEach(([teamKey, count]) => {
        if (count > topCount) {
          topCount = count;
          topTeams = [teamKey];
        } else if (count === topCount) {
          topTeams.push(teamKey);
        }
      });

      const labels = topTeams.map(teamKey => teamEmojis[teamKey].repeat(9));
      if (labels.length === 1) {
        return 'Goal reached!<br><span class="goal-subtext"><span class="goal-underline">First team to show up:</span> <span class="goal-team">' + labels[0] + '</span></span>';
      }

      return 'Goal reached!<br><span class="goal-subtext"><span class="goal-underline">First teams to show up:</span> <span class="goal-team">' + labels.join(' and ') + '</span></span>';
    }

    checkInForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = attendeeNameInput.value.trim();
      const team = teamSelect.value;

      if (!name || !team) {
        return;
      }

      totalCount = totalCount + 1;
      if (teamCounts[team] !== undefined) {
        teamCounts[team] = teamCounts[team] + 1;
      }

      if (teamCounts[team] > 16 && !teamThresholdReached[team]) {
        teamThresholdReached[team] = true;
        alert('Team won: ' + teamLabels[team] + ' reached all members!');
        if (teamWinMessage) {
          const message = getTeamWinMessage([team]);
          teamWinMessage.textContent = message;
          saveTeamWinMessage(message);
        }
      }

      lastAttendeeName = name;

      // Add the attendee name to the list.
      if (attendeeList) {
        const listItem = document.createElement('li');
        listItem.textContent = name + ' - ' + teamLabels[team];
        attendeeList.appendChild(listItem);

        const currentList = Array.from(attendeeList.querySelectorAll('li')).map(li => li.textContent);
        saveAttendeeList(currentList);
      }

      alert('Welcome, ' + name + '!');
      greeting.textContent = 'Welcome, ' + name + '! You are checked in.';
      updateCounts();

      if (!goalReached && totalCount >= goalNumber) {
        goalReached = true;
        if (goalMessage) {
          goalMessage.innerHTML = getWinningTeamMessage();
        }
      }

      checkInForm.reset();
      attendeeNameInput.focus();
    });

    loadCounts();
    syncTeamThresholds();

    if (teamWinMessage) {
      const storedTeamWin = loadTeamWinMessage();
      if (storedTeamWin) {
        teamWinMessage.textContent = storedTeamWin;
      } else {
        const reachedTeams = Object.keys(teamCounts).filter(teamKey => teamCounts[teamKey] > 16);
        if (reachedTeams.length > 0) {
          const message = getTeamWinMessage(reachedTeams);
          teamWinMessage.textContent = message;
          saveTeamWinMessage(message);
        }
      }
    }

    const storedAttendees = loadAttendeeList();
    if (attendeeList && storedAttendees.length > 0) {
      storedAttendees.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        attendeeList.appendChild(listItem);
      });
    }
    updateCounts();

    if (totalCount >= goalNumber && goalMessage) {
      goalReached = true;
      goalMessage.innerHTML = getWinningTeamMessage();
    }

    if (resetCountsBtn) {
      resetCountsBtn.addEventListener('click', function() {
        totalCount = 0;
        teamCounts.water = 0;
        teamCounts.zero = 0;
        teamCounts.power = 0;
        lastAttendeeName = '';
        goalReached = false;
        teamThresholdReached.water = false;
        teamThresholdReached.zero = false;
        teamThresholdReached.power = false;
        greeting.textContent = '';
        if (teamWinMessage) {
          teamWinMessage.textContent = '';
        }
        localStorage.removeItem(TEAM_WIN_KEY);
        if (goalMessage) {
          goalMessage.textContent = '';
        }
        updateCounts();
        clearAttendeeList();
      });
    }
  }

  // ==========================================
  // SIMPLE CHAT BOX
  // ==========================================
  const chatForm = document.getElementById('chatForm');
  if (chatForm) {
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');

    chatForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const message = chatInput.value.trim();
      if (!message) {
        return;
      }

      if (!lastAttendeeName) {
        alert('Please sign up before sending a chat message.');
        chatInput.focus();
        return;
      }

      const senderName = lastAttendeeName ? lastAttendeeName : 'Anonymous';

      if (chatMessages) {
        const chatItem = document.createElement('li');
        chatItem.textContent = senderName + ': ' + message;
        chatMessages.appendChild(chatItem);
      }

      chatForm.reset();
      chatInput.focus();
    });
  }

  // ==========================================
  // LANGUAGE CHANGE LISTENER
  // ==========================================
  // Optional: Listen for language changes to update UI elements
  window.addEventListener('languageChanged', function(event) {
    // You can add additional UI updates here if needed
    const { language, direction } = event.detail;
    console.log(`Page is now in ${direction} mode for ${language}`);
  });
});
