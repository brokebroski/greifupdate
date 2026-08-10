/* site_structure/js/chat-widget.js */
/* Умный чат-виджет: приглашение показывается только после 20с на сайте И 30% скролла. */

(function () {
  'use strict';

  var STORAGE_KEY = 'greif_chat_invite_dismissed';

  var fab = document.getElementById('chat-fab');
  var invite = document.getElementById('chat-invite');
  var inviteClose = document.getElementById('chat-invite-close');
  var inviteBtn = document.getElementById('chat-invite-btn');
  var chatWindow = document.getElementById('chat-window');
  var chatClose = document.getElementById('chat-window-close');
  var chatForm = document.getElementById('chat-window-form');
  var chatSuccess = document.getElementById('chat-window-success');

  if (!fab || !invite || !chatWindow) return;

  var timeConditionMet = false;
  var scrollConditionMet = false;
  var inviteShown = false;

  function isDismissed() {
    return sessionStorage.getItem(STORAGE_KEY) === '1';
  }

  function getScrollPercent() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    return docHeight > 0 ? (scrollTop / docHeight) * 100 : 100;
  }

  function showInvite() {
    if (inviteShown || isDismissed() || chatWindow.classList.contains('is-visible')) return;
    inviteShown = true;
    invite.classList.add('is-visible');
    console.log('[chat-widget] Приглашение показано: 20с на сайте + 30% скролла выполнены.');
  }

  function hideInvite() {
    invite.classList.remove('is-visible');
  }

  function checkConditions() {
    if (timeConditionMet && scrollConditionMet) showInvite();
  }

  function openChatWindow() {
    hideInvite();
    chatForm.style.display = '';
    chatSuccess.style.display = 'none';
    chatWindow.classList.add('is-visible');
  }

  function closeChatWindow() {
    chatWindow.classList.remove('is-visible');
  }

  /* ── Триггер 1: время на сайте ── */
  setTimeout(function () {
    timeConditionMet = true;
    console.log('[chat-widget] Триггер времени сработал: 20 секунд на сайте.');
    checkConditions();
  }, 20000);

  /* ── Триггер 2: скролл 30% высоты страницы ── */
  window.addEventListener('scroll', function () {
    if (scrollConditionMet) return;
    var percent = getScrollPercent();
    if (percent >= 30) {
      scrollConditionMet = true;
      console.log('[chat-widget] Триггер скролла сработал: ' + percent.toFixed(1) + '% страницы.');
      checkConditions();
    }
  }, { passive: true });

  /* ── Крестик приглашения: скрыть до конца сессии ── */
  inviteClose.addEventListener('click', function () {
    hideInvite();
    sessionStorage.setItem(STORAGE_KEY, '1');
    console.log('[chat-widget] Приглашение закрыто пользователем — не будет показано повторно в этой сессии.');
  });

  /* ── «Связаться с консультантом» из приглашения ── */
  inviteBtn.addEventListener('click', function () {
    console.log('[chat-widget] Открыт полноценный чат из приглашения.');
    openChatWindow();
  });

  /* ── Круглая кнопка: доступна всегда, вне зависимости от триггеров ── */
  fab.addEventListener('click', function () {
    if (chatWindow.classList.contains('is-visible')) {
      closeChatWindow();
    } else {
      console.log('[chat-widget] Чат открыт вручную по клику на плавающую кнопку.');
      openChatWindow();
    }
  });

  chatClose.addEventListener('click', function () {
    closeChatWindow();
    console.log('[chat-widget] Окно чата закрыто пользователем.');
  });

  /* ── Отправка формы (эмуляция, как и другие формы сайта) ── */
  chatForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var nameEl = document.getElementById('chat-name');
    var messageEl = document.getElementById('chat-message');
    var name = nameEl.value.trim();
    var message = messageEl.value.trim();

    var valid = true;
    if (!name) { nameEl.style.borderColor = '#c0392b'; valid = false; } else { nameEl.style.borderColor = ''; }
    if (!message) { messageEl.style.borderColor = '#c0392b'; valid = false; } else { messageEl.style.borderColor = ''; }
    if (!valid) return;

    console.log('[chat-widget] Сообщение отправлено:', { name: name, message: message });

    chatForm.style.display = 'none';
    chatSuccess.style.display = 'block';

    setTimeout(function () {
      closeChatWindow();
      setTimeout(function () {
        chatForm.reset();
        nameEl.style.borderColor = '';
        messageEl.style.borderColor = '';
      }, 300);
    }, 2500);
  });

  /* ── Приглашение не должно перекрывать баннер cookie ── */
  var cookieBanner = document.getElementById('cookie-banner');
  if (cookieBanner) {
    var syncCookieOffset = function () {
      var style = getComputedStyle(cookieBanner);
      var visible = style.display !== 'none' && parseFloat(style.opacity) > 0.05;
      var lift = visible ? Math.ceil(cookieBanner.getBoundingClientRect().height) + 16 : 0;
      document.documentElement.style.setProperty('--chat-lift', lift + 'px');
    };
    syncCookieOffset();
    new MutationObserver(syncCookieOffset).observe(cookieBanner, { attributes: true, attributeFilter: ['style'] });
    window.addEventListener('resize', syncCookieOffset);
  }

  if (isDismissed()) {
    console.log('[chat-widget] Приглашение уже было закрыто в этой сессии — повторный показ отключён.');
  }
})();
