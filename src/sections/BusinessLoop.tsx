import { flowSteps } from '../content/siteContent';
import { SectionHeader } from '../components/SectionHeader';

export function BusinessLoop() {
  return (
    <section className="section loop-section">
      <SectionHeader
        eyebrow="效果如何实现"
        title="先跑一次结果，再决定要不要扩量"
        description="从数据诊断到试点验证，再到规模化扩量，用真实线索和经营数据证明系统是否值得投入。"
      />
      <div className="flow-grid">
        {flowSteps.map((step, index) => (
          <article className="flow-step" key={step.title}>
            <strong>{index + 1}</strong>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
