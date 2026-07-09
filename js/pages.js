/* site_structure/js/pages.js */

/* ─────────── CITY CONTACTS DATA ─────────── */

const CITY_CONTACTS = {
  'moskva': {
    city: 'Москва',
    phone: '+7 (495) 933-59-47',
    address: 'ул. Ленинская слобода, 19, ком. 2061',
    contacts: [
      { role: 'Офис-менеджер',                                    name: '',               phone: '8-916-130-17-51', email: '' },
      { role: 'Зам. генерального директора по закупкам и снабжению', name: '',            phone: '8-916-502-08-42', email: '' },
      { role: 'HR-менеджер',                                      name: 'Ильина Вероника', phone: '8-982-230-05-83', email: '' },
    ]
  },
  'vologda': {
    city: 'Вологда',
    phone: '+7 (8172) 26-40-13',
    address: 'ул. Маяковского, 38',
    contacts: [
      { role: 'Руководитель филиала',                name: '', phone: '8-921-822-76-34', email: '' },
      { role: 'Главный инженер',                     name: '', phone: '8-921-067-03-26', email: '' },
      { role: 'Офис-менеджер',                       name: '', phone: '8-921-822-42-94', email: '' },
      { role: 'Менеджер по продажам',                name: '', phone: '8-921-068-04-60', email: '' },
      { role: 'Менеджер по сопровождению продаж',    name: '', phone: '8-981-430-10-89', email: '' },
      { role: 'Менеджер по логистике',                name: '', phone: '8-911-530-15-47', email: '' },
      { role: 'Менеджер по логистике',                name: '', phone: '8-921-230-18-59', email: '' },
      { role: 'Менеджер по снабжению',               name: '', phone: '8-921-716-71-89', email: '' },
    ]
  },
  'volgograd': {
    city: 'Волгоград',
    phone: '+7 (8442) 78-02-80',
    address: 'ул. Промысловая, 15',
    contacts: [
      { role: 'Исполнительный директор',          name: '', phone: '8-988-959-03-91', phone2: '8-927-515-13-35', email: '' },
      { role: 'Офис-менеджер',                    name: '', phone: '8 (844) 278-02-80',                          email: '' },
      { role: 'Менеджер по логистике',             name: '', phone: '8-937-707-84-34',                           email: '' },
      { role: 'Менеджер по сопровождению продаж', name: '', phone: '8-988-964-25-08',                           email: '' },
      { role: 'Менеджер по закупкам',             name: '', phone: '8-961-686-96-88',                           email: '' },
    ]
  },
  'perm': {
    city: 'Пермь',
    phone: '+7 (342) 211-07-00',
    address: 'ул. Героев Хасана, 74',
    contacts: [
      { role: 'Исполнительный директор',                        name: '', phone: '8-913-671-09-94', email: '' },
      { role: 'Офис-менеджер',                                  name: '', phone: '8-912-788-04-73', email: 'Anna.Egorova@greif.com' },
      { role: 'Менеджер по сопровождению продаж',               name: '', phone: '8-912-881-04-21', phone2: '8-912-582-93-51', email: '' },
      { role: 'Старший менеджер по продажам',                   name: '', phone: '8-917-253-42-36', email: '' },
      { role: 'Региональный менеджер по закупкам',              name: '', phone: '8-912-069-17-21', email: '' },
      { role: 'Менеджер по персоналу',                          name: 'Петренко Ника Николаевна', phone: '8-906-644-82-97', email: '' },
      { role: 'Менеджер по охране труда, качеству и экологии',  name: '', phone: '8-985-750-15-69', email: '' },
    ]
  },
  'ekaterinburg': {
    city: 'П. Белоярский',
    phone: '+7 (34377) 21955',
    address: 'п. Белоярский, ул. Мира, 20',
    contacts: [
      { role: 'Главный инженер',          name: '', phone: '8-982-640-03-40', email: '' },
      { role: 'Зам. главного бухгалтера', name: '', phone: '8-953-009-61-05', email: '' },
      { role: 'Менеджер по продажам',     name: '', phone: '8-982-640-04-25', email: 'Sergei.Dronov@greif.com' },
    ]
  },
  'kazan': {
    city: 'Казань',
    phone: '+7 (843) 202-05-45',
    address: 'ул. М.Миля, 49А',
    contacts: [
      { role: 'Руководитель филиала',                name: '', phone: '8-987-290-89-81', email: '' },
      { role: 'Директор инженерного центра',          name: '', phone: '8-987-295-69-54', email: '' },
      { role: 'Менеджер по логистике',                name: '', phone: '8-987-400-62-51', email: '' },
      { role: 'Старший менеджер по продажам (Пермь)', name: '', phone: '8-917-253-42-36', email: '' },
      { role: 'Менеджер по продажам',                 name: '', phone: '8-987-292-27-27', email: '' },
      { role: 'Менеджер по сопровождению продаж',     name: '', phone: '8-987-000-67-13', phone2: '8-987-270-04-00', email: '' },
      { role: 'Менеджер по маркетингу',               name: '', phone: '8-987-230-99-71', email: 'Marina.Leonova@greif.com' },
    ]
  },
  'omsk': {
    city: 'Омск',
    phone: '+7 (381) 221-41-12',
    address: 'ул. И.Н. Багнюка, 10',
    contacts: [
      { role: 'Исполнительный директор', name: '', phone: '8-913-963-45-27', email: '' },
      { role: 'Бухгалтер',              name: '', phone: '8-913-630-74-94', phone2: '8-913-973-83-35', email: '' },
      { role: 'Менеджер по снабжению',  name: '', phone: '7-913-988-06-48', email: '' },
    ]
  },
  'ryazan': {
    city: 'Рязань',
    phone: '+7 (491) 270-14-17',
    address: 'ш. Ряжское, 20',
    contacts: [
      { role: 'Начальник производства', name: '', phone: '8-915-601-45-17', email: '' },
      { role: 'Бухгалтер-кладовщик',    name: '', phone: '8-915-590-96-51', email: '' },
    ]
  },
  'kaluga': {
    city: 'Калуга (Ворсино)',
    phone: '+7 (4842) 92-21-01',
    address: 'Индустриальный парк Ворсино',
    contacts: [
      { role: 'Офис-менеджер',                           name: '', phone: '8-911-045-04-63', email: 'Kaluga.Office@greif.com' },
      { role: 'Руководитель филиала',                     name: '', phone: '8-985-817-16-29', email: '' },
      { role: 'Менеджер по сопровождению продаж (бочка)', name: '', phone: '8-981-448-93-00', email: '' },
      { role: 'Сопровождение продаж',                     name: '', phone: '8-981-440-61-50', email: '' },
      { role: 'Менеджер по продажам КУБЫ',                name: '', phone: '8-911-502-36-63', phone2: '8-910-517-92-24', email: '' },
      { role: 'Менеджер по продажам БОЧКИ',               name: '', phone: '8-921-143-43-68', phone2: '8-981-432-19-14', email: '' },
      { role: 'Главный инженер производства еврокубов',   name: '', phone: '8-981-440-61-36', email: '' },
      { role: 'Менеджер по сопровождению продаж КУБЫ',    name: '', phone: '8-981-427-35-17', email: '' },
      { role: 'Менеджер по закупкам КУБЫ',                name: '', phone: '8-961-005-26-58', email: '' },
    ]
  },
};

function _toTel(phone) {
  const d = phone.replace(/\D/g, '');
  if (!d) return '';
  return 'tel:+7' + (d.startsWith('7') || d.startsWith('8') ? d.slice(1) : d);
}

function _toggleCityContact(header) {
  const item = header.parentElement;
  const details = item.querySelector('.cc-details');
  const arrow = header.querySelector('.cc-arrow');
  const isOpen = details.style.maxHeight && details.style.maxHeight !== '0px';
  const list = item.closest('.cc-list');
  list.querySelectorAll('.cc-details').forEach(d => { d.style.maxHeight = '0'; d.style.opacity = '0'; });
  list.querySelectorAll('.cc-arrow').forEach(a => { a.style.transform = ''; });
  if (!isOpen) {
    details.style.maxHeight = details.scrollHeight + 'px';
    details.style.opacity = '1';
    arrow.style.transform = 'rotate(90deg)';
  }
}

function openCityModal(key) {
  const data = CITY_CONTACTS[key];
  if (!data) return;

  let modal = document.getElementById('city-contact-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'city-contact-modal';
    modal.style.cssText = 'position:fixed;inset:0;z-index:10000;background:rgba(0,0,0,0.65);display:flex;align-items:center;justify-content:center;padding:20px;opacity:0;transition:opacity 0.22s';
    modal.addEventListener('click', function(e) { if (e.target === modal) _closeCityModal(); });
    document.body.appendChild(modal);
  }

  const SVG_PHONE = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`;
  const SVG_MAIL  = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`;

  const contactsHtml = data.contacts.map(c => {
    const telHref = _toTel(c.phone);
    const tel2Href = c.phone2 ? _toTel(c.phone2) : '';
    const phoneRow  = telHref  ? `<a href="${telHref}"  style="display:inline-flex;align-items:center;gap:6px;color:var(--text-dark);text-decoration:none;font-size:14px;font-weight:600">${SVG_PHONE}${c.phone}</a>`   : '';
    const phone2Row = tel2Href ? `<a href="${tel2Href}" style="display:inline-flex;align-items:center;gap:6px;color:var(--text-dark);text-decoration:none;font-size:14px;font-weight:600">${SVG_PHONE}${c.phone2}</a>` : '';
    const emailRow = c.email ? `<a href="mailto:${c.email}" style="display:inline-flex;align-items:center;gap:5px;color:var(--green-primary);text-decoration:none;font-size:12px;margin-top:4px">${SVG_MAIL}${c.email}</a>` : '';
    return `
    <div style="border-bottom:1px solid var(--border)">
      <div class="cc-header" onclick="_toggleCityContact(this)" style="display:flex;align-items:center;justify-content:space-between;padding:13px 0;cursor:pointer;gap:12px">
        <div style="flex:1;min-width:0">
          <div style="font-family:'Roboto Condensed',sans-serif;font-size:10px;font-weight:700;letter-spacing:0.13em;text-transform:uppercase;color:var(--green-primary);margin-bottom:2px">${c.role}</div>
          <div style="font-size:14px;font-weight:600;color:var(--text-dark);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${c.name}</div>
        </div>
        <span class="cc-arrow" style="font-size:20px;color:var(--green-primary);transition:transform 0.18s;flex-shrink:0;line-height:1">›</span>
      </div>
      <div class="cc-details" style="max-height:0;opacity:0;overflow:hidden;transition:max-height 0.22s ease,opacity 0.18s;padding:0 0 0 0">
        <div style="padding-bottom:14px;display:flex;flex-direction:column;gap:4px">
          ${phoneRow}${phone2Row}${emailRow}
        </div>
      </div>
    </div>`;
  }).join('');

  modal.innerHTML = `
    <div style="background:#fff;border-radius:16px;max-width:480px;width:100%;box-shadow:0 24px 64px rgba(0,0,0,0.28);overflow:hidden;position:relative;max-height:90vh;display:flex;flex-direction:column">
      <div style="background:var(--green-primary);padding:24px 28px 20px;position:relative;flex-shrink:0">
        <button onclick="_closeCityModal()" style="position:absolute;top:12px;right:14px;width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.2);border:none;cursor:pointer;color:#fff;font-size:22px;line-height:1;display:flex;align-items:center;justify-content:center">&times;</button>
        <div style="font-family:'Roboto Condensed',sans-serif;font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.65);margin-bottom:4px">Контакты завода</div>
        <div style="font-size:24px;font-weight:900;color:#fff;letter-spacing:-0.01em">${data.city}</div>
        <a href="${_toTel(data.phone)}" style="display:inline-flex;align-items:center;gap:6px;color:#fff;text-decoration:none;font-size:14px;font-weight:600;margin-top:6px;opacity:0.92">${SVG_PHONE}${data.phone}</a>
        <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-top:4px">${data.address}</div>
      </div>
      <div class="cc-list" style="padding:4px 24px 20px;overflow-y:auto">
        ${contactsHtml}
      </div>
    </div>`;

  modal.style.display = 'flex';
  requestAnimationFrame(() => { modal.style.opacity = '1'; });
  document.body.style.overflow = 'hidden';
}

function _closeCityModal() {
  const modal = document.getElementById('city-contact-modal');
  if (!modal) return;
  modal.style.opacity = '0';
  setTimeout(() => { modal.style.display = 'none'; document.body.style.overflow = ''; }, 220);
}

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

function _ibcDeliveryTab() {
  const cities = ['Москва','Санкт-Петербург','Калуга','Вологда','Казань','Волгоград','Пермь','Екатеринбург','Омск','Ангарск'];
  const factors = [
    'Предпочтения или требования клиента',
    'Оптимальный объём партии (максимальная нагрузка)',
    'Производственный регламент, определяющий условия и ограничения погрузочно-разгрузочных операций',
    'Габариты грузовика или трейлера, нагрузка на ось, ходовая часть',
    'Обеспечение безопасности',
    'Устойчивость партии товара',
    'Требования к разгрузке',
  ];
  const transport = [
    { icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`, title: 'Автотрейлер', value: '48–52 шт.', desc: 'Стандартная загрузка пустых IBC на паллетах в 2 яруса. Погрузка вилочным погрузчиком.' },
    { icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="11" rx="1"/><path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>`, title: 'Железнодорожный вагон', value: '52 шт.', desc: 'Полная загрузка вагона. Оптимальное использование грузовой площади благодаря кубической форме IBC.' },
    { icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="6" width="22" height="13" rx="1"/><path d="M1 10h22"/><path d="M8 6V4M16 6V4"/></svg>`, title: 'Ж/д контейнер 20 т', value: '10 шт.', desc: 'Стандартный контейнер 20 футов. Загрузка IBC в стандартный контейнер ограничена из-за недостаточной высоты.' },
  ];
  return `
  <div style="margin-bottom:28px;padding:20px 24px;background:var(--green-light-bg);border-left:4px solid var(--green-primary);border-radius:6px">
    <div style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--green-primary);margin-bottom:10px">Сервис доставки Greif</div>
    <p style="font-size:14px;color:var(--text-dark);line-height:1.75;margin:0 0 10px">Greif предлагает своим клиентам услуги по доставке грузов с использованием собственного транспорта или привлекая проверенных логистических операторов. Менеджеры Greif проводят постоянный мониторинг пожеланий клиентов и открыты к обсуждению различных схем доставки.</p>
    <p style="font-size:14px;color:var(--text-dark);line-height:1.75;margin:0">Greif осуществляет организацию доставки еврокубов во все регионы СНГ автомобильным и железнодорожным транспортом.</p>
  </div>

  <div style="margin-bottom:28px">
    <div style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--green-primary);margin-bottom:14px">Вместимость транспортных средств (пустые контейнеры)</div>
    <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:16px">
      ${transport.map(t => `
      <div style="background:#fff;border:1px solid var(--border);border-radius:10px;padding:18px 20px;display:flex;gap:14px;align-items:flex-start;transition:box-shadow 0.2s" onmouseover="this.style.boxShadow='0 4px 16px rgba(51,119,97,0.13)'" onmouseout="this.style.boxShadow='none'">
        <div style="width:42px;height:42px;background:var(--green-light-bg);border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--green-primary)">${t.icon}</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:700;color:var(--text-dark);margin-bottom:4px">${t.title}</div>
          <div style="font-size:20px;font-weight:900;color:var(--green-primary);font-family:'Roboto Condensed',sans-serif;letter-spacing:-0.02em;line-height:1.1;margin-bottom:6px">${t.value}</div>
          <div style="font-size:12px;color:var(--text-muted);line-height:1.55">${t.desc}</div>
        </div>
      </div>`).join('')}
    </div>
    <div style="margin-top:14px;padding:12px 16px;background:#fff8e6;border:1px solid #ffd28a;border-left:3px solid #c65f00;border-radius:4px;font-size:13px;color:#7a4500;line-height:1.6">
      <strong>Штабелирование:</strong> максимальная высота штабелирования IBC в транспортных контейнерах — <strong>2 яруса</strong>. Благодаря кубической форме IBC достигается оптимальное расположение партии тары, что снижает затраты на транспортировку.
    </div>
  </div>

  <div style="margin-bottom:28px">
    <div style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--green-primary);margin-bottom:12px">Факторы выбора схемы загрузки</div>
    <ul style="list-style:none;padding:0;margin:0">
      ${factors.map(f => `<li style="display:flex;gap:10px;padding:9px 0;border-bottom:1px solid var(--border);font-size:14px;color:var(--text-dark)"><span style="color:var(--green-primary);font-weight:700;flex-shrink:0;margin-top:1px">—</span>${f}</li>`).join('')}
    </ul>
  </div>

  <div>
    <div style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--green-primary);margin-bottom:12px">Схема загрузки в фуру</div>
    <div style="border:1px solid var(--border);border-radius:8px;overflow:hidden;background:#fafafa;text-align:center;padding:16px">
      <img src="https://greif.ru/wp-content/uploads/21.png" alt="Схема загрузки IBC в фуру" style="max-width:100%;height:auto;display:inline-block">
    </div>
    <p style="font-size:12px;color:var(--text-muted);margin:8px 0 0;text-align:center">Оптимальная расстановка еврокубов Greif в грузовом автотрейлере</p>
  </div>`;
}

function _ibcLogisticsTab() {
  const services = [
    {
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M7 8h.01M10 8h4"/></svg>`,
      title: 'Автоматическая разгрузка',
      highlight: '150 единиц тары за 30 минут',
      desc: 'Роботизированная система полностью исключает ручные операции. Тара с конвейера сразу попадает на фасовочную линию.',
      badge: 'Безопасность',
    },
    {
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
      title: 'Поставка точно в срок',
      highlight: 'Поставка точно в срок',
      desc: 'Диверсифицированная сеть заводов Greif и система страховки поставок гарантируют отсутствие сбоев при любых обстоятельствах.',
      badge: 'Снижение склада',
    },
    {
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="14" width="20" height="7" rx="1"/><path d="M6 14V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6"/><line x1="6" y1="18" x2="6" y2="18.01"/><line x1="18" y1="18" x2="18" y2="18.01"/></svg>`,
      title: 'Паллетизированная доставка',
      highlight: 'До 264 единиц в партии',
      desc: 'Оптимальное размещение и устойчивость при транспортировке. Снижение рисков повреждений и возможность полуавтоматической разгрузки.',
      badge: 'Эргономика',
    },
    {
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
      title: 'Сервис Greif Express',
      highlight: '48 ед. тары · 6 контейнеров/фура',
      desc: 'Контейнеры Greif Express остаются на площадке клиента. Хранение тары прямо в контейнере — не нужны склад и дополнительный персонал.',
      badge: 'Оптимизация',
    },
    {
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
      title: 'Комбинированные партии',
      highlight: 'Принцип «одного окна»',
      desc: 'Стальные и пластиковые бочки, IBC-контейнеры — в одной смешанной партии. Оптимизация расходов на приобретение, доставку и хранение.',
      badge: 'Гибкость',
    },
    {
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
      title: 'Фуры повышенной вместимости',
      highlight: 'Снижение затрат на единицу тары',
      desc: 'Использование большегрузного транспорта уменьшает долю логистических расходов в структуре себестоимости фасованной продукции.',
      badge: 'Экономия',
    },
  ];

  return `<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:20px;margin-bottom:8px">
    ${services.map(s => `
    <div style="background:#fff;border:1px solid var(--border);border-radius:10px;padding:22px 24px;display:flex;flex-direction:column;gap:12px;transition:box-shadow 0.2s" onmouseover="this.style.boxShadow='0 4px 16px rgba(51,119,97,0.13)'" onmouseout="this.style.boxShadow='none'">
      <div style="display:flex;align-items:flex-start;gap:14px">
        <div style="width:44px;height:44px;background:var(--green-light-bg);border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--green-primary)">${s.icon}</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:700;color:var(--text-dark);line-height:1.3;margin-bottom:4px">${s.title}</div>
          <div style="font-size:12px;font-weight:700;color:var(--green-primary);font-family:'Roboto Condensed',sans-serif;letter-spacing:0.04em">${s.highlight}</div>
        </div>
        <span style="flex-shrink:0;font-family:'Roboto Condensed',sans-serif;font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;padding:3px 8px;background:var(--green-light-bg);color:var(--green-primary);border-radius:4px;white-space:nowrap">${s.badge}</span>
      </div>
      <div style="font-size:13px;color:var(--text-muted);line-height:1.65;border-top:1px solid var(--border);padding-top:12px">${s.desc}</div>
    </div>`).join('')}
  </div>
  <div style="margin-top:4px;padding:14px 18px;background:var(--green-light-bg);border-left:3px solid var(--green-primary);border-radius:4px;font-size:13px;color:var(--text-dark);line-height:1.6">
    Greif стремится к долгосрочному партнёрству с каждым клиентом — мы не просто поставляем тару, но участвуем в оптимизации всей цепи поставок от нашего завода до вашей производственной площадки.
  </div>`;
}

function _ibcInstructionTab() {
  return `<div style="max-width:680px">
    <p style="font-size:15px;color:var(--text-dark);line-height:1.8;margin:0 0 28px">
      Здесь Вы можете ознакомиться с инструкцией по эксплуатации еврокубов, разработанной техническими специалистами Greif. Мы обладаем многолетней экспертизой в работе с IBC и будем рады оказать содействие совершенствованию производственных операций Вашей компании.
    </p>
    <a href="https://www.greif.ru/wp-content/uploads/Instruktsiya-po-ekspluatatsii-2023-kuby.pdf" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:10px;padding:14px 24px;background:var(--green-primary);color:#fff;border-radius:8px;text-decoration:none;font-family:'Roboto Condensed',sans-serif;font-size:13px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;transition:background 0.2s" onmouseover="this.style.background='#317965'" onmouseout="this.style.background='var(--green-primary)'">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
      Открыть инструкцию по эксплуатации (PDF)
    </a>
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
  </div>`;
}


function _ibcClosureTab() {
  return `<div style="max-width:680px">
    <p style="font-size:15px;color:var(--text-dark);line-height:1.8;margin:0 0 20px">
      Для герметичной и надежной укупорки наших еврокубов мы используем решения Tri-Sure — мирового лидера в области промышленных затворов и комплектующих. Опираясь на опыт компании, насчитывающий более века (с 1919 года), мы гарантируем полную сохранность вашей продукции при транспортировке и хранении.
    </p>
    <a href="http://tri-sure.com/" target="_blank" rel="noopener"
       style="display:inline-flex;align-items:center;gap:8px;font-size:14px;font-weight:700;color:var(--green-primary);text-decoration:none"
       onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      Узнайте больше о технологиях Tri-Sure: tri-sure.com
    </a>
  </div>`;
}

function _barrelClosureTab() {
  return `<div style="max-width:680px">
    <p style="font-size:15px;color:var(--text-dark);line-height:1.8;margin:0 0 20px">
      Для герметичной и надежной укупорки стальных бочек мы используем решения Tri-Sure — мирового лидера в области промышленных затворов и комплектующих. Опираясь на опыт компании, насчитывающий более века (с 1919 года), мы гарантируем полную сохранность вашей продукции при транспортировке и хранении.
    </p>
    <a href="http://tri-sure.com/" target="_blank" rel="noopener"
       style="display:inline-flex;align-items:center;gap:8px;font-size:14px;font-weight:700;color:var(--green-primary);text-decoration:none"
       onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      Узнайте больше о технологиях Tri-Sure: tri-sure.com
    </a>
  </div>`;
}

function _managerCard(initials, name, phone, phoneFormatted, email) {
  return `<div class="manager-card">
    <div class="manager-card-grid">
      <div class="manager-profile-col">
        <div class="manager-col-label">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          Ваш менеджер
        </div>
        <div class="manager-profile-row">
          <div class="manager-avatar">${initials}</div>
          <div class="manager-name">${name}</div>
        </div>
        <div class="manager-contacts">
          <a href="tel:${phone}">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.62 4.4 2 2 0 0 1 3.59 2.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17z"/></svg>
            <span>${phoneFormatted}</span>
          </a>
          <a href="mailto:${email}">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <span>${email}</span>
          </a>
        </div>
      </div>
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

function _ibcReboManagerCard() {
  return `<div class="manager-card">
    <div class="manager-card-grid">
      <div class="manager-profile-col">
        <div class="manager-col-label">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          Ваш менеджер
        </div>
        <div class="manager-profile-row">
          <div class="manager-avatar">РК</div>
          <div class="manager-name">Рафаэль Курбанов</div>
        </div>
        <div class="manager-contacts">
          <a href="tel:+79872922727">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.62 4.4 2 2 0 0 1 3.59 2.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17z"/></svg>
            <span>+7 (987) 292-27-27</span>
          </a>
          <a href="mailto:Rafael.Kurbanov@greif.com">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <span>Rafael.Kurbanov@greif.com</span>
          </a>
        </div>
      </div>
    </div>
  </div>`;
}

function _ibcSideNav(activeId) {
  const items = [
    { id:'ibcWooden',   label:'На деревянном поддоне',      img:'http://www.greif.ru/wp-content/uploads/Bez-imeni-1.png' },
    { id:'ibcHybrid',   label:'На гибридном поддоне',       img:'http://www.greif.ru/wp-content/uploads/gibrid.png' },
    { id:'ibcPlastic',  label:'На пластиковом поддоне',     img:'http://www.greif.ru/wp-content/uploads/evrokub-1.png' },
    { id:'ibcElectron', label:'Антистатический «Электрон»', img:'http://www.greif.ru/wp-content/uploads/electron.png' },
    { id:'ibcBlack',    label:'GCube «Чёрный»',             img:'http://www.greif.ru/wp-content/uploads/blackqube.png' },
    { id:'ibcRebo',     label:'Восстановленные REBO',       img:'http://www.greif.ru/wp-content/uploads/rebo.png' },
  ];
  return `<div style="background:#fff;border:1px solid var(--border);border-radius:14px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06)">
    <div style="padding:13px 18px;background:var(--green-primary);color:#fff;font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase">Еврокубы IBC</div>
    <div>${items.map(item => {
      const active = item.id === activeId;
      return `<a href="#" onclick="navigate('${item.id}');return false;" style="display:block;padding:11px 18px;text-decoration:none;border-left:3px solid ${active ? 'var(--green-primary)' : 'transparent'};background:${active ? 'var(--green-light-bg)' : '#fff'};transition:background 0.15s">
        <span style="font-size:13px;line-height:1.35;font-weight:${active ? '600' : '400'};color:${active ? 'var(--green-primary)' : 'var(--text-dark)'}">${item.label}</span>
      </a>`;
    }).join('')}</div>
  </div>`;
}

function _ibcStdProductPage(title, subtitle, weight, pfx, img, id) {
  const [wVal] = weight.split(' ');
  const imgSrc = img || 'http://www.greif.ru/wp-content/uploads/a30dcd01-81b5-4b2f-8da8-e76b82b62817.png';
  return `
<div class="page">
  <div class="page-hero">
    <div class="page-hero-inner">
      <a href="#" onclick="navigate('ibc');return false;" style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.65);margin-bottom:10px;display:inline-flex;align-items:center;gap:6px;text-decoration:none;opacity:0.9">← Еврокубы IBC</a>
      <h1 style="font-family:'Roboto',sans-serif;font-size:36px;font-weight:900;color:#fff;letter-spacing:-0.02em">${title}</h1>
      <p style="font-size:14px;color:rgba(255,255,255,0.55)">${subtitle}</p>
    </div>
  </div>
  <div class="product-detail-page" style="display:flex;gap:32px;align-items:flex-start;">
    <div style="width:210px;flex-shrink:0;position:sticky;top:88px;">${_ibcSideNav(id)}</div>
    <div style="flex:1;min-width:0;">
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
          <button class="tab-btn" data-tab="${pfx}-logistics">ЛОГИСТИКА</button>
          <button class="tab-btn" data-tab="${pfx}-delivery">ДОСТАВКА</button>
          <button class="tab-btn" data-tab="${pfx}-instruction">ИНСТРУКЦИЯ</button>
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
        <div class="tab-content" id="tab-${pfx}-logistics">
          ${_ibcLogisticsTab()}
        </div>
        <div class="tab-content" id="tab-${pfx}-delivery">
          ${_ibcDeliveryTab()}
        </div>
        <div class="tab-content" id="tab-${pfx}-instruction">
          ${_ibcInstructionTab()}
        </div>
      </div>
      ${_ibcManagerCard()}
    </div>
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
          <video autoplay muted loop playsinline disablepictureinpicture disableremoteplayback>
            <source src="assets/hero.webm" type="video/webm">
          </video>
        </div>
        <div class="hero-content">
          <div class="hero-eyebrow">Ведущий производитель в России</div>
          <h1 class="hero-headline">Промышленная<br><em>упаковка</em> для<br>вашего бизнеса</h1>
          <p class="hero-sub">Стальные бочки, еврокубы, канистры, конические бочки и кловертейнеры.</p>
          <div class="hero-actions">
            <button class="btn-hero-primary" onclick="navigate('products')">Смотреть продукцию</button>
            <button class="btn-hero-secondary" onclick="openPopup('popup-request')">Сделать запрос</button>
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
          <div class="section-title">Надёжность. Опыт. Качество.</div>
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
              <div class="feature-more"><button class="product-link" onclick="navigate('products')">ПОДРОБНЕЕ →</button></div>
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
              <div class="feature-more"><button class="product-link" onclick="navigate('ibcRebo')">ПОДРОБНЕЕ →</button></div>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="square"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              </div>
              <div class="feature-title">Региональная сеть</div>
              <div class="feature-desc">9 представительств по всей России обеспечивают доставку точно в срок и оперативную поддержку клиентов.</div>
              <div style="display:flex;flex-wrap:wrap;gap:5px;margin-top:14px">
                ${['Москва','Калуга','Вологда','Волгоград','Екатеринбург','Казань','Омск','Пермь','Рязань'].map(c =>
                  `<span style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.05em;padding:3px 8px;background:#f0f8f5;color:#317965;border:1px solid #c8e6dc">${c}</span>`
                ).join('')}
              </div>
              <div class="feature-list" style="margin-top:12px">
                <div class="feature-list-item"><div class="feature-bullet"></div>Доставка точно в срок</div>
                <div class="feature-list-item"><div class="feature-bullet"></div>Паллетизированная доставка</div>
                <div class="feature-list-item"><div class="feature-bullet"></div>Автоматическая разгрузка</div>
              </div>
              <div class="feature-more"><button class="product-link" onclick="navigate('contact')">ПОДРОБНЕЕ →</button></div>
            </div>
          </div>
        </div>
      </section>
    </div>`,

  products: () => `
    <div class="page">
      <div class="page-hero">
        <div class="page-hero-inner">
          <div style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.65);margin-bottom:10px">Продукция</div>
          <h1 style="font-family:'Roboto',sans-serif;font-size:36px;font-weight:900;color:#fff;letter-spacing:-0.02em">Промышленная упаковка Грайф</h1>
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
      <div style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.65);margin-bottom:10px">О компании</div>
      <h1 id="about-page-title" style="font-family:'Roboto',sans-serif;font-size:36px;font-weight:900;color:#fff;letter-spacing:-0.02em">Грайф в России</h1>
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
      <a href="#" onclick="navigate('products');return false;" style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.65);margin-bottom:10px;display:inline-flex;align-items:center;gap:6px;text-decoration:none;opacity:0.9">← Продукция</a>
      <h1 style="font-family:'Roboto',sans-serif;font-size:36px;font-weight:900;color:#fff;letter-spacing:-0.02em">Стальные бочки</h1>
      <p style="font-size:14px;color:rgba(255,255,255,0.55)">Выберите тип бочки под ваши задачи</p>
    </div>
  </div>
  <div class="ibc-types-grid" style="grid-template-columns:repeat(2,1fr);max-width:800px">
    ${[
      { id:'steelDrum1a1', title:'Бочка с несъёмным верхом', vol:'216', type:'1А1', img:'http://www.greif.ru/wp-content/uploads/bochkabezfona.png', desc:'Закатная конструкция Spiralon®. Укупорка горловинами Tab-Seal® 2&quot; и ¾&quot; Tri-Sure®. Для жидких и вязких продуктов.' },
      { id:'steelDrum1a2', title:'Бочка со съёмным верхом',  vol:'210', type:'1А2', img:'http://www.greif.ru/wp-content/uploads/1a2.png',               desc:'Съёмная крышка с обжимным кольцом и рычажным замком. Для сыпучих, твёрдых и вязких продуктов.' },
    ].map(c => `
      <div class="ibc-type-card" onclick="navigate('${c.id}')">
        <div class="ibc-type-card-img">
          <img src="${c.img}" alt="${c.title}">
        </div>
        <div class="ibc-type-card-body">
          <div class="ibc-type-card-title">${c.title}</div>
          <div class="ibc-type-card-spec">Объём: ${c.vol} л · Тип ${c.type}</div>
          <div class="ibc-type-card-spec">${c.desc}</div>
          <div class="ibc-type-card-badges"><span class="ibc-badge ibc-badge-un">ООН</span><span class="ibc-badge ibc-badge-std">ГОСТ 13950</span></div>
        </div>
        <div class="ibc-type-card-footer">
          <button class="product-link" onclick="event.stopPropagation();navigate('${c.id}')">ПОДРОБНЕЕ →</button>
        </div>
      </div>`).join('')}
  </div>
</div>`,

  steelDrum1a1: () => `
<div class="page">
  <div class="page-hero">
    <div class="page-hero-inner">
      <a href="#" onclick="navigate('steelDrums');return false;" style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.65);margin-bottom:10px;display:inline-flex;align-items:center;gap:6px;text-decoration:none;opacity:0.9">← Стальные бочки</a>
      <h1 style="font-family:'Roboto',sans-serif;font-size:36px;font-weight:900;color:#fff;letter-spacing:-0.02em">Бочка с несъёмным верхом</h1>
      <p style="font-size:14px;color:rgba(255,255,255,0.55)">Тип 1А1 · 216 л · Закатная конструкция Spiralon®</p>
    </div>
  </div>
  <div class="product-detail-page">
    <div class="product-detail-grid">
      <div class="product-image-col">
        <img src="http://www.greif.ru/wp-content/uploads/bochkabezfona.png" alt="Стальная бочка с несъёмным верхом 1А1" style="max-width:100%;max-height:420px;object-fit:contain;">
      </div>
      <div class="product-info-col">
        <p class="product-description">Бочка с несъёмным верхом — ключевой продукт Greif. Соответствует требованиям ГОСТ 13950, международных стандартов ISO 3574 и EN10130.</p>
        <div class="spec-cards">
          <div class="spec-card"><div class="spec-card-value">216<span class="spec-card-unit"> л</span></div><div class="spec-card-label">Тип 1А1</div><div class="spec-card-desc">Несъёмный верх · Tab-Seal® 2&quot; и ¾&quot; Tri-Sure®</div></div>
          <div class="spec-card"><div class="spec-card-value" style="font-size:20px">08ПС</div><div class="spec-card-label">Материал</div><div class="spec-card-desc">Холоднокатаная сталь · ISO 3574 / EN10130</div></div>
          <div class="spec-card"><div class="spec-card-value" style="font-size:20px">7×</div><div class="spec-card-label">Spiralon®</div><div class="spec-card-desc">Семислойный закатной шов · с герметиком</div></div>
        </div>
        <button class="btn-consult" onclick="openPopup('popup-request')">СДЕЛАТЬ ЗАПРОС</button>
      </div>
    </div>
    <div class="product-tabs">
      <div class="tab-headers">
        <button class="tab-btn active" data-tab="desc">ОПИСАНИЕ</button>
        <button class="tab-btn" data-tab="specs">СПЕЦИФИКАЦИИ</button>
        <button class="tab-btn" data-tab="coatings">ВНЕШНИЕ ПОКРЫТИЯ</button>
        <button class="tab-btn" data-tab="closure">УКУПОРКА</button>
      </div>
      <div class="tab-content active" id="tab-desc">
        <p>Стальная бочка с несъёмным верхом типа 1А1 — наш ключевой продукт. Используется для транспортировки жидких и вязких продуктов и веществ, не оказывающих активного воздействия на сталь. Основные сферы применения — химическая, нефтехимическая, металлургическая и лакокрасочная отрасли. Все бочки проходят многочисленные испытания, в том числе уникальную проверку на герметичность на гелиевом тестере.</p>
        <p>Производства расположены в Вологде, Волгограде, Перми, Екатеринбурге, Омске и Калуге. В 2018 году запущена новая высокопроизводительная линия мощностью 2 миллиона бочек в год в Индустриальном парке Ворсино (Калужская область).</p>
        <p>Стандартный объём бочки — 216 л. Закатной шов типа Spiralon® является семислойным и для увеличения прочности в обязательном порядке фиксируется герметиком. Укупорка осуществляется горловинами и крышками-пломбами Tab-Seal® 2&quot; и ¾&quot; Tri-Sure®.</p>
      </div>
      <div class="tab-content" id="tab-specs">
        <h4>Цилиндрические стальные бочки</h4>
        <p><strong>Материалы:</strong> холоднокатаная сталь марки 08ПС, соответствующая ГОСТ 13950-91, международным стандартам ISO 3574:2012 или EN10130/EN10131.</p>
        <h4>Бочка с закрытым верхом, тип 1А1</h4>
        <ul>
          <li><strong>Стандартный объем:</strong> 216 л</li>
          <li><strong>Укупорка:</strong> горловины и крышки-пломбы Tab-Seal® 2" и ¾" Tri-Sure®</li>
        </ul>
        <h5 style="margin:24px 0 12px;font-size:13px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:var(--text-muted)">Стандартные спецификации (бочки типа 1А1)</h5>
        <div class="ral-table-wrap" style="overflow-x:auto">
          <table class="ral-table" style="min-width:520px">
            <thead>
              <tr>
                <th colspan="3" style="text-align:center;border-right:1px solid var(--border)">Толщина стали, мм</th>
                <th>Стандартная маркировка ООН</th>
              </tr>
              <tr>
                <th>Крышка</th>
                <th>Корпус</th>
                <th style="border-right:1px solid var(--border)">Днище</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1,2</td><td>1,2</td><td style="border-right:1px solid var(--border)">1,2</td><td>1A1/X1.4/350</td></tr>
              <tr><td>1,2</td><td>1,0</td><td style="border-right:1px solid var(--border)">1,2</td><td>1A1/X1.2/250</td></tr>
              <tr><td>1,0</td><td>1,0</td><td style="border-right:1px solid var(--border)">1,0</td><td>1A1/X1.2/250</td></tr>
              <tr><td>1,0</td><td>0,9</td><td style="border-right:1px solid var(--border)">1,0</td><td>1A1/X1.2/250</td></tr>
              <tr><td>1,0</td><td>0,8</td><td style="border-right:1px solid var(--border)">1,0</td><td>1A1/X1.2/250</td></tr>
              <tr><td>0,9</td><td>0,9</td><td style="border-right:1px solid var(--border)">0,9</td><td>1A1/X1.2/250</td></tr>
              <tr><td>0,9</td><td>0,8</td><td style="border-right:1px solid var(--border)">0,9</td><td>1A1/X1.2/250</td></tr>
              <tr><td>0,8</td><td>0,8</td><td style="border-right:1px solid var(--border)">0,8</td><td>1A1/Y1.4/150</td></tr>
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
              <tr><td>216</td><td>571,5</td><td>585</td><td>585</td><td>878</td><td>4</td><td>280</td><td>444±6</td><td>72</td></tr>
            </tbody>
          </table>
        </div>
        <div style="margin-top:32px;padding:20px 24px;background:var(--green-light-bg);border:1px solid var(--green-primary);border-radius:8px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap">
          <div>
            <div style="font-size:13px;font-weight:700;font-family:'Roboto Condensed',sans-serif;letter-spacing:0.06em;text-transform:uppercase;color:var(--green-primary);margin-bottom:4px">Бочка со съёмным верхом · тип 1А2</div>
            <div style="font-size:14px;color:var(--text-dark)">210 л · обжимное кольцо с рычажным замком · диаметр 610 или 585 мм</div>
          </div>
          <button class="product-link" onclick="navigate('steelDrum1a2')" style="white-space:nowrap;flex-shrink:0">ПОДРОБНЕЕ →</button>
        </div>
      </div>
      <div class="tab-content" id="tab-closure">
        ${_barrelClosureTab()}
      </div>
      <div class="tab-content" id="tab-coatings">
        <p>Мы разрабатываем индивидуальный дизайн внешнего покрытия бочки: многозонные логотипы, брендинг под ваши задачи. Окраска выполняется в стандартные цвета по системе RAL.</p>
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
            <div class="region-combobox-input-wrap" onclick="toggleRegionDropdown('steelRegionCombobox')">
              <svg class="region-combobox-pin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <input
                type="text"
                class="region-combobox-input"
                id="steelRegionInput"
                placeholder="Выберите регион"
                autocomplete="off"
                readonly
                style="pointer-events:none"
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

  steelDrum1a2: () => `
<div class="page">
  <div class="page-hero">
    <div class="page-hero-inner">
      <a href="#" onclick="navigate('steelDrums');return false;" style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.65);margin-bottom:10px;display:inline-flex;align-items:center;gap:6px;text-decoration:none;opacity:0.9">← Стальные бочки</a>
      <h1 style="font-family:'Roboto',sans-serif;font-size:36px;font-weight:900;color:#fff;letter-spacing:-0.02em">Бочка со съёмным верхом</h1>
      <p style="font-size:14px;color:rgba(255,255,255,0.55)">Тип 1А2 · 210 л · Обжимное кольцо с рычажным замком</p>
    </div>
  </div>
  <div class="product-detail-page">
    <div class="product-detail-grid">
      <div class="product-image-col" style="padding:20px;flex-direction:column;align-items:stretch;justify-content:center;">
        <div style="text-align:center;padding:12px 0">
          <img id="drum1a2Img" src="http://www.greif.ru/wp-content/uploads/1a2.png" alt="Бочка 1А2" style="max-width:100%;max-height:360px;object-fit:contain;">
        </div>
        <div style="display:flex;gap:8px;margin-top:12px">
          <button id="drum1a2BtnStd"
            onclick="document.getElementById('drum1a2Img').src='http://www.greif.ru/wp-content/uploads/1a2.png';document.getElementById('drum1a2BtnStd').style.cssText='flex:1;padding:9px 12px;font-size:12px;font-weight:700;font-family:Roboto Condensed,sans-serif;letter-spacing:0.05em;border:2px solid var(--green-primary);background:var(--green-primary);color:#fff;cursor:pointer;border-radius:4px;transition:all 0.15s';document.getElementById('drum1a2BtnSlim').style.cssText='flex:1;padding:9px 12px;font-size:12px;font-weight:700;font-family:Roboto Condensed,sans-serif;letter-spacing:0.05em;border:2px solid var(--green-primary);background:#fff;color:var(--green-primary);cursor:pointer;border-radius:4px;transition:all 0.15s'"
            style="flex:1;padding:9px 12px;font-size:12px;font-weight:700;font-family:'Roboto Condensed',sans-serif;letter-spacing:0.05em;border:2px solid var(--green-primary);background:var(--green-primary);color:#fff;cursor:pointer;border-radius:4px;transition:all 0.15s">
            Стандартная
          </button>
          <button id="drum1a2BtnSlim"
            onclick="document.getElementById('drum1a2Img').src='http://www.greif.ru/wp-content/uploads/1a2-kremp-.png';document.getElementById('drum1a2BtnSlim').style.cssText='flex:1;padding:9px 12px;font-size:12px;font-weight:700;font-family:Roboto Condensed,sans-serif;letter-spacing:0.05em;border:2px solid var(--green-primary);background:var(--green-primary);color:#fff;cursor:pointer;border-radius:4px;transition:all 0.15s';document.getElementById('drum1a2BtnStd').style.cssText='flex:1;padding:9px 12px;font-size:12px;font-weight:700;font-family:Roboto Condensed,sans-serif;letter-spacing:0.05em;border:2px solid var(--green-primary);background:#fff;color:var(--green-primary);cursor:pointer;border-radius:4px;transition:all 0.15s'"
            style="flex:1;padding:9px 12px;font-size:12px;font-weight:700;font-family:'Roboto Condensed',sans-serif;letter-spacing:0.05em;border:2px solid var(--green-primary);background:#fff;color:var(--green-primary);cursor:pointer;border-radius:4px;transition:all 0.15s">
            Кремпированная
          </button>
        </div>
      </div>
      <div class="product-info-col">
        <p class="product-description">Стальная бочка со съёмным верхом типа 1А2 для транспортировки и хранения сыпучих, твёрдых и вязких химических веществ. Крышка полностью снимается и надёжно фиксируется обжимным кольцом с рычажным замком.</p>
        <div class="spec-cards">
          <div class="spec-card"><div class="spec-card-value">210<span class="spec-card-unit"> л</span></div><div class="spec-card-label">Тип 1А2</div><div class="spec-card-desc">Съёмный верх · обжимное кольцо с рычажным замком</div></div>
          <div class="spec-card"><div class="spec-card-value" style="font-size:20px">Д 610</div><div class="spec-card-label">Стандартная</div><div class="spec-card-desc">Диаметр по запорному кольцу · стандартное исполнение</div></div>
          <div class="spec-card"><div class="spec-card-value" style="font-size:20px">Д 585</div><div class="spec-card-label">Кремпированная</div><div class="spec-card-desc">Наружный диаметр · оптимально для ISO-контейнеров</div></div>
        </div>
        <button class="btn-consult" onclick="openPopup('popup-request')">СДЕЛАТЬ ЗАПРОС</button>
      </div>
    </div>
    <div class="product-tabs">
      <div class="tab-headers">
        <button class="tab-btn active" data-tab="1a2-desc">ОПИСАНИЕ</button>
        <button class="tab-btn" data-tab="1a2-specs">СПЕЦИФИКАЦИИ</button>
        <button class="tab-btn" data-tab="1a2-coatings">ВНЕШНИЕ ПОКРЫТИЯ</button>
      </div>
      <div class="tab-content active" id="tab-1a2-desc">
        <p>Бочка стальная со съёмным верхом типа 1А2 вместимостью 210 л изготовлена в соответствии с требованиями ГОСТ 13950. Крышка полностью снимается, обеспечивая удобный доступ к содержимому, и надёжно фиксируется обжимным кольцом с рычажным замком и уплотнителем.</p>
        <h4>Исполнения по диаметру</h4>
        <p><strong>Стандартная</strong> (Д 610 мм) — стандартный диаметр по запорному кольцу. Выпускается с тремя вариантами рёбер жёсткости корпуса: «Спиралтейнер», «Спиралтейнер» с дополнительной корругацией, два ребра жёсткости.</p>
        <p><strong>Кремпированная</strong> (Д ≤ 585 мм) — зауженная горловина обеспечивает максимальный наружный диаметр не более 585 мм. Конструкция оптимально подходит для перевозки в стандартных 20- и 40-футовых ISO-контейнерах: благодаря уменьшенному диаметру в ряду по ширине помещается четыре бочки вместо трёх, что обеспечивает максимальную эффективность использования грузового пространства. Выпускается с рёбрами жёсткости: «Спиралтейнер» или «Спиралтейнер» с дополнительной корругацией.</p>
        <h4>Комплектации</h4>
        <div class="ral-table-wrap" style="overflow-x:auto">
          <table class="ral-table">
            <thead>
              <tr><th>Комплектация</th><th>Уплотнительная прокладка</th><th>Запорное кольцо</th><th>Назначение</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Усиленная</strong></td><td>Усиленная</td><td>Усиленное</td><td>Жидкие и вязкие опасные вещества · группы I, II, III (X, Y, Z)</td></tr>
              <tr><td><strong>Стандартная</strong></td><td>Стандартная</td><td>Стандартное</td><td>Твёрдые и сыпучие вещества · группы I, II, III (X, Y, Z)</td></tr>
            </tbody>
          </table>
        </div>
        <h4>Дополнительные опции</h4>
        <ul>
          <li>Внутреннее защитное покрытие (или без него)</li>
          <li>Горловины 2&quot; и ¾&quot; (или без горловин)</li>
        </ul>
      </div>
      <div class="tab-content" id="tab-1a2-specs">
        <p><strong>Материал:</strong> холоднокатаная сталь марки 08ПС, ГОСТ 13950-91, ISO 3574:2012 / EN10130/EN10131.</p>
        <p><strong>Укупорка:</strong> обжимное кольцо с рычажным замком и уплотнителем.</p>
        <h5 style="margin:24px 0 12px;font-size:13px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:var(--text-muted)">Основные параметры</h5>
        <div class="ral-table-wrap" style="overflow-x:auto">
          <table class="ral-table">
            <thead>
              <tr><th>Исполнение</th><th>Объём, л</th><th>Наружный диаметр, мм</th><th>Рёбра жёсткости корпуса</th></tr>
            </thead>
            <tbody>
              <tr><td>Стандартная</td><td>210</td><td>610 (по запорному кольцу)</td><td>Спиралтейнер / Спиралтейнер + корругация / 2 ребра</td></tr>
              <tr><td>Кремпированная</td><td>210</td><td>≤ 585</td><td>Спиралтейнер / Спиралтейнер + корругация</td></tr>
            </tbody>
          </table>
        </div>
        <p style="margin-top:16px;font-size:13px;color:var(--text-muted)">По требованию потребителя бочка может поставляться с внутренним защитным покрытием или без него, с горловинами 2&quot; и ¾&quot; или без горловин.</p>
      </div>
      <div class="tab-content" id="tab-1a2-coatings">
        <p>Мы разрабатываем индивидуальный дизайн внешнего покрытия бочки: многозонные логотипы, брендинг под ваши задачи. Окраска выполняется в стандартные цвета по системе RAL.</p>
        <h4>Каталог цветов RAL</h4>
        <p class="coating-notice"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;margin-top:1px"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> <span><strong>Внимание!</strong> Цвета на экране монитора отличаются от оригинала из-за особенностей цветопередачи.</span></p>
        <h5 style="margin:20px 0 12px;font-size:13px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:var(--text-muted)">Наиболее часто используемые цвета</h5>
        <div class="ral-table-wrap">
          <table class="ral-table">
            <thead><tr><th>№</th><th>Наименование RAL</th><th>Код RAL</th><th>Цвет</th></tr></thead>
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
            <div class="region-combobox-input-wrap" onclick="toggleRegionDropdown('steelRegionCombobox')">
              <svg class="region-combobox-pin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <input type="text" class="region-combobox-input" id="steelRegionInput" placeholder="Выберите регион" autocomplete="off" readonly style="pointer-events:none">
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
      <a href="#" onclick="navigate('products');return false;" style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.65);margin-bottom:10px;display:inline-flex;align-items:center;gap:6px;text-decoration:none;opacity:0.9">← Продукция</a>
      <h1 style="font-family:'Roboto',sans-serif;font-size:36px;font-weight:900;color:#fff;letter-spacing:-0.02em">Еврокубы IBC</h1>
      <p style="font-size:14px;color:rgba(255,255,255,0.55)">Выберите тип контейнера GCube® под ваши задачи</p>
    </div>
  </div>
  <div class="ibc-types-grid">
    ${[
      { id:'ibcWooden',  title:'На деревянном поддоне',        weight:'60,0 ±10,0 кг', img:'http://www.greif.ru/wp-content/uploads/Bez-imeni-1.png', desc:'Классическое исполнение. Деревянный поддон обеспечивает надёжную опору при штабелировании.', badges:[['std','Стандарт'],['un','ООН']] },
      { id:'ibcHybrid',  title:'На гибридном поддоне',         weight:'51,5 ±3,0 кг',  img:'http://www.greif.ru/wp-content/uploads/gibrid.png', desc:'Металлический поддон с пластиковыми рёбрами — лучший баланс прочности и собственного веса.', badges:[['std','Стандарт'],['un','ООН']] },
      { id:'ibcPlastic', title:'На пластиковом поддоне',       weight:'52,5 ±3,0 кг',  img:'http://www.greif.ru/wp-content/uploads/evrokub-1.png', desc:'Цельнопластиковый поддон, устойчивый к коррозии. Оптимален для агрессивных производственных сред.', badges:[['std','Стандарт'],['un','ООН']] },
      { id:'ibcElectron',title:'Антистатический «Электрон»',   weight:'51,5 ±3,0 кг',  img:'http://www.greif.ru/wp-content/uploads/electron.png', desc:'Колба с антистатическим слоем (10⁹ Ом), приварной кран с заземлением и EX-крышкой. Для перевозки ЛВЖ.', badges:[['antistatic','Антистатик'],['un','ООН']] },
      { id:'ibcBlack',   title:'GCube «Чёрный»',               weight:'60,0 ±10,0 кг', img:'http://www.greif.ru/wp-content/uploads/blackqube.png', desc:'На деревянном или гибридном поддоне. Защита от УФ-лучей. Для жидких и жидкотекучих, в т.ч. опасных продуктов.', badges:[['std','Стандарт'],['un','ООН']] },
      { id:'ibcRebo',    title:'Восстановленные REBO',         weight:'—',              img:'http://www.greif.ru/wp-content/uploads/rebo.png', desc:'Новая ПЭНД-бутыль 1000 л на б/у металлической обрешётке. Экономичное решение.', badges:[['rebo','REBO']] },
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
    'http://www.greif.ru/wp-content/uploads/Bez-imeni-1.png',
    'ibcWooden'
  ),

  ibcHybrid: () => _ibcStdProductPage(
    'Еврокубы на гибридном поддоне',
    'Металлический поддон с пластиковыми рёбрами — 1000 л',
    '51,5 ±3,0', 'hyb',
    'http://www.greif.ru/wp-content/uploads/gibrid.png',
    'ibcHybrid'
  ),

  ibcPlastic: () => _ibcStdProductPage(
    'Еврокубы на пластиковом поддоне',
    'Цельнопластиковый поддон, устойчивый к коррозии — 1000 л',
    '52,5 ±3,0', 'pla',
    'http://www.greif.ru/wp-content/uploads/evrokub-1.png',
    'ibcPlastic'
  ),

  ibcElectron: () => `
<div class="page">
  <div class="page-hero">
    <div class="page-hero-inner">
      <a href="#" onclick="navigate('ibc');return false;" style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.65);margin-bottom:10px;display:inline-flex;align-items:center;gap:6px;text-decoration:none;opacity:0.9">← Еврокубы IBC</a>
      <h1 style="font-family:'Roboto',sans-serif;font-size:36px;font-weight:900;color:#fff;letter-spacing:-0.02em">Антистатический «Электрон»</h1>
      <p style="font-size:14px;color:rgba(255,255,255,0.55)">Еврокуб с антистатическим покрытием для перевозки ЛВЖ — 1000 л</p>
    </div>
  </div>
  <div class="product-detail-page" style="display:flex;gap:32px;align-items:flex-start;">
    <div style="width:210px;flex-shrink:0;position:sticky;top:88px;">${_ibcSideNav('ibcElectron')}</div>
    <div style="flex:1;min-width:0;">
      <div class="product-detail-grid">
        <div class="product-image-col">
          <img src="http://www.greif.ru/wp-content/uploads/electron.png" alt="IBC Электрон" style="max-width:100%;max-height:420px;object-fit:contain;">
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
          <button class="tab-btn" data-tab="el-logistics">ЛОГИСТИКА</button>
          <button class="tab-btn" data-tab="el-delivery">ДОСТАВКА</button>
          <button class="tab-btn" data-tab="el-closure">УКУПОРКА</button>
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
        <div class="tab-content" id="tab-el-logistics">
          ${_ibcLogisticsTab()}
        </div>
        <div class="tab-content" id="tab-el-delivery">
          ${_ibcDeliveryTab()}
        </div>
        <div class="tab-content" id="tab-el-closure">
          ${_ibcClosureTab()}
        </div>
      </div>
      ${_ibcManagerCard()}
    </div>
  </div>
</div>`,

  ibcBlack: () => `
<div class="page">
  <div class="page-hero">
    <div class="page-hero-inner">
      <a href="#" onclick="navigate('ibc');return false;" style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.65);margin-bottom:10px;display:inline-flex;align-items:center;gap:6px;text-decoration:none;opacity:0.9">← Еврокубы IBC</a>
      <h1 style="font-family:'Roboto',sans-serif;font-size:36px;font-weight:900;color:#fff;letter-spacing:-0.02em">GCube «Чёрный»</h1>
      <p style="font-size:14px;color:rgba(255,255,255,0.55)">На деревянном или гибридном поддоне · Защита от УФ-лучей · 1000 л</p>
    </div>
  </div>
  <div class="product-detail-page" style="display:flex;gap:32px;align-items:flex-start;">
    <div style="width:210px;flex-shrink:0;position:sticky;top:88px;">${_ibcSideNav('ibcBlack')}</div>
    <div style="flex:1;min-width:0;">
      <div class="product-detail-grid">
        <div class="product-image-col">
          <img src="http://www.greif.ru/wp-content/uploads/blackqube.png" alt="GCube Чёрный" style="max-width:100%;max-height:420px;object-fit:contain;">
        </div>
        <div class="product-info-col">
          <div class="spec-cards" style="grid-template-columns:repeat(2,1fr)">
            <div class="spec-card"><div class="spec-card-value">1000<span class="spec-card-unit"> л</span></div><div class="spec-card-label">Объём</div><div class="spec-card-desc">Номинальный · 1055 л до горловины</div></div>
            <div class="spec-card"><div class="spec-card-value" style="font-size:15px;line-height:1.25">1200×1000×1165</div><div class="spec-card-label">Габариты, мм</div><div class="spec-card-desc">Д × Ш × В · допуск ±10 мм</div></div>
            <div class="spec-card"><div class="spec-card-value">60,0<span class="spec-card-unit"> кг</span></div><div class="spec-card-label">Вес</div><div class="spec-card-desc">±10,0 кг · деревянный поддон</div></div>
            <div class="spec-card"><div class="spec-card-value" style="font-size:16px">ПЭНД</div><div class="spec-card-label">Материал</div><div class="spec-card-desc">Чёрный полиэтилен высокой плотности</div></div>
          </div>
          <button class="btn-consult" onclick="openPopup('popup-request')">СДЕЛАТЬ ЗАПРОС</button>
        </div>
      </div>
      <div class="product-tabs">
        <div class="tab-headers">
          <button class="tab-btn active" data-tab="black-desc">ОПИСАНИЕ</button>
          <button class="tab-btn" data-tab="black-comp">КОМПЛЕКТАЦИЯ</button>
          <button class="tab-btn" data-tab="black-std">СТАНДАРТ</button>
          <button class="tab-btn" data-tab="black-logistics">ЛОГИСТИКА</button>
          <button class="tab-btn" data-tab="black-delivery">ДОСТАВКА</button>
          <button class="tab-btn" data-tab="black-instruction">ИНСТРУКЦИЯ</button>
        </div>
        <div class="tab-content active" id="tab-black-desc">
          <p style="font-size:14px;color:var(--text-dark);line-height:1.8;margin:0 0 16px">
            GCube «Чёрный» — еврокуб на деревянном или гибридном поддоне с колбой из чёрного полиэтилена высокой плотности (ПЭНД). Чёрный цвет обеспечивает надёжную защиту содержимого от ультрафиолетового излучения, что особенно важно при хранении светочувствительных продуктов на открытых площадках.
          </p>
          <p style="font-size:14px;color:var(--text-dark);line-height:1.8;margin:0 0 20px">
            Контейнер предназначен для перевозки и хранения жидких и жидкотекучих продуктов, в том числе относящихся к классу опасных грузов. Доступен в исполнении Стандарт и ООН.
          </p>
          <div style="background:var(--green-light-bg);border:1px solid var(--border);border-left:3px solid var(--green-primary);padding:14px 18px;font-size:13px;color:var(--text-dark);line-height:1.7;border-radius:4px;margin-bottom:20px">
            <strong>Защита от УФ:</strong> чёрный пигмент в составе ПЭНД эффективно поглощает ультрафиолетовое излучение, продлевая срок службы колбы и сохраняя целостность фасуемого продукта.
          </div>
          <h4 style="font-size:14px;font-weight:700;color:var(--text-dark);margin:24px 0 12px">Технические характеристики</h4>
          ${_ibcTechTable('60,0 ±10,0 кг')}
        </div>
        <div class="tab-content" id="tab-black-comp">
          <h4 style="font-size:14px;font-weight:700;color:var(--text-dark);margin:0 0 16px">Комплектация</h4>
          <table style="width:100%;border-collapse:collapse;font-size:14px"><tbody>${[
            ['Исполнение', 'Куб Стандарт или ООН'],
            ['Колба', 'Чёрный ПЭНД, 1000 л, с градуировочной линейкой (13,5 кг)'],
            ['Заливная горловина', '150 мм и 225 мм'],
            ['Кран', 'Приварной или прикручиваемый «Бабочка» 2" и 3"'],
            ['Крышка', 'Резьбовая глухая и с дыхательным клапаном'],
            ['Обрешётка', 'Из гальванизированной стали'],
            ['Поддон', 'Деревянный или гибридный'],
            ['Табличка', 'Металлическая (малая, средняя, большая)'],
          ].map(([k,v]) => `<tr style="border-bottom:1px solid var(--border)">
            <td style="padding:10px 0;color:var(--text-muted);width:40%">${k}</td>
            <td style="padding:10px 0;color:var(--text-dark);font-weight:500">${v}</td>
          </tr>`).join('')}</tbody></table>
        </div>
        <div class="tab-content" id="tab-black-std">
          ${_ibcStdTab()}
        </div>
        <div class="tab-content" id="tab-black-logistics">
          ${_ibcLogisticsTab()}
        </div>
        <div class="tab-content" id="tab-black-delivery">
          ${_ibcDeliveryTab()}
        </div>
        <div class="tab-content" id="tab-black-instruction">
          ${_ibcInstructionTab()}
        </div>
      </div>
      ${_ibcManagerCard()}
    </div>
  </div>
</div>`,

  ibcRebo: () => `
<div class="page">
  <div class="page-hero">
    <div class="page-hero-inner">
      <a href="#" onclick="navigate('ibc');return false;" style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.65);margin-bottom:10px;display:inline-flex;align-items:center;gap:6px;text-decoration:none;opacity:0.9">← Еврокубы IBC</a>
      <h1 style="font-family:'Roboto',sans-serif;font-size:36px;font-weight:900;color:#fff;letter-spacing:-0.02em">Восстановленные REBO</h1>
      <p style="font-size:14px;color:rgba(255,255,255,0.55)">Новая ПЭНД-бутыль на б/у металлической обрешётке — 1000 л</p>
    </div>
  </div>
  <div class="product-detail-page" style="display:flex;gap:32px;align-items:flex-start;">
    <div style="width:210px;flex-shrink:0;position:sticky;top:88px;">${_ibcSideNav('ibcRebo')}</div>
    <div style="flex:1;min-width:0;">
      <div class="product-detail-grid">
        <div>
          <div class="product-image-col">
            <img src="http://www.greif.ru/wp-content/uploads/rebo.png" alt="REBO IBC" style="max-width:100%;max-height:420px;object-fit:contain;">
          </div>
          <button class="btn-outline-green" onclick="navigateAboutSection('sustainability')" style="display:flex;align-items:center;justify-content:center;gap:8px;margin-top:16px;width:100%">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
            Устойчивое развитие
          </button>
        </div>
        <div class="product-info-col">
          <div class="spec-cards" style="grid-template-columns:repeat(2,1fr)">
            <div class="spec-card"><div class="spec-card-value">1000<span class="spec-card-unit"> л</span></div><div class="spec-card-label">Объём</div><div class="spec-card-desc">Новая ПЭНД-бутыль</div></div>
            <div class="spec-card"><div class="spec-card-value" style="font-size:15px;line-height:1.25">1200×1000×1165</div><div class="spec-card-label">Габариты, мм</div><div class="spec-card-desc">Д × Ш × В · допуск ±10 мм</div></div>
            <div class="spec-card"><div class="spec-card-value" style="font-size:13px;line-height:1.3">Б/у обрешётка</div><div class="spec-card-label">Каркас</div><div class="spec-card-desc">Гальванизированная сталь</div></div>
          </div>
          <button class="btn-consult" onclick="openPopup('popup-request')">СДЕЛАТЬ ЗАПРОС</button>
        </div>
      </div>
      <div class="product-tabs">
        <div class="tab-headers">
          <button class="tab-btn active" data-tab="rebo-buy">ПОКУПАЕМ Б/У</button>
          <button class="tab-btn" data-tab="rebo-desc">ОПИСАНИЕ</button>
          <button class="tab-btn" data-tab="rebo-comp">СОСТАВ</button>
          <button class="tab-btn" data-tab="rebo-std">СТАНДАРТ</button>
          <button class="tab-btn" data-tab="rebo-logistics">ЛОГИСТИКА</button>
          <button class="tab-btn" data-tab="rebo-delivery">ДОСТАВКА</button>
          <button class="tab-btn" data-tab="rebo-closure">УКУПОРКА</button>
        </div>
      <div class="tab-content" id="tab-rebo-desc">
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
      <div class="tab-content" id="tab-rebo-logistics">
        ${_ibcLogisticsTab()}
      </div>
      <div class="tab-content" id="tab-rebo-delivery">
        ${_ibcDeliveryTab()}
      </div>
      <div class="tab-content" id="tab-rebo-closure">
        ${_ibcClosureTab()}
      </div>
      <div class="tab-content active" id="tab-rebo-buy">
        <p style="font-size:14px;color:var(--text-dark);line-height:1.8;margin:0 0 20px">
          Компания Greif предоставляет профессиональный сервис по восстановлению бывших в употреблении еврокубов. Если у Вас накопились пустые контейнеры, мы готовы оперативно их вывезти с Вашей площадки. Мы готовы выкупить у Вас загрязненную тару, а также предложить услуги по промывке контейнеров, замене колбы, ремонту обрешетки и т.д. Каждый сотрудник компании Грайф делает всё возможное для того, чтобы оптимизировать Ваши расходы на промышленную упаковку и продлить её жизненный цикл.
        </p>
        <div style="margin-bottom:28px;border-radius:8px;overflow:hidden;border:1px solid var(--border);max-width:480px">
          <img src="https://www.greif.ru/wp-content/uploads/buy_eurobox.jpg" alt="Б/у еврокубы" style="width:100%;display:block;object-fit:contain;max-height:200px">
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:28px">
          <div style="background:var(--green-light-bg);border:1px solid var(--border);border-top:3px solid var(--green-primary);padding:22px 26px">
            <div style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:var(--green-primary);margin-bottom:14px">Преимущества работы с Грайф</div>
            <ul style="list-style:none;padding:0;margin:0">
              ${['Надежный партнер в сфере промышленной упаковки','Индивидуальный подход к формированию цены','Возможность выкупить весь объём','Покупка обрешеток без колбы','Предложение на условиях самовывоза','Работа на всей территории РФ','Минимизация экологических рисков'].map(t =>
                `<li style="display:flex;gap:10px;align-items:flex-start;padding:6px 0;border-bottom:1px solid var(--border);font-size:14px;color:var(--text-dark)"><span style="color:var(--green-primary);font-weight:700;flex-shrink:0">—</span>${t}</li>`
              ).join('')}
            </ul>
          </div>
          <div style="background:var(--green-light-bg);border:1px solid var(--border);border-top:3px solid var(--green-primary);padding:22px 26px">
            <div style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:var(--green-primary);margin-bottom:14px">Общие требования к еврокубам</div>
            <ul style="list-style:none;padding:0;margin:0">
              ${['Количество — кратно 52 шт.','Колба, поддон и обрешетка без значительных механических повреждений','Остатки продукта не более 5 кг','Наличие табличек, крышки и разгрузочного крана'].map(t =>
                `<li style="display:flex;gap:10px;align-items:flex-start;padding:6px 0;border-bottom:1px solid var(--border);font-size:14px;color:var(--text-dark)"><span style="color:var(--green-primary);font-weight:700;flex-shrink:0">—</span>${t}</li>`
              ).join('')}
            </ul>
          </div>
        </div>
        <a href="https://www.greif.ru/wp-content/uploads/Trebovaniya-k-b_u-kubam.pdf" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:10px;background:var(--green-primary);color:#fff;font-family:'Roboto Condensed',sans-serif;font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;padding:13px 24px;text-decoration:none;margin-bottom:32px">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/></svg>
          Требования к б/у еврокубам (PDF)
        </a>
        <p style="font-size:14px;color:var(--text-dark);line-height:1.8;margin:0 0 28px">
          Мы заинтересованы в установлении долгосрочных партнёрских связей с производственными компаниями.
        </p>
        <div style="background:var(--green-light-bg);border:1px solid var(--border);border-top:3px solid var(--green-primary);padding:32px 36px;margin-bottom:28px">
          <div style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:var(--green-primary);margin-bottom:14px">Получить предложение</div>
          <p style="font-size:14px;color:var(--text-dark);line-height:1.7;margin-bottom:24px">Если у Вас накопились использованные еврокубы, просим ответить на следующие вопросы:</p>
          <form id="ibc-rebo-buy-form" onsubmit="submitIBCBuyForm(event)" style="display:flex;flex-direction:column;gap:18px">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:18px">
              <div>
                <label style="display:block;font-size:12px;font-weight:700;font-family:'Roboto Condensed',sans-serif;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-dark);margin-bottom:8px">Ваше имя <span style="color:var(--green-primary)">*</span></label>
                <input type="text" name="name" required placeholder="Иван Иванов" style="width:100%;box-sizing:border-box;border:1px solid var(--border);padding:11px 14px;font-size:14px;font-family:'Roboto',sans-serif;color:var(--text-dark);background:#fff;outline:none" onfocus="this.style.borderColor='var(--green-primary)'" onblur="this.style.borderColor='var(--border)'">
              </div>
              <div>
                <label style="display:block;font-size:12px;font-weight:700;font-family:'Roboto Condensed',sans-serif;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-dark);margin-bottom:8px">Телефон для связи <span style="color:var(--green-primary)">*</span></label>
                <input type="tel" name="phone" required placeholder="+7 (___) ___-__-__" style="width:100%;box-sizing:border-box;border:1px solid var(--border);padding:11px 14px;font-size:14px;font-family:'Roboto',sans-serif;color:var(--text-dark);background:#fff;outline:none" onfocus="this.style.borderColor='var(--green-primary)'" onblur="this.style.borderColor='var(--border)'">
              </div>
            </div>
            <div>
              <label style="display:block;font-size:12px;font-weight:700;font-family:'Roboto Condensed',sans-serif;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-dark);margin-bottom:8px">Ваша почта <span style="color:var(--green-primary)">*</span></label>
              <input type="email" name="email" required placeholder="example@company.ru" style="width:100%;box-sizing:border-box;border:1px solid var(--border);padding:11px 14px;font-size:14px;font-family:'Roboto',sans-serif;color:var(--text-dark);background:#fff;outline:none" onfocus="this.style.borderColor='var(--green-primary)'" onblur="this.style.borderColor='var(--border)'">
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:18px">
              <div>
                <label style="display:block;font-size:12px;font-weight:700;font-family:'Roboto Condensed',sans-serif;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-dark);margin-bottom:8px">Количество еврокубов</label>
                <input type="text" name="quantity" placeholder="Например: 52" style="width:100%;box-sizing:border-box;border:1px solid var(--border);padding:11px 14px;font-size:14px;font-family:'Roboto',sans-serif;color:var(--text-dark);background:#fff;outline:none" onfocus="this.style.borderColor='var(--green-primary)'" onblur="this.style.borderColor='var(--border)'">
              </div>
              <div>
                <label style="display:block;font-size:12px;font-weight:700;font-family:'Roboto Condensed',sans-serif;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-dark);margin-bottom:8px">Регион отгрузки</label>
                <input type="text" name="region" placeholder="Например: Москва и МО" style="width:100%;box-sizing:border-box;border:1px solid var(--border);padding:11px 14px;font-size:14px;font-family:'Roboto',sans-serif;color:var(--text-dark);background:#fff;outline:none" onfocus="this.style.borderColor='var(--green-primary)'" onblur="this.style.borderColor='var(--border)'">
              </div>
            </div>
            <div>
              <label style="display:block;font-size:12px;font-weight:700;font-family:'Roboto Condensed',sans-serif;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-dark);margin-bottom:8px">Фасуемые продукты</label>
              <input type="text" name="products" placeholder="Например: смазочные масла, химия" style="width:100%;box-sizing:border-box;border:1px solid var(--border);padding:11px 14px;font-size:14px;font-family:'Roboto',sans-serif;color:var(--text-dark);background:#fff;outline:none" onfocus="this.style.borderColor='var(--green-primary)'" onblur="this.style.borderColor='var(--border)'">
            </div>
            <div>
              <label style="display:block;font-size:12px;font-weight:700;font-family:'Roboto Condensed',sans-serif;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-dark);margin-bottom:10px">Фото</label>
              <div style="display:flex;flex-direction:column;gap:10px">
                ${[['rebo-photo1','rebo-label1'],['rebo-photo2','rebo-label2'],['rebo-photo3','rebo-label3']].map(([inputId, labelId]) => `
                <label style="display:flex;align-items:center;gap:12px;padding:10px 14px;background:#fff;border:1px solid var(--border);cursor:pointer;transition:border-color 0.15s" onmouseover="this.style.borderColor='var(--green-primary)'" onmouseout="this.style.borderColor='var(--border)'">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;color:var(--green-primary)"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                  <span id="${labelId}" style="font-size:13px;color:var(--text-muted);flex:1">Файл не выбран</span>
                  <input type="file" id="${inputId}" name="${inputId}" accept=".jpg,.jpeg,.pdf,.png" style="display:none" onchange="updateFileLabel(this,'${labelId}')">
                </label>`).join('')}
              </div>
              <p style="font-size:12px;color:var(--text-muted);margin:8px 0 0;line-height:1.6">Вы можете загрузить до трёх фото в формате JPG, JPEG, PDF, PNG. Размер каждого фото не более 5 МБ.</p>
            </div>
            <div>
              <button type="submit" style="display:inline-flex;align-items:center;gap:10px;background:var(--green-primary);color:#fff;font-family:'Roboto Condensed',sans-serif;font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;padding:15px 32px;border:none;cursor:pointer">Отправить заявку →</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    ${_ibcReboManagerCard()}
    </div>
  </div>
</div>`,

  ibcBuy: () => `
<div class="page">
  <div class="page-hero">
    <div class="page-hero-inner">
      <div style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.65);margin-bottom:10px">Сервисы</div>
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
          <div><label style="display:block;font-size:12px;font-weight:700;font-family:'Roboto Condensed',sans-serif;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-dark);margin-bottom:8px">Фасуемые продукты</label><input type="text" name="products" placeholder="Например: смазочные масла, химия" style="width:100%;box-sizing:border-box;border:1px solid var(--border);padding:11px 14px;font-size:14px;font-family:'Roboto',sans-serif;color:var(--text-dark);background:#fff;outline:none" onfocus="this.style.borderColor='var(--green-primary)'" onblur="this.style.borderColor='var(--border)'"></div>
          <div>
            <label style="display:block;font-size:12px;font-weight:700;font-family:'Roboto Condensed',sans-serif;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-dark);margin-bottom:10px">Фото</label>
            <div style="display:flex;flex-direction:column;gap:10px">
              ${[['buy-photo1','buy-label1'],['buy-photo2','buy-label2'],['buy-photo3','buy-label3']].map(([inputId, labelId]) => `
              <label style="display:flex;align-items:center;gap:12px;padding:10px 14px;background:#fff;border:1px solid var(--border);cursor:pointer;transition:border-color 0.15s" onmouseover="this.style.borderColor='var(--green-primary)'" onmouseout="this.style.borderColor='var(--border)'">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;color:var(--green-primary)"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                <span id="${labelId}" style="font-size:13px;color:var(--text-muted);flex:1">Файл не выбран</span>
                <input type="file" id="${inputId}" name="${inputId}" accept=".jpg,.jpeg,.pdf,.png" style="display:none" onchange="updateFileLabel(this,'${labelId}')">
              </label>`).join('')}
            </div>
            <p style="font-size:12px;color:var(--text-muted);margin:8px 0 0;line-height:1.6">Вы можете загрузить до трёх фото в формате JPG, JPEG, PDF, PNG. Размер каждого фото не более 5 МБ.</p>
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
      <a href="#" onclick="navigate('products');return false;" style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.65);margin-bottom:10px;display:inline-flex;align-items:center;gap:6px;text-decoration:none;opacity:0.9">← Продукция</a>
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
        <button class="btn-consult" onclick="openPopup('popup-request')">СДЕЛАТЬ ЗАПРОС</button>
      </div>
    </div>
    <div class="product-tabs">
      <div class="tab-headers">
        <button class="tab-btn active" data-tab="con-desc">ОПИСАНИЕ</button>
        <button class="tab-btn" data-tab="con-specs">СПЕЦИФИКАЦИИ</button>
        <button class="tab-btn" data-tab="con-coating">ВНЕШНИЕ ПОКРЫТИЯ</button>
        <button class="tab-btn" data-tab="con-lining">ВНУТРЕННИЕ ПОКРЫТИЯ</button>
        <button class="tab-btn" data-tab="con-closure">СИСТЕМЫ УКУПОРКИ</button>
      </div>
      <div class="tab-content active" id="tab-con-desc">
        <p>Конические (конусные) бочки выпускаются на заводах компании Greif, расположенных в США, Великобритании, Греции, Италии, Турции, Португалии, Египте и Бразилии. С 2007 года производство конических бочек осуществляется в России — в г. Волгограде.</p>
        <p>Стандартная емкость бочки составляет 217–220 л, она оснащена стальной крышкой с запорным кольцом. По желанию заказчика мы можем надеть мешки на бочку — это упрощает расцепку и делает использование тары более удобным.</p>
      </div>
      <div class="tab-content" id="tab-con-specs">
        <p>При производстве конических бочек Greif используется холоднокатаный стальной прокат марки 08ПС. Технические характеристики стали соответствуют ISO 35373 и ISO 3574 или аналогичным стандартам (EN10130 / EN10131).</p>
        <p>Стандартная коническая бочка со съёмным верхом имеет объём 217–220 л. Она состоит из корпуса, нижнего дна и верхней крышки. Корпус бочки сваривается продольным швом, затем осуществляется присоединение нижнего дна к обечайке пятислойным закатным швом. Конические бочки комплектуются металлической крышкой.</p>
        <h4 style="margin-top:24px;margin-bottom:12px">Размеры конических бочек со съёмным верхом 1А2</h4>
        <div style="overflow-x:auto">
          <table style="width:100%;border-collapse:collapse;font-size:13px;min-width:520px">
            <thead>
              <tr style="background:var(--bg-light,#f5f5f5)">
                <th style="padding:10px 8px;text-align:left;font-weight:600;border-bottom:2px solid var(--border)">Объём, л</th>
                <th style="padding:10px 8px;text-align:left;font-weight:600;border-bottom:2px solid var(--border)">D, мм</th>
                <th style="padding:10px 8px;text-align:left;font-weight:600;border-bottom:2px solid var(--border)">d1, мм</th>
                <th style="padding:10px 8px;text-align:left;font-weight:600;border-bottom:2px solid var(--border)">d2, мм</th>
                <th style="padding:10px 8px;text-align:left;font-weight:600;border-bottom:2px solid var(--border)">H, мм</th>
                <th style="padding:10px 8px;text-align:left;font-weight:600;border-bottom:2px solid var(--border)">S, мм</th>
                <th style="padding:10px 8px;text-align:left;font-weight:600;border-bottom:2px solid var(--border)">S1, мм</th>
                <th style="padding:10px 8px;text-align:left;font-weight:600;border-bottom:2px solid var(--border)">S2, мм</th>
                <th style="padding:10px 8px;text-align:left;font-weight:600;border-bottom:2px solid var(--border)">Масса, кг</th>
              </tr>
              <tr style="font-size:11px;color:var(--text-muted)">
                <th style="padding:4px 8px;font-weight:400;text-align:left"></th>
                <th style="padding:4px 8px;font-weight:400;text-align:left">внешний диаметр</th>
                <th style="padding:4px 8px;font-weight:400;text-align:left">диаметр дна</th>
                <th style="padding:4px 8px;font-weight:400;text-align:left">по ребру жёсткости</th>
                <th style="padding:4px 8px;font-weight:400;text-align:left">высота</th>
                <th style="padding:4px 8px;font-weight:400;text-align:left">стенка корпуса</th>
                <th style="padding:4px 8px;font-weight:400;text-align:left">толщина днища</th>
                <th style="padding:4px 8px;font-weight:400;text-align:left">толщина крышки</th>
                <th style="padding:4px 8px;font-weight:400;text-align:left">без крышки</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding:12px 8px;border-bottom:1px solid var(--border);font-weight:500">217–220</td>
                <td style="padding:12px 8px;border-bottom:1px solid var(--border)">580 ±4</td>
                <td style="padding:12px 8px;border-bottom:1px solid var(--border)">525 ±4</td>
                <td style="padding:12px 8px;border-bottom:1px solid var(--border)">574 ±4</td>
                <td style="padding:12px 8px;border-bottom:1px solid var(--border)">970 ±4</td>
                <td style="padding:12px 8px;border-bottom:1px solid var(--border)">0,7</td>
                <td style="padding:12px 8px;border-bottom:1px solid var(--border)">0,6–0,7</td>
                <td style="padding:12px 8px;border-bottom:1px solid var(--border)">0,7</td>
                <td style="padding:12px 8px;border-bottom:1px solid var(--border)">10,4</td>
              </tr>
            </tbody>
          </table>
        </div>
        <img src="http://www.greif.ru/wp-content/uploads/konbochka.png" alt="Чертёж конической бочки Greif" style="display:block;margin-top:28px;max-width:100%;max-height:500px;object-fit:contain;">
      </div>
      <div class="tab-content" id="tab-con-coating">
        <p>Бочка окрашивается в один цвет по системе RAL.</p>
        <h4 style="margin-top:24px;margin-bottom:12px">Каталог цветов RAL — стандартные цвета Greif</h4>
        <div style="overflow-x:auto">
          <table style="width:100%;border-collapse:collapse;font-size:13px">
            <thead>
              <tr style="background:var(--bg-light,#f5f5f5)">
                <th style="padding:10px 8px;text-align:left;font-weight:600;border-bottom:2px solid var(--border)">#</th>
                <th style="padding:10px 8px;text-align:left;font-weight:600;border-bottom:2px solid var(--border)">Цвет</th>
                <th style="padding:10px 8px;text-align:left;font-weight:600;border-bottom:2px solid var(--border)">RAL</th>
                <th style="padding:10px 8px;text-align:left;font-weight:600;border-bottom:2px solid var(--border)">Образец</th>
              </tr>
            </thead>
            <tbody>
              ${[
                ['1','Желтый яркий','1021','#F6A500',''],
                ['2','Чистый оранжевый','2004','#F44611',''],
                ['3','Пунцовый красный','3002','#9B2423',''],
                ['4','Красный насыщенный','3020','#CC0605',''],
                ['5','Синий','5010','#0E294B',''],
                ['6','Синий-бледный','5017','#0A5B93',''],
                ['7','Зеленая мята','6029','#2B5F2B',''],
                ['8','Зеленая трава','6010','#4A6741',''],
                ['9','Телегрэй','7047','#D0D0D0','border:1px solid #bbb'],
                ['10','Черный','9005','#0A0A0A',''],
                ['11','Белый','9003 / 9016','#F4F4F4','border:1px solid #bbb'],
              ].map(([n,name,ral,hex,border]) =>
                `<tr style="border-bottom:1px solid var(--border)">
                  <td style="padding:10px 8px;color:var(--text-muted)">${n}</td>
                  <td style="padding:10px 8px">${name}</td>
                  <td style="padding:10px 8px;color:var(--text-muted)">${ral}</td>
                  <td style="padding:10px 8px"><span style="display:inline-block;width:32px;height:20px;border-radius:3px;background:${hex};${border}"></span></td>
                </tr>`
              ).join('')}
            </tbody>
          </table>
        </div>
      </div>
      <div class="tab-content" id="tab-con-lining">
        <div style="overflow:hidden;margin-bottom:20px">
          <img src="https://www.greif.ru/wp-content/uploads/Без-названия11.png" alt="Внутренние покрытия конических бочек Greif" style="float:left;max-width:220px;max-height:220px;object-fit:contain;margin:0 24px 12px 0">
          <p style="margin:0">Конические бочки могут изготавливаться с внутренними покрытиями. Система лаков RDL® (Regular Drum Lining) является универсальным стандартом внутренних покрытий для стальных бочек, принятым на заводах Greif Inc. по всему миру. Лаки RDL представляют собой передовое решение на рынке покрытий для стальной упаковки, которое позволяет исключить риск изменения свойств вашего продукта в результате контакта с поверхностью бочки, равно как и защитить окружающую среду от воздействия агрессивных продуктов.</p>
        </div>
        <p>Система RDL базируется на двух основных типах соединений: фенольные и эпоксидно-фенольные смолы, растворённые в смеси органических растворителей. Композиции на основе смеси фенольных (около 70%) и эпоксидных (около 30%) смол позволяют оптимизировать физико-химические свойства покрытий. Часть покрытий содержит инертные пигменты на основе оксидов титана или железа. Добавление пигментов в рецептуру лака придаёт покрытию характерный оттенок (красный, серый или коричневый). Кроме того, улучшаются физические и химические свойства покрытий: в частности, становится возможным нанесение стабильных слоёв большей толщины. Нанесение лаков RDL на внутреннюю поверхность стальной тары позволяет также защитить стальную поверхность от коррозии при контакте с водорастворимыми продуктами.</p>
        <p>Лаки RDL включают 6 стандартных типов покрытий: три эпоксидно-фенольных (RDL 29, RDL 06, RDL 44) и три фенольных (RDL 16, RDL 50, RDL 39). Решения на основе этих базовых лаков охватывают 90% продуктов, которые могут быть запакованы в стальную бочку с внутренним покрытием. Для оставшихся 10% случаев компанией Tri-Sure®, входящей в состав корпорации Greif Inc., также разработаны специальные решения в рамках системы RDL. За 50 лет существования данной системы накоплен значительный опыт и сформирована обширная база данных о свойствах нескольких тысяч веществ, что позволяет специалистам Tri-Sure оперативно подобрать лучшее решение. Отметим, что в случае возникновения малейших сомнений в совместимости вашего продукта с покрытием RDL, на базе нашего собственного исследовательского подразделения проводятся все необходимые испытания.</p>
        <p>В 2014 году компания Greif расширила линейку базовых внутренних покрытий, выпустив новинки — RDL 100 (с добавлением пигмента) и RDL 101 (прозрачный). Основным преимуществом новых лаков является исключение из технологии их производства компонентов, содержащих Бисфенол А (BPA). Испытания этих лаков были проведены с использованием современных методов контроля в лаборатории Tri-Sure, где было подтверждено отсутствие BPA (концентрации менее 0,5 мкг/дм находятся за пределами чувствительности метода). Новые лаки обладают высокой химической стойкостью; показатели сопоставимы со стандартным покрытием RDL 50. Безопасность новых лаков RDL 100 и RDL 101 подтверждена для большинства пищевых и химических продуктов. Проверку совместимости новых лаков с вашими продуктами можно провести совместно с исследовательским подразделением Greif.</p>
        <p><strong>Нанесение:</strong> все покрытия серии RDL могут наноситься на чистую поверхность стали или жести путём распыления или при помощи валиков. Лак подвергается обжигу при высоких температурах, благодаря чему все органические растворители испаряются. Под воздействием температуры происходит реакция поликонденсации смолы с получением инертной фенольной или эпокси-фенольной структуры, в которой равномерно распределены неорганические пигменты (при их наличии). Эпокси-фенольные покрытия отличает высокая гибкость, а фенольные — стойкость к повышенным температурам. Это позволяет применять лаки RDL 16 и RDL 50 для покрытия бочек, в которые фасуются продукты с высокими температурами при наливе.</p>
        <h4 style="margin-top:28px;margin-bottom:8px">Характеристики покрытий RDL, используемых на заводах Greif в России</h4>
        <img src="https://www.greif.ru/wp-content/uploads/Без-названия-2.png" alt="Характеристики покрытий RDL" style="display:block;max-width:100%;max-height:200px;object-fit:contain;margin-bottom:16px">
        <div style="overflow-x:auto">
          <table style="width:100%;border-collapse:collapse;font-size:13px;min-width:560px">
            <thead>
              <tr>
                <th style="padding:10px 8px;border-bottom:2px solid var(--border);text-align:left;width:22%"></th>
                <th colspan="2" style="padding:10px 8px;border-bottom:2px solid var(--border);text-align:center;background:var(--bg-light,#f5f5f5)">Эпокси-фенольные</th>
                <th colspan="2" style="padding:10px 8px;border-bottom:2px solid var(--border);text-align:center;background:var(--bg-light,#f5f5f5)">Фенольные</th>
              </tr>
              <tr style="background:var(--bg-light,#f5f5f5)">
                <th style="padding:8px;text-align:left;font-weight:600;border-bottom:1px solid var(--border)">Наименование</th>
                <th style="padding:8px;text-align:center;font-weight:700;border-bottom:1px solid var(--border)">RDL 29</th>
                <th style="padding:8px;text-align:center;font-weight:700;border-bottom:1px solid var(--border)">RDL 06</th>
                <th style="padding:8px;text-align:center;font-weight:700;border-bottom:1px solid var(--border)">RDL 16</th>
                <th style="padding:8px;text-align:center;font-weight:700;border-bottom:1px solid var(--border)">RDL 50</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom:1px solid var(--border)">
                <td style="padding:10px 8px;color:var(--text-muted);font-weight:500">Цвет</td>
                <td style="padding:10px 8px;text-align:center">Прозрачный</td>
                <td style="padding:10px 8px;text-align:center">Красный</td>
                <td style="padding:10px 8px;text-align:center">Прозрачный (золотистый)</td>
                <td style="padding:10px 8px;text-align:center">Оливковый зелёный</td>
              </tr>
              <tr style="border-bottom:1px solid var(--border)">
                <td style="padding:10px 8px;color:var(--text-muted);font-weight:500">Пигмент</td>
                <td style="padding:10px 8px;text-align:center">Нет</td>
                <td style="padding:10px 8px;text-align:center">Оксид железа</td>
                <td style="padding:10px 8px;text-align:center">Нет</td>
                <td style="padding:10px 8px;text-align:center">Диоксид титана</td>
              </tr>
              <tr style="border-bottom:1px solid var(--border)">
                <td style="padding:10px 8px;color:var(--text-muted);font-weight:500;vertical-align:top">Свойства</td>
                <td style="padding:10px 8px;font-size:12px">Хорошая стойкость к большинству органических растворителей. Умеренная стойкость к некоторым продуктам на водной основе.</td>
                <td style="padding:10px 8px;font-size:12px">Хорошая стойкость к большинству органических растворителей и к некоторым продуктам на водной основе.</td>
                <td style="padding:10px 8px;font-size:12px">Исключительная стойкость к органическим растворителям.</td>
                <td style="padding:10px 8px;font-size:12px">Большинство органических растворителей.</td>
              </tr>
              <tr style="border-bottom:1px solid var(--border)">
                <td style="padding:10px 8px;color:var(--text-muted);font-weight:500;vertical-align:top">Назначение</td>
                <td style="padding:10px 8px;font-size:12px">Защитное (гигиеническое) покрытие. Химические вещества.</td>
                <td style="padding:10px 8px;font-size:12px">Большинство химических веществ. Пищевые продукты. Защитное (гигиеническое) покрытие.</td>
                <td style="padding:10px 8px;font-size:12px">Химические вещества.</td>
                <td style="padding:10px 8px;font-size:12px">Химические вещества.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style="margin-top:16px;font-size:13px">Лаки для внутреннего покрытия бочек сертифицированы Управлением по санитарному надзору за качеством пищевых продуктов и медикаментов (FDA), США.</p>
        <p style="margin-top:8px;font-size:13px;color:var(--text-muted)"><strong>Внимание:</strong> фенольные покрытия не рекомендованы к контакту с продуктами с высокими значениями pH — едкие щёлочи, в частности, вызывают разрушение фенольной плёнки.</p>
      </div>
      <div class="tab-content" id="tab-con-closure">
        <p>Выбор подходящей укупорочной системы является крайне важным для надёжной упаковки конических бочек.</p>
        <p>Бочки с металлической откидной крышкой комплектуются запорными обручами из горячекатаной гальванизированной стали и уплотнительным кольцом.</p>
        <div style="display:flex;gap:16px;flex-wrap:wrap;margin:20px 0">
          <img src="https://www.greif.ru/wp-content/uploads/113.png" alt="Металлическая крышка конической бочки" style="height:180px;object-fit:contain;flex:1;min-width:120px;max-width:220px">
          <img src="https://www.greif.ru/wp-content/uploads/132.png" alt="Запорный обруч конической бочки" style="height:180px;object-fit:contain;flex:1;min-width:120px;max-width:220px">
          <img src="https://www.greif.ru/wp-content/uploads/123.png" alt="Укупорка конической бочки" style="height:180px;object-fit:contain;flex:1;min-width:120px;max-width:220px">
        </div>
      </div>
    </div>
    ${_managerCard('АС', 'Александр Седов', '+79033703111', '+7 (903) 370-31-11', 'Aleksandr.Sedov@greif.com')}
  </div>
</div>`,

  canisters: () => `
<div class="page">
  <div class="page-hero">
    <div class="page-hero-inner">
      <a href="#" onclick="navigate('products');return false;" style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.65);margin-bottom:10px;display:inline-flex;align-items:center;gap:6px;text-decoration:none;opacity:0.9">← Продукция</a>
      <h1 style="font-family:'Roboto',sans-serif;font-size:36px;font-weight:900;color:#fff;letter-spacing:-0.02em">Канистры</h1>
      <p style="font-size:14px;color:rgba(255,255,255,0.55)">Многослойные пластиковые канистры для агрохимии</p>
    </div>
  </div>
  <div class="product-detail-page">
    <div class="product-detail-grid">
      <div class="product-image-col">
        <div class="product-carousel">
          <div class="carousel-track-wrap">
            <div class="carousel-track" id="canCarouselTrack">
              <div class="carousel-slide"><img src="http://www.greif.ru/wp-content/uploads/kanistra-1.png" alt="Канистра Greif 1"></div>
              <div class="carousel-slide"><img src="http://www.greif.ru/wp-content/uploads/kanistra-3.png" alt="Канистра Greif 3"></div>
              <div class="carousel-slide"><img src="http://www.greif.ru/wp-content/uploads/kanistra-4.png" alt="Канистра Greif 4"></div>
            </div>
            <button class="carousel-btn carousel-btn-prev" onclick="canCarouselMove(-1)" aria-label="Назад">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M11 4L6 9l5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <button class="carousel-btn carousel-btn-next" onclick="canCarouselMove(1)" aria-label="Вперёд">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M7 4l5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <span class="carousel-counter" id="canCarouselCounter">1 / 3</span>
          </div>
          <div class="carousel-dots" id="canCarouselDots">
            <button class="carousel-dot active" onclick="canCarouselGoTo(0)"></button>
            <button class="carousel-dot" onclick="canCarouselGoTo(1)"></button>
            <button class="carousel-dot" onclick="canCarouselGoTo(2)"></button>
          </div>
        </div>
      </div>
      <div class="product-info-col">
        <p class="product-description">Канистры производятся в двух исполнениях — с барьерным слоем COEX и без него. Барьерное исполнение создано для безопасного хранения и транспортировки жидкостей, вступающих в реакцию с обычным полиэтиленом, разъедающих его стенки или выделяющих едкие запахи; обычная полиэтиленовая канистра подходит для менее агрессивных продуктов, где барьерная защита не требуется.</p>
        <button class="btn-consult" onclick="openPopup('popup-request')">СДЕЛАТЬ ЗАПРОС</button>
      </div>
    </div>
    <div class="product-tabs">
      <div class="tab-headers">
        <button class="tab-btn active" data-tab="can-desc">ОПИСАНИЕ</button>
        <button class="tab-btn" data-tab="can-specs">СПЕЦИФИКАЦИИ</button>
      </div>
      <div class="tab-content active" id="tab-can-desc">
        <p>Компания Greif начала производить в России пластиковые канистры с 2022 года. Площадка по выпуску канистр находится в Индустриальном парке Ворсино Калужской области. Канистры выпускаются в двух вариантах — стандартные полиэтиленовые и многослойные с барьерным слоем COEX, — что позволяет подобрать тару под требования конкретного продукта.</p>

        <h3 style="font-family:'Roboto',sans-serif;font-size:18px;font-weight:700;color:var(--text-dark);margin:28px 0 12px">Барьерная технология COEX</h3>
        <p>Многослойные канистры COEX отличаются от стандартных полиэтиленовых наличием дополнительного барьерного слоя, который обеспечивает два ключевых защитных свойства тары:</p>
        <ul style="margin:14px 0 0;padding-left:20px;line-height:1.8">
          <li><strong style="color:var(--text-dark)">Защита от растворения</strong> — предотвращает деформацию тары и миграцию химикатов сквозь пластик.</li>
          <li><strong style="color:var(--text-dark)">Блокировка запахов и газов</strong> — не даёт запаху выходить наружу, а кислороду проникать внутрь, защищая содержимое от окисления.</li>
        </ul>

        <h3 style="font-family:'Roboto',sans-serif;font-size:18px;font-weight:700;color:var(--text-dark);margin:28px 0 12px">Где применяются</h3>
        <ul style="margin:0;padding-left:20px;line-height:1.8">
          <li><strong style="color:var(--text-dark)">Автохимия и ГСМ</strong> — розлив бензина, масел, растворителей (ацетон, толуол) и других летучих жидкостей.</li>
          <li><strong style="color:var(--text-dark)">Агрохимия</strong> — фасовка агрессивных пестицидов и удобрений.</li>
          <li><strong style="color:var(--text-dark)">Промышленность</strong> — краски, лаки и химически чувствительные продукты.</li>
        </ul>

        <h3 style="font-family:'Roboto',sans-serif;font-size:18px;font-weight:700;color:var(--text-dark);margin:28px 0 12px">Технология соэкструзии</h3>
        <p>Соэкструзия — процесс одновременного выдавливания нескольких полимеров через одну формующую головку, позволяющий объединить свойства разных материалов в одном изделии. Каждый полимер плавится в отдельном экструдере, расплавы соединяются в общей головке, образуя единую многослойную структуру, которая затем охлаждается и затвердевает. Так каждый слой канистры отвечает за собственную характеристику — прочность, эластичность или барьерную защиту.</p>

        <h3 style="font-family:'Roboto',sans-serif;font-size:18px;font-weight:700;color:var(--text-dark);margin:28px 0 12px">Крышка с индукционной запайкой</h3>
        <p>Крышка с индукционной запайкой обеспечивает абсолютную герметичность упаковки: прочно припаянная мембрана из фольги исключает протекание или испарение продукта, блокирует доступ кислорода и влаги и продлевает срок годности содержимого. Нарушение целостности фольги сразу заметно, что гарантирует контроль первого вскрытия и защищает горловину тары при транспортировке.</p>

        <h3 style="font-family:'Roboto',sans-serif;font-size:18px;font-weight:700;color:var(--text-dark);margin:28px 0 12px">Упаковка стрейч-худ</h3>
        <p>Для упаковки паллет с канистрами используется стрейч-худ — эластичный полимерный рукав, который натягивается на груз без нагрева и усадки. Он обеспечивает полную герметичность паллеты, надёжно фиксирует канистры от сдвига и падения при транспортировке, а монолитная плёнка без прорезей делает любую попытку несанкционированного доступа сразу заметной. Процесс упаковки при этом автоматизирован, экономичен и не требует высоких температур или газа.</p>
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
    ${_managerCard('АС', 'Александр Седов', '+79033703111', '+7 (903) 370-31-11', 'Aleksandr.Sedov@greif.com')}
  </div>
</div>`,

  clover: () => `
<div class="page">
  <div class="page-hero">
    <div class="page-hero-inner">
      <a href="#" onclick="navigate('products');return false;" style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.65);margin-bottom:10px;display:inline-flex;align-items:center;gap:6px;text-decoration:none;opacity:0.9">← Продукция</a>
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
        <button class="btn-consult" onclick="openPopup('popup-request')">СДЕЛАТЬ ЗАПРОС</button>
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
        <div style="display:flex;gap:40px;align-items:flex-start;margin-bottom:32px;flex-wrap:wrap">
          <div style="flex:0 0 auto">
            <img src="https://www.greif.ru/wp-content/uploads/114.png" alt="Конструкция кловертейнера" style="max-width:320px;width:100%;display:block;border:1px solid var(--border);border-radius:4px">
            <div style="margin-top:14px;font-size:12px;color:var(--text-muted);line-height:2">
              <div><strong style="color:var(--text-dark)">1</strong> — поддон</div>
              <div><strong style="color:var(--text-dark)">2</strong> — обечайка</div>
              <div><strong style="color:var(--text-dark)">3</strong> — крышка</div>
              <div><strong style="color:var(--text-dark)">4</strong> — обвязка</div>
              <div><strong style="color:var(--text-dark)">5</strong> — заливочное отверстие</div>
              <div><strong style="color:var(--text-dark)">6</strong> — вертикальная стойка</div>
              <div><strong style="color:var(--text-dark)">7</strong> — антиадгезионная бумага</div>
            </div>
          </div>
          <div style="flex:1;min-width:260px">
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tbody>
                ${[
                  ['Номинальная емкость','1000 л'],
                  ['Длина','1140 мм'],
                  ['Ширина','1140 мм'],
                  ['Высота','1080 мм'],
                  ['Диаметр заливной горловины','200 мм'],
                  ['Масса кловертейнера в сборе','90 ±5 кг'],
                  ['Материал внутренних вкладышей','Антиадгезионная бумага'],
                  ['Сливные краны','по запросу'],
                  ['Сертификация','Сертификат ООН UN11G/Z/'],
                  ['Поставка (пустые контейнеры)','Еврофура: 44 шт.'],
                ].map(([k,v]) =>
                  `<tr style="border-bottom:1px solid var(--border)"><td style="padding:11px 0;color:var(--text-muted);width:55%">${k}</td><td style="padding:11px 0;color:var(--text-dark);font-weight:500">${v}</td></tr>`
                ).join('')}
              </tbody>
            </table>
            <p style="margin-top:16px;font-size:12px;color:var(--text-muted);font-style:italic">Внимание: кловертейнеры поставляются в собранном виде!</p>
          </div>
        </div>
        <div style="border-top:1px solid var(--border);padding-top:28px">
          <h3 style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:var(--green-primary);margin:0 0 16px">ПРИМЕНЕНИЕ</h3>
          <p style="font-size:14px;color:var(--text-muted);line-height:1.75;margin:0 0 16px">Специальная модификация кловертейнера разработана для упаковки, транспортировки и хранения нефтяных битумов, битумных составов, сырья для производства битумов, гудронов, мастики и подобных им нефтепродуктов, имеющих температуру размягчения не ниже 35°C.</p>
          <p style="font-size:14px;font-weight:600;color:var(--text-dark);margin:0 0 10px">Преимущества использования кловертейнеров:</p>
          <ul style="font-size:14px;color:var(--text-muted);line-height:1.9;margin:0 0 16px;padding-left:20px">
            <li>низкая стоимость упаковки на единицу продукции;</li>
            <li>возможность использования полуавтоматической установки налива в кловертейнер, что позволяет сократить капитальные инвестиции на организацию затаривания.</li>
          </ul>
          <p style="font-size:14px;color:var(--text-muted);line-height:1.75;margin:0 0 16px">Фасовка в кловертейнеры осуществляется непосредственно на НПЗ и далее происходит отгрузка битума конечным потребителям со склада промежуточного хранения. Организация цепи поставок битумов по данной схеме исключает необходимость обустройства битумохранилищ, расходов на нагрев битума при перевалке, полностью исключает потери вследствие недовыгруза железнодорожных цистерн, а также их пропарку.</p>
          <p style="font-size:14px;color:var(--text-muted);line-height:1.75;margin:0">Использование кловертейнеров позволяет обеспечить сохранность качества битума за счет того, что он разогревается один раз непосредственно на асфальтобетоном заводе, в то время как традиционные способы транспортировки подразумевают многократные циклы разогрева при погрузке-выгрузке. Вместе с этим достигается и экономия энергоресурсов, а также продление срока службы дорожного полотна за счет пониженного окисления материала.</p>
        </div>
      </div>
    </div>
    ${_managerCard('МЛ', 'Марина Леонова', '+79872309971', '+7 (987) 230-99-71', 'Marina.Leonova@greif.com')}
  </div>
</div>`,

  services: () => `
    <div class="page">
      <div class="page-hero">
        <div class="page-hero-inner">
          <div style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.65);margin-bottom:10px">Услуги</div>
          <h1 style="font-family:'Roboto',sans-serif;font-size:36px;font-weight:900;color:#fff;letter-spacing:-0.02em">Сервисы Greif</h1>
        </div>
      </div>
      <div style="max-width:1100px;margin:56px auto;padding:0 32px;display:grid;grid-template-columns:repeat(2,1fr);gap:24px">
        <div onclick="navigate('branding')" class="service-card"><div class="service-card-icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div class="service-card-title">Брендирование упаковки</div><div class="service-card-desc">Нанесение фирменного стиля, цветовой палитры и корпоративной символики. Окраска по RAL, логотип, трёхполосный дизайн.</div><div class="service-card-link">ПОДРОБНЕЕ →</div></div>
        <div onclick="navigateIBCBuy()" class="service-card"><div class="service-card-icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="9 22 9 12 15 12 15 22" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div class="service-card-title">Покупаем б/у еврокубы</div><div class="service-card-desc">Сервис сбора и восстановления использованной тары. Оперативный вывоз пустых контейнеров с вашей площадки.</div><div class="service-card-link">ПОДРОБНЕЕ →</div></div>
        <div onclick="navigate('specification')" class="service-card"><div class="service-card-icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M9 11l3 3L22 4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div class="service-card-title">Подбор спецификации</div><div class="service-card-desc">Индивидуальный подбор характеристик упаковки под химическую природу вашего продукта.</div><div class="service-card-link">ПОДРОБНЕЕ →</div></div>
        <div onclick="navigate('logistics')" class="service-card"><div class="service-card-icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none"><rect x="1" y="3" width="15" height="13" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 8h4l3 3v5h-7V8z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="5.5" cy="18.5" r="2.5" stroke="#fff" stroke-width="2"/><circle cx="18.5" cy="18.5" r="2.5" stroke="#fff" stroke-width="2"/></svg></div><div class="service-card-title">Оптимизация логистики</div><div class="service-card-desc">Комплексные решения для повышения эффективности цепи поставок. Поставки точно в срок, паллетизированная доставка.</div><div class="service-card-link">ПОДРОБНЕЕ →</div></div>
      </div>
    </div>`,

  branding: () => `
    <div class="page">
      <div class="page-hero">
        <div class="page-hero-inner">
          <div style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.65);margin-bottom:10px">Сервисы</div>
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
          <div style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.65);margin-bottom:10px">Сервисы</div>
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
          <button class="btn-consult" onclick="openPopup('popup-request')">СДЕЛАТЬ ЗАПРОС</button>
        </div>
      </div>
    </div>`,

  logistics: () => `
    <div class="page">
      <div class="page-hero">
        <div class="page-hero-inner">
          <div style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.65);margin-bottom:10px">Сервисы</div>
          <h1 style="font-family:'Roboto',sans-serif;font-size:36px;font-weight:900;color:#fff;letter-spacing:-0.02em">Оптимизация логистики</h1>
        </div>
      </div>
      <div style="max-width:900px;margin:56px auto;padding:0 32px">
        <p style="font-size:15px;color:var(--text-dark);line-height:1.75;margin-bottom:48px">Компания Greif стремится установить с каждым из своих клиентов долгосрочные партнерские отношения, принимая всемерное участие в улучшении эффективности всех бизнес-процессов.</p>
        ${[
          ['Автоматическая разгрузка','Роботизированная система обеспечивает разгрузку партии из 150 бочек менее чем за 30 минут. Система полностью исключает операции с бочками, производимые вручную.'],
          ['Поставка точно в срок','Логистическая концепция Just-in-Time позволяет сократить выделенные под тару складские площади и затраты на её хранение. Диверсифицированная сеть предприятий Greif гарантирует отсутствие сбоев в доставке.'],
          ['Паллетизированная доставка','Greif предлагает доставку паллетизированных стальных бочек. Максимальный объём партии — 264 бочки объёмом 216 литров.'],
          ['Сервис Greif Express','Специальный логистический сервис позволяет исключить сложности при поставке и операциях с металлическими бочками: 48 бочек на паллетах в одном контейнере, 6 контейнеров в одном грузовике.'],
        ].map(([title, desc]) => `
          <div style="background:#fff;border:1px solid var(--border);border-top:3px solid var(--green-primary);padding:36px 40px;margin-bottom:24px">
            <h2 style="font-size:20px;font-weight:700;color:var(--text-dark);margin:0 0 16px">${title}</h2>
            <p style="font-size:14px;color:var(--text-muted);line-height:1.75;margin:0">${desc}</p>
          </div>`
        ).join('')}
        <div style="text-align:center;margin-top:24px">
          <button class="btn-consult" onclick="openPopup('popup-request')">СДЕЛАТЬ ЗАПРОС</button>
        </div>
      </div>
    </div>`,

  contact: () => `
<div class="page">
  <div class="page-hero">
    <div class="page-hero-inner">
      <div style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.65);margin-bottom:10px">Контакты</div>
      <h1 style="font-family:'Roboto',sans-serif;font-size:36px;font-weight:900;color:#fff;letter-spacing:-0.02em">Наши производства</h1>
      <p style="font-size:14px;color:rgba(255,255,255,0.55)">8 заводов в крупнейших промышленных узлах России</p>
    </div>
  </div>
  <div style="background:var(--green-light-bg);padding:48px 0 56px">
    <div style="max-width:1200px;margin:0 auto;padding:0 32px">
      <div style="display:grid;grid-template-columns:480px 1fr;gap:28px;align-items:stretch">
        <div style="display:flex;flex-direction:column">
          <div id="map" style="width:100%;aspect-ratio:1/1;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.1)"></div>
          <p style="font-size:11px;color:var(--text-muted);margin:10px 0 0;text-align:center">Нажмите на метку, чтобы увидеть фото завода</p>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(3,1fr);gap:10px">
          ${[
            ['Москва','ул. Ленинская слобода, 19','moskva'],
            ['Вологда','ул. Маяковского, 38','vologda'],
            ['Волгоград','ул. Промысловая, 15','volgograd'],
            ['Пермь','ул. Героев Хасана, 74','perm'],
            ['Екатеринбург','п. Белоярский, ул. Мира, 20','ekaterinburg'],
            ['Казань','ул. М.Миля, 49А','kazan'],
            ['Омск','ул. И.Н. Багнюка, 10','omsk'],
            ['Рязань','ш. Ряжское, 20','ryazan'],
            ['Калуга (Ворсино)','Индустриальный парк Ворсино','kaluga'],
          ].map(([city, addr, key]) => {
            const cityData = CITY_CONTACTS[key] || {};
            const ph = cityData.phone || '';
            const hasContacts = (cityData.contacts || []).length > 0;
            if (hasContacts) {
              return `
            <div onclick="openCityModal('${key}')" style="background:#fff;border:1px solid var(--border);padding:14px 16px;border-left:3px solid var(--green-primary);border-radius:8px;cursor:pointer;transition:box-shadow 0.18s,transform 0.18s" onmouseenter="this.style.boxShadow='0 6px 20px rgba(0,0,0,0.10)';this.style.transform='translateY(-2px)'" onmouseleave="this.style.boxShadow='';this.style.transform=''">
              <div style="font-weight:700;font-size:13px;color:var(--green-primary);margin-bottom:3px">${city}</div>
              <div style="font-size:11px;color:#777;margin-bottom:6px;line-height:1.4">${addr}</div>
              ${ph ? `<div style="font-size:12px;font-weight:600;color:var(--text-dark);margin-bottom:10px">${ph}</div>` : ''}
              <div style="font-size:10px;font-family:'Roboto Condensed',sans-serif;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--green-primary);display:flex;align-items:center;gap:4px">
                Контакты
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
              </div>
            </div>`;
            } else {
              const telHref = ph ? _toTel(ph) : '';
              return `
            <div style="background:#fff;border:1px solid var(--border);padding:14px 16px;border-left:3px solid var(--green-primary);border-radius:8px;">
              <div style="font-weight:700;font-size:13px;color:var(--green-primary);margin-bottom:3px">${city}</div>
              <div style="font-size:11px;color:#777;margin-bottom:8px;line-height:1.4">${addr}</div>
              ${ph ? `<a href="${telHref}" style="display:inline-flex;align-items:center;gap:5px;font-size:12px;font-weight:600;color:var(--text-dark);text-decoration:none;background:var(--green-light-bg);border:1px solid var(--border);border-radius:5px;padding:4px 9px;transition:color 0.15s" onmouseenter="this.style.color='var(--green-primary)'" onmouseleave="this.style.color='var(--text-dark)'"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>${ph}</a>` : ''}
            </div>`;
            }
          }).join('')}
        </div>
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
      <div style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.65);margin-bottom:10px">Карьера</div>
      <h1 style="font-family:'Roboto',sans-serif;font-size:36px;font-weight:900;color:#fff;letter-spacing:-0.02em">Вакансии в Грайф</h1>
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
