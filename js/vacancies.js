/* site_structure/js/vacancies.js */

function initVacancyTabs() {
  const tabs = document.querySelectorAll('.city-tab');
  const sections = document.querySelectorAll('.city-section');

  if (!tabs.length) return;

  // Show all sections initially (active tab is "all")
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
    ? `<a href="https://t.me/${data.recruiter_telegram.replace('@', '')}" target="_blank" class="popup-contact-btn popup-tg-btn">Telegram</a>` : '';

  const maxBtn = data.recruiter_max
    ? `<a href="${data.recruiter_max}" target="_blank" class="popup-contact-btn popup-max-btn">MAX</a>` : '';

  const phoneBtn = data.recruiter_phone
    ? `<a href="tel:${data.recruiter_phone}" class="popup-contact-btn popup-phone-btn">${data.recruiter_phone}</a>` : '';

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
  const popup = document.getElementById('studentsPopup');
  if (popup) {
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
