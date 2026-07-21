/* site_structure/js/vacancies.js */

function renderVacanciesPage() {
  const totalVacancies = VACANCIES.length;
  const cityKeysWithVacancies = Object.keys(VACANCY_CITIES).filter(key => VACANCIES.some(v => v.city === key));
  const totalCities = cityKeysWithVacancies.length;

  const cityTabs = Object.keys(VACANCY_CITIES).map(key => {
    const count = VACANCIES.filter(v => v.city === key).length;
    return `<button class="city-tab" data-city="${key}">${VACANCY_CITIES[key]}<span class="city-count">${count}</span></button>`;
  }).join('');

  const citySections = cityKeysWithVacancies.map(cityKey => {
    const cards = VACANCIES
      .map((v, idx) => ({ v, idx }))
      .filter(item => item.v.city === cityKey)
      .map(({ v, idx }) => `
        <div class="vacancy-card">
          <div class="vacancy-card-header">
            <h4>${v.title}</h4>
            <span class="salary-badge">${v.salary}</span>
          </div>
          <div class="button-group">
            <button class="details-btn" onclick="openVacancyPopup(VACANCIES[${idx}])">Подробнее</button>
            ${v.recruiter_max ? `<a href="${v.recruiter_max}" class="max-btn" target="_blank" rel="noopener">MAX</a>` : ''}
          </div>
        </div>
      `).join('');

    return `
      <div class="city-section" data-city="${cityKey}">
        <h3 class="city-title">${VACANCY_CITIES[cityKey]}</h3>
        <div class="vacancy-grid">${cards}</div>
      </div>
    `;
  }).join('');

  const whyCards = VACANCY_WHY_US.map(w => `
    <div class="why-card">
      <div class="why-icon">${w.icon}</div>
      <h4>${w.title}</h4>
      <p>${w.text}</p>
    </div>
  `).join('');

  return `
<div class="page">
  <div class="page-hero">
    <div class="page-hero-inner">
      <div style="font-family:'Roboto Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.65);margin-bottom:10px">Карьера</div>
      <h1 style="font-family:'Roboto',sans-serif;font-size:36px;font-weight:900;color:#fff;letter-spacing:-0.02em">Вакансии в Грайф</h1>
      <p style="font-size:14px;color:rgba(255,255,255,0.55)">Присоединяйтесь к команде мирового лидера промышленной упаковки</p>
      <div class="vacancy-stats">
        <div class="vacancy-stat">
          <div class="vacancy-stat-num">${totalVacancies}</div>
          <div class="vacancy-stat-label">Открытых вакансий</div>
        </div>
        <div class="vacancy-stat">
          <div class="vacancy-stat-num">${totalCities}</div>
          <div class="vacancy-stat-label">Города</div>
        </div>
      </div>
    </div>
  </div>
  <div class="career-page">

    <button class="students-main-btn" onclick="openStudentsPopup()">🎓 Вакансии для студентов →</button>

    <div class="city-menu-container">
      <h2 class="vacancies-heading">Открытые вакансии</h2>
      <div class="city-tabs">
        <button class="city-tab active" data-city="all">Все города<span class="city-count">${totalVacancies}</span></button>
        ${cityTabs}
      </div>
    </div>

    <section class="vacancies">
      ${citySections || '<p style="text-align:center;padding:40px;background:#f5f5f5;border-radius:10px;">На данный момент нет открытых вакансий</p>'}
    </section>

    <section class="why-us">
      <h2>Почему у нас круто работать</h2>
      <div class="why-grid">${whyCards}</div>
    </section>

    <section class="company-section">
      <img src="https://www.greif.ru/wp-content/uploads/2024/11/7.JPG" alt="Команда Greif" style="width:100%; border-radius:16px;">
      <p class="photo-caption">Наша команда — профессионалы своего дела</p>
    </section>

    <section class="social-section">
      <h3>Следите за нами</h3>
      <div class="social-grid">
        <a href="https://vk.com/greif_russia" target="_blank" rel="noopener">ВКонтакте</a>
        <a href="https://t.me/greif_russia" target="_blank" rel="noopener">Telegram</a>
      </div>
    </section>
  </div>

  <div id="vacancyPopup" style="display:none;">
    <div>
      <button class="close-popup" onclick="closeVacancyPopup()">×</button>
      <div id="popupContent"></div>
    </div>
  </div>

  <div id="studentsPopup" style="display:none;">
    <div>
      <button class="close-popup" onclick="closeStudentsPopup()">×</button>
      <div id="studentsPopupContent"></div>
    </div>
  </div>
</div>`;
}

function initVacancyTabs() {
  const tabs = document.querySelectorAll('.city-tab');
  const sections = document.querySelectorAll('.city-section');

  if (!tabs.length) return;

  sections.forEach(s => s.classList.add('active'));

  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      const city = this.dataset.city;
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      if (city === 'all') {
        sections.forEach(s => s.classList.add('active'));
      } else {
        sections.forEach(s => {
          s.classList.toggle('active', s.dataset.city === city);
        });
      }
    });
  });
}

window.openVacancyPopup = function (data) {
  const condHTML = data.conditions && data.conditions.length
    ? `<div class="popup-section">
        <p class="popup-section-title">✅ Мы предлагаем</p>
        <ul class="popup-list">${data.conditions.map(c => `<li>${c}</li>`).join('')}</ul>
       </div>` : '';

  const dutHTML = data.duties && data.duties.length
    ? `<div class="popup-section">
        <p class="popup-section-title">📋 Обязанности</p>
        <ul class="popup-list">${data.duties.map(d => `<li>${d}</li>`).join('')}</ul>
       </div>` : '';

  const reqHTML = data.requirements && data.requirements.length
    ? `<div class="popup-section">
        <p class="popup-section-title">🎯 Требования</p>
        <ul class="popup-list">${data.requirements.map(r => `<li>${r}</li>`).join('')}</ul>
       </div>` : '';

  const tgBtn = data.recruiter_telegram
    ? `<a href="https://t.me/${data.recruiter_telegram.replace('@', '')}" target="_blank" rel="noopener" class="popup-contact-btn popup-tg-btn">Telegram</a>` : '';

  const maxBtn = data.recruiter_max
    ? `<a href="${data.recruiter_max}" target="_blank" rel="noopener" class="popup-contact-btn popup-max-btn">MAX</a>` : '';

  const phoneBtn = data.recruiter_phone
    ? `<a href="tel:${data.recruiter_phone.replace(/[^\d+]/g, '')}" class="popup-contact-btn popup-phone-btn">${data.recruiter_phone}</a>` : '';

  const html = `
    <div class="popup-header">
      <h2 class="popup-title">${data.title}</h2>
      <div class="popup-salary">${data.salary}</div>
      <div class="popup-location">📍 ${data.location}</div>
    </div>
    ${condHTML}${dutHTML}${reqHTML}
    <div class="popup-recruiter">
      <p class="popup-recruiter-name">Специалист по подбору: <strong>${data.recruiter_name}</strong></p>
      <div class="popup-contact-buttons">${tgBtn}${maxBtn}${phoneBtn}</div>
    </div>
  `;

  const content = document.getElementById('popupContent');
  const popup = document.getElementById('vacancyPopup');
  if (content && popup) {
    content.innerHTML = html;
    popup.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
};

window.closeVacancyPopup = function () {
  const popup = document.getElementById('vacancyPopup');
  if (popup) {
    popup.style.display = 'none';
    document.body.style.overflow = '';
  }
};

window.openStudentsPopup = function () {
  const contactsHTML = VACANCY_STUDENTS_CONTACTS.map(c => `
    <div class="students-popup-contact-person">
      <strong>${c.name}</strong>
      <a href="https://t.me/${c.telegram.replace('@', '')}" target="_blank" rel="noopener">📱 Telegram: ${c.telegram}</a>
      <a href="tel:${c.phone}">📞 ${c.phone_display}</a>
      ${c.max ? `<a href="${c.max}" target="_blank" rel="noopener" class="students-popup-max-btn">🚀 MAX</a>` : ''}
    </div>
  `).join('');

  const html = `
    <div class="students-popup-header">
      <h2>🎓 Вакансии для студентов</h2>
      <p>Старт карьеры в международной компании Greif</p>
    </div>

    <div class="students-popup-grid">
      <div class="students-popup-card">
        <h3>📌 Практика / Стажировка</h3>
        <ul>
          <li>✅ <strong>Оплачиваемая практика</strong> (условия обсуждаются)</li>
          <li>✅ Гибкий график под учебный процесс</li>
          <li>✅ Возможность дальнейшего трудоустройства</li>
          <li>✅ Оформление по ТК РФ, полный соцпакет</li>
        </ul>
      </div>
      <div class="students-popup-card">
        <h3>⚙️ Кого мы ждём?</h3>
        <ul>
          <li>Студентов 3–4 курсов инженерных вузов</li>
          <li>Студентов технических колледжей</li>
          <li>Направления: механика, автоматизация, электротехника, КИПиА и др.</li>
        </ul>
      </div>
      <div class="students-popup-card">
        <h3>🚀 Что вы получите</h3>
        <ul>
          <li>Реальный опыт на современном производстве</li>
          <li>Наставничество от профессионалов</li>
          <li>Знакомство с технологиями мирового уровня</li>
        </ul>
      </div>
      <div class="students-popup-card">
        <h3>🏭 Где мы ждём студентов</h3>
        <ul>
          <li><strong>Вологда</strong> — производство стальных бочек</li>
          <li><strong>Калужская область (Ворсино)</strong> — пластиковая и стальная тара</li>
          <li><strong>Пермь</strong> — упаковочные решения</li>
          <li>На всех производственных площадках Greif в России</li>
        </ul>
      </div>
    </div>

    <div class="students-popup-contacts-row">${contactsHTML}</div>

    <div class="students-popup-contact-btns">
      <a href="https://vk.com/greif_russia" target="_blank" rel="noopener">ВКонтакте</a>
      <a href="https://t.me/greif_russia" target="_blank" rel="noopener">Telegram-канал</a>
    </div>

    <p class="students-popup-note">💡 Условия оплаты практики обсуждаются индивидуально. Пишите, звоните или отправляйте заявку в MAX — мы ответим на все вопросы!</p>
  `;

  const content = document.getElementById('studentsPopupContent');
  const popup = document.getElementById('studentsPopup');
  if (content && popup) {
    content.innerHTML = html;
    popup.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
};

window.closeStudentsPopup = function () {
  const popup = document.getElementById('studentsPopup');
  if (popup) {
    popup.style.display = 'none';
    document.body.style.overflow = '';
  }
};

document.addEventListener('click', function (e) {
  const vp = document.getElementById('vacancyPopup');
  if (e.target === vp) closeVacancyPopup();
  const sp = document.getElementById('studentsPopup');
  if (e.target === sp) closeStudentsPopup();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeVacancyPopup();
    closeStudentsPopup();
  }
});
