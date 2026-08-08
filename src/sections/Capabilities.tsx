import { capabilities } from '../content/siteContent';
import { SectionHeader } from '../components/SectionHeader';

export function Capabilities() {
  return (
    <section className="section" id="capabilities">
      <SectionHeader
        eyebrow="系统能力"
        title="AI 不只是会回复，而是直接进入成交链路"
        description="Sabuddy 把销冠经验、销售 SOP、客户阶段和 AI 工程化能力组合成一套可落地、可复盘、可扩量的增长系统。"
      />
      <div className="capability-grid">
        {capabilities.map((item, index) => (
          <article className="capability-card" key={item.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
