import { scenarios } from '../content/siteContent';
import { SectionHeader } from '../components/SectionHeader';

export function Scenarios() {
  return (
    <section className="section" id="scenarios">
      <SectionHeader
        eyebrow="适用行业"
        title="每个泛教育赛道，都在为增长焦虑买单"
        description="只要增长卡在线索到成交的链路里，Sabuddy 都可以先用一批线索验证，再决定是否规模化。"
      />
      <div className="scenario-grid">
        {scenarios.map((scenario) => (
          <article className="scenario-card" key={scenario.title}>
            <h3>{scenario.title}</h3>
            <p>{scenario.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
