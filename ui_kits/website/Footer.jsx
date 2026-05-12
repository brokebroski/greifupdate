// Footer.jsx — Greif СНГ site footer
function Footer() {
  const cols = [
    {
      heading: 'Продукция',
      links: ['Стальные бочки', 'Пластиковые барабаны', 'Кубовые ёмкости (IBC)', 'Канистры', 'Восстановление тары'],
    },
    {
      heading: 'Компания',
      links: ['О Greif', 'История', 'Сертификаты', 'Устойчивое развитие', 'Пресс-центр'],
    },
    {
      heading: 'Отрасли',
      links: ['Химическая промышленность', 'Нефть и газ', 'Пищевая промышленность', 'Фармацевтика', 'Автомобильная'],
    },
    {
      heading: 'Контакты',
      links: ['Офисы СНГ', 'Дистрибьюторы', 'Запрос цены', 'Техподдержка'],
    },
  ];

  return (
    <footer style={footerStyles.root}>
      <div style={footerStyles.inner}>
        {/* Brand column */}
        <div style={footerStyles.brand}>
          <div style={footerStyles.logo}>greif</div>
          <div style={footerStyles.logoSub}>СНГ</div>
          <p style={footerStyles.desc}>
            Производитель промышленной упаковки №1 в мире. Стандарты безопасности UN.
          </p>
          <div style={footerStyles.tagline}>Packaging Success Together</div>
        </div>
        {/* Link columns */}
        {cols.map(col => (
          <div key={col.heading} style={footerStyles.col}>
            <div style={footerStyles.colHeading}>{col.heading}</div>
            {col.links.map(link => (
              <a key={link} href="#" style={footerStyles.link}>{link}</a>
            ))}
          </div>
        ))}
      </div>
      {/* Bottom bar */}
      <div style={footerStyles.bottom}>
        <div style={footerStyles.bottomInner}>
          <span style={footerStyles.copy}>© 2024 Greif, Inc. Все права защищены.</span>
          <div style={footerStyles.bottomLinks}>
            <a href="#" style={footerStyles.bottomLink}>Политика конфиденциальности</a>
            <a href="#" style={footerStyles.bottomLink}>Условия использования</a>
            <a href="#" style={footerStyles.bottomLink}>www.greif.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerStyles = {
  root: { background: '#111', fontFamily: "'Roboto', sans-serif" },
  inner: { maxWidth: 1200, margin: '0 auto', padding: '48px 32px 40px', display: 'flex', gap: 40 },
  brand: { width: 200, flexShrink: 0 },
  logo: { fontWeight: 900, fontSize: 32, color: '#f28900', letterSpacing: -1.5, lineHeight: 1, marginBottom: 2 },
  logoSub: { fontFamily: "'Roboto Condensed', sans-serif", fontSize: 11, fontWeight: 700, color: '#555', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 14 },
  desc: { fontSize: 12, color: '#666', lineHeight: 1.6, marginBottom: 14 },
  tagline: { fontSize: 10, fontWeight: 700, color: '#f28900', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: "'Roboto Condensed', sans-serif" },
  col: { flex: 1, display: 'flex', flexDirection: 'column', gap: 0 },
  colHeading: { fontFamily: "'Roboto Condensed', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#f28900', marginBottom: 14 },
  link: { fontSize: 12, color: '#777', textDecoration: 'none', paddingBottom: 9, display: 'block', lineHeight: 1.3 },
  bottom: { borderTop: '1px solid #222', background: '#0a0a0a' },
  bottomInner: { maxWidth: 1200, margin: '0 auto', padding: '14px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  copy: { fontSize: 11, color: '#555' },
  bottomLinks: { display: 'flex', gap: 20 },
  bottomLink: { fontSize: 11, color: '#555', textDecoration: 'none' },
};

Object.assign(window, { Footer });
