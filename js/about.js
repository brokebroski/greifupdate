/* site_structure/js/about.js */

/* ─── Заполните photo: 'URL' когда будут готовы фотографии ─── */
const FACTORY_PHOTOS = {
  belojarsky:  { name: 'Белоярский',          photo: '' },
  vologda:     { name: 'Вологда',             photo: '' },
  volgograd:   { name: 'Волгоград',           photo: '' },
  perm:        { name: 'Пермь',               photo: '' },
  kazan:       { name: 'Казань',              photo: '' },
  omsk:        { name: 'Омск',               photo: '' },
  omsk2:       { name: 'Омск',               photo: '' },
  ryazan:      { name: 'Рязань',              photo: '' },
  kaluga:      { name: 'Калуга (Ворсино)',    photo: 'http://www.greif.ru/wp-content/uploads/IMG_5171-scaled.jpeg' },
  kaluga2:     { name: 'Калуга (Ворсино)',    photo: '' },
  angarsk:     { name: 'Ангарск',             photo: '' },
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

function openFactoryPhoto(key) {
  const f = FACTORY_PHOTOS[key];
  if (!f) return;
  const modal = document.getElementById('factory-photo-modal');
  if (!modal) return;
  document.getElementById('factory-modal-picker').style.display = 'none';
  document.getElementById('factory-modal-title').textContent = f.name;
  const imgEl = document.getElementById('factory-modal-img');
  if (f.photo) {
    imgEl.src = f.photo;
    imgEl.style.display = 'block';
    document.getElementById('factory-modal-placeholder').style.display = 'none';
  } else {
    imgEl.src = '';
    imgEl.style.display = 'none';
    document.getElementById('factory-modal-placeholder').style.display = 'flex';
  }
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function _openFactoryDot(keys) {
  if (keys.length === 1) { openFactoryPhoto(keys[0]); return; }
  const modal = document.getElementById('factory-photo-modal');
  if (!modal) return;
  document.getElementById('factory-modal-img').style.display = 'none';
  document.getElementById('factory-modal-placeholder').style.display = 'none';
  document.getElementById('factory-modal-title').textContent = 'Выберите площадку';
  const picker = document.getElementById('factory-modal-picker');
  picker.innerHTML = keys.map(k => {
    const f = FACTORY_PHOTOS[k];
    const name = f ? f.name : k;
    return `<button onclick="openFactoryPhoto('${k}')"
      style="display:block;width:100%;text-align:left;padding:14px 18px;
             border:1px solid var(--border);border-radius:8px;background:#fff;
             font-size:14px;font-weight:600;color:var(--text-dark);cursor:pointer;
             transition:background 0.15s,border-color 0.15s"
      onmouseover="this.style.background='var(--green-light-bg)';this.style.borderColor='var(--green-primary)'"
      onmouseout="this.style.background='#fff';this.style.borderColor='var(--border)'"
    >${name}</button>`;
  }).join('');
  picker.style.display = 'flex';
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeFactoryPhoto() {
  const modal = document.getElementById('factory-photo-modal');
  if (modal) modal.style.display = 'none';
  document.body.style.overflow = '';
}

function _buildFactoryMapHtml() {
  const dots = FACTORY_DOTS.map(d => {
    const label = d.keys.map(k => FACTORY_PHOTOS[k] ? FACTORY_PHOTOS[k].name : k).join(' / ');
    const keysJson = JSON.stringify(d.keys).replace(/"/g, '&quot;');
    const multi = d.keys.length > 1;
    return `<button
      onclick="_openFactoryDot(${JSON.stringify(d.keys).replace(/"/g, "'")})"
      title="${label}"
      class="factory-map-dot"
      style="position:absolute;left:${d.left}%;top:${d.top}%;
             transform:translate(-50%,-50%);
             width:${multi ? 30 : 25}px;height:${multi ? 30 : 25}px;border-radius:50%;
             background:rgba(70,155,128,0.85);border:2.5px solid #fff;
             cursor:pointer;padding:0;z-index:2"
      onmouseover="this.style.animationPlayState='paused';this.style.transform='translate(-50%,-50%) scale(1.4)';this.style.boxShadow='0 0 0 6px rgba(70,155,128,0.45)'"
      onmouseout="this.style.animationPlayState='running';this.style.transform='translate(-50%,-50%) scale(1)';this.style.boxShadow=''"
    >${multi ? '<svg width="10" height="10" viewBox="0 0 10 10" fill="#fff"><circle cx="2.5" cy="5" r="1.5"/><circle cx="5" cy="5" r="1.5"/><circle cx="7.5" cy="5" r="1.5"/></svg>' : ''}</button>`;
  }).join('');

  return `
    <style>
      @keyframes factory-dot-pulse {
        0%   { box-shadow: 0 0 0 0   rgba(70,155,128,0.7); }
        60%  { box-shadow: 0 0 0 10px rgba(70,155,128,0);  }
        100% { box-shadow: 0 0 0 0   rgba(70,155,128,0);   }
      }
      .factory-map-dot {
        animation: factory-dot-pulse 2s ease-out infinite;
        transition: transform 0.15s;
      }
    </style>
    <div id="factory-map-wrap"
         style="position:relative;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.10);background:#f0f8f5;user-select:none;margin-bottom:32px">
      <img src="http://www.greif.ru/wp-content/uploads/30-let-v-Rossii-2.jpg"
           alt="Заводы Грайф в России"
           style="width:100%;height:auto;display:block;pointer-events:none">
      ${dots}
    </div>

    <div id="factory-photo-modal"
         style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.72);
                z-index:9999;align-items:center;justify-content:center;padding:24px"
         onclick="if(event.target===this)closeFactoryPhoto()">
      <div style="background:#fff;border-radius:16px;overflow:hidden;max-width:680px;width:100%;
                  box-shadow:0 24px 64px rgba(0,0,0,0.35)">
        <div style="display:flex;align-items:center;justify-content:space-between;
                    padding:16px 20px;border-bottom:1px solid var(--border)">
          <div style="font-family:'Roboto Condensed',sans-serif;font-size:13px;font-weight:700;
                      letter-spacing:0.1em;text-transform:uppercase;color:var(--green-primary)">
            Завод Грайф
          </div>
          <button onclick="closeFactoryPhoto()"
                  style="background:none;border:none;cursor:pointer;padding:4px;color:var(--text-muted);
                         display:flex;align-items:center;justify-content:center;border-radius:6px"
                  onmouseover="this.style.background='#f5f5f5'"
                  onmouseout="this.style.background='none'">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div style="padding:24px">
          <h3 id="factory-modal-title"
              style="font-size:22px;font-weight:900;color:var(--text-dark);margin:0 0 16px"></h3>
          <div id="factory-modal-picker"
               style="display:none;flex-direction:column;gap:10px"></div>
          <img id="factory-modal-img" src="" alt=""
               style="width:100%;height:auto;border-radius:10px;display:none">
          <div id="factory-modal-placeholder"
               style="display:flex;align-items:center;justify-content:center;
                      height:220px;border-radius:10px;background:var(--green-light-bg);
                      color:var(--text-muted);font-size:14px;gap:10px">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 stroke-width="1.5" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/></svg>
            Фото будет добавлено позже
          </div>
        </div>
      </div>
    </div>`;
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
      <h2 style="font-size:28px;font-weight:900;color:var(--text-dark);letter-spacing:-0.01em;margin-bottom:24px">История Greif Inc.</h2>
      <p style="font-size:15px;color:var(--text-muted);line-height:1.7;margin-bottom:24px">Greif Inc. является мировым лидером в области производства промышленной упаковки. Компания производит широкий ассортимент упаковки из металлов, полимеров, бумаги и картона, а также предоставляет услуги по смешению, фасовке и упаковке химической продукции для различных отраслей промышленности.</p>

      <p style="font-size:15px;color:var(--text-muted);line-height:1.7;margin-bottom:16px">История компании Greif началась в 1877 году в Кливленде (штат Огайо, США), когда Вильямом Грайфом и Альбертом Вандервайстом была основана бондарная мастерская «Vanderwyst and Greif». После смерти Вандервайста в 1882 году компания стала семейным бизнесом четверых братьев Грайф. В 1890 произошли смена названия на «Greif Brothers Company» и регистрация новой организации.</p>
      <p style="font-size:15px;color:var(--text-muted);line-height:1.7;margin-bottom:16px">Основным направлением бизнеса компании стало производство бочек, ящиков, кадок и прочих емкостей для хранения. Благодаря высокому качеству бочек, бизнес Greif процветал, и компания приобрела 300 000 акров лесных угодий для того, чтобы обеспечивать заводы сырьем. Greif до сих пор владеет земельными участками на юго-востоке США и в Канаде. В 1926 году компания совершила первую эмиссию ценных бумаг от лица Greif Bros. Cooperage Corporation.</p>
      <p style="font-size:15px;color:var(--text-muted);line-height:1.7;margin-bottom:16px">В период Второй мировой войны продажи стальных бочек составляли 50% от всей выручки Greif, и было очевидно, что деревянные бочки проигрывают по сравнению с более легкой стальной упаковкой. Во второй половине 1900-х, компания переключилась от производства деревянных бочек и кадок на выпуск тары из картона, стали, пластика, среднетоннажных контейнеров, многослойной упаковки и пр. В 1951 году штаб-квартира компании была перенесена из Кливленда в Делавер, штат Огайо; компания получила название Greif Bros. Corporation.</p>
      <p style="font-size:15px;color:var(--text-muted);line-height:1.7;margin-bottom:16px">Развитие Greif в период 1990-х годов явилось результатом серии поглощений. Приобретение в 1998 году подразделения промышленной упаковки у американской компании Sonoco Products Company сделало Greif лидером американского рынка промышленной упаковки. В 2001 году Greif выкупила бизнес промышленной упаковки у Huhtamaki Van Leer. После поглощения Van Leer, компания Greif Bros. Corporation была переименована в Greif Inc. и появилась новая международная торговая марка, которая используется в настоящее время. С 2002 года акции компании торгуются на Нью-Йоркской Фондовой Бирже.</p>
      <p style="font-size:15px;color:var(--text-muted);line-height:1.7">В 2003 году в состав Greif Inc. вошла компания CorrChoice Inc. (США), состоящая из семи заводов по производству гофрированного картона. В 2006 году Greif осуществила еще два значимых поглощения — Delta Petroleum Company Inc. (США) и Blagden Packaging Group (Великобритания). 2010 год ознаменовался присоединением направления гибкой упаковки. В 2011 году Greif осуществила поглощение итальянской компании Fustiplast s.r.l. В 2020-х в состав Greif вошли Ipackchem, Reliance Products, Colepak, Centurionibc, LeeContainer и ряд других компаний.</p>
    </div>
  `,

  sustainability: `
    <div>
      <h2 style="font-size:28px;font-weight:900;color:var(--text-dark);letter-spacing:-0.01em;margin-bottom:24px">Устойчивое развитие</h2>
      <p style="font-size:15px;color:var(--text-muted);line-height:1.7;margin-bottom:16px">Выступая в качестве признанного лидера на рынке промышленной упаковки, Greif предлагает продукцию и услуги, которые максимально удовлетворяют потребностям клиентов. Безопасность достигается в результате сочетания высоких стандартов производства, глобальной сети поставок и уникальной корпоративной культуры The Greif Way.</p>
      <p style="font-size:15px;color:var(--text-muted);line-height:1.7;margin-bottom:16px">В мире все большим спросом пользуется продукция, которая оказывает минимум негативного воздействия на окружающую среду и производится в соответствии с принципами устойчивого развития. Устойчивое развитие представляет собой единственный путь удовлетворения потребностей возрастающего числа жителей нашей планеты и обеспечения экономического роста без ущерба для природы.</p>
      <p style="font-size:15px;color:var(--text-muted);line-height:1.7;margin-bottom:16px">Корпорация Greif Inc. активно использует принципы «sustainability» в своей деятельности. Начиная с 2003 года Greif ведет активную работу в направлении сокращения расходов во всех сферах деятельности, охватывая закупки, производство и продажу, что реализуется с использованием принципов бережливого производства (lean manufacturing). Целью компании в рамках реализуемой политики является «ноль отходов», отправляемых на полигоны.</p>
      <p style="font-size:15px;color:var(--text-muted);line-height:1.7;margin-bottom:16px">Восстановление упаковки удлиняет ее жизненный цикл, что значительно уменьшает объем потребляемых сырьевых ресурсов. С 2010 года клиентам Greif был предложен сервис сбора использованной тары (IBC — еврокубы). В России создана одна из крупнейших сетей по восстановлению жесткой промышленной упаковки в РФ.</p>
      <p style="font-size:15px;color:var(--text-muted);line-height:1.7">Вторичная переработка упаковки позволяет снизить нагрузку на окружающую среду. В частности, большинство стальных бочек могут быть подвергнуты 100%-ой переработке; промышленные пластиковые упаковочные продукты также могут быть утилизированы как лом и вторично использованы в производстве паллет или иных продуктов из дробленого пластика.</p>
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

function switchAboutSection(sectionId) {
  currentAboutSection = sectionId;
  const contentDiv = document.getElementById('about-content');
  if (contentDiv && aboutSections[sectionId]) {
    contentDiv.innerHTML = aboutSections[sectionId];
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
