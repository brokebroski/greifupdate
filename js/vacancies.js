/* site_structure/js/vacancies.js */

function initVacancyTabs() {
  const tabs = document.querySelectorAll('.city-tab');
  const sections = document.querySelectorAll('.city-section');

  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
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

window.showVacancyDemo = function(title, salary, location, recruiter, telegram, phone) {
  const html = `
    <h2>${title}</h2>
    <p style="font-size: 22px; font-weight: bold; color: #2C3E2F;">${salary}</p>
    <p style="color: #2e7d32; font-weight: 500;"><strong>📍 ${location}</strong></p>
    <hr style="border: none; border-top: 2px solid #e0ede0; margin: 15px 0;">
    <div style="background: #f5f5f5; padding: 15px; border-radius: 10px; margin: 15px 0;">
      <div>✅ Официальное трудоустройство</div>
      <div>✅ Полный социальный пакет</div>
      <div>✅ Комфортные условия труда</div>
    </div>
    <div style="background: #e8f3e8; padding: 15px; border-radius: 10px; margin-top: 20px;">
      <p><strong>Специалист:</strong> ${recruiter}</p>
      <p><strong>Telegram:</strong> <a href="https://t.me/${telegram.replace('@', '')}" target="_blank" style="color: #2e7d32;">${telegram}</a></p>
      <p><strong>Телефон:</strong> <a href="tel:${phone}" style="color: #2e7d32;">${phone}</a></p>
    </div>
  `;

  const popupContent = document.getElementById('popupContent');
  const popup = document.getElementById('vacancyPopup');
  if (popupContent && popup) {
    popupContent.innerHTML = html;
    popup.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
};

window.closeVacancyPopup = function() {
  const popup = document.getElementById('vacancyPopup');
  if (popup) {
    popup.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
};

document.addEventListener('click', function(e) {
  const popup = document.getElementById('vacancyPopup');
  if (e.target === popup) closeVacancyPopup();
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeVacancyPopup();
});
