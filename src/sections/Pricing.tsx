import { Check } from 'lucide-react';
import { plans } from '../content/siteContent';
import { SectionHeader } from '../components/SectionHeader';

export function Pricing() {
  return (
    <section className="section pricing-section" id="pricing">
      <SectionHeader
        eyebrow="落地路径"
        title="不先谈报价，先算划不划算"
        description="客单价越高，回本门槛越低。多成几单、少养几个人、少流失一批线索，试点就有明确商业账。"
      />
      <div className="plan-grid">
        {plans.map((plan) => (
          <article className={`plan-card ${plan.highlighted ? 'highlighted' : ''}`} key={plan.name}>
            <span className="plan-tag">{plan.tag}</span>
            <h3>{plan.name}</h3>
            <p>{plan.audience}</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <Check size={16} /> {feature}
                </li>
              ))}
            </ul>
            <a className={plan.highlighted ? 'btn primary full' : 'btn ghost full'} href="#demo">
              {plan.cta}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
