/* site_structure/js/components.js */

const PRODUCTS = [
  { cat: 'Стальные бочки', title: 'Стальные бочки', desc: 'Стальные бочки используются для транспортировки жидких, сыпучих и твердых продуктов, не оказывающих воздействия на сталь.', vol: '200 л', tag: '', icon: 'drum', img: 'http://www.greif.ru/wp-content/uploads/bochka.png', page: 'steelDrums' },
  { cat: 'Еврокубы', title: 'Еврокубы (IBC)', desc: 'Еврокубы — пластиковые контейнеры средней грузоподъемности (IBC), применяемые для перевозки наливных и насыпных грузов.', vol: '1000 л', tag: '', icon: 'ibc', img: 'http://www.greif.ru/wp-content/uploads/a30dcd01-81b5-4b2f-8da8-e76b82b62817.png', page: 'ibc' },
  { cat: 'Конические бочки', title: 'Конические бочки', desc: 'Стальная тара для транспортировки и хранения овощных и фруктовых концентратов, а также непищевых продуктов.', vol: '', tag: '', icon: 'conical', img: 'http://www.greif.ru/wp-content/uploads/konboch.png', page: 'conical' },
  { cat: 'Канистры', title: 'Канистры', desc: 'Многослойные канистры используются для хранения агрохимических продуктов.', vol: '', tag: '', icon: 'canister', img: 'http://www.greif.ru/wp-content/uploads/kan.png', page: 'canisters' },
  { cat: 'Кловертейнеры', title: 'Кловертейнеры', desc: 'Представляют собой картонные IBC, которые успешно применяются для фасовки битума и обеспечивают его эффективную логистику.', vol: '', tag: '', icon: 'clover', img: 'http://www.greif.ru/wp-content/uploads/klover.png', page: 'clover' },
];

const drumSVG = (color) => `<svg width="68" height="80" viewBox="0 0 80 90" fill="none">
  <rect x="15" y="10" width="50" height="70" rx="3" fill="${color}11" stroke="${color}" stroke-width="2.5"/>
  <ellipse cx="40" cy="16" rx="25" ry="7" fill="${color}22" stroke="${color}" stroke-width="2"/>
  <ellipse cx="40" cy="74" rx="25" ry="7" fill="${color}22" stroke="${color}" stroke-width="2"/>
  <rect x="15" y="34" width="50" height="8" fill="${color}" opacity="0.7"/>
  <rect x="15" y="52" width="50" height="8" fill="${color}" opacity="0.7"/>
</svg>`;

const ibcSVG = (color) => `<svg width="80" height="76" viewBox="0 0 100 90" fill="none">
  <rect x="5" y="20" width="90" height="56" rx="3" fill="${color}11" stroke="${color}" stroke-width="2.5"/>
  <rect x="18" y="10" width="64" height="14" rx="3" fill="${color}22" stroke="${color}" stroke-width="2"/>
  <rect x="0" y="70" width="100" height="14" rx="2" fill="${color}22" stroke="${color}" stroke-width="2"/>
  <line x1="5" y1="38" x2="95" y2="38" stroke="${color}" stroke-width="1" stroke-dasharray="6 3" opacity="0.5"/>
  <line x1="5" y1="52" x2="95" y2="52" stroke="${color}" stroke-width="1" stroke-dasharray="6 3" opacity="0.5"/>
</svg>`;

const conicalSVG = (color) => `<svg width="60" height="80" viewBox="0 0 80 90" fill="none">
  <polygon points="40,10 70,70 10,70" fill="${color}11" stroke="${color}" stroke-width="2.5"/>
  <ellipse cx="40" cy="70" rx="30" ry="8" fill="${color}22" stroke="${color}" stroke-width="2"/>
  <line x1="30" y1="40" x2="50" y2="40" stroke="${color}" stroke-width="2"/>
</svg>`;

const canisterSVG = (color) => `<svg width="54" height="80" viewBox="0 0 70 90" fill="none">
  <rect x="12" y="20" width="46" height="60" rx="4" fill="${color}11" stroke="${color}" stroke-width="2.5"/>
  <rect x="20" y="10" width="30" height="14" rx="3" fill="${color}22" stroke="${color}" stroke-width="2"/>
  <rect x="26" y="36" width="18" height="26" rx="2" fill="none" stroke="${color}" stroke-width="1.5" stroke-dasharray="4 2"/>
</svg>`;

const cloverSVG = (color) => `<svg width="70" height="70" viewBox="0 0 100 90" fill="none">
  <rect x="10" y="15" width="80" height="60" rx="5" fill="${color}11" stroke="${color}" stroke-width="2.5" stroke-dasharray="5 3"/>
  <rect x="25" y="5" width="50" height="14" rx="2" fill="${color}22" stroke="${color}" stroke-width="2"/>
  <path d="M30 45 L70 45 M50 25 L50 65" stroke="${color}" stroke-width="1.5" stroke-dasharray="4 2"/>
</svg>`;

function getIcon(type, color) {
  if (type === 'drum') return drumSVG(color);
  if (type === 'ibc') return ibcSVG(color);
  if (type === 'conical') return conicalSVG(color);
  if (type === 'canister') return canisterSVG(color);
  if (type === 'clover') return cloverSVG(color);
  return drumSVG(color);
}

function productCard(p) {
  const nav = p.page && PAGES[p.page] ? `navigateProductSubpage('${p.page}')` : `navigate('products')`;
  return `
  <div class="product-card" onclick="${nav}">
    <div class="product-card-stripe"></div>
    <div class="product-card-img">${p.img ? `<img src="${p.img}" alt="${p.title}" style="max-height:128px;max-width:100%;object-fit:contain;">` : getIcon(p.icon, '#337761')}</div>
    <div class="product-card-body">
      <div class="product-card-title">${p.title}</div>
      <div class="product-card-desc">${p.desc}</div>
      ${p.vol ? `<div class="product-card-volume">${p.vol}</div>` : ''}
    </div>
    <div class="product-card-footer">
      ${p.tag ? `<span class="product-tag">${p.tag}</span>` : '<span></span>'}
      <button class="product-link" onclick="event.stopPropagation();${nav}">ПЕРЕЙТИ →</button>
    </div>
  </div>`;
}

function filterProducts(btn, filter) {
  document.querySelectorAll('#filter-bar button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const categoryMap = {
    'Стальные бочки': 'Стальные бочки',
    'Еврокубы': 'Еврокубы',
    'Конические бочки': 'Конические бочки',
    'Канистры': 'Канистры',
    'Кловертейнеры': 'Кловертейнеры',
  };

  const filtered = filter === 'Все' ? PRODUCTS : PRODUCTS.filter(p => p.cat === categoryMap[filter]);
  grid.innerHTML = filtered.map(productCard).join('');
}
