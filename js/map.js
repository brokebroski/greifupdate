/* site_structure/js/map.js */

let _yandexMapInstance = null;

function initYandexMap() {
  if (_yandexMapInstance) {
    _yandexMapInstance.destroy();
    _yandexMapInstance = null;
  }
  const mapEl = document.getElementById('map');
  if (!mapEl) return;

  const cities = [
    { coords: [55.751574, 37.573856], name: 'Москва',           address: 'ул. Ленинская слобода, 19, ком. 2061', phone: '+7 (495) 933-59-47', email: 'Moscow.Office@greif.com' },
    { coords: [59.220492, 39.891567], name: 'Вологда',          address: 'ул. Маяковского, 38',                  phone: '+7 (8172) 26-40-13', email: 'Vologda.Office@greif.com' },
    { coords: [48.707103, 44.516939], name: 'Волгоград',        address: 'ул. Промысловая, 15',                  phone: '+7 (8442) 78-02-80', email: 'Aleksandr.Sedov@greif.com' },
    { coords: [58.010500, 56.250000], name: 'Пермь',            address: 'ул. Героев Хасана, 74',                phone: '+7 (342) 211-07-00', email: 'Anna.Egorova@greif.com' },
    { coords: [56.838011, 60.597466], name: 'П. Белоярский',    address: 'п. Белоярский, ул. Мира, 20',          phone: '+7 (34377) 21955',   email: 'Sergei.Dronov@greif.com' },
    { coords: [55.796127, 49.106405], name: 'Казань',           address: 'ул. М.Миля, 49А',                      phone: '+7 (843) 202-05-45', email: 'Marina.Leonova@greif.com' },
    { coords: [54.988480, 73.324236], name: 'Омск',             address: 'ул. И.Н. Багнюка, 10',                 phone: '+7 (381) 221-41-12', email: 'Aleksei.Kuzmin@greif.com' },
    { coords: [54.549650, 41.800000], name: 'Рязань',           address: 'ш. Ряжское, 20',                       phone: '+7 (491) 270-14-17', email: 'Moscow.Office@greif.com' },
    { coords: [54.153889, 36.273056], name: 'Калуга (Ворсино)', address: 'Индустриальный парк Ворсино',           phone: '+7 (4842) 92-21-01', email: 'Kaluga.Office@greif.com' },
  ];

  _yandexMapInstance = new ymaps.Map('map', {
    center: [58.0, 55.0],
    zoom: 4,
    controls: ['fullscreenControl'],
    suppressMapOpenBlock: true,
    behaviors: ['drag'],
  });

  _yandexMapInstance.behaviors.disable('scrollZoom');

  const kalugaPhoto = `<img src="http://www.greif.ru/wp-content/uploads/IMG_5171-scaled.jpeg" alt="Завод в Калуге" style="width:100%; max-width:260px; border-radius:6px; margin-top:8px; display:block"/>`;

  function makeBalloon(city) {
    const photo = city.name.startsWith('Калуга') ? kalugaPhoto : '';
    return `
      <div style="font-family:Roboto, sans-serif; min-width:200px">
        <strong style="color:#337761; font-size:16px">📍 ${city.name}</strong><br>
        <span style="font-size:13px; color:#333">${city.address}</span><br>
        <span style="font-size:13px; color:#555">📞 ${city.phone}</span><br>
        <span style="font-size:13px; color:#555">✉️ <a href="mailto:${city.email}" style="color:#337761; text-decoration:none">${city.email}</a></span>
        ${photo}
      </div>
    `;
  }

  cities.forEach(city => {
    const placemark = new ymaps.Placemark(city.coords, {
      hintContent: city.name,
      balloonContent: makeBalloon(city),
    }, {
      preset: 'islands#greenDotIcon',
      iconColor: '#337761',
    });
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
