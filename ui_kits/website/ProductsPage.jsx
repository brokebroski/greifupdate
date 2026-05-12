// ProductsPage.jsx — Products listing page
function ProductsPage({ onNavigate }) {
  const products = [
    { category: 'Стальные бочки', color: '#f28900', title: 'Стальные бочки 200 л', desc: 'Стандарт UN, открытая и закрытая крышки. Для химической и нефтяной отрасли.', volume: '60 / 100 / 200 л', tag: 'UN Cert' },
    { category: 'Стальные бочки', color: '#f28900', title: 'Стальные конические бочки', desc: 'Штабелируемые, оцинкованные. Для сухих сыпучих и жидких продуктов.', volume: '80 / 216 л', tag: 'Топ продаж' },
    { category: 'Пластиковые барабаны', color: '#0070cd', title: 'Пластиковые барабаны L-Ring', desc: 'HDPE, пищевой класс или технический. Открытая и закрытая крышка.', volume: '30 / 60 / 120 / 220 л', tag: 'Пищевой класс' },
    { category: 'Пластиковые барабаны', color: '#0070cd', title: 'Реконструированные барабаны', desc: 'Восстановленные UN-сертифицированные барабаны из HDPE.', volume: '60 / 220 л', tag: 'Эко-линейка' },
    { category: 'Кубовые ёмкости (IBC)', color: '#7e55c3', title: 'IBC-контейнеры стальная клетка', desc: 'Бутыль HDPE в стальной обрешётке, паллетное основание. UN-сертификат.', volume: '600 / 1000 / 1250 л', tag: 'UN Cert' },
    { category: 'Канистры', color: '#008fbe', title: 'Канистры HDPE', desc: 'Прямоугольные, стойкие к химическим воздействиям. Крышка Ø63 мм.', volume: '5 / 10 / 20 / 30 л', tag: 'В наличии' },
  ];

  const [activeFilter, setActiveFilter] = React.useState('Все');
  const filters = ['Все', 'Стальные бочки', 'Пластиковые барабаны', 'Кубовые ёмкости (IBC)', 'Канистры'];
  const filtered = activeFilter === 'Все' ? products : products.filter(p => p.category === activeFilter);

  return (
    <div style={ppStyles.root}>
      {/* Page header */}
      <div style={ppStyles.hero}>
        <div style={ppStyles.heroInner}>
          <div style={ppStyles.eyebrow}>Продукция</div>
          <h1 style={ppStyles.title}>Промышленная тара Greif</h1>
          <p style={ppStyles.sub}>Полный ассортимент UN-сертифицированной упаковки для любой отрасли</p>
        </div>
      </div>
      {/* Filters */}
      <div style={ppStyles.filtersBar}>
        <div style={ppStyles.filtersInner}>
          {filters.map(f => (
            <button
              key={f}
              style={{ ...ppStyles.filter, ...(activeFilter === f ? ppStyles.filterActive : {}) }}
              onClick={() => setActiveFilter(f)}
            >{f}</button>
          ))}
        </div>
      </div>
      {/* Grid */}
      <div style={ppStyles.grid}>
        {filtered.map((p, i) => (
          <ProductCard
            key={i}
            category={p.category}
            categoryColor={p.color}
            title={p.title}
            desc={p.desc}
            volume={p.volume}
            tag={p.tag}
            onLearnMore={() => {}}
          />
        ))}
      </div>
    </div>
  );
}

const ppStyles = {
  root: { background: '#f5f5f7', minHeight: '60vh' },
  hero: { background: '#0d0d0d', borderBottom: '3px solid #f28900', padding: '40px 0 36px' },
  heroInner: { maxWidth: 1200, margin: '0 auto', padding: '0 32px' },
  eyebrow: { fontFamily: "'Roboto Condensed', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#f28900', marginBottom: 10 },
  title: { fontFamily: "'Roboto', sans-serif", fontSize: 36, fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', marginBottom: 10 },
  sub: { fontSize: 14, color: '#888' },
  filtersBar: { background: '#fff', borderBottom: '1px solid #e8e8ea' },
  filtersInner: { maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', gap: 4, alignItems: 'center', height: 52 },
  filter: { fontFamily: "'Roboto Condensed', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '6px 14px', border: '1.5px solid #e0e0e0', borderRadius: 3, background: '#fff', color: '#666', cursor: 'pointer' },
  filterActive: { background: '#f28900', color: '#fff', border: '1.5px solid #f28900' },
  grid: { maxWidth: 1200, margin: '0 auto', padding: '32px 32px 48px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 },
};

Object.assign(window, { ProductsPage });
