import { navItems } from '../content/siteContent';

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>Sabuddy 企业版</strong>
        <p>泛教育行业 AI 增长销售系统。</p>
      </div>
      <nav>
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>
    </footer>
  );
}
