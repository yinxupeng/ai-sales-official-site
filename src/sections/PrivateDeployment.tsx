import { deploymentItems } from '../content/siteContent';
import { SectionHeader } from '../components/SectionHeader';

export function PrivateDeployment() {
  return (
    <section className="section deployment-section" id="deployment">
      <SectionHeader
        eyebrow="增长为何可信"
        title="比技术公司更懂业务逻辑，比咨询公司更懂 AI 工程化"
        description="Sabuddy 的核心不是堆模型能力，而是把教育行业增长经验、AI-BASE 方法论和企业级交付能力合在一起。"
      />
      <div className="deployment-layout">
        <div className="deployment-copy">
          <h3>交付不是安装一个工具，而是落地一套增长系统</h3>
          <p>
            我们会协助完成诊断、方法论萃取、模型配置、企微通道、第三方接口、智能体流程、团队培训和结果验收。
          </p>
        </div>
        <div className="deployment-list">
          {deploymentItems.map((item) => (
            <article key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
