// Header.jsx — Greif СНГ corporate site header
const { useState } = React;

function Header({ currentPage = 'home', onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const nav = [
    { id: 'home', label: 'Главная' },
    { id: 'products', label: 'Продукция' },
    { id: 'services', label: 'Услуги' },
    { id: 'about', label: 'О компании' },
    { id: 'contact', label: 'Контакты' },
  ];

  return (
    <header style={headerStyles.root}>
      {/* Top bar */}
      <div style={headerStyles.topBar}>
        <div style={headerStyles.topInner}>
          <span style={headerStyles.topText}>Производитель упаковки №1 в мире</span>
          <div style={headerStyles.topLinks}>
            <a href="#" style={headerStyles.topLink}>RU</a>
            <span style={{color:'#555'}}>|</span>
            <a href="#" style={headerStyles.topLink}>EN</a>
            <span style={{color:'#555', margin:'0 8px'}}>·</span>
            <a href="tel:+7800" style={headerStyles.topLink}>+7 (800) 700-00-00</a>
          </div>
        </div>
      </div>
      {/* Main nav */}
      <div style={headerStyles.main}>
        <div style={headerStyles.mainInner}>
          <div style={headerStyles.logo} onClick={() => onNavigate && onNavigate('home')}>
            <span style={headerStyles.logoText}>greif</span>
            <span style={headerStyles.logoDivider}></span>
            <span style={headerStyles.logoSub}>СНГ</span>
          </div>
          <nav style={headerStyles.nav}>
            {nav.map(item => (
              <a
                key={item.id}
                href="#"
                style={{
                  ...headerStyles.navLink,
                  ...(currentPage === item.id ? headerStyles.navLinkActive : {})
                }}
                onClick={e => { e.preventDefault(); onNavigate && onNavigate(item.id); }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button style={headerStyles.cta} onClick={() => onNavigate && onNavigate('contact')}>
            Запросить цену
          </button>
        </div>
      </div>
    </header>
  );
}

const headerStyles = {
  root: { fontFamily: "'Roboto', Arial, sans-serif", position: 'relative', zIndex: 100 },
  topBar: { background: '#111', padding: '7px 0' },
  topInner: { maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  topText: { fontSize: 11, color: '#888', letterSpacing: '0.04em' },
  topLinks: { display: 'flex', alignItems: 'center', gap: 8 },
  topLink: { fontSize: 11, color: '#aaa', textDecoration: 'none' },
  main: { background: '#fff', borderBottom: '3px solid #f28900' },
  mainInner: { maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', gap: 32, height: 64 },
  logo: { display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', flexShrink: 0 },
  logoText: { fontFamily: "'Roboto', sans-serif", fontWeight: 900, fontSize: 32, color: '#f28900', letterSpacing: -1.5, lineHeight: 1 },
  logoDivider: { width: 1, height: 28, background: '#e0e0e0', display: 'block' },
  logoSub: { fontFamily: "'Roboto Condensed', sans-serif", fontWeight: 700, fontSize: 13, color: '#888', letterSpacing: '0.12em', textTransform: 'uppercase' },
  nav: { display: 'flex', gap: 4, flex: 1 },
  navLink: { fontSize: 13, fontWeight: 500, color: '#333', textDecoration: 'none', padding: '6px 12px', borderRadius: 3, letterSpacing: '0.01em', transition: 'color 0.15s' },
  navLinkActive: { color: '#f28900', fontWeight: 700 },
  cta: { background: '#f28900', color: '#fff', border: 'none', borderRadius: 4, padding: '10px 20px', fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontSize: 13, cursor: 'pointer', letterSpacing: '0.03em', textTransform: 'uppercase', whiteSpace: 'nowrap' },
};

Object.assign(window, { Header });
