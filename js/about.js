/* site_structure/js/about.js */

const aboutSections = {
  greifRu: `
    <div>
      <h2 style="font-size:28px; font-weight:900; color:var(--text-dark); letter-spacing:-0.01em; margin-bottom:20px">Грайф в России</h2>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:center; margin-bottom:40px">
        <div>
          <p style="font-size:15px; color:var(--text-muted); line-height:1.7; margin-bottom:16px">Компания Грайф работает на территории России с 1993 года. Под брендом Грайф производятся стальные бочки; пластиковая тара – IBC (еврокубы) и канистры; картонные контейнеры для битума. В 2023 году наша компания отметила 30-летний юбилей работы в России.</p>
          <p style="font-size:15px; color:var(--text-muted); line-height:1.7">В нашем бизнесе мы используем передовые технологии и оборудование, предъявляем самые строгие требования к качеству выпускаемой нами упаковки. Наши клиенты — все ведущие химические и нефтехимические компании России и СНГ, и мы гордимся долгим и плодотворным сотрудничеством!</p>
        </div>
        <div style="background:var(--green-light-bg); border-radius:20px; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,0.08)">
          <img src="http://www.greif.ru/wp-content/uploads/Proizvodstvennaya-set-Grajf-v-RF.jpg" alt="Производственная сеть Greif в России" style="width:100%; height:auto; display:block;">
        </div>
      </div>

      <p style="font-size:15px;color:var(--text-muted);line-height:1.7;margin-bottom:16px">На заводах Greif в России и СНГ реализован более чем вековой опыт компании в области производства промышленной упаковки. Жесткие корпоративные требования к качеству изготавливаемой продукции обеспечивают не только сохранность фасуемого продукта, но и гарантируют безопасность здоровья людей и окружающей среды.</p>
      <p style="font-size:15px;color:var(--text-muted);line-height:1.7;margin-bottom:16px">За годы работы на постсоветском пространстве Greif (до 1999 года — Van Leer) удалось сформировать партнерские отношения с ведущими предприятиями химической, нефтехимической, пищевой индустрии, закрепив свою позицию в качестве лидирующего производителя промышленной упаковки.</p>
      <p style="font-size:15px;color:var(--text-muted);line-height:1.7;margin-bottom:24px">В России расположены 8 производственных площадок, где производятся такие виды промышленной упаковки как стальные бочки, еврокубы, кловертейнеры и пластиковые канистры.</p>

      <div style="display:flex; flex-direction:column; gap:16px; margin-top:24px">
        <div style="display:flex; gap:16px; align-items:flex-start"><div style="min-width:100px; font-weight:700; color:var(--green-primary)">1993 год</div><div style="font-size:14px; color:var(--text-muted)">Первым звеном в производственной сети компании в России стал завод по производству стальных цилиндрических бочек в поселке Белоярский Свердловской области.</div></div>
        <div style="display:flex; gap:16px; align-items:flex-start"><div style="min-width:100px; font-weight:700; color:var(--green-primary)">1998 год</div><div style="font-size:14px; color:var(--text-muted)">Состоялось открытие завода по производству стальных бочек в Вологде, что позволило укрепить позиции компании в Центральном и Северо-Западном регионах.</div></div>
        <div style="display:flex; gap:16px; align-items:flex-start"><div style="min-width:100px; font-weight:700; color:var(--green-primary)">2003 год</div><div style="font-size:14px; color:var(--text-muted)">Открыт завод Greif по производству стальных бочек в Волгограде. Позже на той же производственной площадке запущена линия по изготовлению конических стальных бочек.</div></div>
        <div style="display:flex; gap:16px; align-items:flex-start"><div style="min-width:100px; font-weight:700; color:var(--green-primary)">2004 год</div><div style="font-size:14px; color:var(--text-muted)">В Перми состоялся запуск нового завода Greif по производству стальных бочек.</div></div>
        <div style="display:flex; gap:16px; align-items:flex-start"><div style="min-width:100px; font-weight:700; color:var(--green-primary)">2007 год</div><div style="font-size:14px; color:var(--text-muted)">Новые мощности по производству стальных бочек появились в Омске. В Казани началось производство IBC контейнеров (еврокубов).</div></div>
        <div style="display:flex; gap:16px; align-items:flex-start"><div style="min-width:100px; font-weight:700; color:var(--green-primary)">2010 год</div><div style="font-size:14px; color:var(--text-muted)">В Омске началось производство контейнеров типа Clovertainer® для фасовки битума.</div></div>
        <div style="display:flex; gap:16px; align-items:flex-start"><div style="min-width:100px; font-weight:700; color:var(--green-primary)">2014 год</div><div style="font-size:14px; color:var(--text-muted)">В Казани запущена линия по изготовлению еврокубов нового поколения GCube.</div></div>
        <div style="display:flex; gap:16px; align-items:flex-start"><div style="min-width:100px; font-weight:700; color:var(--green-primary)">2015 год</div><div style="font-size:14px; color:var(--text-muted)">В Рязани запущен новый цех Greif по производству кловертейнеров для битума.</div></div>
        <div style="display:flex; gap:16px; align-items:flex-start"><div style="min-width:100px; font-weight:700; color:var(--green-primary)">2018-19 год</div><div style="font-size:14px; color:var(--text-muted)">В Индустриальном парке Ворсино (Обнинск, Калужская область) стартовало производство стальных бочек и еврокубов IBC GCUBE.</div></div>
        <div style="display:flex; gap:16px; align-items:flex-start"><div style="min-width:100px; font-weight:700; color:var(--green-primary)">2022 год</div><div style="font-size:14px; color:var(--text-muted)">В Калужской области запущена линия по производству многослойных канистр для агрохимических продуктов.</div></div>
      </div>

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
