// Hero.jsx — Greif СНГ homepage hero unit
const { useState } = React;

function Hero({ onNavigate }) {
  return (
    <div style={heroStyles.root}>
      {/* Background with industrial feel */}
      <div style={heroStyles.bg}>
        <div style={heroStyles.bgOverlay}></div>
        <div style={heroStyles.bgPattern}></div>
      </div>
      <div style={heroStyles.content}>
        <div style={heroStyles.eyebrow}>Производитель упаковки №1 в мире</div>
        <h1 style={heroStyles.headline}>
          Промышленная<br />
          <span style={{color:'#f28900'}}>упаковка</span> для<br />
          вашего бизнеса
        </h1>
        <p style={heroStyles.sub}>
          Стальные бочки, пластиковые барабаны, IBC-контейнеры и канистры для химической, нефтяной и пищевой промышленности. Стандарты безопасности UN.
        </p>
        <div style={heroStyles.actions}>
          <button style={heroStyles.btnPrimary} onClick={() => onNavigate && onNavigate('products')}>
            Смотреть продукцию
          </button>
          <button style={heroStyles.btnSecondary} onClick={() => onNavigate && onNavigate('contact')}>
            Запросить цену
          </button>
        </div>
        <div style={heroStyles.stats}>
          {[
            { num: '40+', label: 'лет опыта' },
            { num: '220+', label: 'заводов в мире' },
            { num: '35+', label: 'стран СНГ и мира' },
            { num: 'UN', label: 'сертификация' },
          ].map(s => (
            <div key={s.num} style={heroStyles.statItem}>
              <div style={heroStyles.statNum}>{s.num}</div>
              <div style={heroStyles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Right visual — drum illustration placeholder */}
      <div style={heroStyles.visual}>
        <svg width="280" height="320" viewBox="0 0 280 320" fill="none">
          {/* Main barrel */}
          <rect x="60" y="40" width="160" height="240" rx="12" fill="#1a1a1a" stroke="#f28900" strokeWidth="3"/>
          <ellipse cx="140" cy="52" rx="80" ry="22" fill="#222" stroke="#f28900" strokeWidth="3"/>
          <ellipse cx="140" cy="268" rx="80" ry="22" fill="#222" stroke="#f28900" strokeWidth="3"/>
          {/* Bands */}
          <rect x="60" y="110" width="160" height="14" fill="#f28900" opacity="0.9"/>
          <rect x="60" y="196" width="160" height="14" fill="#f28900" opacity="0.9"/>
          {/* Greif label */}
          <rect x="80" y="140" width="120" height="48" rx="4" fill="#f28900"/>
          <text x="140" y="158" textAnchor="middle" fontFamily="Roboto, sans-serif" fontWeight="900" fontSize="18" fill="#fff" letterSpacing="-0.5">greif</text>
          <text x="140" y="178" textAnchor="middle" fontFamily="Roboto Condensed, sans-serif" fontWeight="700" fontSize="9" fill="rgba(255,255,255,0.8)" letterSpacing="2">UN CERTIFIED</text>
          {/* Rim highlights */}
          <line x1="60" y1="80" x2="220" y2="80" stroke="#333" strokeWidth="1.5"/>
          <line x1="60" y1="240" x2="220" y2="240" stroke="#333" strokeWidth="1.5"/>
        </svg>
      </div>
    </div>
  );
}

const heroStyles = {
  root: { position: 'relative', background: '#0d0d0d', minHeight: 480, display: 'flex', alignItems: 'center', overflow: 'hidden', padding: '60px 0' },
  bg: { position: 'absolute', inset: 0 },
  bgOverlay: { position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(0,0,0,0.95) 50%, rgba(0,0,0,0.5) 100%)' },
  bgPattern: { position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(242,137,0,0.04) 39px, rgba(242,137,0,0.04) 40px)', backgroundSize: '40px 40px' },
  content: { position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '0 32px', flex: 1 },
  eyebrow: { fontFamily: "'Roboto Condensed', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#f28900', marginBottom: 16 },
  headline: { fontFamily: "'Roboto', sans-serif", fontSize: 52, fontWeight: 900, lineHeight: 1.1, color: '#fff', letterSpacing: '-0.02em', marginBottom: 20 },
  sub: { fontSize: 15, color: '#aaa', lineHeight: 1.6, maxWidth: 480, marginBottom: 32 },
  actions: { display: 'flex', gap: 12, marginBottom: 48 },
  btnPrimary: { background: '#f28900', color: '#fff', border: 'none', borderRadius: 4, padding: '14px 28px', fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontSize: 14, cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.04em' },
  btnSecondary: { background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.3)', borderRadius: 4, padding: '12px 26px', fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontSize: 14, cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.04em' },
  stats: { display: 'flex', gap: 40 },
  statItem: { display: 'flex', flexDirection: 'column', gap: 2 },
  statNum: { fontFamily: "'Roboto', sans-serif", fontSize: 28, fontWeight: 900, color: '#f28900', letterSpacing: '-0.01em' },
  statLabel: { fontSize: 11, color: '#666', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: "'Roboto Condensed', sans-serif", fontWeight: 700 },
  visual: { position: 'absolute', right: 80, top: '50%', transform: 'translateY(-50%)', zIndex: 2 },
};

Object.assign(window, { Hero });
