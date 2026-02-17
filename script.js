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

// Simple text translations for core UI strings
const TRANSLATIONS = {
  en: {
    pageTitle: 'Intel: Sustainability Through the Ages',
    langBtnEnText: 'English',
    langBtnArText: 'عربي',
    logoAlt: 'Intel Logo',
    heroTitle: 'Sustainability Through the Ages',
    heroSubtitle: "Explore Intel's journey through time, discovering how our commitment to innovation has shaped a more sustainable future for technology and our planet.",
    attendanceLabel: 'Attendance',
    teamAttendanceTitle: 'Team Attendance',
    teamSignupHeading: '📝 Team Sign Up',
    teamSignupSubtitle: 'Welcome, sign in and chat with your team members!',
    attendeeListTitle: '<span class="feature-icon" aria-hidden="true">📋</span> Attendee List',
    signupCardTitle: '<span class="feature-icon" aria-hidden="true">📝</span> Welcome to Event Sign-Up',
    signupSubtitle: 'Add your name below to check in and join the team.',
    chatBoxTitle: '<span class="feature-icon" aria-hidden="true">💬</span> Chat Box',
    pillarsHeading: '🌱 Our Sustainability Pillars',
    pillarsSubtitle: "Intel's commitment to environmental responsibility and innovation",
    pillarOneTitle: 'Climate Action',
    pillarOneBodyText: "Intel is committed to achieving net-zero greenhouse gas emissions across its global operations by 2040. This includes Scope 1 and 2 emissions, and we're investing heavily in renewable energy, chemical abatement technologies, and energy-efficient manufacturing processes to drive meaningful environmental impact.",
    pillarTwoTitle: 'Responsibility',
    pillarTwoBodyText: "We advance ethical and responsible practices across our entire supply chain and in all communities where we operate. From fair labor standards to community engagement programs, Intel ensures positive social impact while maintaining the highest standards of corporate governance and transparency worldwide.",
    pillarThreeTitle: 'Innovation',
    pillarThreeBodyText: 'Through cutting-edge technology and strategic partnerships, Intel leads the semiconductor industry toward sustainable solutions. Our advanced manufacturing processes reduce environmental impact while enabling next-generation technologies that power a more sustainable digital future for everyone.',
    timelineHeading: 'Intel Timeline',
    timelineHint: 'Scroll to view timeline | Click on cards to reveal details!',
    timelineTitle1968: 'Intel Founded',
    timelineText1968: 'Robert Noyce and Gordon Moore rename the newly formed company NM Electronics to Intel Corporation, laying the foundation for decades of technological innovation.',
    timelineAlt1968: 'Intel Founded 1968',
    timelineTitle1971: 'First Microprocessor',
    timelineText1971: "Intel debuts the 4004, the world's first commercial microprocessor, igniting the microprocessor revolution and propelling the future of computing devices.",
    timelineAlt1971: 'First Microprocessor 1971',
    timelineTitle1978: '8086 Processor',
    timelineText1978: 'Launch of the 8086 processor, establishing the x86 architecture that drives countless PCs and servers in the modern era.',
    timelineAlt1978: '8086 Processor 1978',
    timelineTitle1985: '386 Processor',
    timelineText1985: 'Intel introduces the 386 processor with 32-bit architecture, ushering in a new era of performance and multitasking for personal computers.',
    timelineAlt1985: '386 Processor 1985',
    timelineTitle2006: 'Peak GHG Emissions',
    timelineText2006: "This year marks Intel's highest annual greenhouse gas emissions for operations. Over subsequent years, Intel invests heavily in chemical abatement, renewable energy, and energy-efficient manufacturing to reverse this trend.",
    timelineAlt2006: 'Peak GHG Emissions 2006',
    timelineTitle2020: 'RISE Strategy',
    timelineText2020: 'Intel launches its RISE (Responsible, Inclusive, Sustainable, Enabling) strategy and 2030 goals, aiming to drive industry-wide progress on climate action, water stewardship, and waste reduction.',
    timelineAlt2020: 'RISE Strategy 2020',
    timelineTitle2022: 'Net-Zero By 2040',
    timelineText2022: 'Intel announces its commitment to achieve net-zero greenhouse gas emissions (Scope 1 and 2) across its global operations by 2040, building on years of environmental initiatives.',
    timelineAlt2022: 'Net-Zero By 2040 2022',
    timelineTitle2023: 'Renewable Electricity',
    timelineText2023: "The company achieves 99% renewable electricity usage worldwide, helping to drastically lower carbon emissions and driving progress toward Intel's long-term sustainability goals.",
    timelineAlt2023: 'Renewable Electricity 2023',
    timelineTitle2024: 'Sustainability Summit',
    timelineText2024: 'Intel hosts its first Sustainability Summit, uniting suppliers, government officials, and industry leaders to collaborate on next-generation sustainable semiconductor manufacturing.',
    timelineAlt2024: 'Sustainability Summit 2024',
    newsletterHeading: '📬 Stay in the Loop',
    newsletterSubtitle: "Get the latest updates on Intel's sustainability journey and environmental initiatives delivered to your inbox.",
    newsletterFormLabel: 'Newsletter subscription form',
    attendeeLabel: 'Attendee Check-In',
    teamLabel: 'Team',
    messageLabel: 'Message',
    emailLabel: 'Email Address',
    checkInBtn: 'Check In',
    chatSend: 'Send',
    subscribeBtn: 'Subscribe',
    resetBtn: 'Reset Attendance',
    learnMore: 'Learn More',
    namePlaceholder: 'Enter name...',
    teamPlaceholder: 'Select Team...',
    chatPlaceholder: 'Type a message',
    emailPlaceholder: 'you@example.com',
    teamWater: '💧 Team Water Wise',
    teamZero: '🍃 Team Net Zero',
    teamPower: '⚡ Team Renewables',
    teamJoiner: ' and ',
    teamReachedSuffix: ' reached all members!',
    successMessage: 'Thank you! Check your email for confirmation.',
    footerText: 'Intel Sustainability Timeline Project | Built for learning'
  },
  ar: {
    pageTitle: 'إنتل: الاستدامة عبر العصور',
    langBtnEnText: 'English',
    langBtnArText: 'العربية',
    logoAlt: 'شعار إنتل',
    heroTitle: 'الاستدامة عبر العصور',
    heroSubtitle: 'استكشف رحلة إنتل عبر الزمن، وكيف شكّل التزامنا بالابتكار مستقبلا أكثر استدامة للتقنية وكوكبنا.',
    attendanceLabel: 'الحضور',
    teamAttendanceTitle: 'حضور الفرق',
    teamSignupHeading: '📝 تسجيل الفريق',
    teamSignupSubtitle: 'مرحبًا، سجّل دخولك وتحدّث مع أعضاء فريقك!',
    attendeeListTitle: '<span class="feature-icon" aria-hidden="true">📋</span> قائمة الحضور',
    signupCardTitle: '<span class="feature-icon" aria-hidden="true">📝</span> مرحبًا بكم في تسجيل الفعالية',
    signupSubtitle: 'أضف اسمك أدناه لتسجيل الحضور والانضمام إلى الفريق.',
    chatBoxTitle: '<span class="feature-icon" aria-hidden="true">💬</span> مربع الدردشة',
    pillarsHeading: '🌱 ركائز الاستدامة لدينا',
    pillarsSubtitle: 'التزام إنتل بالمسؤولية البيئية والابتكار',
    pillarOneTitle: 'العمل المناخي',
    pillarOneBodyText: 'تلتزم إنتل بتحقيق صافي انبعاثات صفري لغازات الدفيئة عبر عملياتها العالمية بحلول عام 2040. يشمل ذلك الانبعاثات من النطاقين 1 و2، كما نستثمر بكثافة في الطاقة المتجددة وتقنيات خفض الانبعاثات الكيميائية وعمليات تصنيع موفرة للطاقة لتحقيق تأثير بيئي ملموس.',
    pillarTwoTitle: 'المسؤولية',
    pillarTwoBodyText: 'نعزز الممارسات الأخلاقية والمسؤولة عبر سلسلة التوريد بالكامل وفي جميع المجتمعات التي نعمل فيها. من معايير العمل العادل إلى برامج المشاركة المجتمعية، تضمن إنتل أثرا اجتماعيا إيجابيا مع الحفاظ على أعلى معايير الحوكمة والشفافية حول العالم.',
    pillarThreeTitle: 'الابتكار',
    pillarThreeBodyText: 'من خلال التقنيات المتقدمة والشراكات الاستراتيجية، تقود إنتل صناعة أشباه الموصلات نحو حلول مستدامة. تقلل عمليات التصنيع المتقدمة لدينا الأثر البيئي مع تمكين تقنيات الجيل التالي التي تدعم مستقبلا رقميا أكثر استدامة للجميع.',
    timelineHeading: 'الخط الزمني لإنتل',
    timelineHint: 'مرّر لعرض الخط الزمني | انقر على البطاقات لعرض التفاصيل!',
    timelineTitle1968: 'تأسيس إنتل',
    timelineText1968: 'أعاد روبرت نويس وجوردون مور تسمية الشركة الناشئة من NM Electronics إلى Intel Corporation، لتكون الأساس لعقود من الابتكار التقني.',
    timelineAlt1968: 'تأسيس إنتل 1968',
    timelineTitle1971: 'أول معالج دقيق',
    timelineText1971: 'قدمت إنتل المعالج 4004، أول معالج دقيق تجاري في العالم، مما أشعل ثورة المعالجات الدقيقة ودفع مستقبل أجهزة الحوسبة.',
    timelineAlt1971: 'أول معالج دقيق 1971',
    timelineTitle1978: 'معالج 8086',
    timelineText1978: 'إطلاق معالج 8086 الذي أسس لمعمارية x86 التي تشغل عددا لا يحصى من الحواسيب والخوادم في العصر الحديث.',
    timelineAlt1978: 'معالج 8086 عام 1978',
    timelineTitle1985: 'معالج 386',
    timelineText1985: 'قدمت إنتل معالج 386 بمعمارية 32 بت، فاتحة عصرا جديدا من الأداء وتعدد المهام للحواسيب الشخصية.',
    timelineAlt1985: 'معالج 386 عام 1985',
    timelineTitle2006: 'ذروة انبعاثات غازات الدفيئة',
    timelineText2006: 'يمثل هذا العام أعلى انبعاثات سنوية لغازات الدفيئة من عمليات إنتل. وفي السنوات اللاحقة استثمرت إنتل بقوة في تقنيات خفض الانبعاثات والطاقة المتجددة والتصنيع الموفّر للطاقة لعكس هذا الاتجاه.',
    timelineAlt2006: 'ذروة انبعاثات غازات الدفيئة 2006',
    timelineTitle2020: 'استراتيجية RISE',
    timelineText2020: 'أطلقت إنتل استراتيجية RISE (مسؤولة، شاملة، مستدامة، تمكينية) وأهداف 2030 بهدف دفع التقدم على مستوى الصناعة في العمل المناخي ورعاية المياه وتقليل النفايات.',
    timelineAlt2020: 'استراتيجية RISE لعام 2020',
    timelineTitle2022: 'صافي صفر بحلول 2040',
    timelineText2022: 'أعلنت إنتل التزامها بتحقيق صافي انبعاثات صفري لغازات الدفيئة (النطاقين 1 و2) عبر عملياتها العالمية بحلول عام 2040، استنادا إلى سنوات من المبادرات البيئية.',
    timelineAlt2022: 'صافي صفر بحلول 2040 في 2022',
    timelineTitle2023: 'الكهرباء المتجددة',
    timelineText2023: 'حققت الشركة استخداما عالميا بنسبة 99% للكهرباء المتجددة، مما خفّض الانبعاثات الكربونية بشكل كبير ودفع التقدم نحو أهداف الاستدامة طويلة المدى لإنتل.',
    timelineAlt2023: 'الكهرباء المتجددة 2023',
    timelineTitle2024: 'قمة الاستدامة',
    timelineText2024: 'استضافت إنتل أول قمة للاستدامة، جامعة الموردين والمسؤولين الحكوميين وقادة الصناعة للتعاون على تصنيع أشباه موصلات أكثر استدامة للجيل القادم.',
    timelineAlt2024: 'قمة الاستدامة 2024',
    newsletterHeading: '📬 ابقَ على اطلاع',
    newsletterSubtitle: 'احصل على آخر التحديثات حول رحلة استدامة إنتل ومبادراتها البيئية إلى بريدك.',
    newsletterFormLabel: 'نموذج الاشتراك في النشرة',
    attendeeLabel: 'تسجيل حضور المشاركين',
    teamLabel: 'الفريق',
    messageLabel: 'رسالة',
    emailLabel: 'البريد الإلكتروني',
    checkInBtn: 'تسجيل',
    chatSend: 'إرسال',
    subscribeBtn: 'اشترك',
    resetBtn: 'إعادة ضبط الحضور',
    learnMore: 'اعرف المزيد',
    namePlaceholder: 'أدخل الاسم...',
    teamPlaceholder: 'اختر فريقًا...',
    chatPlaceholder: 'اكتب رسالة',
    emailPlaceholder: 'you@example.com',
    teamWater: '💧 فريق الحفاظ على المياه',
    teamZero: '🍃 فريق صافي الانبعاثات',
    teamPower: '⚡ فريق الطاقة المتجددة',
    teamJoiner: ' و',
    teamReachedSuffix: ' وصل جميع الأعضاء!',
    successMessage: 'شكرًا لك! تحقّق من بريدك الإلكتروني للتأكيد.',
    footerText: 'مشروع الخط الزمني لاستدامة إنتل | بُني للتعلّم'
  }
};

// Storage key for user's language preference
const LANGUAGE_STORAGE_KEY = 'intel-sustainability-language';
let currentLanguage = 'en';

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

  currentLanguage = lang;

  const htmlElement = document.documentElement;
  const bodyElement = document.body;

  // Update HTML attributes for language and direction
  htmlElement.setAttribute('lang', config.code);
  htmlElement.setAttribute('dir', config.direction);
  if (bodyElement) {
    bodyElement.setAttribute('dir', config.direction);
  }

  // Store the language preference
  localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);

  // Dispatch custom event for other scripts to listen to
  window.dispatchEvent(new CustomEvent('languageChanged', {
    detail: { language: lang, direction: config.direction }
  }));

  applyTranslations(lang);

  console.log(`Language changed to: ${config.name} (${config.direction})`);
}

function applyTranslations(lang) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const setText = (selector, text) => {
    const el = document.querySelector(selector);
    if (el) {
      el.textContent = text;
    }
  };
  const setHTML = (selector, html) => {
    const el = document.querySelector(selector);
    if (el) {
      el.innerHTML = html;
    }
  };

  if (t.pageTitle) {
    document.title = t.pageTitle;
  }

  setText('#heroTitle', t.heroTitle);
  setText('#heroSubtitle', t.heroSubtitle);
  setText('#langBtnEn', t.langBtnEnText);
  setText('#langBtnAr', t.langBtnArText);
  const heroLogo = document.getElementById('heroLogo');
  if (heroLogo && t.logoAlt) {
    heroLogo.setAttribute('alt', t.logoAlt);
  }
  setText('#attendanceLabel', t.attendanceLabel);
  setText('#teamAttendanceTitle', t.teamAttendanceTitle);
  setHTML('#featureHeadingDuplicate', t.teamSignupHeading);
  setText('#teamSignupSubtitle', t.teamSignupSubtitle);
  setHTML('#attendeeListTitle', t.attendeeListTitle);
  setHTML('#signupCardTitle', t.signupCardTitle);
  setText('#signupSubtitle', t.signupSubtitle);
  setHTML('#chatBoxTitle', t.chatBoxTitle);
  setHTML('#featureHeading', t.pillarsHeading);
  setText('#pillarsSubtitle', t.pillarsSubtitle);
  setText('#pillarOneTitle', t.pillarOneTitle);
  setText('#pillarOneBodyText', t.pillarOneBodyText);
  setText('#pillarTwoTitle', t.pillarTwoTitle);
  setText('#pillarTwoBodyText', t.pillarTwoBodyText);
  setText('#pillarThreeTitle', t.pillarThreeTitle);
  setText('#pillarThreeBodyText', t.pillarThreeBodyText);
  setText('#timelineHeading', t.timelineHeading);
  setText('#timelineHint', t.timelineHint);
  setText('#timelineTitle1968', t.timelineTitle1968);
  setText('#timelineText1968', t.timelineText1968);
  setText('#timelineTitle1971', t.timelineTitle1971);
  setText('#timelineText1971', t.timelineText1971);
  setText('#timelineTitle1978', t.timelineTitle1978);
  setText('#timelineText1978', t.timelineText1978);
  setText('#timelineTitle1985', t.timelineTitle1985);
  setText('#timelineText1985', t.timelineText1985);
  setText('#timelineTitle2006', t.timelineTitle2006);
  setText('#timelineText2006', t.timelineText2006);
  setText('#timelineTitle2020', t.timelineTitle2020);
  setText('#timelineText2020', t.timelineText2020);
  setText('#timelineTitle2022', t.timelineTitle2022);
  setText('#timelineText2022', t.timelineText2022);
  setText('#timelineTitle2023', t.timelineTitle2023);
  setText('#timelineText2023', t.timelineText2023);
  setText('#timelineTitle2024', t.timelineTitle2024);
  setText('#timelineText2024', t.timelineText2024);
  const setAlt = (selector, alt) => {
    const el = document.querySelector(selector);
    if (el && alt) {
      el.setAttribute('alt', alt);
    }
  };
  setAlt('#timelineImg1968', t.timelineAlt1968);
  setAlt('#timelineImg1971', t.timelineAlt1971);
  setAlt('#timelineImg1978', t.timelineAlt1978);
  setAlt('#timelineImg1985', t.timelineAlt1985);
  setAlt('#timelineImg2006', t.timelineAlt2006);
  setAlt('#timelineImg2020', t.timelineAlt2020);
  setAlt('#timelineImg2022', t.timelineAlt2022);
  setAlt('#timelineImg2023', t.timelineAlt2023);
  setAlt('#timelineImg2024', t.timelineAlt2024);
  setHTML('#newsletterHeading', t.newsletterHeading);
  setText('#newsletterSubtitle', t.newsletterSubtitle);
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm && t.newsletterFormLabel) {
    newsletterForm.setAttribute('aria-label', t.newsletterFormLabel);
  }
  setText('#footerText', t.footerText);

  setText('label[for="attendeeName"]', t.attendeeLabel);
  setText('label[for="teamSelect"]', t.teamLabel);
  setText('label[for="chatInput"]', t.messageLabel);
  setText('label[for="emailInput"]', t.emailLabel);

  setText('#checkInBtn', t.checkInBtn);
  setText('#chatSend', t.chatSend);
  setText('.subscribe-btn', t.subscribeBtn);
  setText('#resetCountsBtn', t.resetBtn);

  const nameInput = document.getElementById('attendeeName');
  if (nameInput) {
    nameInput.setAttribute('placeholder', t.namePlaceholder);
  }
  const chatInput = document.getElementById('chatInput');
  if (chatInput) {
    chatInput.setAttribute('placeholder', t.chatPlaceholder);
  }
  const emailInput = document.getElementById('emailInput');
  if (emailInput) {
    emailInput.setAttribute('placeholder', t.emailPlaceholder);
  }

  const teamPlaceholder = document.querySelector('#teamSelect option[disabled]');
  if (teamPlaceholder) {
    teamPlaceholder.textContent = t.teamPlaceholder;
  }
  const teamWater = document.querySelector('#teamSelect option[value="water"]');
  if (teamWater) {
    teamWater.textContent = t.teamWater;
  }
  const teamZero = document.querySelector('#teamSelect option[value="zero"]');
  if (teamZero) {
    teamZero.textContent = t.teamZero;
  }
  const teamPower = document.querySelector('#teamSelect option[value="power"]');
  if (teamPower) {
    teamPower.textContent = t.teamPower;
  }

  const teamNameWater = document.querySelector('.team-card.water .team-name');
  if (teamNameWater) {
    teamNameWater.textContent = t.teamWater;
  }
  const teamNameZero = document.querySelector('.team-card.zero .team-name');
  if (teamNameZero) {
    teamNameZero.textContent = t.teamZero;
  }
  const teamNamePower = document.querySelector('.team-card.power .team-name');
  if (teamNamePower) {
    teamNamePower.textContent = t.teamPower;
  }

  document.querySelectorAll('.learn-more-btn').forEach(btn => {
    btn.textContent = t.learnMore;
  });

  const successText = document.querySelector('#successMessage span:last-child');
  if (successText) {
    successText.textContent = t.successMessage;
  }

  if (window.refreshAttendeeList) {
    window.refreshAttendeeList();
  }
  if (window.refreshTeamWinMessage) {
    window.refreshTeamWinMessage();
  }
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

    let attendeeEntries = [];

    function getTeamLabel(teamKey) {
      const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
      if (teamKey === 'water') {
        return t.teamWater;
      }
      if (teamKey === 'zero') {
        return t.teamZero;
      }
      return t.teamPower;
    }

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
        if (!Array.isArray(data)) {
          return [];
        }

        // Support legacy string lists and new structured entries.
        return data.map(item => {
          if (item && typeof item === 'object') {
            return item;
          }

          const text = String(item);
          const parts = text.split(' - ');
          if (parts.length < 2) {
            return { name: text, team: null, rawText: text };
          }

          const name = parts.slice(0, -1).join(' - ').trim();
          const label = parts[parts.length - 1].trim();
          const labelMap = {
            water: [TRANSLATIONS.en.teamWater, TRANSLATIONS.ar.teamWater],
            zero: [TRANSLATIONS.en.teamZero, TRANSLATIONS.ar.teamZero],
            power: [TRANSLATIONS.en.teamPower, TRANSLATIONS.ar.teamPower]
          };
          const teamKey = Object.keys(labelMap).find(key => labelMap[key].includes(label));
          if (!teamKey) {
            return { name: text, team: null, rawText: text };
          }
          return { name, team: teamKey };
        });
      } catch (error) {
        return [];
      }
    }

    function renderAttendeeList(list) {
      if (!attendeeList) {
        return;
      }
      attendeeList.innerHTML = '';
      list.forEach(entry => {
        const listItem = document.createElement('li');
        if (entry && entry.team) {
          listItem.textContent = entry.name + ' - ' + getTeamLabel(entry.team);
        } else {
          listItem.textContent = entry.rawText || entry.name || '';
        }
        attendeeList.appendChild(listItem);
      });
    }

    window.refreshAttendeeList = function() {
      renderAttendeeList(attendeeEntries);
    };

    window.refreshTeamWinMessage = function() {
      if (!teamWinMessage) {
        return;
      }
      const reachedTeams = Object.keys(teamCounts).filter(teamKey => teamCounts[teamKey] > 16);
      if (reachedTeams.length === 0) {
        teamWinMessage.textContent = '';
        return;
      }
      const message = getTeamWinMessage(reachedTeams);
      teamWinMessage.textContent = message;
      saveTeamWinMessage(message);
    };

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

    function getTeamReachedMessage(teamKey) {
      const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
      return getTeamLabel(teamKey) + t.teamReachedSuffix;
    }

    function getTeamWinMessage(teamKeys) {
      const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
      const labels = teamKeys.map(teamKey => getTeamLabel(teamKey));
      if (labels.length === 1) {
        return labels[0] + t.teamReachedSuffix;
      }
      return labels.join(t.teamJoiner) + t.teamReachedSuffix;
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
        alert(getTeamReachedMessage(team));
        if (teamWinMessage) {
          const message = getTeamWinMessage([team]);
          teamWinMessage.textContent = message;
          saveTeamWinMessage(message);
        }
      }

      lastAttendeeName = name;

      // Add the attendee name to the list.
      if (attendeeList) {
        attendeeEntries.push({ name, team });
        renderAttendeeList(attendeeEntries);
        saveAttendeeList(attendeeEntries);
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
      const reachedTeams = Object.keys(teamCounts).filter(teamKey => teamCounts[teamKey] > 16);
      const hasDeprecatedPrefix = storedTeamWin && /Teams? won:/i.test(storedTeamWin);
      if (storedTeamWin && !hasDeprecatedPrefix) {
        teamWinMessage.textContent = storedTeamWin;
      } else if (reachedTeams.length > 0) {
        const message = getTeamWinMessage(reachedTeams);
        teamWinMessage.textContent = message;
        saveTeamWinMessage(message);
      }
    }

    attendeeEntries = loadAttendeeList();
    if (attendeeEntries.length > 0) {
      renderAttendeeList(attendeeEntries);
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
        chatItem.textContent = '💬 ' + senderName + ': ' + message;
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
