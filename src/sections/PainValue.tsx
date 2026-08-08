import { pains } from '../content/siteContent';
import { SectionHeader } from '../components/SectionHeader';

export function PainValue() {
  return (
    <section className="section" id="pain">
      <SectionHeader
        eyebrow="增长难题"
        title="这三刀，每天都在看不见的地方放血"
        description="线索在漏、人在走、钱在蒸发。Sabuddy 要解决的不是聊天效率，而是泛教育机构的结构性增长损耗。"
      />
      <div className="pain-grid">
        {pains.map((item) => (
          <article className="pain-card" key={item.pain}>
            <h3>{item.pain}</h3>
            <p>{item.value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
