/* site_structure/js/ibc-buy.js */

function updateFileLabel(input, labelId) {
  const label = document.getElementById(labelId);
  if (!label) return;

  if (input.files && input.files[0]) {
    const file = input.files[0];
    if (file.size > 5 * 1024 * 1024) {
      label.textContent = 'Файл слишком большой (макс. 5 МБ)';
      label.style.color = '#c0392b';
      input.value = '';
      return;
    }
    label.textContent = file.name;
    label.style.color = 'var(--text-dark)';
  } else {
    label.textContent = 'Файл не выбран';
    label.style.color = 'var(--text-muted)';
  }
}

function submitIBCInstructionForm(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.textContent = 'Отправляется...';

  setTimeout(() => {
    form.innerHTML = `
      <div style="display:flex;flex-direction:column;align-items:flex-start;gap:12px;padding:24px 0">
        <div style="width:48px;height:48px;background:var(--green-primary);border-radius:50%;display:flex;align-items:center;justify-content:center">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="square">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <div style="font-size:18px;font-weight:700;color:var(--text-dark);margin-top:4px">Заявка отправлена!</div>
        <div style="font-size:14px;color:var(--text-muted);line-height:1.7">Мы вышлем инструкцию по эксплуатации на указанный контакт в ближайшее время.</div>
      </div>`;
  }, 800);
}

function submitIBCBuyForm(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.textContent = 'Отправляется...';

  setTimeout(() => {
    form.innerHTML = `
      <div style="display:flex;flex-direction:column;align-items:flex-start;gap:12px;padding:24px 0">
        <div style="width:48px;height:48px;background:var(--green-primary);border-radius:50%;display:flex;align-items:center;justify-content:center">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="square">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <div style="font-size:18px;font-weight:700;color:var(--text-dark);margin-top:4px">Заявка отправлена!</div>
        <div style="font-size:14px;color:var(--text-muted);line-height:1.7">Мы свяжемся с Вами в ближайшее время.</div>
      </div>`;
  }, 800);
}
