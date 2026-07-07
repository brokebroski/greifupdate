/* site_structure/js/main.js */

let currentPage = localStorage.getItem('greif_green_page') || 'home';

function navigate(page) {
  currentPage = page;
  localStorage.setItem('greif_green_page', page);
  history.pushState({ page: page }, '', page === 'home' ? '#' : '#' + page);
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function navigateProductSubpage(product) {
  currentPage = product;
  localStorage.setItem('greif_green_page', product);
  history.pushState({ page: product }, '', '#' + product);
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function navigateIBCBuy() {
  currentPage = 'ibcBuy';
  localStorage.setItem('greif_green_page', 'ibcBuy');
  history.pushState({ page: 'ibcBuy' }, '', '#ibcBuy');
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function render() {
  const fn = PAGES[currentPage] || PAGES.home;
  document.getElementById('main-content').innerHTML = fn();

  const productSubpages = ['steelDrums', 'steelDrum1a1', 'steelDrum1a2', 'ibc', 'ibcWooden', 'ibcHybrid', 'ibcPlastic', 'ibcElectron', 'ibcRebo', 'conical', 'canisters', 'clover'];
  const effectivePage = productSubpages.includes(currentPage) ? 'products' : currentPage;

  document.querySelectorAll('#main-nav a, .footer-menu a').forEach(a => {
    const p = a.getAttribute('data-page');
    if (p) {
      a.classList.toggle('active', p === effectivePage);
    }
  });

  if (['steelDrums', 'steelDrum1a1', 'steelDrum1a2', 'ibc', 'ibcWooden', 'ibcHybrid', 'ibcPlastic', 'ibcElectron', 'ibcBlack', 'ibcRebo', 'conical', 'canisters', 'clover'].includes(currentPage)) {
    setTimeout(() => {
      const tabBtns = document.querySelectorAll('.tab-btn');
      const tabContents = document.querySelectorAll('.tab-content');
      tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          const tabId = this.dataset.tab;
          tabBtns.forEach(b => b.classList.remove('active'));
          tabContents.forEach(c => c.classList.remove('active'));
          this.classList.add('active');
          document.getElementById(`tab-${tabId}`).classList.add('active');
        });
      });
    }, 50);
  }

  if (currentPage === 'steelDrum1a1' || currentPage === 'steelDrum1a2') {
    setTimeout(() => {
      initSteelManagerSelect();
    }, 50);
  }

  if (currentPage === 'canisters') {
    setTimeout(() => initCanCarousel(), 50);
  }

  if (currentPage === 'vacancies') {
    setTimeout(() => initVacancyTabs(), 50);
  }

  if (currentPage === 'about') {
    setTimeout(() => initAboutNav(), 50);
  }

  if (currentPage === 'contact') {
    setTimeout(() => {
      if (typeof ymaps !== 'undefined') {
        ymaps.ready(initYandexMap);
      }
    }, 50);
  }
}

function toggleMobileNav() {
  const drawer = document.getElementById('mobile-nav-drawer');
  const overlay = document.getElementById('mobile-nav-overlay');
  const btn = document.getElementById('hamburger-btn');
  const isOpen = drawer.classList.contains('open');
  if (isOpen) {
    closeMobileNav();
  } else {
    drawer.classList.add('open');
    overlay.classList.add('open');
    btn.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeMobileNav() {
  document.getElementById('mobile-nav-drawer').classList.remove('open');
  document.getElementById('mobile-nav-overlay').classList.remove('open');
  document.getElementById('hamburger-btn').classList.remove('open');
  document.body.style.overflow = '';
}

function toggleMobileSubmenu(id, titleEl) {
  const sub = document.getElementById(id);
  const isOpen = sub.classList.contains('open');
  sub.classList.toggle('open');
  if (titleEl) titleEl.classList.toggle('open', !isOpen);
}

// Restore page from URL hash on direct navigation / refresh
(function() {
  const hash = window.location.hash.replace('#', '');
  if (hash && (PAGES[hash] || hash === '')) {
    currentPage = hash || 'home';
    localStorage.setItem('greif_green_page', currentPage);
  }
  history.replaceState({ page: currentPage }, '', currentPage === 'home' ? '#' : '#' + currentPage);
})();

window.addEventListener('popstate', function(e) {
  const page = (e.state && e.state.page) ? e.state.page : 'home';
  currentPage = page;
  localStorage.setItem('greif_green_page', page);
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

render();

/* ── CAROUSEL: Steel Drums ── */
let _scIdx = 0;
const _SC_TOTAL = 3;
const _SC_INTERVAL = 1500;
let _scTimer = null;

function _scStartAuto() {
  _scStopAuto();
  _scTimer = setInterval(() => steelCarouselMove(1), _SC_INTERVAL);
}

function _scStopAuto() {
  if (_scTimer) { clearInterval(_scTimer); _scTimer = null; }
}

function initSteelCarousel() {
  _scIdx = 0;
  _scRender();

  const wrap = document.querySelector('.carousel-track-wrap');
  if (!wrap) return;

  wrap.addEventListener('mouseenter', _scStopAuto);
  wrap.addEventListener('mouseleave', _scStartAuto);

  let startX = 0;
  wrap.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    _scStopAuto();
  }, { passive: true });
  wrap.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) steelCarouselMove(dx < 0 ? 1 : -1);
    _scStartAuto();
  }, { passive: true });

  _scStartAuto();
}

function _scRender() {
  const track = document.getElementById('steelCarouselTrack');
  const counter = document.getElementById('steelCarouselCounter');
  const dots = document.querySelectorAll('#steelCarouselDots .carousel-dot');
  if (track) track.style.transform = `translateX(${-_scIdx * 100}%)`;
  if (counter) counter.textContent = `${_scIdx + 1} / ${_SC_TOTAL}`;
  dots.forEach((d, i) => d.classList.toggle('active', i === _scIdx));
}

function steelCarouselMove(dir) {
  _scIdx = (_scIdx + dir + _SC_TOTAL) % _SC_TOTAL;
  _scRender();
}

function steelCarouselGoTo(idx) {
  _scIdx = idx;
  _scStartAuto();
  _scRender();
}

/* ── CAROUSEL: Canisters ── */
let _ccIdx = 0;
const _CC_TOTAL = 4;
const _CC_INTERVAL = 2000;
let _ccTimer = null;

function _ccStartAuto() {
  _ccStopAuto();
  _ccTimer = setInterval(() => canCarouselMove(1), _CC_INTERVAL);
}

function _ccStopAuto() {
  if (_ccTimer) { clearInterval(_ccTimer); _ccTimer = null; }
}

function _ccRender() {
  const track = document.getElementById('canCarouselTrack');
  const counter = document.getElementById('canCarouselCounter');
  const dots = document.querySelectorAll('#canCarouselDots .carousel-dot');
  if (track) track.style.transform = `translateX(${-_ccIdx * 100}%)`;
  if (counter) counter.textContent = `${_ccIdx + 1} / ${_CC_TOTAL}`;
  dots.forEach((d, i) => d.classList.toggle('active', i === _ccIdx));
}

function canCarouselMove(dir) {
  _ccIdx = (_ccIdx + dir + _CC_TOTAL) % _CC_TOTAL;
  _ccRender();
}

function canCarouselGoTo(idx) {
  _ccIdx = idx;
  _ccStartAuto();
  _ccRender();
}

function initCanCarousel() {
  _ccIdx = 0;
  _ccRender();

  const wrap = document.querySelector('#canCarouselTrack')?.closest('.carousel-track-wrap');
  if (!wrap) return;

  wrap.addEventListener('mouseenter', _ccStopAuto);
  wrap.addEventListener('mouseleave', _ccStartAuto);

  let startX = 0;
  wrap.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    _ccStopAuto();
  }, { passive: true });
  wrap.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) canCarouselMove(dx < 0 ? 1 : -1);
    _ccStartAuto();
  }, { passive: true });

  _ccStartAuto();
}

const STEEL_REGION_MANAGERS = [
  { region: 'Амурская область', name: 'Руслан Андреев', phone: '+7 (917) 253-42-36', email: 'Ruslan.Andreev@greif.com' },
  { region: 'Алтайский край', name: 'Алексей Кузьмин', phone: '+7 (913) 988-06-48', email: 'Aleksei.Kuzmin@greif.com' },
  { region: 'Архангельская область', name: 'Алексей Зыкин', phone: '+7 (921) 068-04-60', email: 'Aleksei.Zykin@greif.com' },
  { region: 'Астраханская область', name: 'Александр Седов', phone: '+7 (903) 370-31-11', email: 'Aleksandr.Sedov@greif.com' },
  { region: 'Белгородская область', name: 'Александр Седов', phone: '+7 (903) 370-31-11', email: 'Aleksandr.Sedov@greif.com' },
  { region: 'Брянская область', name: 'Валерий Кремнев', phone: '+7 (921) 143-43-68', email: 'Valerii.Kremnev@greif.com' },
  { region: 'Владимирская область', name: 'Алексей Зыкин', phone: '+7 (921) 068-04-60', email: 'Aleksei.Zykin@greif.com' },
  { region: 'Воронежская область', name: 'Александр Седов', phone: '+7 (903) 370-31-11', email: 'Aleksandr.Sedov@greif.com' },
  { region: 'Вологодская область', name: 'Алексей Зыкин', phone: '+7 (921) 068-04-60', email: 'Aleksei.Zykin@greif.com' },
  { region: 'Волгоградская область', name: 'Александр Седов', phone: '+7 (903) 370-31-11', email: 'Aleksandr.Sedov@greif.com' },
  { region: 'Еврейская автономная область', name: 'Руслан Андреев', phone: '+7 (917) 253-42-36', email: 'Ruslan.Andreev@greif.com' },
  { region: 'Забайкальский край', name: 'Руслан Андреев', phone: '+7 (917) 253-42-36', email: 'Ruslan.Andreev@greif.com' },
  { region: 'Ивановская область', name: 'Алексей Зыкин', phone: '+7 (921) 068-04-60', email: 'Aleksei.Zykin@greif.com' },
  { region: 'Иркутская область', name: 'Руслан Андреев', phone: '+7 (917) 253-42-36', email: 'Ruslan.Andreev@greif.com' },
  { region: 'Калининградская область', name: 'Александр Седов', phone: '+7 (903) 370-31-11', email: 'Aleksandr.Sedov@greif.com' },
  { region: 'Калужская область', name: 'Валерий Кремнев', phone: '+7 (921) 143-43-68', email: 'Valerii.Kremnev@greif.com' },
  { region: 'Камчатский край', name: 'Руслан Андреев', phone: '+7 (917) 253-42-36', email: 'Ruslan.Andreev@greif.com' },
  { region: 'Костромская область', name: 'Алексей Зыкин', phone: '+7 (921) 068-04-60', email: 'Aleksei.Zykin@greif.com' },
  { region: 'Краснодарский край', name: 'Александр Седов', phone: '+7 (903) 370-31-11', email: 'Aleksandr.Sedov@greif.com' },
  { region: 'Красноярский край', name: 'Руслан Андреев', phone: '+7 (917) 253-42-36', email: 'Ruslan.Andreev@greif.com' },
  { region: 'Кемеровская область', name: 'Алексей Кузьмин', phone: '+7 (913) 988-06-48', email: 'Aleksei.Kuzmin@greif.com' },
  { region: 'Кировская область', name: 'Руслан Андреев', phone: '+7 (917) 253-42-36', email: 'Ruslan.Andreev@greif.com' },
  { region: 'Курганская область', name: 'Руслан Андреев', phone: '+7 (917) 253-42-36', email: 'Ruslan.Andreev@greif.com' },
  { region: 'Курская область', name: 'Александр Седов', phone: '+7 (903) 370-31-11', email: 'Aleksandr.Sedov@greif.com' },
  { region: 'Липецкая область', name: 'Александр Седов', phone: '+7 (903) 370-31-11', email: 'Aleksandr.Sedov@greif.com' },
  { region: 'Магаданская область', name: 'Руслан Андреев', phone: '+7 (917) 253-42-36', email: 'Ruslan.Andreev@greif.com' },
  { region: 'Москва и Московская область', name: 'Валерий Кремнев', phone: '+7 (921) 143-43-68', email: 'Valerii.Kremnev@greif.com' },
  { region: 'Мурманская область', name: 'Алексей Зыкин', phone: '+7 (921) 068-04-60', email: 'Aleksei.Zykin@greif.com' },
  { region: 'Нижегородская область', name: 'Алексей Зыкин', phone: '+7 (921) 068-04-60', email: 'Aleksei.Zykin@greif.com' },
  { region: 'Новгородская область', name: 'Алексей Зыкин', phone: '+7 (921) 068-04-60', email: 'Aleksei.Zykin@greif.com' },
  { region: 'Новосибирская область', name: 'Алексей Кузьмин', phone: '+7 (913) 988-06-48', email: 'Aleksei.Kuzmin@greif.com' },
  { region: 'Омская область', name: 'Алексей Кузьмин', phone: '+7 (913) 988-06-48', email: 'Aleksei.Kuzmin@greif.com' },
  { region: 'Оренбургская область', name: 'Руслан Андреев', phone: '+7 (917) 253-42-36', email: 'Ruslan.Andreev@greif.com' },
  { region: 'Орловская область', name: 'Александр Седов', phone: '+7 (903) 370-31-11', email: 'Aleksandr.Sedov@greif.com' },
  { region: 'Пензенская область', name: 'Руслан Андреев', phone: '+7 (917) 253-42-36', email: 'Ruslan.Andreev@greif.com' },
  { region: 'Пермский край', name: 'Руслан Андреев', phone: '+7 (917) 253-42-36', email: 'Ruslan.Andreev@greif.com' },
  { region: 'Приморский край', name: 'Руслан Андреев', phone: '+7 (917) 253-42-36', email: 'Ruslan.Andreev@greif.com' },
  { region: 'Псковская область', name: 'Валерий Кремнев', phone: '+7 (921) 143-43-68', email: 'Valerii.Kremnev@greif.com' },
  { region: 'Республика Адыгея', name: 'Александр Седов', phone: '+7 (903) 370-31-11', email: 'Aleksandr.Sedov@greif.com' },
  { region: 'Республика Алтай', name: 'Алексей Кузьмин', phone: '+7 (913) 988-06-48', email: 'Aleksei.Kuzmin@greif.com' },
  { region: 'Республика Бурятия', name: 'Алексей Кузьмин', phone: '+7 (913) 988-06-48', email: 'Aleksei.Kuzmin@greif.com' },
  { region: 'Республика Башкортостан', name: 'Руслан Андреев', phone: '+7 (917) 253-42-36', email: 'Ruslan.Andreev@greif.com' },
  { region: 'Республика Дагестан', name: 'Александр Седов', phone: '+7 (903) 370-31-11', email: 'Aleksandr.Sedov@greif.com' },
  { region: 'Республика Ингушетия', name: 'Александр Седов', phone: '+7 (903) 370-31-11', email: 'Aleksandr.Sedov@greif.com' },
  { region: 'Республика Кабардино-Балкария', name: 'Александр Седов', phone: '+7 (903) 370-31-11', email: 'Aleksandr.Sedov@greif.com' },
  { region: 'Республика Карачаево-Черкессия', name: 'Александр Седов', phone: '+7 (903) 370-31-11', email: 'Aleksandr.Sedov@greif.com' },
  { region: 'Республика Карелия', name: 'Алексей Зыкин', phone: '+7 (921) 068-04-60', email: 'Aleksei.Zykin@greif.com' },
  { region: 'Республика Коми', name: 'Руслан Андреев', phone: '+7 (917) 253-42-36', email: 'Ruslan.Andreev@greif.com' },
  { region: 'Республика Калмыкия', name: 'Александр Седов', phone: '+7 (903) 370-31-11', email: 'Aleksandr.Sedov@greif.com' },
  { region: 'Республика Марий Эл', name: 'Руслан Андреев', phone: '+7 (917) 253-42-36', email: 'Ruslan.Andreev@greif.com' },
  { region: 'Республика Мордовия', name: 'Руслан Андреев', phone: '+7 (917) 253-42-36', email: 'Ruslan.Andreev@greif.com' },
  { region: 'Республика Саха (Якутия)', name: 'Руслан Андреев', phone: '+7 (917) 253-42-36', email: 'Ruslan.Andreev@greif.com' },
  { region: 'Республика СО — Алания', name: 'Александр Седов', phone: '+7 (903) 370-31-11', email: 'Aleksandr.Sedov@greif.com' },
  { region: 'Республика Татарстан', name: 'Руслан Андреев', phone: '+7 (982) 480-03-02', email: 'Ruslan.Andreev@greif.com' },
  { region: 'Республика Тыва', name: 'Алексей Кузьмин', phone: '+7 (913) 988-06-48', email: 'Aleksei.Kuzmin@greif.com' },
  { region: 'Республика Удмуртия', name: 'Руслан Андреев', phone: '+7 (917) 253-42-36', email: 'Ruslan.Andreev@greif.com' },
  { region: 'Республика Хакасия', name: 'Алексей Кузьмин', phone: '+7 (913) 988-06-48', email: 'Aleksei.Kuzmin@greif.com' },
  { region: 'Республика Чеченская', name: 'Александр Седов', phone: '+7 (903) 370-31-11', email: 'Aleksandr.Sedov@greif.com' },
  { region: 'Республика Чувашия', name: 'Руслан Андреев', phone: '+7 (917) 253-42-36', email: 'Ruslan.Andreev@greif.com' },
  { region: 'Ростовская область', name: 'Александр Седов', phone: '+7 (903) 370-31-11', email: 'Aleksandr.Sedov@greif.com' },
  { region: 'Рязанская область', name: 'Валерий Кремнев', phone: '+7 (921) 143-43-68', email: 'Valerii.Kremnev@greif.com' },
  { region: 'Самарская область', name: 'Руслан Андреев', phone: '+7 (917) 253-42-36', email: 'Ruslan.Andreev@greif.com' },
  { region: 'Санкт-Петербург и Ленинградская область', name: 'Алексей Зыкин', phone: '+7 (921) 068-04-60', email: 'Aleksei.Zykin@greif.com' },
  { region: 'Саратовская область', name: 'Александр Седов', phone: '+7 (903) 370-31-11', email: 'Aleksandr.Sedov@greif.com' },
  { region: 'Сахалинская область', name: 'Руслан Андреев', phone: '+7 (917) 253-42-36', email: 'Ruslan.Andreev@greif.com' },
  { region: 'Свердловская область', name: 'Руслан Андреев', phone: '+7 (917) 253-42-36', email: 'Ruslan.Andreev@greif.com' },
  { region: 'Смоленская область', name: 'Валерий Кремнев', phone: '+7 (921) 143-43-68', email: 'Valerii.Kremnev@greif.com' },
  { region: 'Ставропольский край', name: 'Александр Седов', phone: '+7 (903) 370-31-11', email: 'Aleksandr.Sedov@greif.com' },
  { region: 'Тамбовская область', name: 'Валерий Кремнев', phone: '+7 (921) 143-43-68', email: 'Valerii.Kremnev@greif.com' },
  { region: 'Тверская область', name: 'Валерий Кремнев', phone: '+7 (921) 143-43-68', email: 'Valerii.Kremnev@greif.com' },
  { region: 'Томская область', name: 'Алексей Кузьмин', phone: '+7 (913) 988-06-48', email: 'Aleksei.Kuzmin@greif.com' },
  { region: 'Тульская область', name: 'Валерий Кремнев', phone: '+7 (921) 143-43-68', email: 'Valerii.Kremnev@greif.com' },
  { region: 'Тюменская область', name: 'Руслан Андреев', phone: '+7 (917) 253-42-36', email: 'Ruslan.Andreev@greif.com' },
  { region: 'Ульяновская область', name: 'Александр Седов', phone: '+7 (903) 370-31-11', email: 'Aleksandr.Sedov@greif.com' },
  { region: 'Хабаровский край', name: 'Руслан Андреев', phone: '+7 (917) 253-42-36', email: 'Ruslan.Andreev@greif.com' },
  { region: 'ХМАО — Югра', name: 'Алексей Кузьмин', phone: '+7 (913) 988-06-48', email: 'Aleksei.Kuzmin@greif.com' },
  { region: 'Челябинская область', name: 'Руслан Андреев', phone: '+7 (917) 253-42-36', email: 'Ruslan.Andreev@greif.com' },
  { region: 'Чукотский автономный округ', name: 'Руслан Андреев', phone: '+7 (917) 253-42-36', email: 'Ruslan.Andreev@greif.com' },
  { region: 'ЯНАО', name: 'Алексей Кузьмин', phone: '+7 (913) 988-06-48', email: 'Aleksei.Kuzmin@greif.com' },
  { region: 'Ярославская область', name: 'Алексей Зыкин', phone: '+7 (921) 068-04-60', email: 'Aleksei.Zykin@greif.com' },
  { region: 'Азербайджан', name: 'Александр Седов', phone: '+7 (903) 370-31-11', email: 'Aleksandr.Sedov@greif.com' },
  { region: 'Армения', name: 'Александр Седов', phone: '+7 (903) 370-31-11', email: 'Aleksandr.Sedov@greif.com' },
  { region: 'Беларусь', name: 'Валерий Кремнев', phone: '+7 (921) 143-43-68', email: 'Valerii.Kremnev@greif.com' },
  { region: 'Казахстан', name: 'Руслан Андреев', phone: '+7 (917) 253-42-36', email: 'Ruslan.Andreev@greif.com' },
  { region: 'Узбекистан', name: 'Руслан Андреев', phone: '+7 (917) 253-42-36', email: 'Ruslan.Andreev@greif.com' },
  { region: 'Кыргызстан', name: 'Руслан Андреев', phone: '+7 (917) 253-42-36', email: 'Ruslan.Andreev@greif.com' },
];

const STEEL_DEFAULT_MANAGER = { name: 'Марина Леонова', phone: '+7 (987) 230-99-71', email: 'Marina.Leonova@greif.com' };

function getSteelManagerInitials(name) {
  return name.split(' ').map(p => p[0]).slice(0, 2).join('');
}

function setSteelManager(region) {
  const m = STEEL_REGION_MANAGERS.find(r => r.region === region) || STEEL_DEFAULT_MANAGER;
  document.getElementById('steelManagerName').textContent = m.name;
  const avatarEl = document.getElementById('steelManagerAvatar');
  if (avatarEl) avatarEl.textContent = getSteelManagerInitials(m.name);
  const phoneEl = document.getElementById('steelManagerPhone');
  const phoneSpan = phoneEl.querySelector('span');
  if (phoneSpan) phoneSpan.textContent = m.phone; else phoneEl.childNodes[phoneEl.childNodes.length - 1].textContent = m.phone;
  phoneEl.href = 'tel:' + m.phone.replace(/\D/g, '').replace(/^7/, '+7');
  const emailEl = document.getElementById('steelManagerEmail');
  const emailSpan = emailEl.querySelector('span');
  if (emailSpan) emailSpan.textContent = m.email; else emailEl.childNodes[emailEl.childNodes.length - 1].textContent = m.email;
  emailEl.href = 'mailto:' + m.email;
}

// region combobox — searchable dropdown replacing native <select>
let _regionComboboxState = {};

function initSteelManagerSelect() {
  const list = document.getElementById('steelRegionList');
  if (!list) return;
  _buildRegionList('steelRegionCombobox', '', null);
  document.addEventListener('click', _regionComboboxOutsideClick, { capture: true });
}

function _buildRegionList(id, query, selectedRegion) {
  const list = document.getElementById(id.replace('Combobox', 'List'));
  if (!list) return;
  const q = query.trim().toLowerCase();
  const matches = q
    ? STEEL_REGION_MANAGERS.filter(r => r.region.toLowerCase().includes(q))
    : STEEL_REGION_MANAGERS;

  list.innerHTML = '';

  if (!q) {
    const all = document.createElement('li');
    all.className = 'region-combobox-option' + (!selectedRegion ? ' selected' : '');
    all.dataset.value = '';
    all.textContent = '— Все регионы —';
    all.onclick = () => _selectRegion(id, '', '— Все регионы —');
    list.appendChild(all);
  }

  if (matches.length === 0) {
    const empty = document.createElement('li');
    empty.className = 'region-combobox-empty';
    empty.textContent = 'Ничего не найдено';
    list.appendChild(empty);
    return;
  }

  matches.forEach(r => {
    const li = document.createElement('li');
    li.className = 'region-combobox-option' + (r.region === selectedRegion ? ' selected' : '');
    li.dataset.value = r.region;
    if (q) {
      const idx = r.region.toLowerCase().indexOf(q);
      li.innerHTML = r.region.slice(0, idx)
        + '<mark>' + r.region.slice(idx, idx + q.length) + '</mark>'
        + r.region.slice(idx + q.length);
    } else {
      li.textContent = r.region;
    }
    li.onclick = () => _selectRegion(id, r.region, r.region);
    list.appendChild(li);
  });
}

function _selectRegion(id, value, label) {
  _regionComboboxState[id] = value;
  const input = document.getElementById(id.replace('Combobox', 'Input'));
  if (input) input.value = value ? label : '';
  if (input) input.placeholder = value ? '' : 'Начните вводить регион…';
  _closeRegionDropdown(id);
  setSteelManager(value);

  // add clear button if a region is selected
  const wrap = document.getElementById(id);
  if (wrap) {
    let btn = wrap.querySelector('.region-combobox-clear');
    if (value && !btn) {
      btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'region-combobox-clear';
      btn.title = 'Сбросить';
      btn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
      btn.onclick = (e) => { e.stopPropagation(); _selectRegion(id, '', ''); };
      wrap.querySelector('.region-combobox-input-wrap').appendChild(btn);
    } else if (!value && btn) {
      btn.remove();
    }
  }
}

function toggleRegionDropdown(id) {
  const dropdown = document.getElementById(id.replace('Combobox', 'Dropdown'));
  const chevron = document.getElementById(id.replace('Combobox', 'Chevron'));
  const input = document.getElementById(id.replace('Combobox', 'Input'));
  const search = document.getElementById(id.replace('Combobox', 'Search'));
  if (!dropdown) return;
  const isOpen = dropdown.classList.contains('open');
  if (isOpen) {
    _closeRegionDropdown(id);
  } else {
    dropdown.classList.add('open');
    if (chevron) chevron.classList.add('open');
    if (search) { search.value = ''; search.focus(); }
    _buildRegionList(id, '', _regionComboboxState[id] || null);
  }
}

function filterRegionOptions(id, query) {
  _buildRegionList(id, query, _regionComboboxState[id] || null);
}

function _closeRegionDropdown(id) {
  const dropdown = document.getElementById(id.replace('Combobox', 'Dropdown'));
  const chevron = document.getElementById(id.replace('Combobox', 'Chevron'));
  const input = document.getElementById(id.replace('Combobox', 'Input'));
  if (dropdown) dropdown.classList.remove('open');
  if (chevron) chevron.classList.remove('open');
}

function _regionComboboxOutsideClick(e) {
  const comboboxes = document.querySelectorAll('.region-combobox');
  comboboxes.forEach(cb => {
    if (!cb.contains(e.target)) _closeRegionDropdown(cb.id);
  });
}
