/* site_structure/js/map.js */

let _yandexMapInstance = null;

const _officeSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
  <rect x="12" y="28" width="56" height="44" rx="2" fill="none" stroke="#337761" stroke-width="4"/>
  <line x1="8" y1="28" x2="72" y2="28" stroke="#337761" stroke-width="4"/>
  <line x1="40" y1="8" x2="40" y2="28" stroke="#337761" stroke-width="3"/>
  <polygon points="40,6 56,16 40,26" fill="#337761"/>
  <rect x="18" y="35" width="11" height="9" fill="none" stroke="#337761" stroke-width="2.5"/>
  <rect x="51" y="35" width="11" height="9" fill="none" stroke="#337761" stroke-width="2.5"/>
  <rect x="18" y="49" width="11" height="9" fill="none" stroke="#337761" stroke-width="2.5"/>
  <rect x="51" y="49" width="11" height="9" fill="none" stroke="#337761" stroke-width="2.5"/>
  <rect x="33" y="56" width="14" height="16" fill="none" stroke="#337761" stroke-width="2.5"/>
</svg>`;

const ICON_URLS = {
  barrel:       'http://www.greif.ru/wp-content/uploads/znachok-bochka.png',
  clovertainer: 'http://www.greif.ru/wp-content/uploads/znachok-klov.png',
  cube:         'http://www.greif.ru/wp-content/uploads/znachok-kub.png',
  office:       'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(_officeSvg),
};

function initYandexMap() {
  if (_yandexMapInstance) {
    _yandexMapInstance.destroy();
    _yandexMapInstance = null;
  }
  const mapEl = document.getElementById('map');
  if (!mapEl) return;

  const cities = [
    { coords: [55.751574, 37.573856], name: 'Москва',           address: 'ул. Ленинская слобода, 19, ком. 2061', phone: '+7 (495) 933-59-47', email: 'Moscow.Office@greif.com',      icons: ['office'] },
    { coords: [59.220492, 39.891567], name: 'Вологда',          address: 'ул. Маяковского, 38',                  phone: '+7 (8172) 26-40-13', email: 'Vologda.Office@greif.com',     icons: ['barrel'] },
    { coords: [48.707103, 44.516939], name: 'Волгоград',        address: 'ул. Промысловая, 15',                  phone: '+7 (8442) 78-02-80', email: 'Aleksandr.Sedov@greif.com',    icons: ['barrel'] },
    { coords: [58.010500, 56.250000], name: 'Пермь',            address: 'ул. Героев Хасана, 74',                phone: '+7 (342) 211-07-00', email: 'Anna.Egorova@greif.com',       icons: ['barrel'] },
    { coords: [56.838011, 60.597466], name: 'П. Белоярский',    address: 'п. Белоярский, ул. Мира, 20',          phone: '+7 (343) 389-09-79', email: 'Sergei.Dronov@greif.com',      icons: ['barrel'] },
    { coords: [55.796127, 49.106405], name: 'Казань',           address: 'ул. М.Миля, 49А',                      phone: '+7 (843) 202-05-45', email: 'Marina.Leonova@greif.com',     icons: ['cube'] },
    { coords: [54.988480, 73.324236], name: 'Омск',             address: 'ул. И.Н. Багнюка, 10',                 phone: '+7 (381) 221-41-12', email: 'Aleksei.Kuzmin@greif.com',     icons: ['barrel', 'clovertainer'] },
    { coords: [54.549650, 41.800000], name: 'Рязань',           address: 'ш. Ряжское, 20',                       phone: '+7 (491) 270-14-17', email: 'Moscow.Office@greif.com',      icons: ['clovertainer'] },
    { coords: [54.153889, 36.273056], name: 'Калуга (Ворсино)', address: 'Индустриальный парк Ворсино',           phone: '+7 (4842) 92-21-01', email: 'Kaluga.Office@greif.com',      icons: ['barrel', 'cube'] },
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

  function addPlacemark(coords, city, iconType) {
    let options;
    if (iconType) {
      const iconUrl = ICON_URLS[iconType];
      const FilteredLayout = ymaps.templateLayoutFactory.createClass(
        '<img src="' + iconUrl + '" style="width:27px;height:27px;display:block;' +
        'margin-left:-13px;margin-top:-27px;' +
        'filter:brightness(0) saturate(100%) invert(38%) sepia(50%) saturate(600%) hue-rotate(115deg) brightness(80%);"/>'
      );
      options = {
        iconLayout: FilteredLayout,
        iconShape: { type: 'Rectangle', coordinates: [[-13, -27], [14, 0]] },
      };
    } else {
      options = {
        preset: 'islands#greenDotIcon',
        iconColor: '#337761',
      };
    }

    const placemark = new ymaps.Placemark(coords, {
      hintContent: city.name,
      balloonContent: makeBalloon(city),
    }, options);

    _yandexMapInstance.geoObjects.add(placemark);
  }

  cities.forEach(city => {
    if (city.icons.length === 0) {
      addPlacemark(city.coords, city, null);
    } else if (city.icons.length === 1) {
      addPlacemark(city.coords, city, city.icons[0]);
    } else {
      const offsetLng = 3.0;
      city.icons.forEach((iconType, i) => {
        const shift = (i - (city.icons.length - 1) / 2) * offsetLng;
        const coords = [city.coords[0], city.coords[1] + shift];
        addPlacemark(coords, city, iconType);
      });
    }
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
