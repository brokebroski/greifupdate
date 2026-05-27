/* site_structure/js/pages.js */

/* ─────────── IBC HELPER FUNCTIONS ─────────── */

function _ibcDlBtn(label) {
  return `<a href="#" class="ibc-dl-btn" onclick="alert('Файл будет доступен после публикации на сайте.');return false;">
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
    ${label}
  </a>`;
}

function _ibcTechTable(weight) {
  return `<table style="width:100%;border-collapse:collapse;font-size:14px"><tbody>${[
    ['Материал емкости', 'Полиэтилен высокой плотности (ПЭНД)'],
    ['Длина, мм', '1200 ±10,0'],
    ['Ширина, мм', '1000 ±10,0'],
    ['Высота, мм', '1165 ±10,0'],
    ['Объем, л', '1000'],
    ['Вес, кг', weight],
    ['Номинальный объем', '1000 л'],
    ['Предельный объем заполнения', '1055 л (до заливного отверстия)'],
  ].map(([k,v]) => `<tr style="border-bottom:1px solid var(--border)">
    <td style="padding:10px 0;color:var(--text-muted);width:45%">${k}</td>
    <td style="padding:10px 0;color:var(--text-dark);font-weight:500">${v}</td>
  </tr>`).join('')}</tbody></table>`;
}

function _ibcPurpose() {
  return `<p style="font-size:14px;color:var(--text-dark);line-height:1.8;margin:0 0 4px">
    Контейнеры предназначены для применения в качестве тары для хранения и транспортирования пищевой и химической продукции, жидких и жидкотекучих продуктов. Допускается применение для сыпучих и вязких продуктов.
  </p>`;
}

function _ibcColors() {
  return `<div>
    <div style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--green-primary);margin-bottom:12px">Цвет колбы</div>
    <div class="ibc-colors-row">
      <div class="ibc-color-swatch">
        <div class="ibc-color-circle" style="background:#f5f5f0;border:1.5px solid #ccc"></div>
        <div>
          <div style="font-weight:600;font-size:13px;color:var(--text-dark)">Натуральный (белый)</div>
          <div style="font-size:11px;color:var(--text-muted)">Стандартное исполнение</div>
        </div>
      </div>
      <div class="ibc-color-swatch">
        <div class="ibc-color-circle" style="background:#1a1a1a;border:1.5px solid #444"></div>
        <div>
          <div style="font-weight:600;font-size:13px;color:var(--text-dark)">Чёрный</div>
          <div style="font-size:11px;color:var(--text-muted)">Защита от УФ-излучения</div>
        </div>
      </div>
    </div>
  </div>`;
}

function _ibcStdTab() {
  return `<div class="ibc-spec-block">
    <div class="ibc-spec-block-hd">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      Стандарт — область применения
    </div>
    <ul style="list-style:none;padding:0;margin:0 0 18px">${[
      'Предназначен для пищевой и промышленной продукции',
      'Для хранения и транспортирования жидких и жидкотекучих продуктов, отнесённых к массовым грузам, не относящихся к опасным грузам по ГОСТ 19433',
      'Максимальная плотность продукта: <strong>не более 1,5 г/см³</strong>',
    ].map(t => `<li style="display:flex;gap:8px;padding:8px 0;border-bottom:1px solid var(--border);font-size:14px;color:var(--text-dark)">
      <span style="color:var(--green-primary);font-weight:700;flex-shrink:0">—</span>${t}
    </li>`).join('')}</ul>
    <div style="display:flex;flex-wrap:wrap;gap:8px">${_ibcDlBtn('Декларация о соответствии ТР ТС')}</div>
  </div>`;
}

function _ibcUNTab() {
  return `<div class="ibc-spec-block">
    <div class="ibc-spec-block-hd">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
      ООН — область применения
    </div>
    <ul style="list-style:none;padding:0;margin:0 0 18px">${[
      'Предназначен для пищевой и промышленной продукции',
      'Для массовых грузов; допускается для опасных грузов II и III группы по ГОСТ 26319 (кроме классов 2, 7 и подкласса 6.2)',
      'Максимальная плотность продукта по ДОПОГ: <strong>не более 1,9 г/см³</strong>',
      'Максимальная плотность продукта по МПОГ: <strong>не более 1,6 г/см³</strong>',
    ].map(t => `<li style="display:flex;gap:8px;padding:8px 0;border-bottom:1px solid var(--border);font-size:14px;color:var(--text-dark)">
      <span style="color:var(--green-primary);font-weight:700;flex-shrink:0">—</span>${t}
    </li>`).join('')}</ul>
    <div style="display:flex;flex-wrap:wrap;gap:8px">
      ${_ibcDlBtn('Декларация о соответствии ТР ТС')}
      ${_ibcDlBtn('Сертификат ООН (морской / ж/д транспорт)')}
      ${_ibcDlBtn('Свидетельство МПОГ')}
    </div>
  </div>`;
}

function _ibcManagerCard() {
  return `<div class="manager-card">
    <div class="manager-card-grid">
      <div class="manager-profile-col">
        <div class="manager-col-label">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          Ваш менеджер
        </div>
        <div class="manager-profile-row">
          <div class="manager-avatar">МА</div>
          <div class="manager-name">Марина Алёшина</div>
        </div>
        <div class="manager-contacts">
          <a href="tel:+79870601092">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.62 4.4 2 2 0 0 1 3.59 2.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17z"/></svg>
            <span>+7 (987) 060-10-92</span>
          </a>
          <a href="mailto:Marina.Aleshina@greif.com">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <span>Marina.Aleshina@greif.com</span>
          </a>
        </div>
      </div>
    </div>
  </div>`;
}

function _ibcStdProductPage(title, subtitle, weight, pfx, img) {
  const [wVal] = weight.split(' ');
  const imgSrc = img || 'http://www.greif.ru/wp-content/uploads/a30dcd01-81b5-4b2f-8da8-e76b82b62817.png';
  return `
<div class="page">
  <div class="page-hero">
    <div class="page-hero-inner">
      <a href="#" onclick="navigate('ibc');return false;" style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#469B80;margin-bottom:10px;display:inline-flex;align-items:center;gap:6px;text-decoration:none;opacity:0.9">← Еврокубы IBC</a>
      <h1 style="font-family:'Roboto',sans-serif;font-size:36px;font-weight:900;color:#fff;letter-spacing:-0.02em">${title}</h1>
      <p style="font-size:14px;color:rgba(255,255,255,0.55)">${subtitle}</p>
    </div>
  </div>
  <div class="product-detail-page">
    <div class="product-detail-grid">
      <div class="product-image-col">
        <img src="${imgSrc}" alt="${title}" style="max-width:100%;max-height:420px;object-fit:contain;">
      </div>
      <div class="product-info-col">
        <div class="spec-cards" style="grid-template-columns:repeat(2,1fr)">
          <div class="spec-card">
            <div class="spec-card-value">1000<span class="spec-card-unit"> л</span></div>
            <div class="spec-card-label">Объём</div>
            <div class="spec-card-desc">Номинальный · 1055 л до горловины</div>
          </div>
          <div class="spec-card">
            <div class="spec-card-value" style="font-size:15px;line-height:1.25">1200×1000×1165</div>
            <div class="spec-card-label">Габариты, мм</div>
            <div class="spec-card-desc">Д × Ш × В · допуск ±10 мм</div>
          </div>
          <div class="spec-card">
            <div class="spec-card-value">${wVal}<span class="spec-card-unit"> кг</span></div>
            <div class="spec-card-label">Вес</div>
            <div class="spec-card-desc">${weight} кг</div>
          </div>
          <div class="spec-card">
            <div class="spec-card-value" style="font-size:16px">ПЭНД</div>
            <div class="spec-card-label">Материал</div>
            <div class="spec-card-desc">Полиэтилен высокой плотности</div>
          </div>
        </div>
        <button class="btn-consult" onclick="openPopup('popup-request')">СДЕЛАТЬ ЗАПРОС</button>
      </div>
    </div>
    <div class="product-tabs">
      <div class="tab-headers">
        <button class="tab-btn active" data-tab="${pfx}-desc">ОПИСАНИЕ</button>
        <button class="tab-btn" data-tab="${pfx}-std">СТАНДАРТ</button>
        <button class="tab-btn" data-tab="${pfx}-un">ООН</button>
      </div>
      <div class="tab-content active" id="tab-${pfx}-desc">
        ${_ibcPurpose()}
        <h4>Технические характеристики</h4>
        ${_ibcTechTable(weight + ' кг')}
        <h4 style="margin-top:28px">Исполнение по цвету</h4>
        ${_ibcColors()}
      </div>
      <div class="tab-content" id="tab-${pfx}-std">
        ${_ibcStdTab()}
      </div>
      <div class="tab-content" id="tab-${pfx}-un">
        ${_ibcUNTab()}
      </div>
    </div>
    ${_ibcManagerCard()}
  </div>
</div>`;
}

/* ─────────────────────────────────────────────── */

const PAGES = {

  home: () => `
    <div class="page">
      <section class="hero">
        <div class="hero-bg">
          <div class="hero-grid"></div>
          <div class="hero-overlay"></div>
        </div>
        <div class="hero-reel">
          <img src="https://www.greif.com/nitropack_static/yPYDGgMDRoARzvqLtwfOkHNmCxosVbDu/assets/images/optimized/rev-85736f0/www.greif.com/wp-content/uploads/2025/02/WebBannerReel.avif" alt="">
        </div>
        <div class="hero-content">
          <div class="hero-eyebrow">Ведущий производитель промышленной упаковки</div>
          <h1 class="hero-headline">Промышленная<br><em>упаковка</em> для<br>вашего бизнеса</h1>
          <p class="hero-sub">Стальные бочки, еврокубы, канистры, конические бочки и кловертейнеры.</p>
          <div class="hero-actions">
            <button class="btn-hero-primary" onclick="navigate('products')">Смотреть продукцию</button>
            <button class="btn-hero-secondary" onclick="navigate('contact')">Запросить цену</button>
          </div>
          <div class="hero-stats">
            ${[['32 года','в России'],['9','городов'],['8','заводов'],['1000+','клиентов']].map(([n,l]) => `
              <div><div class="hero-stat-num">${n}</div><div class="hero-stat-label">${l}</div></div>
            `).join('')}
          </div>
        </div>
      </section>

      <section class="products">
        <div class="section-inner">
          <div class="section-header-row">
            <div>
              <div class="section-eyebrow">Наша продукция</div>
              <div class="section-title">Промышленная упаковка для ключевых отраслей экономики</div>
            </div>
            <button class="btn-outline-green" onclick="navigate('products')">Весь каталог →</button>
          </div>
          <div class="product-grid">
            ${PRODUCTS.map(productCard).join('')}
          </div>
        </div>
      </section>

      <section class="features">
        <div class="section-inner">
          <div class="section-eyebrow">Почему Грайф</div>
          <div class="section-title">Надёжность. Опыт. Сертификация.</div>
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="square"><rect x="2" y="3" width="20" height="14"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <div class="feature-title">Производство</div>
              <div class="feature-desc">8 производственных площадок в России. Жесткие корпоративные требования к качеству продукции обеспечивают сохранность фасуемого продукта и гарантируют безопасность.</div>
              <div class="feature-list">
                <div class="feature-list-item"><div class="feature-bullet"></div>Производство под заказ</div>
                <div class="feature-list-item"><div class="feature-bullet"></div>Логистика по СНГ</div>
              </div>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="square"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
              </div>
              <div class="feature-title">Восстановление упаковки</div>
              <div class="feature-desc">Сервис сбора и восстановления использованной тары (IBC — еврокубов). Одна из крупнейших сетей по восстановлению жесткой промышленной упаковки в РФ.</div>
              <div class="feature-list">
                <div class="feature-list-item"><div class="feature-bullet"></div>Снижение нагрузки на экологию</div>
                <div class="feature-list-item"><div class="feature-bullet"></div>Вторая жизнь упаковки</div>
                <div class="feature-list-item"><div class="feature-bullet"></div>Эффективность цепи поставок</div>
              </div>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="square"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              </div>
              <div class="feature-title">Региональная сеть</div>
              <div class="feature-desc">9 представительств по всей России обеспечивают доставку точно в срок и оперативную поддержку клиентов.</div>
              <div style="display:flex;flex-wrap:wrap;gap:5px;margin-top:14px">
                ${['Москва','Калуга','Вологда','Волгоград','Екатеринбург','Казань','Омск','Пермь','Рязань'].map(c =>
                  `<span style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.05em;padding:3px 8px;background:#f0f8f5;color:#469B80;border:1px solid #c8e6dc">${c}</span>`
                ).join('')}
              </div>
              <div class="feature-list" style="margin-top:12px">
                <div class="feature-list-item"><div class="feature-bullet"></div>Доставка точно в срок (JIT)</div>
                <div class="feature-list-item"><div class="feature-bullet"></div>Паллетизированная доставка</div>
                <div class="feature-list-item"><div class="feature-bullet"></div>Автоматическая разгрузка</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>`,

  products: () => `
    <div class="page">
      <div class="products-page-hero">
        <div class="products-hero-content">
          <div class="products-hero-eyebrow">Продукция</div>
          <h1 class="products-hero-title">Промышленная<br>упаковка Greif</h1>
          <p class="products-hero-sub">Стальные бочки, еврокубы, канистры, конические бочки и кловертейнеры — полный спектр промышленной тары.</p>
        </div>
        <div class="products-stats-strip">
          <div class="products-stats-inner">
            ${[['5','видов упаковки'],['8','заводов'],['32 года','на рынке РФ'],['1000+','клиентов']].map(([n,l]) => `
              <div class="pss-item"><div class="pss-num">${n}</div><div class="pss-label">${l}</div></div>
            `).join('')}
          </div>
        </div>
      </div>
      <div class="prod-cat-strip">
        <div class="prod-cat-strip-inner" id="filter-bar">
          <button class="prod-cat-pill active" onclick="filterProducts(this,'Все')">
            <span class="pcp-all-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg></span>
            Все виды
          </button>
          ${PRODUCTS.map(p => `
            <button class="prod-cat-pill" onclick="filterProducts(this,'${p.cat}')">
              <img src="${p.img}" class="pcp-img" alt="">
              ${p.title}
            </button>
          `).join('')}
        </div>
      </div>
      <div class="section-inner products-catalog-page" style="padding-top:48px;padding-bottom:72px">
        <div class="product-grid" id="products-grid">
          ${PRODUCTS.map(productCard).join('')}
        </div>
      </div>
    </div>`,

  about: () => `
<div class="page">
  <div class="page-hero">
    <div class="page-hero-inner">
      <div style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#469B80;margin-bottom:10px">О компании</div>
      <h1 style="font-family:'Roboto',sans-serif;font-size:36px;font-weight:900;color:#fff;letter-spacing:-0.02em">Greif в России и СНГ</h1>
      <p style="font-size:14px;color:rgba(255,255,255,0.55)">32 года надёжности и качества</p>
    </div>
  </div>
  <div style="background:#fff;padding:48px 0">
    <div style="max-width:1200px;margin:0 auto;padding:0 32px;display:flex;gap:40px;align-items:flex-start">
      <div style="width:260px; flex-shrink:0; position:sticky; top:100px;">
        <div style="background:#fff; border:1px solid var(--border); border-radius:16px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.05)">
          <div style="padding:16px 20px; background:var(--green-primary); color:white; font-weight:700; font-size:14px">Содержание</div>
          <div style="padding:8px 0">
            <a href="#" data-about-section="greifRu" class="about-nav-link active" style="display:block; padding:12px 20px; color:var(--green-primary); text-decoration:none; font-size:14px; border-left:3px solid var(--green-primary); transition:all 0.2s">Грайф в России</a>
            <a href="#" data-about-section="historyInc" class="about-nav-link" style="display:block; padding:12px 20px; color:#333; text-decoration:none; font-size:14px; border-left:3px solid transparent; transition:all 0.2s">История Greif Inc.</a>
            <a href="#" data-about-section="news" class="about-nav-link" style="display:block; padding:12px 20px; color:#333; text-decoration:none; font-size:14px; border-left:3px solid transparent; transition:all 0.2s">Новости компании</a>
            <a href="#" data-about-section="sustainability" class="about-nav-link" style="display:block; padding:12px 20px; color:#333; text-decoration:none; font-size:14px; border-left:3px solid transparent; transition:all 0.2s">Устойчивое развитие</a>
          </div>
        </div>
      </div>
      <div id="about-content" style="flex:1"></div>
    </div>
  </div>
</div>`,

  steelDrums: () => `
<div class="page">
  <div class="page-hero">
    <div class="page-hero-inner">
      <a href="#" onclick="navigate('products');return false;" style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#469B80;margin-bottom:10px;display:inline-flex;align-items:center;gap:6px;text-decoration:none;opacity:0.9">← Продукция</a>
      <h1 style="font-family:'Roboto',sans-serif;font-size:36px;font-weight:900;color:#fff;letter-spacing:-0.02em">Стальные бочки</h1>
      <p style="font-size:14px;color:rgba(255,255,255,0.55)">Надёжная промышленная упаковка для любых задач</p>
    </div>
  </div>
  <div class="product-detail-page">
    <div class="product-detail-grid">
      <div class="product-image-col" style="padding:20px;flex-direction:column;align-items:stretch;justify-content:center;">
        <div class="product-carousel" id="steelCarousel">
          <div class="carousel-track-wrap">
            <div class="carousel-track" id="steelCarouselTrack">
              <div class="carousel-slide"><img src="http://www.greif.ru/wp-content/uploads/bochka.png" alt="Стальная бочка Greif"></div>
              <div class="carousel-slide"><img src="http://www.greif.ru/wp-content/uploads/%D0%A1%D0%BA%D1%80%D0%B8%D0%BD%D1%88%D0%BE%D1%82-2015-02-09-07.00.40.png" alt="Стальная бочка Greif — производство"></div>
              <div class="carousel-slide"><img src="http://www.greif.ru/wp-content/uploads/01.png" alt="Стальная бочка Greif — вид"></div>
              <div class="carousel-slide"><img src="http://www.greif.ru/wp-content/uploads/%D0%B1%D0%BE%D1%87%D0%BA%D0%B0-%D1%81-%D0%B7%D0%B0%D0%BA%D1%80%D1%8B%D1%82%D1%8B%D0%BC-%D0%B2%D0%B5%D1%80%D1%85%D0%BE%D0%BC.jpg" alt="Бочка с закрытым верхом"></div>
            </div>
            <button class="carousel-btn carousel-btn-prev" onclick="steelCarouselMove(-1)" aria-label="Назад">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button class="carousel-btn carousel-btn-next" onclick="steelCarouselMove(1)" aria-label="Вперёд">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
            <div class="carousel-counter" id="steelCarouselCounter">1 / 4</div>
          </div>
          <div class="carousel-dots" id="steelCarouselDots">
            <button class="carousel-dot active" onclick="steelCarouselGoTo(0)"></button>
            <button class="carousel-dot" onclick="steelCarouselGoTo(1)"></button>
            <button class="carousel-dot" onclick="steelCarouselGoTo(2)"></button>
            <button class="carousel-dot" onclick="steelCarouselGoTo(3)"></button>
          </div>
        </div>
      </div>
      <div class="product-info-col">
        <p class="product-description">Большие металлические бочки являются нашим ключевым продуктом. Они соответствуют требованиям международных и национальных стандартов, предъявляемым к стальным бочкам.</p>
        <div class="spec-cards">
          <div class="spec-card"><div class="spec-card-value">216,5<span class="spec-card-unit"> л</span></div><div class="spec-card-label">Тип 1А1</div><div class="spec-card-desc">Закрытый верх · Tab-Seal® 2" и ¾" Tri-Sure®</div></div>
          <div class="spec-card"><div class="spec-card-value">210<span class="spec-card-unit"> л</span></div><div class="spec-card-label">Тип 1А2</div><div class="spec-card-desc">Открытый верх · обжимное кольцо с рычажным замком</div></div>
          <div class="spec-card"><div class="spec-card-value" style="font-size:20px">08ПС</div><div class="spec-card-label">Материал</div><div class="spec-card-desc">Холоднокатаная сталь · ISO 3574 / EN10130</div></div>
        </div>
        <button class="btn-consult" onclick="navigate('contact')">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</button>
      </div>
    </div>
    <div class="product-tabs">
      <div class="tab-headers">
        <button class="tab-btn active" data-tab="desc">ОПИСАНИЕ</button>
        <button class="tab-btn" data-tab="specs">СПЕЦИФИКАЦИИ</button>
        <button class="tab-btn" data-tab="coatings">ВНЕШНИЕ ПОКРЫТИЯ</button>
      </div>
      <div class="tab-content active" id="tab-desc">
        <p>Стальные бочки используются для транспортировки жидких, сыпучих и твердых продуктов и веществ, не оказывающих активного воздействия на сталь. Основные сферы применения металлических бочек — химическая, нефтехимическая, металлургическая, лакокрасочная и пищевая отрасли. Все производимые бочки проходят многочисленные испытания, в том числе и уникальную проверку на герметичность на гелиевом тестере. Производства бочек расположены в Вологде, Волгограде, Перми, Екатеринбурге, Омске и Ангарске. В 2018 году запущена новая высокопроизводительная линия мощностью 2 миллиона бочек в год в Индустриальном парке Ворсино (Калужская область).</p>
        <p>Мы выпускаем бочки двух типов — закатная стальная бочка и бочка с открывающимся верхом. Стандартная стальная бочка имеет объем от 210 до 230 л. Закатной шов типа Spiralon® является семислойным и для увеличения прочности в обязательном порядке фиксируется герметиком.</p>
      </div>
      <div class="tab-content" id="tab-specs">
        <h4>Цилиндрические стальные бочки</h4>
        <p><strong>Материалы:</strong> холоднокатаная сталь марки 08ПС производства ОАО «Северсталь», которая соответствует международным стандартам ISO 3574:2012 или EN10130/EN10131.</p>
        <h4>Бочка с закрытым верхом, тип 1А1</h4>
        <ul>
          <li><strong>Стандартный объем:</strong> 216,5 л (до 230 л)</li>
          <li><strong>Укупорка:</strong> горловины и крышки-пломбы Tab-Seal® 2" и ¾" Tri-Sure® с прокладками 4S®</li>
        </ul>
        <h5 style="margin:24px 0 12px;font-size:13px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:var(--text-muted)">Стандартные спецификации (бочки типа 1А1)</h5>
        <div class="ral-table-wrap" style="overflow-x:auto">
          <table class="ral-table" style="min-width:520px">
            <thead>
              <tr>
                <th colspan="3" style="text-align:center;border-right:1px solid var(--border)">Толщина стали, мм</th>
                <th>Стандартная маркировка ООН</th>
                <th>Средний вес бочек, кг</th>
              </tr>
              <tr>
                <th>Крышка</th>
                <th>Корпус</th>
                <th style="border-right:1px solid var(--border)">Днище</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1,2</td><td>1,2</td><td style="border-right:1px solid var(--border)">1,2</td><td>1A1/X1.4/350</td><td>20,5</td></tr>
              <tr><td>1,2</td><td>1,0</td><td style="border-right:1px solid var(--border)">1,2</td><td>1A1/X1.2/250</td><td>18,4</td></tr>
              <tr><td>1,0</td><td>1,0</td><td style="border-right:1px solid var(--border)">1,0</td><td>1A1/X1.2/250</td><td>17,4</td></tr>
              <tr><td>1,0</td><td>0,9</td><td style="border-right:1px solid var(--border)">1,0</td><td>1A1/X1.2/250</td><td>16,2</td></tr>
              <tr><td>1,0</td><td>0,8</td><td style="border-right:1px solid var(--border)">1,0</td><td>1A1/X1.2/250</td><td>15,2</td></tr>
              <tr><td>0,9</td><td>0,9</td><td style="border-right:1px solid var(--border)">0,9</td><td>1A1/X1.2/250</td><td>15,8</td></tr>
              <tr><td>0,9</td><td>0,8</td><td style="border-right:1px solid var(--border)">0,9</td><td>1A1/X1.2/250</td><td>14,8</td></tr>
              <tr><td>0,8</td><td>0,8</td><td style="border-right:1px solid var(--border)">0,8</td><td>1A1/Y1.4/150</td><td>14,4</td></tr>
            </tbody>
          </table>
        </div>
        <h5 style="margin:28px 0 12px;font-size:14px;font-weight:700;color:var(--text-dark)">Бочка с закрытым верхом, тип 1А1</h5>
        <div style="text-align:center;margin:16px 0">
          <img src="https://www.greif.ru/wp-content/uploads/x001.png" alt="Чертёж бочки с закрытым верхом, тип 1А1" style="max-width:100%;height:auto;border:1px solid var(--border);border-radius:6px;padding:8px;background:#fafafa">
        </div>
        <p style="font-size:13px;color:var(--text-muted);line-height:1.7;margin:12px 0 20px">
          1 — горловина; 2 — гофр; d<sub>1</sub> — внутренний диаметр; D<sub>2</sub> — наружный диаметр по гофрам катания; D<sub>3</sub> — наружный диаметр по закатному шву; H<sub>1</sub> — габаритная высота бочки; h<sub>2</sub> — расстояние между гофрами; h<sub>3</sub> — расстояние нижнего дна от пола; p<sub>1</sub> — расстояние между центрами горловин; p<sub>2</sub> — расстояние от оси заливной горловины до наружной поверхности корпуса, измеренное в 50 мм от верха бочки
        </p>
        <h5 style="margin:0 0 12px;font-size:13px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:var(--text-muted)">Размеры бочки с несъёмным верхним дном 1А1</h5>
        <div class="ral-table-wrap" style="overflow-x:auto">
          <table class="ral-table" style="min-width:700px">
            <thead>
              <tr>
                <th>Полная вместимость, дм³</th>
                <th>d<sub>1</sub>, ±2 мм</th>
                <th>D<sub>2</sub>, макс. мм</th>
                <th>D<sub>3</sub>, макс. мм</th>
                <th>H<sub>1</sub>, ±5 мм</th>
                <th>h<sub>3</sub>, мин. мм</th>
                <th>h<sub>2</sub>, ±3 мм</th>
                <th>p<sub>1</sub>, мм</th>
                <th>p<sub>2</sub>, ±3 мм</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>216,5</td><td>571,5</td><td>585</td><td>585</td><td>878</td><td>4</td><td>280</td><td>444±6</td><td>72</td></tr>
            </tbody>
          </table>
        </div>
        <h4 style="margin-top:32px">Бочка с открывающимся верхом, тип 1А2</h4>
        <ul>
          <li><strong>Стандартный объем:</strong> 210 л</li>
          <li><strong>Укупорка:</strong> обжимное кольцо с рычажным замком и уплотнителем</li>
        </ul>
        <p>Диаметр стандартной металлической бочки с открывающимся верхом по запорному кольцу составляет 610 мм. Также изготавливаются бочки с внешним диаметром 585 мм для оптимального использования пространства грузовых контейнеров.</p>
      </div>
      <div class="tab-content" id="tab-coatings">
        <p>С ростом конкуренции на промышленных рынках упаковка приобрела дополнительную ценность, поскольку ее поверхность представляет собой отличный инструмент для маркетинговых коммуникаций с клиентами. В соответствии с пожеланиями заказчика стальная бочка может быть окрашена в стандартные цвета по системе RAL. Помимо окрашивания, на поверхность бочки возможно нанесение логотипа вашей компании.</p>
        <h4>Каталог цветов RAL</h4>
        <p class="coating-notice"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;margin-top:1px"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> <span><strong>Внимание!</strong> Цвета на экране монитора отличаются от оригинала из-за особенностей цветопередачи.</span></p>
        <h5 style="margin:20px 0 12px;font-size:13px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:var(--text-muted)">Наиболее часто используемые цвета</h5>
        <div class="ral-table-wrap">
          <table class="ral-table">
            <thead>
              <tr><th>№</th><th>Наименование RAL</th><th>Код RAL</th><th>Цвет</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>Желтый яркий</td><td>1021</td><td><span class="ral-swatch" style="background:#F6A500"></span></td></tr>
              <tr><td>2</td><td>Чистый оранжевый</td><td>2004</td><td><span class="ral-swatch" style="background:#F44611"></span></td></tr>
              <tr><td>3</td><td>Пунцовый красный</td><td>3002</td><td><span class="ral-swatch" style="background:#9B2423"></span></td></tr>
              <tr><td>4</td><td>Красный насыщенный</td><td>3020</td><td><span class="ral-swatch" style="background:#CC0605"></span></td></tr>
              <tr><td>5</td><td>Синий</td><td>5010</td><td><span class="ral-swatch" style="background:#0E294B"></span></td></tr>
              <tr><td>6</td><td>Синий-бледный</td><td>5017</td><td><span class="ral-swatch" style="background:#0A5B93"></span></td></tr>
              <tr><td>7</td><td>Зеленая мята</td><td>6029</td><td><span class="ral-swatch" style="background:#2B5F2B"></span></td></tr>
              <tr><td>8</td><td>Зеленая трава</td><td>6010</td><td><span class="ral-swatch" style="background:#4A6741"></span></td></tr>
              <tr><td>9</td><td>Телегрэй</td><td>7047</td><td><span class="ral-swatch" style="background:#D0D0D0;border:1px solid #bbb"></span></td></tr>
              <tr><td>10</td><td>Черный</td><td>9005</td><td><span class="ral-swatch" style="background:#0A0A0A"></span></td></tr>
              <tr><td>11</td><td>Белый</td><td>9003 / 9016</td><td><span class="ral-swatch" style="background:#F4F4F4;border:1px solid #bbb"></span></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="manager-card" id="steel-manager-card">
      <div class="manager-card-grid">
        <div class="manager-region-col">
          <div class="manager-col-label">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Регион отгрузки
          </div>
          <div class="region-combobox" id="steelRegionCombobox">
            <div class="region-combobox-input-wrap">
              <svg class="region-combobox-pin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <input
                type="text"
                class="region-combobox-input"
                id="steelRegionInput"
                placeholder="Начните вводить регион…"
                autocomplete="off"
                readonly
                onclick="toggleRegionDropdown('steelRegionCombobox')"
              >
              <svg class="region-combobox-chevron" id="steelRegionChevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
            <div class="region-combobox-dropdown" id="steelRegionDropdown">
              <div class="region-combobox-search-wrap">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <input type="text" class="region-combobox-search" id="steelRegionSearch" placeholder="Поиск по региону…" oninput="filterRegionOptions('steelRegionCombobox', this.value)">
              </div>
              <ul class="region-combobox-list" id="steelRegionList" role="listbox"></ul>
            </div>
          </div>
        </div>
        <div class="manager-divider-v"></div>
        <div class="manager-profile-col">
          <div class="manager-col-label">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            Ваш менеджер
          </div>
          <div class="manager-profile-row">
            <div class="manager-avatar" id="steelManagerAvatar">МЛ</div>
            <div class="manager-name" id="steelManagerName">Марина Леонова</div>
          </div>
          <div class="manager-contacts">
            <a href="tel:+79872309971" id="steelManagerPhone">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.62 4.4 2 2 0 0 1 3.59 2.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17z"/></svg>
              <span>+7 (987) 230-99-71</span>
            </a>
            <a href="mailto:Marina.Leonova@greif.com" id="steelManagerEmail">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <span>Marina.Leonova@greif.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,

  ibc: () => `
<div class="page">
  <div class="page-hero">
    <div class="page-hero-inner">
      <a href="#" onclick="navigate('products');return false;" style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#469B80;margin-bottom:10px;display:inline-flex;align-items:center;gap:6px;text-decoration:none;opacity:0.9">← Продукция</a>
      <h1 style="font-family:'Roboto',sans-serif;font-size:36px;font-weight:900;color:#fff;letter-spacing:-0.02em">Еврокубы IBC</h1>
      <p style="font-size:14px;color:rgba(255,255,255,0.55)">Выберите тип контейнера GCube® под ваши задачи</p>
    </div>
  </div>
  <div style="background:var(--green-light-bg);padding:20px 0 0">
    <div style="max-width:1200px;margin:0 auto;padding:20px 32px 0">
      <p style="font-size:14px;color:var(--text-muted);line-height:1.8;max-width:820px;margin:0">
        IBC (Intermediate Bulk Container) — еврокубы Greif серии GCube® объёмом 1000 литров, изготовленные из ПЭНД. Производятся в Казани и Калужской области. Доступны на деревянном, гибридном и пластиковом поддоне, а также в антистатическом исполнении. Все модели соответствуют требованиям ТР ТС; модели с маркировкой ООН сертифицированы для перевозки опасных грузов.
      </p>
    </div>
  </div>
  <div class="ibc-types-grid">
    ${[
      { id:'ibcWooden',  title:'На деревянном поддоне',        weight:'60,0 ±10,0 кг', img:'http://www.greif.ru/wp-content/uploads/Bez-imeni-1.png', desc:'Классическое исполнение. Деревянный поддон обеспечивает надёжную опору при штабелировании.', badges:[['std','Стандарт'],['un','ООН']] },
      { id:'ibcHybrid',  title:'На гибридном поддоне',         weight:'51,5 ±3,0 кг',  img:'http://www.greif.ru/wp-content/uploads/gibrid.png', desc:'Металлический поддон с пластиковыми рёбрами — лучший баланс прочности и собственного веса.', badges:[['std','Стандарт'],['un','ООН']] },
      { id:'ibcPlastic', title:'На пластиковом поддоне',       weight:'52,5 ±3,0 кг',  img:'http://www.greif.ru/wp-content/uploads/a30dcd01-81b5-4b2f-8da8-e76b82b62817.png', desc:'Цельнопластиковый поддон, устойчивый к коррозии. Оптимален для агрессивных производственных сред.', badges:[['std','Стандарт'],['un','ООН']] },
      { id:'ibcElectron',title:'Антистатический «Электрон»',   weight:'51,5 ±3,0 кг',  img:'http://www.greif.ru/wp-content/uploads/a30dcd01-81b5-4b2f-8da8-e76b82b62817.png', desc:'Колба с антистатическим слоем (10⁹ Ом), приварной кран с заземлением и EX-крышкой. Для перевозки ЛВЖ.', badges:[['antistatic','Антистатик'],['un','ООН']] },
      { id:'ibcRebo',    title:'Восстановленные REBO',         weight:'—',              img:'http://www.greif.ru/wp-content/uploads/a30dcd01-81b5-4b2f-8da8-e76b82b62817.png', desc:'Новая ПЭНД-бутыль 1000 л на б/у металлической обрешётке. Экономичное решение.', badges:[['rebo','REBO']] },
    ].map(c => `
      <div class="ibc-type-card" onclick="navigate('${c.id}')">
        <div class="ibc-type-card-img">
          <img src="${c.img}" alt="${c.title}">
        </div>
        <div class="ibc-type-card-body">
          <div class="ibc-type-card-title">${c.title}</div>
          <div class="ibc-type-card-spec">Объём: 1000 л · Вес: ${c.weight}</div>
          <div class="ibc-type-card-spec">${c.desc}</div>
          <div class="ibc-type-card-badges">${c.badges.map(([t,l]) => `<span class="ibc-badge ibc-badge-${t}">${l}</span>`).join('')}</div>
        </div>
        <div class="ibc-type-card-footer">
          <button class="product-link" onclick="event.stopPropagation();navigate('${c.id}')">ПОДРОБНЕЕ →</button>
        </div>
      </div>`).join('')}
  </div>
</div>`,

  ibcWooden: () => _ibcStdProductPage(
    'Еврокубы на деревянном поддоне',
    'Классическая конструкция с деревянным поддоном — 1000 л',
    '60,0 ±10,0', 'wood',
    'http://www.greif.ru/wp-content/uploads/Bez-imeni-1.png'
  ),

  ibcHybrid: () => _ibcStdProductPage(
    'Еврокубы на гибридном поддоне',
    'Металлический поддон с пластиковыми рёбрами — 1000 л',
    '51,5 ±3,0', 'hyb',
    'http://www.greif.ru/wp-content/uploads/gibrid.png'
  ),

  ibcPlastic: () => _ibcStdProductPage(
    'Еврокубы на пластиковом поддоне',
    'Цельнопластиковый поддон, устойчивый к коррозии — 1000 л',
    '52,5 ±3,0', 'pla'
  ),

  ibcElectron: () => `
<div class="page">
  <div class="page-hero">
    <div class="page-hero-inner">
      <a href="#" onclick="navigate('ibc');return false;" style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#469B80;margin-bottom:10px;display:inline-flex;align-items:center;gap:6px;text-decoration:none;opacity:0.9">← Еврокубы IBC</a>
      <h1 style="font-family:'Roboto',sans-serif;font-size:36px;font-weight:900;color:#fff;letter-spacing:-0.02em">Антистатический «Электрон»</h1>
      <p style="font-size:14px;color:rgba(255,255,255,0.55)">Еврокуб с антистатическим покрытием для перевозки ЛВЖ — 1000 л</p>
    </div>
  </div>
  <div class="product-detail-page">
    <div class="product-detail-grid">
      <div class="product-image-col">
        <img src="http://www.greif.ru/wp-content/uploads/a30dcd01-81b5-4b2f-8da8-e76b82b62817.png" alt="IBC Электрон" style="max-width:100%;max-height:420px;object-fit:contain;">
      </div>
      <div class="product-info-col">
        <div class="spec-cards" style="grid-template-columns:repeat(2,1fr)">
          <div class="spec-card"><div class="spec-card-value">1000<span class="spec-card-unit"> л</span></div><div class="spec-card-label">Объём</div><div class="spec-card-desc">Номинальный · 1055 л до горловины</div></div>
          <div class="spec-card"><div class="spec-card-value" style="font-size:15px;line-height:1.25">1200×1000×1165</div><div class="spec-card-label">Габариты, мм</div><div class="spec-card-desc">Д × Ш × В · допуск ±10 мм</div></div>
          <div class="spec-card"><div class="spec-card-value">51,5<span class="spec-card-unit"> кг</span></div><div class="spec-card-label">Вес</div><div class="spec-card-desc">±3,0 кг · гибридный поддон</div></div>
          <div class="spec-card"><div class="spec-card-value" style="font-size:14px;line-height:1.2">10⁹ Ом</div><div class="spec-card-label">Сопротивление</div><div class="spec-card-desc">Удельное поверхностное</div></div>
        </div>
        <button class="btn-consult" onclick="openPopup('popup-request')">СДЕЛАТЬ ЗАПРОС</button>
      </div>
    </div>
    <div class="product-tabs">
      <div class="tab-headers">
        <button class="tab-btn active" data-tab="el-desc">ОПИСАНИЕ</button>
        <button class="tab-btn" data-tab="el-std">СТАНДАРТ</button>
        <button class="tab-btn" data-tab="el-un">ООН</button>
      </div>
      <div class="tab-content active" id="tab-el-desc">
        <p style="font-size:14px;color:var(--text-dark);line-height:1.8;margin:0 0 20px">
          Еврокуб «Электрон» — специализированный контейнер для хранения и транспортировки легковоспламеняющихся жидкостей (ЛВЖ). Колба из ПЭНД оснащена внешним антистатическим покрытием, обеспечивающим постоянный отвод статического заряда.
        </p>
        <h4>Конструктивные особенности</h4>
        <ul style="list-style:none;padding:0;margin:0 0 24px">${[
          ['Колба', 'ПЭНД с внешним антистатическим слоем (удельное поверхностное сопротивление 10⁹ Ом)'],
          ['Кран', 'Приварной антистатический кран «Бабочка» 2" с заземлением на поддон'],
          ['Крышка', 'Крышка с EX-защитой — дыхательный клапан взрывобезопасного исполнения'],
          ['Поддон', 'Только гибридный металлопластиковый поддон'],
          ['Применение', 'Перевозка и хранение ЛВЖ классов опасности, допущенных по ДОПОГ'],
        ].map(([k,v]) => `<li style="display:flex;gap:0;padding:9px 0;border-bottom:1px solid var(--border);font-size:14px">
          <span style="color:var(--text-muted);width:120px;flex-shrink:0">${k}</span>
          <span style="color:var(--text-dark)">${v}</span>
        </li>`).join('')}</ul>
        <h4>Технические характеристики</h4>
        ${_ibcTechTable('51,5 ±3,0 кг')}
        <p style="font-size:13px;color:var(--text-muted);margin-top:12px;padding:10px 14px;background:var(--green-light-bg);border-left:3px solid var(--green-primary)">
          Цвет колбы — натуральный (белый). Чёрное исполнение для данной модели не предусмотрено ввиду специфики антистатического покрытия.
        </p>
      </div>
      <div class="tab-content" id="tab-el-std">
        ${_ibcStdTab()}
      </div>
      <div class="tab-content" id="tab-el-un">
        ${_ibcUNTab()}
      </div>
    </div>
    ${_ibcManagerCard()}
  </div>
</div>`,

  ibcRebo: () => `
<div class="page">
  <div class="page-hero">
    <div class="page-hero-inner">
      <a href="#" onclick="navigate('ibc');return false;" style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#469B80;margin-bottom:10px;display:inline-flex;align-items:center;gap:6px;text-decoration:none;opacity:0.9">← Еврокубы IBC</a>
      <h1 style="font-family:'Roboto',sans-serif;font-size:36px;font-weight:900;color:#fff;letter-spacing:-0.02em">Восстановленные REBO</h1>
      <p style="font-size:14px;color:rgba(255,255,255,0.55)">Новая ПЭНД-бутыль на б/у металлической обрешётке — 1000 л</p>
    </div>
  </div>
  <div class="product-detail-page">
    <div class="product-detail-grid">
      <div class="product-image-col">
        <img src="http://www.greif.ru/wp-content/uploads/a30dcd01-81b5-4b2f-8da8-e76b82b62817.png" alt="REBO IBC" style="max-width:100%;max-height:420px;object-fit:contain;">
      </div>
      <div class="product-info-col">
        <div class="spec-cards" style="grid-template-columns:repeat(2,1fr)">
          <div class="spec-card"><div class="spec-card-value">1000<span class="spec-card-unit"> л</span></div><div class="spec-card-label">Объём</div><div class="spec-card-desc">Новая ПЭНД-бутыль</div></div>
          <div class="spec-card"><div class="spec-card-value" style="font-size:15px;line-height:1.25">1200×1000×1165</div><div class="spec-card-label">Габариты, мм</div><div class="spec-card-desc">Д × Ш × В · допуск ±10 мм</div></div>
          <div class="spec-card"><div class="spec-card-value" style="font-size:15px">2"</div><div class="spec-card-label">Кран</div><div class="spec-card-desc">Приварной кран «Бабочка»</div></div>
          <div class="spec-card"><div class="spec-card-value" style="font-size:13px;line-height:1.3">Б/у обрешётка</div><div class="spec-card-label">Каркас</div><div class="spec-card-desc">Гальванизированная сталь</div></div>
        </div>
        <button class="btn-consult" onclick="openPopup('popup-request')">СДЕЛАТЬ ЗАПРОС</button>
      </div>
    </div>
    <div class="product-tabs">
      <div class="tab-headers">
        <button class="tab-btn active" data-tab="rebo-desc">ОПИСАНИЕ</button>
        <button class="tab-btn" data-tab="rebo-comp">СОСТАВ</button>
        <button class="tab-btn" data-tab="rebo-std">СТАНДАРТ</button>
      </div>
      <div class="tab-content active" id="tab-rebo-desc">
        <p style="font-size:14px;color:var(--text-dark);line-height:1.8;margin:0 0 16px">
          REBO — восстановленный еврокуб: новая бутыль из полиэтилена высокой плотности устанавливается на б/у металлический поддон и помещается в б/у обрешётку из гальванизированной стали. Это позволяет значительно снизить стоимость тары без потери функциональности.
        </p>
        <p style="font-size:14px;color:var(--text-dark);line-height:1.8;margin:0 0 20px">
          Контейнеры REBO не имеют сертификата ООН в стандартном исполнении. При необходимости сертификации ООН — уточните при заказе.
        </p>
        <div style="background:#fff8e6;border:1px solid #ffd28a;border-left:3px solid #c65f00;padding:12px 16px;font-size:13px;color:#7a4500;line-height:1.6;border-radius:4px">
          <strong>Важно:</strong> сертификат ООН для REBO не выдаётся в стандартной конфигурации. Для перевозки опасных грузов — запросите специальную комплектацию.
        </div>
      </div>
      <div class="tab-content" id="tab-rebo-comp">
        <h4>Состав контейнера REBO</h4>
        <table style="width:100%;border-collapse:collapse;font-size:14px"><tbody>${[
          ['Бутыль', 'Новая, ПЭНД (полиэтилен высокой плотности), 1000 л'],
          ['Поддон', 'Б/у металлический поддон'],
          ['Обрешётка', 'Б/у обрешётка из гальванизированной стали'],
          ['Кран', 'Приварной кран «Бабочка» 2"'],
          ['Идентификация', 'Маленькая металлическая табличка'],
          ['Объём', '1000 л (номинальный)'],
          ['Материал колбы', 'Полиэтилен высокой плотности (ПЭНД)'],
          ['Сертификат ООН', 'Не включён (по умолчанию)'],
        ].map(([k,v]) => `<tr style="border-bottom:1px solid var(--border)">
          <td style="padding:10px 0;color:var(--text-muted);width:40%">${k}</td>
          <td style="padding:10px 0;color:var(--text-dark);font-weight:500">${v}</td>
        </tr>`).join('')}</tbody></table>
      </div>
      <div class="tab-content" id="tab-rebo-std">
        ${_ibcStdTab()}
      </div>
    </div>
    ${_ibcManagerCard()}
  </div>
</div>`,

  ibcBuy: () => `
<div class="page">
  <div class="page-hero">
    <div class="page-hero-inner">
      <div style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#469B80;margin-bottom:10px">Сервисы</div>
      <h1 style="font-family:'Roboto',sans-serif;font-size:36px;font-weight:900;color:#fff;letter-spacing:-0.02em">Покупаем б/у еврокубы</h1>
      <p style="font-size:14px;color:rgba(255,255,255,0.55)">Профессиональный сервис по восстановлению бывших в употреблении еврокубов</p>
    </div>
  </div>
  <div class="product-detail-page">
    <div style="max-width:900px;padding:40px 0">
      <div style="margin-bottom:40px;border-radius:8px;overflow:hidden;border:1px solid var(--border);max-width:50%">
        <img src="https://www.greif.ru/wp-content/uploads/buy_eurobox.jpg" alt="Б/у еврокубы" style="width:100%;display:block;object-fit:contain;max-height:210px">
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin:0 0 28px 0">
        <div style="background:var(--green-light-bg);border:1px solid var(--border);border-top:3px solid var(--green-primary);padding:24px 28px">
          <div style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:var(--green-primary);margin-bottom:16px">Преимущества работы с Грайф</div>
          <ul style="list-style:none;padding:0;margin:0">
            ${['Надежный партнер в сфере промышленной упаковки','Индивидуальный подход к формированию цены','Возможность выкупить весь объём','Покупка обрешеток без колбы','Предложение на условиях самовывоза','Работа на всей территории РФ','Минимизация экологических рисков'].map(t =>
              `<li style="display:flex;gap:10px;align-items:flex-start;padding:6px 0;border-bottom:1px solid var(--border);font-size:14px;color:var(--text-dark)"><span style="color:var(--green-primary);font-weight:700;flex-shrink:0">—</span>${t}</li>`
            ).join('')}
          </ul>
        </div>
        <div style="background:var(--green-light-bg);border:1px solid var(--border);border-top:3px solid var(--green-primary);padding:24px 28px">
          <div style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:var(--green-primary);margin-bottom:16px">Общие требования к еврокубам</div>
          <ul style="list-style:none;padding:0;margin:0">
            ${['Количество — кратно 52 шт.','Колба, поддон и обрешетка без значительных механических повреждений','Остатки продукта не более 5 кг','Наличие табличек, крышки и разгрузочного крана'].map(t =>
              `<li style="display:flex;gap:10px;align-items:flex-start;padding:6px 0;border-bottom:1px solid var(--border);font-size:14px;color:var(--text-dark)"><span style="color:var(--green-primary);font-weight:700;flex-shrink:0">—</span>${t}</li>`
            ).join('')}
          </ul>
        </div>
      </div>
      <a href="https://www.greif.ru/wp-content/uploads/Trebovaniya-k-b_u-kubam.pdf" target="_blank" style="display:inline-flex;align-items:center;gap:10px;background:var(--green-primary);color:#fff;font-family:'Roboto Condensed',sans-serif;font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;padding:13px 24px;text-decoration:none;margin-bottom:48px">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/></svg>
        Требования к б/у еврокубам (PDF)
      </a>
      <div style="background:var(--green-light-bg);border:1px solid var(--border);border-top:3px solid var(--green-primary);padding:36px 40px;margin-bottom:40px">
        <div style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:var(--green-primary);margin-bottom:16px">Получить предложение</div>
        <p style="font-size:15px;color:var(--text-dark);line-height:1.7;margin-bottom:28px">Если у Вас накопились использованные еврокубы, мы предлагаем профессиональный сервис по их восстановлению.</p>
        <form id="ibc-buy-form" onsubmit="submitIBCBuyForm(event)" style="display:flex;flex-direction:column;gap:20px">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px">
            <div><label style="display:block;font-size:12px;font-weight:700;font-family:'Roboto Condensed',sans-serif;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-dark);margin-bottom:8px">Ваше имя <span style="color:var(--green-primary)">*</span></label><input type="text" name="name" required placeholder="Иван Иванов" style="width:100%;box-sizing:border-box;border:1px solid var(--border);padding:11px 14px;font-size:14px;font-family:'Roboto',sans-serif;color:var(--text-dark);background:#fff;outline:none" onfocus="this.style.borderColor='var(--green-primary)'" onblur="this.style.borderColor='var(--border)'"></div>
            <div><label style="display:block;font-size:12px;font-weight:700;font-family:'Roboto Condensed',sans-serif;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-dark);margin-bottom:8px">Телефон <span style="color:var(--green-primary)">*</span></label><input type="tel" name="phone" required placeholder="+7 (___) ___-__-__" style="width:100%;box-sizing:border-box;border:1px solid var(--border);padding:11px 14px;font-size:14px;font-family:'Roboto',sans-serif;color:var(--text-dark);background:#fff;outline:none" onfocus="this.style.borderColor='var(--green-primary)'" onblur="this.style.borderColor='var(--border)'"></div>
          </div>
          <div><label style="display:block;font-size:12px;font-weight:700;font-family:'Roboto Condensed',sans-serif;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-dark);margin-bottom:8px">Email <span style="color:var(--green-primary)">*</span></label><input type="email" name="email" required placeholder="example@company.ru" style="width:100%;box-sizing:border-box;border:1px solid var(--border);padding:11px 14px;font-size:14px;font-family:'Roboto',sans-serif;color:var(--text-dark);background:#fff;outline:none" onfocus="this.style.borderColor='var(--green-primary)'" onblur="this.style.borderColor='var(--border)'"></div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px">
            <div><label style="display:block;font-size:12px;font-weight:700;font-family:'Roboto Condensed',sans-serif;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-dark);margin-bottom:8px">Количество еврокубов</label><input type="text" name="quantity" placeholder="Например: 52" style="width:100%;box-sizing:border-box;border:1px solid var(--border);padding:11px 14px;font-size:14px;font-family:'Roboto',sans-serif;color:var(--text-dark);background:#fff;outline:none" onfocus="this.style.borderColor='var(--green-primary)'" onblur="this.style.borderColor='var(--border)'"></div>
            <div><label style="display:block;font-size:12px;font-weight:700;font-family:'Roboto Condensed',sans-serif;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-dark);margin-bottom:8px">Регион отгрузки</label><input type="text" name="region" placeholder="Например: Москва и МО" style="width:100%;box-sizing:border-box;border:1px solid var(--border);padding:11px 14px;font-size:14px;font-family:'Roboto',sans-serif;color:var(--text-dark);background:#fff;outline:none" onfocus="this.style.borderColor='var(--green-primary)'" onblur="this.style.borderColor='var(--border)'"></div>
          </div>
          <button type="submit" style="display:inline-flex;align-items:center;gap:10px;background:var(--green-primary);color:#fff;font-family:'Roboto Condensed',sans-serif;font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;padding:15px 32px;border:none;cursor:pointer">Отправить заявку →</button>
        </form>
      </div>
      <div style="background:#fff;border:1px solid var(--border);border-left:4px solid var(--green-primary);padding:20px 24px;display:flex;align-items:center;gap:24px;max-width:560px">
        <div style="width:52px;height:52px;background:var(--green-primary);border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="square"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </div>
        <div>
          <div style="font-size:15px;font-weight:700;color:var(--text-dark);margin-bottom:4px">Рафаэль Курбанов</div>
          <div style="font-size:13px;color:var(--text-muted);margin-bottom:6px">Менеджер по закупке б/у еврокубов</div>
          <a href="mailto:rafael.kurbanov@greif.com" style="font-size:13px;color:var(--green-primary);text-decoration:none;display:block">rafael.kurbanov@greif.com</a>
          <a href="tel:+79872922727" style="font-size:13px;color:var(--green-primary);text-decoration:none;display:block">+7 (987) 292-27-27</a>
        </div>
      </div>
    </div>
  </div>
</div>`,

  conical: () => `
<div class="page">
  <div class="page-hero">
    <div class="page-hero-inner">
      <a href="#" onclick="navigate('products');return false;" style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#469B80;margin-bottom:10px;display:inline-flex;align-items:center;gap:6px;text-decoration:none;opacity:0.9">← Продукция</a>
      <h1 style="font-family:'Roboto',sans-serif;font-size:36px;font-weight:900;color:#fff;letter-spacing:-0.02em">Конические бочки</h1>
      <p style="font-size:14px;color:rgba(255,255,255,0.55)">Стальная тара для пищевых концентратов и непищевых продуктов</p>
    </div>
  </div>
  <div class="product-detail-page">
    <div class="product-detail-grid">
      <div class="product-image-col">
        <img src="http://www.greif.ru/wp-content/uploads/konboch.png" alt="Коническая бочка Greif" style="max-width:100%;max-height:400px;object-fit:contain;">
      </div>
      <div class="product-info-col">
        <p class="product-description">Конические стальные бочки используются для транспортировки и хранения пищевых продуктов — концентратов томатной пасты, соков, пюре, а также густых и сыпучих непищевых продуктов.</p>
        <div class="spec-cards" style="grid-template-columns: repeat(2, 1fr)">
          <div class="spec-card"><div class="spec-card-value">217<span class="spec-card-unit"> л</span></div><div class="spec-card-label">Объём · тип 1А2</div><div class="spec-card-desc">Стенка 0,7 мм · масса без крышки 10,4 кг</div></div>
          <div class="spec-card"><div class="spec-card-value" style="font-size:20px">Ø 580<span class="spec-card-unit"> мм</span></div><div class="spec-card-label">Диаметр</div><div class="spec-card-desc">Высота 970 ±4 мм · штабелируемая</div></div>
        </div>
        <button class="btn-consult" onclick="navigate('contact')">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</button>
      </div>
    </div>
    <div class="product-tabs">
      <div class="tab-headers">
        <button class="tab-btn active" data-tab="con-desc">ОПИСАНИЕ</button>
        <button class="tab-btn" data-tab="con-specs">СПЕЦИФИКАЦИИ</button>
      </div>
      <div class="tab-content active" id="tab-con-desc">
        <p>Конические (конусные) бочки выпускаются на заводах компании Greif по всему миру. С 2007 года производство конических бочек осуществляется в России — в г. Волгограде.</p>
        <p>Конические бочки используются для упаковки и транспортировки пищевых продуктов, например, томатной пасты и фруктовых концентратов. Стандартная ёмкость бочки составляет 217 л, она оснащена пластиковой или стальной крышкой с запорным кольцом.</p>
      </div>
      <div class="tab-content" id="tab-con-specs">
        <h4>Размеры конических бочек 1А2</h4>
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tbody>
            ${[['Объем','217 л'],['D — внешний диаметр','580 ±4 мм'],['Высота','970 ±4 мм'],['Толщина стенки корпуса','0,7 мм'],['Масса без крышки','10,4 кг']].map(([k,v]) =>
              `<tr style="border-bottom:1px solid var(--border)"><td style="padding:11px 0;color:var(--text-muted);width:50%">${k}</td><td style="padding:11px 0;color:var(--text-dark);font-weight:500">${v}</td></tr>`
            ).join('')}
          </tbody>
        </table>
      </div>
    </div>
    <div class="manager-card">
      <h4>Ваш менеджер:</h4>
      <div class="manager-name">Александр Седов</div>
      <div class="manager-contacts">
        <a href="tel:+79033703111">+7 (903) 370-31-11</a>
        <a href="mailto:Aleksandr.Sedov@greif.com">Aleksandr.Sedov@greif.com</a>
      </div>
    </div>
  </div>
</div>`,

  canisters: () => `
<div class="page">
  <div class="page-hero">
    <div class="page-hero-inner">
      <a href="#" onclick="navigate('products');return false;" style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#469B80;margin-bottom:10px;display:inline-flex;align-items:center;gap:6px;text-decoration:none;opacity:0.9">← Продукция</a>
      <h1 style="font-family:'Roboto',sans-serif;font-size:36px;font-weight:900;color:#fff;letter-spacing:-0.02em">Канистры</h1>
      <p style="font-size:14px;color:rgba(255,255,255,0.55)">Многослойные пластиковые канистры для агрохимии</p>
    </div>
  </div>
  <div class="product-detail-page">
    <div class="product-detail-grid">
      <div class="product-image-col">
        <img src="http://www.greif.ru/wp-content/uploads/kan.png" alt="Канистры Greif" style="max-width:100%;max-height:380px;object-fit:contain;">
      </div>
      <div class="product-info-col">
        <p class="product-description">Многослойные канистры используются для хранения агрохимических продуктов. От традиционных полиэтиленовых канистр они отличаются наличием дополнительного полиамидного слоя, который обеспечивает барьерные свойства тары.</p>
        <button class="btn-consult" onclick="navigate('contact')">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</button>
      </div>
    </div>
    <div class="product-tabs">
      <div class="tab-headers">
        <button class="tab-btn active" data-tab="can-desc">ОПИСАНИЕ</button>
        <button class="tab-btn" data-tab="can-specs">СПЕЦИФИКАЦИИ</button>
      </div>
      <div class="tab-content active" id="tab-can-desc">
        <p>Компания Greif начала производить в России многослойные пластиковые канистры с 2022 года. Площадка по выпуску канистр находится в Индустриальном парке Ворсино Калужской области. Область применения — фасовка агрохимии.</p>
      </div>
      <div class="tab-content" id="tab-can-specs">
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tbody>
            ${[['Ёмкость','5 литров'],['Цвет','Белый'],['Технология','Метод ко-экструзии'],['Горловина','63 мм, фольга для индукционной запайки']].map(([k,v]) =>
              `<tr style="border-bottom:1px solid var(--border)"><td style="padding:11px 0;color:var(--text-muted);width:40%">${k}</td><td style="padding:11px 0;color:var(--text-dark);font-weight:500">${v}</td></tr>`
            ).join('')}
          </tbody>
        </table>
      </div>
    </div>
    <div class="manager-card">
      <h4>Ваш менеджер:</h4>
      <div class="manager-name">Александр Седов</div>
      <div class="manager-contacts">
        <a href="tel:+79033703111">+7 (903) 370-31-11</a>
        <a href="mailto:Aleksandr.Sedov@greif.com">Aleksandr.Sedov@greif.com</a>
      </div>
    </div>
  </div>
</div>`,

  clover: () => `
<div class="page">
  <div class="page-hero">
    <div class="page-hero-inner">
      <a href="#" onclick="navigate('products');return false;" style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#469B80;margin-bottom:10px;display:inline-flex;align-items:center;gap:6px;text-decoration:none;opacity:0.9">← Продукция</a>
      <h1 style="font-family:'Roboto',sans-serif;font-size:36px;font-weight:900;color:#fff;letter-spacing:-0.02em">Кловертейнеры</h1>
      <p style="font-size:14px;color:rgba(255,255,255,0.55)">Clovertainer® — картонный IBC объёмом 1000 л для битума</p>
    </div>
  </div>
  <div class="product-detail-page">
    <div class="product-detail-grid">
      <div class="product-image-col">
        <img src="http://www.greif.ru/wp-content/uploads/klover.png" alt="Кловертейнер Greif" style="max-width:380px;max-height:380px;width:100%;object-fit:contain;">
      </div>
      <div class="product-info-col">
        <p class="product-description">Clovertainer® — среднетоннажный контейнер из многослойного картона ёмкостью 1000 литров. Кловертейнеры успешно применяются для транспортировки и хранения битума и битумных мастик.</p>
        <button class="btn-consult" onclick="navigate('contact')">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</button>
      </div>
    </div>
    <div class="product-tabs">
      <div class="tab-headers">
        <button class="tab-btn active" data-tab="clv-desc">ОПИСАНИЕ</button>
        <button class="tab-btn" data-tab="clv-specs">СПЕЦИФИКАЦИИ</button>
      </div>
      <div class="tab-content active" id="tab-clv-desc">
        <p>Кловертейнер состоит из поддона и крышки, снабжённой заливным отверстием, соединённых вертикальными стойками и обечайкой. Производство кловертейнеров компании Greif в России началось с 2010 года.</p>
        <p>В отличие от железнодорожных цистерн и битумовозов, затаривание битума в кловертейнеры обеспечивает сокращение транспортных расходов до 15%.</p>
      </div>
      <div class="tab-content" id="tab-clv-specs">
        <table style="width:100%;border-collapse:collapse;font-size:14px;margin-bottom:32px">
          <tbody>
            ${[['Номинальная емкость','1000 литров'],['Длина','1140 мм'],['Ширина','1140 мм'],['Высота','1080 мм'],['Масса кловертейнера в сборе','90 ±5 кг'],['Сертификация','UN11G/Z/']].map(([k,v]) =>
              `<tr style="border-bottom:1px solid var(--border)"><td style="padding:11px 0;color:var(--text-muted);width:50%">${k}</td><td style="padding:11px 0;color:var(--text-dark);font-weight:500">${v}</td></tr>`
            ).join('')}
          </tbody>
        </table>
      </div>
    </div>
    <div class="manager-card">
      <h4>Ваш менеджер:</h4>
      <div class="manager-name">Марина Леонова</div>
      <div class="manager-contacts">
        <a href="tel:+79872309971">+7 (987) 230-99-71</a>
        <a href="mailto:Marina.Leonova@greif.com">Marina.Leonova@greif.com</a>
      </div>
    </div>
  </div>
</div>`,

  services: () => `
    <div class="page">
      <div class="page-hero">
        <div class="page-hero-inner">
          <div style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#469B80;margin-bottom:10px">Услуги</div>
          <h1 style="font-family:'Roboto',sans-serif;font-size:36px;font-weight:900;color:#fff;letter-spacing:-0.02em">Сервисы Greif</h1>
        </div>
      </div>
      <div style="max-width:1100px;margin:56px auto;padding:0 32px;display:grid;grid-template-columns:repeat(2,1fr);gap:24px">
        <div onclick="navigate('branding')" class="service-card"><div class="service-card-icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div class="service-card-title">Брендирование упаковки</div><div class="service-card-desc">Нанесение фирменного стиля, цветовой палитры и корпоративной символики. Окраска по RAL, логотип, трёхполосный дизайн.</div><div class="service-card-link">ПОДРОБНЕЕ →</div></div>
        <div onclick="navigateIBCBuy()" class="service-card"><div class="service-card-icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="9 22 9 12 15 12 15 22" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div class="service-card-title">Покупаем б/у еврокубы</div><div class="service-card-desc">Сервис сбора и восстановления использованной тары. Оперативный вывоз пустых контейнеров с вашей площадки.</div><div class="service-card-link">ПОДРОБНЕЕ →</div></div>
        <div onclick="navigate('specification')" class="service-card"><div class="service-card-icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M9 11l3 3L22 4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div class="service-card-title">Подбор спецификации</div><div class="service-card-desc">Индивидуальный подбор характеристик упаковки под химическую природу вашего продукта.</div><div class="service-card-link">ПОДРОБНЕЕ →</div></div>
        <div onclick="navigate('logistics')" class="service-card"><div class="service-card-icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none"><rect x="1" y="3" width="15" height="13" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 8h4l3 3v5h-7V8z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="5.5" cy="18.5" r="2.5" stroke="#fff" stroke-width="2"/><circle cx="18.5" cy="18.5" r="2.5" stroke="#fff" stroke-width="2"/></svg></div><div class="service-card-title">Оптимизация логистики</div><div class="service-card-desc">Комплексные решения для повышения эффективности цепи поставок. JIT поставки, паллетизированная доставка.</div><div class="service-card-link">ПОДРОБНЕЕ →</div></div>
      </div>
    </div>`,

  branding: () => `
    <div class="page">
      <div class="page-hero">
        <div class="page-hero-inner">
          <div style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#469B80;margin-bottom:10px">Сервисы</div>
          <h1 style="font-family:'Roboto',sans-serif;font-size:36px;font-weight:900;color:#fff;letter-spacing:-0.02em">Брендирование упаковки</h1>
          <p style="font-size:14px;color:rgba(255,255,255,0.55)">Нанесение фирменного стиля и корпоративной символики на промышленную тару</p>
        </div>
      </div>
      <div style="background:var(--green-light-bg);padding:56px 0">
        <div style="max-width:1100px;margin:0 auto;padding:0 32px">
          <div style="background:#fff;border:1px solid var(--border);border-top:4px solid var(--green-primary);padding:40px 44px;margin-bottom:32px">
            <div style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:var(--green-primary);margin-bottom:14px">Цветовая кастомизация</div>
            <p style="font-size:15px;color:var(--text-dark);line-height:1.75;margin:0">Компания Greif предлагает изготовление металлических бочек, окрашенных в корпоративные цвета вашей компании. В качестве стандарта цветов на предприятиях Greif принята система <strong>RAL</strong>.</p>
            <p style="font-size:15px;color:var(--text-dark);line-height:1.75;margin:16px 0 0">Персонализация IBC возможна путём нанесения логотипа, торговой марки или любой другой релевантной информации на идентификационную табличку ёмкости. Оригинальный дизайн тары обеспечивает дополнительную защиту от подделок.</p>
          </div>
          <div style="text-align:center;margin-top:44px">
            <button class="btn-consult" onclick="navigate('contact')">ЗАПРОСИТЬ БРЕНДИРОВАНИЕ</button>
          </div>
        </div>
      </div>
    </div>`,

  specification: () => `
    <div class="page">
      <div class="page-hero">
        <div class="page-hero-inner">
          <div style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#469B80;margin-bottom:10px">Сервисы</div>
          <h1 style="font-family:'Roboto',sans-serif;font-size:36px;font-weight:900;color:#fff;letter-spacing:-0.02em">Подбор спецификации</h1>
        </div>
      </div>
      <div style="max-width:900px;margin:56px auto;padding:0 32px">
        <p style="font-size:15px;color:var(--text-dark);line-height:1.75;margin-bottom:48px">Компанией Greif накоплен обширный опыт в области совместимости различных продуктов с конкретным типом стальной бочки. Менеджеры Greif подберут оптимальную конфигурацию упаковки в соответствии со спецификой химической природы вашего продукта.</p>
        <div style="background:#fff;border:1px solid var(--border);border-top:3px solid var(--green-primary);padding:36px 40px;margin-bottom:32px">
          <h2 style="font-size:20px;font-weight:700;color:var(--text-dark);margin:0 0 16px">Консультации технолога</h2>
          <p style="font-size:14px;color:var(--text-muted);line-height:1.75;margin:0 0 20px">Основываясь на информации, содержащейся в паспорте безопасности продукта (MSDS), наши технологи предоставят рекомендации с указанием необходимой толщины стенок, типа внутренних покрытий и прокладки горловин.</p>
          <p style="font-size:14px;color:var(--text-muted);line-height:1.75;margin:0 0 20px">Для проведения анализов нам потребуется <strong style="color:var(--text-dark)">250 мл вашего продукта</strong>.</p>
        </div>
        <div style="text-align:center">
          <button class="btn-consult" onclick="navigate('contact')">ЗАПРОСИТЬ КОНСУЛЬТАЦИЮ</button>
        </div>
      </div>
    </div>`,

  logistics: () => `
    <div class="page">
      <div class="page-hero">
        <div class="page-hero-inner">
          <div style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#469B80;margin-bottom:10px">Сервисы</div>
          <h1 style="font-family:'Roboto',sans-serif;font-size:36px;font-weight:900;color:#fff;letter-spacing:-0.02em">Оптимизация логистики</h1>
        </div>
      </div>
      <div style="max-width:900px;margin:56px auto;padding:0 32px">
        <p style="font-size:15px;color:var(--text-dark);line-height:1.75;margin-bottom:48px">Компания Greif стремится установить с каждым из своих клиентов долгосрочные партнерские отношения, принимая всемерное участие в улучшении эффективности всех бизнес-процессов.</p>
        ${[
          ['Автоматическая разгрузка','Роботизированная система обеспечивает разгрузку партии из 150 бочек менее чем за 30 минут. Система полностью исключает операции с бочками, производимые вручную.'],
          ['Поставка точно в срок','Логистическая концепция Just-in-Time позволяет сократить выделенные под тару складские площади и затраты на её хранение. Диверсифицированная сеть предприятий Greif гарантирует отсутствие сбоев в доставке.'],
          ['Паллетизированная доставка','Greif предлагает доставку паллетизированных стальных бочек. Максимальный объём партии — 264 бочки объёмом до 224 литров.'],
          ['Сервис Greif Express','Специальный логистический сервис позволяет исключить сложности при поставке и операциях с металлическими бочками: 48 бочек на паллетах в одном контейнере, 6 контейнеров в одном грузовике.'],
        ].map(([title, desc]) => `
          <div style="background:#fff;border:1px solid var(--border);border-top:3px solid var(--green-primary);padding:36px 40px;margin-bottom:24px">
            <h2 style="font-size:20px;font-weight:700;color:var(--text-dark);margin:0 0 16px">${title}</h2>
            <p style="font-size:14px;color:var(--text-muted);line-height:1.75;margin:0">${desc}</p>
          </div>`
        ).join('')}
        <div style="text-align:center;margin-top:24px">
          <button class="btn-consult" onclick="navigate('contact')">ЗАПРОСИТЬ КОНСУЛЬТАЦИЮ</button>
        </div>
      </div>
    </div>`,

  contact: () => `
<div class="page">
  <div class="page-hero">
    <div class="page-hero-inner">
      <div style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#469B80;margin-bottom:10px">Контакты</div>
      <h1 style="font-family:'Roboto',sans-serif;font-size:36px;font-weight:900;color:#fff;letter-spacing:-0.02em">Наши производства</h1>
      <p style="font-size:14px;color:rgba(255,255,255,0.55)">8 заводов в крупнейших промышленных узлах России</p>
    </div>
  </div>
  <div style="background:var(--green-light-bg);padding:48px 0 56px">
    <div style="max-width:1200px;margin:0 auto;padding:0 32px">
      <div id="map" style="width:100%; height:420px; border-radius:20px; overflow:hidden; margin-bottom:32px; box-shadow:0 4px 20px rgba(0,0,0,0.1)"></div>
      <p style="text-align:center; font-size:12px; color:var(--text-muted); margin-bottom:32px">Нажмите на метку, чтобы увидеть контакты завода</p>
      <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:16px">
        ${[
          ['Москва','ул. Ленинская слобода, 19, ком. 2061','+7 (495) 933-59-47','Moscow.Office@greif.com'],
          ['Вологда','ул. Маяковского, 38','+7 (8172) 26-40-13','Vologda.Office@greif.com'],
          ['Волгоград','ул. Промысловая, 15','+7 (8442) 78-02-80','Aleksandr.Sedov@greif.com'],
          ['Пермь','ул. Героев Хасана, 74','+7 (342) 211-07-00','Anna.Egorova@greif.com'],
          ['Екатеринбург','п. Белоярский, ул. Мира, 20','+7 (343) 389-09-79','Sergei.Dronov@greif.com'],
          ['Казань','ул. М.Миля, 49А','+7 (843) 202-05-45','Marina.Leonova@greif.com'],
          ['Омск','ул. И.Н. Багнюка, 10','+7 (381) 221-41-12','Aleksei.Kuzmin@greif.com'],
          ['Рязань','ш. Ряжское, 20','+7 (491) 270-14-17','Moscow.Office@greif.com'],
          ['Калуга (Ворсино)','Индустриальный парк Ворсино','+7 (4842) 92-21-01','Kaluga.Office@greif.com'],
        ].map(([city, addr, phone, email]) => `
          <div style="background:#fff;border:1px solid var(--border);padding:16px 20px;border-left:3px solid var(--green-primary);border-radius:8px">
            <div style="font-weight:700;color:var(--green-primary);margin-bottom:6px">${city}</div>
            <div style="font-size:12px;color:#555">${addr}</div>
            <div style="font-size:12px;color:#555">${phone}</div>
            <a href="mailto:${email}" style="font-size:12px;color:var(--green-primary);text-decoration:none">${email}</a>
          </div>`
        ).join('')}
      </div>
      <div style="background:#fff;border:1px solid var(--border);padding:36px 40px;max-width:760px;margin:40px auto 0;border-top:3px solid var(--green-primary);border-radius:16px">
        <div style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:var(--green-primary);margin-bottom:16px">Сделать запрос</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-bottom:18px">
          <div><label class="form-label">Имя</label><input class="form-input" placeholder="Иван Иванов"></div>
          <div><label class="form-label">Компания</label><input class="form-input" placeholder="ООО «Химпром»"></div>
        </div>
        <div class="form-field"><label class="form-label">Телефон</label><input class="form-input" placeholder="+7 (___) ___-__-__"></div>
        <div class="form-field"><label class="form-label">Email</label><input class="form-input" type="email" placeholder="ivan@company.ru"></div>
        <div class="form-field"><label class="form-label">Сообщение</label><textarea class="form-input" rows="4" placeholder="Опишите запрос…" style="resize:vertical"></textarea></div>
        <button class="btn-form-submit">Отправить</button>
      </div>
    </div>
  </div>
</div>`,

  vacancies: () => `
<div class="page">
  <div class="page-hero">
    <div class="page-hero-inner">
      <div style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#469B80;margin-bottom:10px">Карьера</div>
      <h1 style="font-family:'Roboto',sans-serif;font-size:36px;font-weight:900;color:#fff;letter-spacing:-0.02em">Вакансии в Greif</h1>
      <p style="font-size:14px;color:rgba(255,255,255,0.55)">Присоединяйтесь к команде мирового лидера промышленной упаковки</p>
    </div>
  </div>
  <div class="career-page">
    <div class="city-menu-container">
      <div class="city-tabs">
        <button class="city-tab active" data-city="all">Все города</button>
        <button class="city-tab" data-city="vologda">Вологда</button>
        <button class="city-tab" data-city="kaluga">Калуга (Обнинск)</button>
        <button class="city-tab" data-city="perm">Пермь</button>
        <button class="city-tab" data-city="volgograd">Волгоград</button>
        <button class="city-tab" data-city="kazan">Казань</button>
        <button class="city-tab" data-city="omsk">Омск</button>
      </div>
    </div>
    <section class="vacancies">
      <div class="city-section active" data-city="vologda">
        <h3 class="city-title">Вологда</h3>
        <div class="vacancy-grid">
          <div class="vacancy-card"><h4>Инженер-технолог</h4><p>Специалист по подбору персонала: Александра Караваева</p><div class="button-group"><button class="details-btn" onclick="showVacancyDemo('Инженер-технолог','от 80 000 ₽','Вологда, ул. Маяковского, 38','Александра Караваева','@example','+7 XXX XXX XX XX')">Подробнее</button><a href="#" class="telegram-btn" target="_blank">Telegram</a></div></div>
          <div class="vacancy-card"><h4>Мастер смены</h4><p>Специалист по подбору персонала: Александра Караваева</p><div class="button-group"><button class="details-btn" onclick="showVacancyDemo('Мастер смены','от 70 000 ₽','Вологда, ул. Маяковского, 38','Александра Караваева','@example','+7 XXX XXX XX XX')">Подробнее</button><a href="#" class="telegram-btn" target="_blank">Telegram</a></div></div>
        </div>
      </div>
      <div class="city-section" data-city="kaluga">
        <h3 class="city-title">Калуга (Обнинск)</h3>
        <div class="vacancy-grid">
          <div class="vacancy-card"><h4>Оператор линии розлива</h4><p>Специалист по подбору персонала: Ильина Вероника</p><div class="button-group"><button class="details-btn" onclick="showVacancyDemo('Оператор линии розлива','от 65 000 ₽','Калужская обл., Индустриальный парк Ворсино','Ильина Вероника','@example','+7 XXX XXX XX XX')">Подробнее</button><a href="#" class="telegram-btn" target="_blank">Telegram</a></div></div>
        </div>
      </div>
      <div class="city-section" data-city="perm">
        <h3 class="city-title">Пермь</h3>
        <div class="vacancy-grid">
          <div class="vacancy-card"><h4>Начальник склада</h4><p>Специалист по подбору персонала: Анна Егорова</p><div class="button-group"><button class="details-btn" onclick="showVacancyDemo('Начальник склада','от 90 000 ₽','Пермь, ул. Героев Хасана, 74','Анна Егорова','@example','+7 XXX XXX XX XX')">Подробнее</button><a href="#" class="telegram-btn" target="_blank">Telegram</a></div></div>
        </div>
      </div>
      <div class="city-section" data-city="volgograd">
        <h3 class="city-title">Волгоград</h3>
        <div class="vacancy-grid">
          <div class="vacancy-card"><h4>Слесарь-ремонтник</h4><p>Специалист по подбору персонала: Александр Седов</p><div class="button-group"><button class="details-btn" onclick="showVacancyDemo('Слесарь-ремонтник','от 60 000 ₽','Волгоград, ул. Промысловая, 15','Александр Седов','@example','+7 XXX XXX XX XX')">Подробнее</button><a href="#" class="telegram-btn" target="_blank">Telegram</a></div></div>
        </div>
      </div>
      <div class="city-section" data-city="kazan">
        <h3 class="city-title">Казань</h3>
        <div class="vacancy-grid">
          <div class="vacancy-card"><h4>Инженер-химик</h4><p>Специалист по подбору персонала: Марина Леонова</p><div class="button-group"><button class="details-btn" onclick="showVacancyDemo('Инженер-химик','от 85 000 ₽','Казань, ул. М.Миля, 49А','Марина Леонова','@example','+7 XXX XXX XX XX')">Подробнее</button><a href="#" class="telegram-btn" target="_blank">Telegram</a></div></div>
        </div>
      </div>
      <div class="city-section" data-city="omsk">
        <h3 class="city-title">Омск</h3>
        <div class="vacancy-grid">
          <div class="vacancy-card"><h4>Электромонтер</h4><p>Специалист по подбору персонала: Алексей Кузьмин</p><div class="button-group"><button class="details-btn" onclick="showVacancyDemo('Электромонтер','от 55 000 ₽','Омск, ул. И.Н. Багнюка, 10','Алексей Кузьмин','@example','+7 XXX XXX XX XX')">Подробнее</button><a href="#" class="telegram-btn" target="_blank">Telegram</a></div></div>
        </div>
      </div>
    </section>
    <section class="why-us">
      <h2>Почему у нас круто работать</h2>
      <div class="why-grid">
        <div class="why-card"><div class="why-icon">🌍</div><h4>Международная компания</h4><p>Greif — глобальный производственный лидер с 1877 года</p></div>
        <div class="why-card"><div class="why-icon">📈</div><h4>Карьерный рост</h4><p>Возможности профессионального развития и обучения</p></div>
        <div class="why-card"><div class="why-icon">💼</div><h4>Официальное трудоустройство</h4><p>Полный социальный пакет и стабильность</p></div>
        <div class="why-card"><div class="why-icon">🏭</div><h4>Современное производство</h4><p>Передовые технологии и оборудование</p></div>
      </div>
    </section>
    <section class="company-section">
      <img src="https://www.greif.ru/wp-content/uploads/2024/11/7.JPG" alt="Команда Greif" style="width:100%; border-radius:16px;">
      <p class="photo-caption">Наша команда — профессионалы своего дела</p>
    </section>
    <section class="social-section">
      <h3>Следите за нами</h3>
      <div class="social-grid">
        <a href="https://vk.com/greif_russia" target="_blank">ВКонтакте</a>
        <a href="https://t.me/greif_russia" target="_blank">Telegram</a>
      </div>
    </section>
  </div>
  <div id="vacancyPopup" style="display:none;">
    <div>
      <button class="close-popup" onclick="closeVacancyPopup()">×</button>
      <div id="popupContent"></div>
    </div>
  </div>
</div>`,

};
