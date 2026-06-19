/* site_structure/js/about.js */

/* ─── Заполните photo/history: '' когда будут готовы данные ─── */
const FACTORY_PHOTOS = {
  belojarsky:  { name: 'Белоярский',          year: 1993, photo: 'http://www.greif.ru/wp-content/uploads/2.3-1993-Beloyarsk.jpg',       history: 'Завод в Белоярском — первое предприятие Greif (тогда Van Leer) в России. Открыт в 1993 году, производит стальные бочки для нефтехимической и химической промышленности. Расположен в Ханты-Мансийском автономном округе, обслуживает крупнейшие нефтяные компании Западной Сибири.' },
  vologda:     { name: 'Вологда',             year: 1998, photo: 'http://www.greif.ru/wp-content/uploads/2.3-1998-Vologda-scaled.jpg',   history: 'Вологодский завод основан в 1998 году. Специализируется на производстве стальных бочек и поставляет продукцию предприятиям Северо-Западного федерального округа. За годы работы завод стал ключевым поставщиком промышленной упаковки для химических и пищевых производств региона.' },
  volgograd:   { name: 'Волгоград',           year: 2003, photo: 'http://www.greif.ru/wp-content/uploads/2.3-2003-Volgograd.jpg',       history: 'Волгоградский завод открыт в 2003 году. С 2007 года здесь выпускаются конические (конусные) стальные бочки, производство которых Greif организовал в России одним из первых. Предприятие обслуживает нефтехимические и химические компании Поволжья и Юга России.' },
  perm:        { name: 'Пермь',               year: 2004, photo: 'http://www.greif.ru/wp-content/uploads/2.3-2004-Perm-scaled.jpg',     history: 'Пермский завод введён в эксплуатацию в 2004 году. Производит стальные бочки для предприятий Уральского федерального округа и Пермского края. Завод оснащён современным оборудованием и соответствует строгим корпоративным стандартам качества Greif.' },
  kazan:       { name: 'Казань',              year: 2007, photo: 'http://www.greif.ru/wp-content/uploads/2.3-2007-Kazan.jpg',           history: 'Казанский завод открыт в 2007 году. Выпускает стальные бочки и IBC-контейнеры (еврокубы). Предприятие расположено в развитом промышленном регионе и обслуживает крупных потребителей нефтехимической отрасли Республики Татарстан и Поволжья.' },
  omsk:        { name: 'Омск',               year: 2005, photo: 'http://www.greif.ru/wp-content/uploads/2.3-2005-Omsk-scaled.jpg',     history: 'Омский завод — один из крупных производственных объектов Greif в Сибири. Основан в 2005 году. Выпускает стальные бочки для нефтяной и химической промышленности. Удобное географическое расположение позволяет эффективно обслуживать клиентов всего Сибирского федерального округа.' },
  omsk2:       { name: 'Омск',               year: 2005, photo: 'http://www.greif.ru/wp-content/uploads/2.3-2005-Omsk-scaled.jpg',     history: 'Омский завод — один из крупных производственных объектов Greif в Сибири. Основан в 2005 году. Выпускает стальные бочки для нефтяной и химической промышленности. Удобное географическое расположение позволяет эффективно обслуживать клиентов всего Сибирского федерального округа.' },
  ryazan:      { name: 'Рязань',              year: 2014, photo: 'http://www.greif.ru/wp-content/uploads/2.3-2014-Ryazan.jpg',         history: 'Рязанский завод открыт в 2014 году. Производит IBC-контейнеры (еврокубы) объёмом 1000 литров. Предприятие оснащено передовым оборудованием и обслуживает клиентов Центрального федерального округа, поставляя продукцию ведущим химическим и пищевым компаниям.' },
  kaluga:      { name: 'Калуга (Ворсино)',    year: 2018, photo: 'http://www.greif.ru/wp-content/uploads/2.3-2018-Kaluga.jpg',         history: 'Завод в Индустриальном парке Ворсино Калужской области введён в строй в 2018 году. Производит IBC-контейнеры и многослойные пластиковые канистры (с 2022 года). Современное предприятие полного цикла, расположенное в одном из наиболее развитых индустриальных парков России.' },
  kaluga2:     { name: 'Калуга (Ворсино)',    year: 2018, photo: 'http://www.greif.ru/wp-content/uploads/2.3-2018-Kaluga.jpg',         history: 'Завод в Индустриальном парке Ворсино Калужской области введён в строй в 2018 году. Производит IBC-контейнеры и многослойные пластиковые канистры (с 2022 года). Современное предприятие полного цикла, расположенное в одном из наиболее развитых индустриальных парков России.' },
  angarsk:     { name: 'Ангарск',             year: null, photo: '',                                                                     history: 'Завод в Ангарске — новое предприятие Greif в Иркутской области. Обслуживает клиентов Восточной Сибири и Дальнего Востока. Подробная информация будет опубликована позже.' },
};

/* keys — список заводов в одной точке (если несколько — откроется выбор) */
const FACTORY_DOTS = [
  { keys: ['belojarsky'],  left:  6.6, top: 79.8 },
  { keys: ['vologda'],     left: 14.7, top: 73.4 },
  { keys: ['volgograd'],   left: 26.1, top: 64.5 },
  { keys: ['perm'],        left: 34.1, top: 58.3 },
  { keys: ['kazan'],       left: 53.0, top: 43.5 },
  { keys: ['omsk2'],       left: 43.4, top: 51.1 },
  { keys: ['omsk'],        left: 63.5, top: 36.1 },
  { keys: ['ryazan'],      left: 71.4, top: 29.2 },
  { keys: ['kaluga'],      left: 82.7, top: 20.9 },
  { keys: ['kaluga2'],     left: 89.2, top: 16.0 },
];

function _showFactoryTooltip(btn, keys) {
  const tooltip = document.getElementById('factory-tooltip');
  if (!tooltip) return;
  const f = keys.length === 1 ? FACTORY_PHOTOS[keys[0]] : null;
  const name = keys.map(k => FACTORY_PHOTOS[k] ? FACTORY_PHOTOS[k].name : k).join(' / ');

  let html = `<div style="font-family:'Roboto Condensed',sans-serif;font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--green-primary);margin-bottom:5px">Завод Грайф</div>`;
  html += `<div style="font-weight:700;font-size:14px;color:var(--text-dark);margin-bottom:${f && f.photo ? '10px' : '0'}">${name}</div>`;
  if (f && f.photo) {
    html += `<img src="${f.photo}" style="width:100%;height:148px;object-fit:cover;border-radius:7px;display:block">`;
  } else {
    html += `<div style="margin-top:8px;height:72px;border-radius:7px;background:var(--green-light-bg);display:flex;align-items:center;justify-content:center;color:var(--text-muted);font-size:12px">Фото будет добавлено позже</div>`;
  }
  tooltip.innerHTML = html;

  tooltip.style.visibility = 'hidden';
  tooltip.style.display = 'block';
  const th = tooltip.offsetHeight;
  const tw = tooltip.offsetWidth;
  tooltip.style.visibility = '';

  const rect = btn.getBoundingClientRect();
  let left = rect.left + rect.width / 2 - tw / 2;
  let top = rect.top - th - 10;
  if (left < 8) left = 8;
  if (left + tw > window.innerWidth - 8) left = window.innerWidth - tw - 8;
  if (top < 8) top = rect.bottom + 10;

  tooltip.style.left = left + 'px';
  tooltip.style.top = top + 'px';
}

function _hideFactoryTooltip() {
  const tooltip = document.getElementById('factory-tooltip');
  if (tooltip) tooltip.style.display = 'none';
}

function _openFactoryModal(keys) {
  const factories = keys.map(k => FACTORY_PHOTOS[k]).filter(Boolean);
  if (!factories.length) return;
  const f = factories[0];

  let modal = document.getElementById('factory-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'factory-modal';
    modal.style.cssText = 'position:fixed;inset:0;z-index:10000;background:rgba(0,0,0,0.72);display:flex;align-items:center;justify-content:center;padding:20px;opacity:0;transition:opacity 0.22s';
    modal.addEventListener('click', function(e) { if (e.target === modal) _closeFactoryModal(); });
    document.body.appendChild(modal);
  }

  const yearLabel = f.year ? `<span style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--green-primary)">Основан в ${f.year} году</span>` : '';
  const photoHtml = f.photo
    ? `<img src="${f.photo}" alt="${f.name}" style="width:100%;max-height:380px;object-fit:cover;display:block;border-radius:12px 12px 0 0">`
    : `<div style="height:180px;background:var(--green-light-bg);display:flex;align-items:center;justify-content:center;color:var(--text-muted);font-size:14px;border-radius:12px 12px 0 0">Фото будет добавлено позже</div>`;

  modal.innerHTML = `
    <div style="background:#fff;border-radius:14px;max-width:600px;width:100%;box-shadow:0 24px 64px rgba(0,0,0,0.32);overflow:hidden;position:relative;max-height:90vh;display:flex;flex-direction:column">
      ${photoHtml}
      <div style="padding:28px 32px 32px;overflow-y:auto">
        <button onclick="_closeFactoryModal()" style="position:absolute;top:14px;right:14px;width:36px;height:36px;border-radius:50%;background:rgba(0,0,0,0.45);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#fff;font-size:20px;line-height:1;z-index:1">&times;</button>
        <div style="margin-bottom:6px">${yearLabel}</div>
        <h3 style="font-size:24px;font-weight:900;color:var(--text-dark);margin:6px 0 16px;letter-spacing:-0.01em">Завод Грайф — ${f.name}</h3>
        <p style="font-size:15px;color:var(--text-muted);line-height:1.75;margin:0">${f.history}</p>
      </div>
    </div>`;

  modal.style.display = 'flex';
  requestAnimationFrame(() => { modal.style.opacity = '1'; });
  document.body.style.overflow = 'hidden';
}

function _closeFactoryModal() {
  const modal = document.getElementById('factory-modal');
  if (!modal) return;
  modal.style.opacity = '0';
  setTimeout(() => { modal.style.display = 'none'; document.body.style.overflow = ''; }, 220);
}

function _buildFactoryMapHtml() {
  const dots = FACTORY_DOTS.map(d => {
    const label = d.keys.map(k => FACTORY_PHOTOS[k] ? FACTORY_PHOTOS[k].name : k).join(' / ');
    const multi = d.keys.length > 1;
    const keysArg = JSON.stringify(d.keys).replace(/"/g, "'");
    const hasPhoto = d.keys.some(k => FACTORY_PHOTOS[k] && FACTORY_PHOTOS[k].photo);
    return `<button
      title="${label}${hasPhoto ? ' — нажмите, чтобы открыть фото' : ''}"
      class="factory-map-dot"
      style="position:absolute;left:${d.left}%;top:${d.top}%;
             transform:translate(-50%,-50%);
             width:${multi ? 38 : 32}px;height:${multi ? 38 : 32}px;border-radius:50%;
             background:rgba(70,155,128,0.85);border:3px solid #fff;
             cursor:${hasPhoto ? 'pointer' : 'default'};padding:0;z-index:2"
      onmouseenter="_showFactoryTooltip(this,${keysArg})"
      onmouseleave="_hideFactoryTooltip()"
      ${hasPhoto ? `onclick="_openFactoryModal(${keysArg})"` : ''}
    >${multi ? '<svg width="12" height="12" viewBox="0 0 12 12" fill="#fff"><circle cx="2" cy="6" r="1.8"/><circle cx="6" cy="6" r="1.8"/><circle cx="10" cy="6" r="1.8"/></svg>' : ''}</button>`;
  }).join('');

  return `
    <style>
      @keyframes factory-dot-pulse {
        0%   { box-shadow: 0 0 0 0   rgba(70,155,128,0.7); }
        60%  { box-shadow: 0 0 0 12px rgba(70,155,128,0);  }
        100% { box-shadow: 0 0 0 0   rgba(70,155,128,0);   }
      }
      .factory-map-dot {
        animation: factory-dot-pulse 2s ease-out infinite;
        transition: transform 0.15s;
      }
      .factory-map-dot:hover {
        transform: translate(-50%,-50%) scale(1.35) !important;
        animation-play-state: paused;
      }
    </style>
    <div id="factory-map-wrap"
         style="position:relative;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.10);background:#f0f8f5;user-select:none;margin-bottom:32px">
      <img src="http://www.greif.ru/wp-content/uploads/30-let-v-Rossii-2.jpg"
           alt="Заводы Грайф в России"
           style="width:100%;height:auto;display:block;pointer-events:none">
      ${dots}
    </div>

    <div id="factory-tooltip"
         style="display:none;position:fixed;z-index:9999;background:#fff;
                border:1px solid var(--border);border-radius:10px;padding:14px;
                box-shadow:0 8px 32px rgba(0,0,0,0.16);width:250px;
                pointer-events:none"></div>`;
}

function _buildHistoryTimeline() {
  const events = [
    { year:1877, title:'Открытие мастерской',            desc:'William Greif и Albert Vanderwyst открывают бондарную мастерскую «Vanderwyst and Greif» в Кливленде, Огайо',                         img:'https://www.greif.com/wp-content/uploads/2021/11/1877.jpg' },
    { year:1908, title:'Крупнейший бондарный завод',      desc:'Greif Bros. Company становится крупнейшим бондарным предприятием в мире',                                                          img:'https://www.greif.com/wp-content/uploads/2021/11/1908.jpg' },
    { year:1923, title:'Первая стальная бочка',           desc:'Произведена первая битумная стальная бочка, которая до сих пор входит в портфолио продукции',                                     img:'https://www.greif.com/wp-content/uploads/2021/11/1923.jpg' },
    { year:1951, title:'Переезд штаб-квартиры',           desc:'Под руководством Джона К. Демпси штаб-квартира переезжает из Кливленда в Делавэр, Огайо',                                        img:'https://www.greif.com/wp-content/uploads/2021/11/1951.jpg' },
    { year:1955, title:'Переход на фибровые барабаны',    desc:'Greif переходит от производства деревянных бочек к фибровым барабанам и гофрированным контейнерам',                              img:'https://www.greif.com/wp-content/uploads/2021/11/1955.jpg' },
    { year:1964, title:'Технология выдувного формования', desc:'Greif покупает технологию выдувного формования вкладышей у Haveg Industries',                                                    img:'https://www.greif.com/wp-content/uploads/2021/11/greif-timeline-1964.jpg' },
    { year:1978, title:'Производство гофрокартона',       desc:'Greif официально выходит на рынок производства гофрокартона с покупкой завода в Массилоне, Огайо',                               img:'https://www.greif.com/wp-content/uploads/2021/11/greif-timeline-1978.jpg' },
    { year:1998, title:'Публикация &laquo;The Greif Way&raquo;', desc:'Впервые опубликован «Путь Greif» — чёткое видение компании',                                                             img:'https://www.greif.com/wp-content/uploads/2021/11/greif-timeline-1998.jpg' },
    { year:2001, title:'Покупка Van Leer Industrial',     desc:'Greif покупает Van Leer Industrial, что даёт международное присутствие и удваивает размер компании. Переименование в Greif, Inc.', img:'https://www.greif.com/wp-content/uploads/2021/11/greif-timeline-2001.jpg' },
    { year:2010, title:'Покупка FIBC компаний',           desc:'Greif приобретает 4 компании по производству гибких контейнеров, включая Storsack Group',                                       img:'https://www.greif.com/wp-content/uploads/2021/11/greif-timeline-2010.jpg' },
    { year:2018, title:'Золотой статус EcoVadis',         desc:'Greif впервые получает золотое признание EcoVadis за устойчивое развитие',                                                       img:'https://www.greif.com/wp-content/uploads/2021/11/greif-timeline-2018.jpg' },
    { year:2019, title:'Крупнейшая сделка',               desc:'Greif приобретает Caraustar Industries — крупнейшую сделку в истории компании',                                                  img:'https://www.greif.com/wp-content/uploads/2021/11/greif-timeline-2019.jpg' },
    { year:2022, title:'Покупка Lee Container',           desc:'Greif приобретает Lee Container, лидера по производству канистр и малой пластиковой тары',                                      img:'https://www.greif.com/wp-content/uploads/2024/04/lee-chemical-logo.png' },
  ];
  var aboveCells = '', midCells = '', belowCells = '';
  events.forEach(function(e, i) {
    var safeTitle = e.title.replace(/"/g, '&quot;');
    var safeDesc  = e.desc.replace(/"/g, '&quot;');
    var card = `<div class="greif-tl-card" onclick="greifTlOpen(this)" data-year="${e.year}" data-title="${safeTitle}" data-desc="${safeDesc}" data-img="${e.img}"><div class="greif-tl-card-head"><span class="greif-tl-card-name">${e.title}</span></div><div class="greif-tl-img-wrap"><img src="${e.img}" alt="${e.title}" loading="lazy"></div></div>`;
    if (i % 2 === 0) {
      aboveCells += `<div class="greif-tl-cell"></div>`;
      belowCells += `<div class="greif-tl-cell"><div class="greif-tl-connector"></div>${card}</div>`;
    } else {
      aboveCells += `<div class="greif-tl-cell">${card}<div class="greif-tl-connector"></div></div>`;
      belowCells += `<div class="greif-tl-cell"></div>`;
    }
    midCells += `<div class="greif-tl-cell"><div class="greif-tl-badge">${e.year}</div></div>`;
  });
  return `<div class="greif-tl-row greif-tl-row-above">${aboveCells}</div><div class="greif-tl-row greif-tl-row-mid">${midCells}</div><div class="greif-tl-row greif-tl-row-below">${belowCells}</div>`;
}

const aboutSections = {
  greifRu: `
    <div>
      <h2 style="font-size:28px; font-weight:900; color:var(--text-dark); letter-spacing:-0.01em; margin-bottom:20px">Грайф в России</h2>
      <div style="margin-bottom:8px">
        <p style="font-size:15px; color:var(--text-muted); line-height:1.7; margin-bottom:16px">Компания Грайф работает на территории России с 1993 года. Под брендом Грайф производятся стальные бочки; пластиковая тара – IBC (еврокубы) и канистры; картонные контейнеры для битума. В 2023 году наша компания отметила 30-летний юбилей работы в России.</p>
        <p style="font-size:15px; color:var(--text-muted); line-height:1.7; margin-bottom:24px">В нашем бизнесе мы используем передовые технологии и оборудование, предъявляем самые строгие требования к качеству выпускаемой нами упаковки. Наши клиенты — все ведущие химические и нефтехимические компании России и СНГ, и мы гордимся долгим и плодотворным сотрудничеством!</p>
      </div>
      ${_buildFactoryMapHtml()}

      <p style="font-size:15px;color:var(--text-muted);line-height:1.7;margin-bottom:16px">На заводах Greif в России и СНГ реализован более чем вековой опыт компании в области производства промышленной упаковки. Жесткие корпоративные требования к качеству изготавливаемой продукции обеспечивают не только сохранность фасуемого продукта, но и гарантируют безопасность здоровья людей и окружающей среды.</p>
      <p style="font-size:15px;color:var(--text-muted);line-height:1.7;margin-bottom:16px">За годы работы на постсоветском пространстве Greif (до 1999 года — Van Leer) удалось сформировать партнерские отношения с ведущими предприятиями химической, нефтехимической, пищевой индустрии, закрепив свою позицию в качестве лидирующего производителя промышленной упаковки.</p>
      <p style="font-size:15px;color:var(--text-muted);line-height:1.7;margin-top:32px">К настоящему времени более 1000 предприятий из России и СНГ являются клиентами Greif. Greif видит большой потенциал в дальнейшем развитии деятельности на территории СНГ и продолжит представлять своим потребителям новые виды промышленной упаковки и сервисов.</p>
    </div>
  `,

  historyInc: `
    <div>
      <h2 style="font-size:28px;font-weight:900;color:var(--text-dark);letter-spacing:-0.01em;margin-bottom:8px">История Greif Inc.</h2>
      <p style="font-size:15px;color:var(--text-muted);line-height:1.7;margin-bottom:32px">Greif Inc. — мировой лидер в области производства промышленной упаковки. Более 145 лет непрерывной истории, от бондарной мастерской до глобальной корпорации.</p>

      <div style="display:flex;flex-direction:column;gap:0">

        <div style="display:flex;align-items:stretch;gap:0;border-radius:10px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.07);margin-bottom:24px">
          <div style="flex:0 0 42%;max-width:42%;overflow:hidden">
            <img src="http://www.greif.ru/wp-content/uploads/1B-Man-making-barrel-11x14-Black-and-White-scaled.jpg" alt="Бондарная мастерская" style="width:100%;height:100%;object-fit:cover;display:block">
          </div>
          <div style="flex:1;padding:32px 36px;background:#fff;border:1px solid var(--border);border-left:none;border-radius:0 10px 10px 0;display:flex;flex-direction:column;justify-content:center">
            <div style="font-family:'Roboto Condensed',sans-serif;font-size:10px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:var(--green-primary);margin-bottom:10px">1877</div>
            <h3 style="font-size:20px;font-weight:900;color:var(--text-dark);letter-spacing:-0.01em;margin:0 0 14px">От маленькой бондарни до мирового лидера</h3>
            <p style="font-size:14px;color:var(--text-muted);line-height:1.8;margin:0">История компании Greif началась в 1877 году, когда два брата, Эрнст и Альберт Грайф, основали небольшую мастерскую по производству деревянных бочек в Кливленде, штат Огайо. В то время деревянная бочка была основным средством для перевозки всего — от муки и сахара до нефти и виски. С самого начала братья сделали ставку на качество и надежность, что позволило их продукции быстро завоевать доверие клиентов.</p>
          </div>
        </div>

        <div style="display:flex;align-items:stretch;gap:0;border-radius:10px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.07);margin-bottom:24px">
          <div style="flex:1;padding:32px 36px;background:#fff;border:1px solid var(--border);border-right:none;border-radius:10px 0 0 10px;display:flex;flex-direction:column;justify-content:center">
            <div style="font-family:'Roboto Condensed',sans-serif;font-size:10px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:var(--green-primary);margin-bottom:10px">Начало XX века</div>
            <h3 style="font-size:20px;font-weight:900;color:var(--text-dark);letter-spacing:-0.01em;margin:0 0 14px">Эра индустриализации и расширения</h3>
            <p style="font-size:14px;color:var(--text-muted);line-height:1.8;margin:0">В начале XX века, с развитием промышленности, компания начала стремительно расти. Бочки Грайф стали стандартом для американской металлургической и химической промышленности. В 1920-х годах, отвечая на вызовы времени, компания освоила производство стальных барабанов, что ознаменовало начало перехода от традиционного дерева к современным материалам.</p>
          </div>
          <div style="flex:0 0 42%;max-width:42%;overflow:hidden">
            <img src="http://www.greif.ru/wp-content/uploads/Old-Drumline.jpg" alt="Линия производства барабанов" style="width:100%;height:100%;object-fit:cover;display:block">
          </div>
        </div>

        <div style="display:flex;align-items:stretch;gap:0;border-radius:10px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.07);margin-bottom:24px">
          <div style="flex:0 0 42%;max-width:42%;overflow:hidden">
            <img src="http://www.greif.ru/wp-content/uploads/Greif-Truck.jpg" alt="Грузовик Greif" style="width:100%;height:100%;object-fit:cover;display:block">
          </div>
          <div style="flex:1;padding:32px 36px;background:#fff;border:1px solid var(--border);border-left:none;border-radius:0 10px 10px 0;display:flex;flex-direction:column;justify-content:center">
            <div style="font-family:'Roboto Condensed',sans-serif;font-size:10px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:var(--green-primary);margin-bottom:10px">Середина XX века</div>
            <h3 style="font-size:20px;font-weight:900;color:var(--text-dark);letter-spacing:-0.01em;margin:0 0 14px">Выход на мировую арену</h3>
            <p style="font-size:14px;color:var(--text-muted);line-height:1.8;margin:0">Пик развития пришелся на послевоенные годы. Greif не только модернизировала производственные мощности, но и начала свое глобальное расширение. Компания открыла предприятия в Канаде, а затем и в Европе, превратившись в транснационального гиганта.</p>
          </div>
        </div>

        <div style="display:flex;align-items:stretch;gap:0;border-radius:10px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.07);margin-bottom:24px">
          <div style="flex:1;padding:32px 36px;background:#fff;border:1px solid var(--border);border-right:none;border-radius:10px 0 0 10px;display:flex;flex-direction:column;justify-content:center">
            <div style="font-family:'Roboto Condensed',sans-serif;font-size:10px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:var(--green-primary);margin-bottom:10px">Современность</div>
            <h3 style="font-size:20px;font-weight:900;color:var(--text-dark);letter-spacing:-0.01em;margin:0 0 14px">Многообразие и устойчивость</h3>
            <p style="font-size:14px;color:var(--text-muted);line-height:1.8;margin:0">Сегодня Greif — это глобальный лидер в производстве промышленной упаковки. Мы ушли далеко от простых деревянных бочек. Портфель компании теперь включает не только деревянные и стальные барабаны, но и пластиковую тару, фибровые (картонные) барабаны, многослойные бумажные мешки и экологичные решения.</p>
          </div>
          <div style="flex:0 0 42%;max-width:42%;overflow:hidden">
            <img src="http://www.greif.ru/wp-content/uploads/Lloyd-Drums-display.jpg" alt="Ассортимент продукции Greif" style="width:100%;height:100%;object-fit:cover;display:block">
          </div>
        </div>

        <div style="background:linear-gradient(135deg,var(--green-primary) 0%,#2d6b52 100%);border-radius:10px;padding:36px 40px;margin-bottom:32px;color:#fff">
          <div style="font-family:'Roboto Condensed',sans-serif;font-size:10px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:rgba(255,255,255,0.65);margin-bottom:10px">Сегодня и завтра</div>
          <h3 style="font-size:22px;font-weight:900;letter-spacing:-0.01em;margin:0 0 16px;color:#fff">Взгляд в будущее</h3>
          <p style="font-size:14px;line-height:1.85;margin:0;color:rgba(255,255,255,0.88)">Greif продолжает традиции, заложенные братьями Грайф более века назад: качество, инновации и забота о клиенте. Сегодня мы — компания с оборотом в несколько миллиардов долларов, объединяющая более 200 производственных площадок по всему миру. Но наша цель остается прежней — защищать то, что важно для наших клиентов, и делать это экологично и ответственно.</p>
        </div>

      </div>

      <div style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--green-primary);margin-bottom:16px">Хронология ключевых событий</div>

      <style>
        .greif-timeline {
          overflow-x:auto;
          scrollbar-width:thin;
          scrollbar-color:rgba(70,155,128,0.3) transparent;
        }
        .greif-tl-row {
          display:flex;
        }
        .greif-tl-row-above { align-items:flex-end; }
        .greif-tl-row-mid   { align-items:center; position:relative; }
        .greif-tl-row-below { align-items:flex-start; }
        .greif-tl-row-mid::before {
          content:'';
          position:absolute;
          left:0; right:0; top:50%;
          height:2px;
          transform:translateY(-50%);
          background:linear-gradient(to right, var(--green-primary) 0%, rgba(70,155,128,0.2) 100%);
          z-index:0;
        }
        .greif-tl-cell {
          flex:1;
          min-width:60px;
          display:flex;
          flex-direction:column;
          align-items:center;
          padding:0 4px;
        }
        .greif-tl-row-above .greif-tl-cell { justify-content:flex-end; }
        .greif-tl-row-below .greif-tl-cell { justify-content:flex-start; }
        .greif-tl-connector {
          width:2px;
          height:10px;
          background:rgba(70,155,128,0.4);
          flex-shrink:0;
        }
        .greif-tl-badge {
          width:42px;
          height:42px;
          border-radius:50%;
          background:var(--green-primary);
          color:#fff;
          display:flex;
          align-items:center;
          justify-content:center;
          font-family:'Roboto Condensed',sans-serif;
          font-weight:700;
          font-size:10px;
          letter-spacing:0.01em;
          text-align:center;
          line-height:1.1;
          box-shadow:0 0 0 3px #fff, 0 0 0 5px rgba(70,155,128,0.25);
          flex-shrink:0;
          position:relative;
          z-index:1;
          transition:transform 0.2s;
        }
        .greif-tl-card {
          background:#fff;
          border:1px solid var(--border);
          border-radius:6px;
          overflow:hidden;
          cursor:pointer;
          width:100%;
          transition:box-shadow 0.2s, border-color 0.2s, transform 0.15s;
        }
        .greif-tl-card:hover {
          box-shadow:0 3px 12px rgba(70,155,128,0.18);
          border-color:rgba(70,155,128,0.45);
          transform:translateY(-1px);
        }
        .greif-tl-card-head {
          padding:6px 7px 5px;
        }
        .greif-tl-card-name {
          font-size:11px;
          font-weight:700;
          color:var(--text-dark);
          line-height:1.3;
          display:-webkit-box;
          -webkit-line-clamp:2;
          -webkit-box-orient:vertical;
          overflow:hidden;
        }
        .greif-tl-img-wrap {
          width:100%;
          background:#f5f9f7;
          overflow:hidden;
          height:80px;
          display:flex;
          align-items:center;
          justify-content:center;
        }
        .greif-tl-img-wrap img {
          width:100%;
          height:100%;
          object-fit:cover;
          display:block;
          transition:transform 0.35s;
        }
        .greif-tl-card:hover .greif-tl-img-wrap img {
          transform:scale(1.06);
        }
      </style>

      <div class="greif-timeline">
        ${_buildHistoryTimeline()}
      </div>
    </div>
  `,

  sustainability: `
    <div>
      <h2 style="font-size:28px;font-weight:900;color:var(--text-dark);letter-spacing:-0.01em;margin-bottom:24px">Устойчивое развитие</h2>
      <p style="font-size:15px;color:var(--text-muted);line-height:1.7;margin-bottom:16px">Выступая в качестве признанного лидера на рынке промышленной упаковки, Greif предлагает продукцию и услуги, которые максимально удовлетворяют потребностям клиентов. Безопасность достигается в результате сочетания высоких стандартов производства, глобальной сети поставок и уникальной корпоративной культуры The Greif Way.</p>
      <p style="font-size:15px;color:var(--text-muted);line-height:1.7;margin-bottom:16px">В мире все большим спросом пользуется продукция, которая оказывает минимум негативного воздействия на окружающую среду и производится в соответствии с принципами устойчивого развития. Устойчивое развитие представляет собой единственный путь удовлетворения потребностей возрастающего числа жителей нашей планеты и обеспечения экономического роста без ущерба для природы.</p>
      <p style="font-size:15px;color:var(--text-muted);line-height:1.7;margin-bottom:16px">Корпорация Greif Inc. активно использует принципы «sustainability» в своей деятельности. Начиная с 2003 года Greif ведет активную работу в направлении сокращения расходов во всех сферах деятельности, охватывая закупки, производство и продажу, что реализуется с использованием принципов бережливого производства (lean manufacturing). Целью компании в рамках реализуемой политики является «ноль отходов», отправляемых на полигоны.</p>
      <p style="font-size:15px;color:var(--text-muted);line-height:1.7;margin-bottom:16px">Восстановление упаковки удлиняет ее жизненный цикл, что значительно уменьшает объем потребляемых сырьевых ресурсов. С 2010 года клиентам Greif был предложен сервис сбора использованной тары (IBC — еврокубы). В России создана одна из крупнейших сетей по восстановлению жесткой промышленной упаковки в РФ.</p>
      <p style="font-size:15px;color:var(--text-muted);line-height:1.7;margin-bottom:40px">Вторичная переработка упаковки позволяет снизить нагрузку на окружающую среду. В частности, большинство стальных бочек могут быть подвергнуты 100%-ой переработке; промышленные пластиковые упаковочные продукты также могут быть утилизированы как лом и вторично использованы в производстве паллет или иных продуктов из дробленого пластика.</p>

      <div style="border-top:2px solid var(--green-primary);padding-top:36px;margin-top:4px">

        <div style="display:flex;align-items:center;gap:14px;margin-bottom:8px">
          <div style="width:40px;height:40px;background:var(--green-primary);border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
          </div>
          <h3 style="font-size:22px;font-weight:900;color:var(--text-dark);letter-spacing:-0.01em;margin:0">Восстановление б/у еврокубов</h3>
        </div>
        <p style="font-size:15px;color:var(--text-muted);line-height:1.7;margin-bottom:28px">Greif предоставляет профессиональный сервис по восстановлению бывших в употреблении еврокубов (IBC). Если у вас накопились пустые контейнеры, мы готовы оперативно их вывезти с вашей площадки, выкупить загрязнённую тару, а также предложить услуги по промывке контейнеров, замене колбы и ремонту обрешётки.</p>

        <div style="margin-bottom:32px;padding:22px 26px;background:var(--green-light-bg);border-left:4px solid var(--green-primary);border-radius:6px">
          <div style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--green-primary);margin-bottom:12px">Что такое REBO?</div>
          <p style="font-size:14px;color:var(--text-dark);line-height:1.8;margin:0 0 10px">REBO — восстановленный еврокуб: <strong>новая бутыль из полиэтилена высокой плотности (ПЭНД, 1000 л)</strong> устанавливается на б/у металлический поддон и помещается в б/у обрешётку из гальванизированной стали.</p>
          <p style="font-size:14px;color:var(--text-dark);line-height:1.8;margin:0">Это позволяет значительно снизить стоимость тары без потери функциональности и многократно продлить жизненный цикл металлических компонентов.</p>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:32px">
          <div style="background:#fff;border:1px solid var(--border);border-top:3px solid var(--green-primary);border-radius:6px;padding:24px 26px">
            <div style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:var(--green-primary);margin-bottom:16px">Преимущества работы с Грайф</div>
            <ul style="list-style:none;padding:0;margin:0">
              ${['Надёжный партнёр в сфере промышленной упаковки','Индивидуальный подход к формированию цены','Возможность выкупить весь объём','Покупка обрешёток без колбы','Предложение на условиях самовывоза','Работа на всей территории РФ','Минимизация экологических рисков'].map(t =>
                '<li style="display:flex;gap:10px;align-items:flex-start;padding:7px 0;border-bottom:1px solid var(--border);font-size:14px;color:var(--text-dark)"><span style="color:var(--green-primary);font-weight:700;flex-shrink:0">—</span>' + t + '</li>'
              ).join('')}
            </ul>
          </div>
          <div style="background:#fff;border:1px solid var(--border);border-top:3px solid var(--green-primary);border-radius:6px;padding:24px 26px">
            <div style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:var(--green-primary);margin-bottom:16px">Требования к принимаемым еврокубам</div>
            <ul style="list-style:none;padding:0;margin:0">
              ${['Количество кратно 52 шт.','Колба, поддон и обрешётка без значительных механических повреждений','Остатки продукта не более 5 кг','Наличие таблички, крышки и разгрузочного крана'].map(t =>
                '<li style="display:flex;gap:10px;align-items:flex-start;padding:7px 0;border-bottom:1px solid var(--border);font-size:14px;color:var(--text-dark)"><span style="color:var(--green-primary);font-weight:700;flex-shrink:0">—</span>' + t + '</li>'
              ).join('')}
            </ul>
          </div>
        </div>

        <div style="display:flex;flex-wrap:wrap;gap:16px;align-items:center;margin-bottom:8px">
          <a href="https://www.greif.ru/wp-content/uploads/Trebovaniya-k-b_u-kubam.pdf" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:10px;background:var(--green-primary);color:#fff;font-family:'Roboto Condensed',sans-serif;font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;padding:13px 24px;text-decoration:none;border-radius:6px;transition:background 0.2s" onmouseover="this.style.background='#357a62'" onmouseout="this.style.background='var(--green-primary)'">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/></svg>
            Требования к б/у еврокубам (PDF)
          </a>
          <a href="#" onclick="navigate('ibcBuy');return false;" style="display:inline-flex;align-items:center;gap:8px;font-family:'Roboto Condensed',sans-serif;font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--green-primary);text-decoration:none;padding:13px 24px;border:2px solid var(--green-primary);border-radius:6px;transition:background 0.2s" onmouseover="this.style.background='var(--green-light-bg)'" onmouseout="this.style.background='transparent'">
            Подробнее о сервисе →
          </a>
        </div>

      </div>
    </div>
  `,

  news: `
    <div>
      <h2 style="font-size:28px;font-weight:900;color:var(--text-dark);letter-spacing:-0.01em;margin-bottom:24px">Новости компании</h2>
      <div style="display:flex;flex-direction:column;gap:24px">
        <article style="border:1px solid var(--border);border-radius:8px;overflow:hidden">
          <div style="padding:20px">
            <div style="font-size:12px;color:var(--text-muted);margin-bottom:10px">30/04/2025</div>
            <h3 style="font-size:17px;font-weight:700;color:var(--text-dark);margin-bottom:10px">Грайф Вологда — обладатель премии Dempsey Award</h3>
            <p style="font-size:14px;color:var(--text-muted);line-height:1.7;margin-bottom:12px">Коллеги, добрый день! В понедельник, 28 апреля, в Вологде состоялся праздник, которого все долго ждали! В январе 2025 года наша Вологодская площадка стала обладателем самой престижной премии в корпорации Greif: Dempsey Award. Эта премия вручается коллективам, проявившим исключительные производственные и коммерческие успехи в прошедшем году…</p>
            <a href="#" style="font-size:13px;font-weight:700;color:var(--green-primary);text-decoration:none">Читать полностью →</a>
          </div>
        </article>
        <article style="border:1px solid var(--border);border-radius:8px;overflow:hidden">
          <div style="padding:20px">
            <div style="font-size:12px;color:var(--text-muted);margin-bottom:10px">18/03/2025</div>
            <h3 style="font-size:17px;font-weight:700;color:var(--text-dark);margin-bottom:10px">Фильм про IBC GCube Electron</h3>
            <p style="font-size:14px;color:var(--text-muted);line-height:1.7;margin-bottom:12px">Коллеги, представляем Вашему вниманию фильм про IBC GCube Electron — еврокуб с антистатическими свойствами, который обеспечивает безопасную перевозку и хранение легко-воспламеняющихся жидкостей. Фильм вы можете посмотреть в нашем сообществе в <a href="https://t.me/greif_russia/522" style="color:var(--green-primary)">Телеграм</a> и в <a href="https://vk.com/wall-221692797_1365" style="color:var(--green-primary)">ВКонтакте</a>.</p>
          </div>
        </article>
        <article style="border:1px solid var(--border);border-radius:8px;overflow:hidden">
          <div style="padding:20px">
            <div style="font-size:12px;color:var(--text-muted);margin-bottom:10px">25/02/2025</div>
            <h3 style="font-size:17px;font-weight:700;color:var(--text-dark);margin-bottom:10px">Chairman's Safety Award 2024</h3>
            <p style="font-size:14px;color:var(--text-muted);line-height:1.7;margin-bottom:12px">Коллеги, добрый день! В начале февраля 2025 состоялась церемония награждения заводов Грайф, получивших премию в области безопасности — Chairman's Safety Award 2024. Мы рады сообщить, что 6 российских заводов Грайф получили эту почётную награду.</p>
            <a href="#" style="font-size:13px;font-weight:700;color:var(--green-primary);text-decoration:none">Читать полностью →</a>
          </div>
        </article>
      </div>
    </div>
  `,
};

let currentAboutSection = 'greifRu';

const aboutSectionTitles = {
  greifRu:        'Грайф в России',
  historyInc:     'История Greif Inc.',
  news:           'Новости компании',
  sustainability: 'Устойчивое развитие',
};

function switchAboutSection(sectionId) {
  currentAboutSection = sectionId;
  const contentDiv = document.getElementById('about-content');
  if (contentDiv && aboutSections[sectionId]) {
    contentDiv.innerHTML = aboutSections[sectionId];
  }

  const titleEl = document.getElementById('about-page-title');
  if (titleEl && aboutSectionTitles[sectionId]) {
    titleEl.textContent = aboutSectionTitles[sectionId];
  }

  document.querySelectorAll('.about-nav-link').forEach(link => {
    const linkSection = link.getAttribute('data-about-section');
    if (linkSection === sectionId) {
      link.classList.add('active');
      link.style.borderLeftColor = 'var(--green-primary)';
      link.style.color = 'var(--green-primary)';
    } else {
      link.classList.remove('active');
      link.style.borderLeftColor = 'transparent';
      link.style.color = '#333';
    }
  });
}

function initAboutNav() {
  document.querySelectorAll('.about-nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      switchAboutSection(this.getAttribute('data-about-section'));
    });
  });
  switchAboutSection('greifRu');
}

/* ─── Timeline modal ─── */
function greifTlOpen(card) {
  var year  = card.dataset.year;
  var title = card.dataset.title;
  var desc  = card.dataset.desc;
  var img   = card.dataset.img;

  var existing = document.getElementById('greif-tl-modal');
  if (existing) existing.remove();

  var modal = document.createElement('div');
  modal.id = 'greif-tl-modal';
  modal.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,0.52);display:flex;align-items:center;justify-content:center;padding:20px;';
  modal.innerHTML = `
    <div style="background:#fff;border-radius:14px;overflow:hidden;max-width:480px;width:100%;box-shadow:0 24px 60px rgba(0,0,0,0.28);position:relative;animation:greifTlIn 0.2s ease">
      <button onclick="greifTlClose()" style="position:absolute;top:10px;right:10px;width:30px;height:30px;border-radius:50%;border:none;background:rgba(0,0,0,0.45);color:#fff;font-size:14px;cursor:pointer;display:flex;align-items:center;justify-content:center;z-index:1;line-height:1">✕</button>
      <img src="${img}" alt="${title}" style="width:100%;height:200px;object-fit:cover;display:block;">
      <div style="padding:20px 22px 24px">
        <div style="font-family:'Roboto Condensed',sans-serif;font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--green-primary);margin-bottom:6px">${year}</div>
        <div style="font-size:17px;font-weight:800;color:var(--text-dark);line-height:1.25;margin-bottom:10px">${title}</div>
        <p style="font-size:13px;color:var(--text-muted);line-height:1.65;margin:0">${desc}</p>
      </div>
    </div>
    <style>@keyframes greifTlIn{from{opacity:0;transform:scale(0.93)}to{opacity:1;transform:scale(1)}}</style>
  `;
  modal.addEventListener('click', function(e) { if (e.target === modal) greifTlClose(); });
  document.body.appendChild(modal);
  document.addEventListener('keydown', _greifTlEsc);
}

function greifTlClose() {
  var modal = document.getElementById('greif-tl-modal');
  if (modal) modal.remove();
  document.removeEventListener('keydown', _greifTlEsc);
}

function _greifTlEsc(e) { if (e.key === 'Escape') greifTlClose(); }
