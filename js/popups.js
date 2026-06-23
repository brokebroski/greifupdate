/* site_structure/js/popups.js */

const FORM_RECIPIENTS = {
  'popup-hr':       { to: 'greif.ru@yandex.ru', subject: 'Связаться с отделом кадров' },
  'popup-director': { to: 'greif.ru@yandex.ru', subject: 'Обращение директору' },
  'popup-request':  { to: 'greif.ru@yandex.ru', subject: 'Общий запрос' },
};

function openPopup(id) {
  const overlay = document.getElementById(id);
  if (!overlay) return;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePopup(id) {
  const overlay = document.getElementById(id);
  if (!overlay) return;
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function closePopupOnOverlay(e, id) {
  if (e.target === e.currentTarget) closePopup(id);
}

function submitPopup(id) {
  const formEl = document.getElementById(id + '-form');
  const successEl = document.getElementById(id + '-success');

  const required = formEl.querySelectorAll('input[id]:not(.consent-checkbox), textarea[id], select[id]');
  let valid = true;

  required.forEach(el => {
    const label = el.closest('.form-field')?.querySelector('.form-label');
    if (label && label.textContent.includes('*') && !el.value.trim()) {
      el.style.borderColor = '#c0392b';
      valid = false;
    } else {
      el.style.borderColor = '';
    }
  });

  const consentBox = formEl.querySelector('.consent-checkbox');
  if (consentBox) {
    if (!consentBox.checked) {
      consentBox.classList.add('error');
      valid = false;
    } else {
      consentBox.classList.remove('error');
    }
  }

  if (!valid) return;

  formEl.style.display = 'none';
  successEl.style.display = 'block';

  setTimeout(() => {
    closePopup(id);
    setTimeout(() => {
      formEl.style.display = '';
      successEl.style.display = 'none';
      formEl.querySelectorAll('input:not([type=checkbox]), textarea, select').forEach(el => el.value = '');
      formEl.querySelectorAll('input[type=checkbox]').forEach(el => { el.checked = false; el.classList.remove('error'); });
    }, 300);
  }, 2800);
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    ['popup-hr', 'popup-request', 'popup-director'].forEach(id => closePopup(id));
    closeMobileNav();
    if (typeof _closeFactoryModal === 'function') _closeFactoryModal();
    if (typeof _closeCityModal === 'function') _closeCityModal();
  }
});
