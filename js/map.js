/* site_structure/js/map.js */

let _yandexMapInstance = null;

function initYandexMap() {
  if (_yandexMapInstance) {
    _yandexMapInstance.destroy();
    _yandexMapInstance = null;
  }
  const mapEl = document.getElementById('map');
  if (!mapEl) return;

  const cities = {
    moscow:       { coords: [55.751574, 37.573856], name: 'Москва',           address: 'ул. Ленинская слобода, 19, ком. 2061', phone: '+7 (495) 933-59-47', email: 'Moscow.Office@greif.com' },
    vologda:      { coords: [59.220492, 39.891567], name: 'Вологда',          address: 'ул. Маяковского, 38',                  phone: '+7 (8172) 26-40-13', email: 'Vologda.Office@greif.com' },
    volgograd:    { coords: [48.707103, 44.516939], name: 'Волгоград',        address: 'ул. Промысловая, 15',                  phone: '+7 (8442) 78-02-80', email: 'Aleksandr.Sedov@greif.com' },
    perm:         { coords: [58.010500, 56.250000], name: 'Пермь',            address: 'ул. Героев Хасана, 74',                phone: '+7 (342) 211-07-00', email: 'Anna.Egorova@greif.com' },
    ekaterinburg: { coords: [56.838011, 60.597466], name: 'Екатеринбург',     address: 'п. Белоярский, ул. Мира, 20',          phone: '+7 (343) 389-09-79', email: 'Sergei.Dronov@greif.com' },
    kazan:        { coords: [55.796127, 49.106405], name: 'Казань',           address: 'ул. М.Миля, 49А',                      phone: '+7 (843) 202-05-45', email: 'Marina.Leonova@greif.com' },
    omsk:         { coords: [54.988480, 73.324236], name: 'Омск',             address: 'ул. И.Н. Багнюка, 10',                 phone: '+7 (381) 221-41-12', email: 'Aleksei.Kuzmin@greif.com' },
    ryazan:       { coords: [54.626530, 39.691600], name: 'Рязань',           address: 'ш. Ряжское, 20',                       phone: '+7 (491) 270-14-17', email: 'Moscow.Office@greif.com' },
    kaluga:       { coords: [54.553889, 36.273056], name: 'Калуга (Ворсино)', address: 'Индустриальный парк Ворсино',           phone: '+7 (4842) 92-21-01', email: 'Kaluga.Office@greif.com' },
  };

  _yandexMapInstance = new ymaps.Map('map', {
    center: [58.0, 55.0],
    zoom: 4,
    controls: ['fullscreenControl'],
    suppressMapOpenBlock: true,
    behaviors: ['drag'],
  });

  _yandexMapInstance.behaviors.disable('scrollZoom');

  const barrelSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
    <rect x="20" y="12" width="40" height="56" rx="6" fill="none" stroke="#337761" stroke-width="4"/>
    <ellipse cx="40" cy="18" rx="20" ry="6" fill="none" stroke="#337761" stroke-width="3"/>
    <ellipse cx="40" cy="62" rx="20" ry="6" fill="none" stroke="#337761" stroke-width="3"/>
    <line x1="20" y1="35" x2="60" y2="35" stroke="#337761" stroke-width="2.5"/>
    <line x1="20" y1="45" x2="60" y2="45" stroke="#337761" stroke-width="2.5"/>
  </svg>`;
  const barrelIconUrl = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(barrelSvg);

  Object.values(cities).forEach(city => {
    const isKaluga = city.name.startsWith('Калуга');

    const placemarkOptions = isKaluga
      ? {
          iconLayout: 'default#image',
          iconImageHref: barrelIconUrl,
          iconImageSize: [40, 40],
          iconImageOffset: [-20, -20],
        }
      : {
          preset: 'islands#greenIcon',
          iconColor: '#337761',
        };

    const placemark = new ymaps.Placemark(city.coords, {
      hintContent: city.name,
      balloonContent: `
        <div style="font-family:Roboto, sans-serif; min-width:200px">
          <strong style="color:#337761; font-size:16px">📍 ${city.name}</strong><br>
          <span style="font-size:13px; color:#333">${city.address}</span><br>
          <span style="font-size:13px; color:#555">📞 ${city.phone}</span><br>
          <span style="font-size:13px; color:#555">✉️ <a href="mailto:${city.email}" style="color:#337761; text-decoration:none">${city.email}</a></span>
        </div>
      `,
    }, placemarkOptions);

    _yandexMapInstance.geoObjects.add(placemark);
  });
}

if (typeof ymaps !== 'undefined') {
  ymaps.ready(initYandexMap);
} else {
  window.addEventListener('load', function() {
    if (typeof ymaps !== 'undefined') {
      ymaps.ready(initYandexMap);
    }
  });
}
