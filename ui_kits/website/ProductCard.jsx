// ProductCard.jsx — Greif product card component
function ProductCard({ category, categoryColor = '#f28900', title, desc, volume, tag, onLearnMore }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      style={{ ...pcStyles.card, ...(hovered ? pcStyles.cardHover : {}) }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ ...pcStyles.stripe, background: categoryColor }}></div>
      <div style={pcStyles.imgBox}>
        <ProductIcon category={category} color={categoryColor} />
      </div>
      <div style={pcStyles.body}>
        <div style={{ ...pcStyles.catLabel, color: categoryColor }}>{category}</div>
        <div style={pcStyles.title}>{title}</div>
        <div style={pcStyles.desc}>{desc}</div>
        {volume && <div style={pcStyles.volume}>{volume}</div>}
      </div>
      <div style={pcStyles.footer}>
        {tag && <span style={{ ...pcStyles.tag, background: categoryColor + '18', color: categoryColor }}>{tag}</span>}
        <button style={{ ...pcStyles.link, color: categoryColor }} onClick={onLearnMore}>
          Подробнее →
        </button>
      </div>
    </div>
  );
}

function ProductIcon({ category, color }) {
  const icons = {
    'Стальные бочки': (
      <svg width="64" height="72" viewBox="0 0 80 90" fill="none">
        <rect x="15" y="12" width="50" height="66" rx="5" fill="#f8f8f8" stroke={color} strokeWidth="3"/>
        <ellipse cx="40" cy="18" rx="25" ry="7" fill="#f0f0f0" stroke={color} strokeWidth="2.5"/>
        <ellipse cx="40" cy="72" rx="25" ry="7" fill="#f0f0f0" stroke={color} strokeWidth="2.5"/>
        <rect x="15" y="37" width="50" height="8" fill={color} opacity="0.8"/>
        <rect x="15" y="52" width="50" height="8" fill={color} opacity="0.8"/>
      </svg>
    ),
    'Пластиковые барабаны': (
      <svg width="64" height="72" viewBox="0 0 80 90" fill="none">
        <rect x="14" y="20" width="52" height="58" rx="10" fill="#f0f7ff" stroke={color} strokeWidth="3"/>
        <rect x="24" y="10" width="32" height="14" rx="4" fill="#f0f7ff" stroke={color} strokeWidth="2.5"/>
        <ellipse cx="40" cy="72" rx="26" ry="6" fill="#e0ecf8" stroke={color} strokeWidth="2"/>
      </svg>
    ),
    'Кубовые ёмкости (IBC)': (
      <svg width="64" height="72" viewBox="0 0 90 90" fill="none">
        <rect x="8" y="24" width="74" height="52" rx="4" fill="#f5f0ff" stroke={color} strokeWidth="3"/>
        <rect x="20" y="14" width="50" height="14" rx="3" fill="#f5f0ff" stroke={color} strokeWidth="2"/>
        <rect x="0" y="70" width="90" height="14" rx="3" fill="#ede6ff" stroke={color} strokeWidth="2"/>
        <rect x="26" y="34" width="38" height="28" rx="2" fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="4 2"/>
      </svg>
    ),
    'Канистры': (
      <svg width="48" height="72" viewBox="0 0 60 90" fill="none">
        <rect x="10" y="20" width="40" height="60" rx="6" fill="#e8f7fa" stroke={color} strokeWidth="3"/>
        <rect x="18" y="10" width="24" height="14" rx="4" fill="#e8f7fa" stroke={color} strokeWidth="2.5"/>
        <rect x="22" y="36" width="16" height="28" rx="2" fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="4 2"/>
      </svg>
    ),
  };
  return icons[category] || icons['Стальные бочки'];
}

const pcStyles = {
  card: { background: '#fff', border: '1px solid #e8e8ea', borderRadius: 4, overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative', transition: 'box-shadow 0.2s, transform 0.2s', cursor: 'default' },
  cardHover: { boxShadow: '0 8px 24px rgba(0,0,0,0.12)', transform: 'translateY(-2px)' },
  stripe: { height: 4, width: '100%' },
  imgBox: { padding: '24px 16px 12px', display: 'flex', justifyContent: 'center', background: '#fafafa', borderBottom: '1px solid #f0f0f0' },
  body: { padding: '16px 18px 12px' },
  catLabel: { fontFamily: "'Roboto Condensed', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6 },
  title: { fontFamily: "'Roboto', sans-serif", fontSize: 15, fontWeight: 700, color: '#111', marginBottom: 8, lineHeight: 1.3 },
  desc: { fontSize: 12, color: '#666', lineHeight: 1.55 },
  volume: { marginTop: 8, fontSize: 11, fontWeight: 700, color: '#888', fontFamily: "'Roboto Condensed', sans-serif", letterSpacing: '0.04em' },
  footer: { padding: '10px 18px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' },
  tag: { fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 2, textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: "'Roboto Condensed', sans-serif" },
  link: { fontSize: 12, fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: "'Roboto', sans-serif", padding: 0 },
};

Object.assign(window, { ProductCard, ProductIcon });
