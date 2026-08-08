import { useEffect, useState } from 'react';
import {
  ArrowRight,
  Bot,
  Brain,
  Check,
  ChevronDown,
  ChevronRight,
  MessageCircle,
  MessageSquareText,
  Network,
  Sparkles,
  Target,
} from 'lucide-react';
import heroProduct from './assets/generated/hero-product.png';
import wechatQr from './assets/contact/wechat-qr.png';
import workflowAgent from '../resource/1.png';
import workflowBuilder from '../resource/4.png';
import workflowClaw from '../resource/5.png';
import industryHealth from '../resource/大健康.png';
import industryEducation from '../resource/教培.png';
import industryLocal from '../resource/本地生活.png';
import industryRetail from '../resource/电商与零售.png';
import industryFinance from '../resource/金融与科技.png';
import customerLogo1 from '../resource/logo1.jpeg';
import customerLogo2 from '../resource/logo2.png';
import customerLogo3 from '../resource/logo3.jpeg';
import customerLogo4 from '../resource/logo4.jpeg';
import customerLogo5 from '../resource/logo5.png';
import customerLogo6 from '../resource/logo6.png';
import customerLogo8 from '../resource/logo8.png';
import customerLogo9 from '../resource/logo9.png';
import customerLogo10 from '../resource/logo10.png';

const navItems = [
  { label: '首页', href: '#home' },
  { label: '产品服务', href: '#产品服务' },
  { label: '价格', href: '#价格' },
  { label: '关于我们', href: '#关于我们' },
  { label: '博客', href: '#博客' },
  { label: '开发文档', href: '#开发文档' },
];

const loginUrl = 'http://124.174.58.77/kf-adm/login';

const partnerLogos = [
  { name: '优秀客户 logo 1', src: customerLogo1 },
  { name: '优秀客户 logo 2', src: customerLogo2 },
  { name: '优秀客户 logo 3', src: customerLogo3 },
  { name: '优秀客户 logo 4', src: customerLogo4 },
  { name: '优秀客户 logo 5', src: customerLogo5 },
  { name: '优秀客户 logo 6', src: customerLogo6 },
  { name: '优秀客户 logo 8', src: customerLogo8 },
  { name: '优秀客户 logo 9', src: customerLogo9 },
  { name: '优秀客户 logo 10', src: customerLogo10 },
];
const customerLogos = ['Shopify', 'Shopee', 'SUPERLIVE', 'Skool', 'Floom', 'Vercel', 'Zyxel', 'ZENLESS', 'HackerOne', 'OpenStore'];

const metrics = [
  {
    value: '7×24h',
    title: '全天候在线',
    desc: '销售、客服、社媒私信持续响应，不错过每一次咨询和转化窗口。',
  },
  {
    value: '3分钟',
    title: '极速上线',
    desc: '导入知识库、配置角色、接入渠道，即可让 AI 销冠开始工作。',
  },
  {
    value: '多渠道',
    title: '全域协同',
    desc: '覆盖官网、Instagram、小红书、WhatsApp、企微等核心获客触点。',
  },
  {
    value: 'AI Agent',
    title: '主动开单',
    desc: '从回复问题升级为识别意向、推进话术、触发工具和提醒人工接管。',
  },
];

const tools = [
  {
    icon: Target,
    label: 'Sabuddy Agent',
    title: 'AI 销冠，主动跟进客户',
    desc: '自动识别客户阶段，调用销售 SOP，完成咨询、邀约、报价与复购触达。',
  },
  {
    icon: Network,
    label: 'Sabuddy Builder',
    title: '低门槛搭建，一句话配置业务流程',
    desc: '把线索分配、知识库、转人工、工具调用和数据回写组合成可执行流程。',
  },
  {
    icon: Brain,
    label: 'Sabuddy Claw',
    title: 'Agent 技能市场',
    desc: '安装社媒获客、竞品截胡、客服质检、线索评分等技能，快速扩展团队能力。',
  },
];

const pricing = [
  {
    name: '体验版',
    sub: '适合小团队验证 AI 销售效果',
    price: '¥9,800',
    unit: '/年',
    features: ['1 个 AI 销冠角色', '3 个渠道接入', '基础知识库', '标准数据看板', '在线技术支持'],
  },
  {
    name: '专业版',
    sub: '适合增长团队规模化获客',
    price: '¥29,800',
    unit: '/年',
    hot: true,
    features: ['5 个 AI 销冠角色', '10 个渠道接入', '销售 SOP 编排', '工具调用与回写', '专属交付顾问'],
  },
  {
    name: '商业版',
    sub: '适合多业务线协同运营',
    price: '¥59,800',
    unit: '/年',
    features: ['20 个 AI 销冠角色', '全渠道接入', '多团队权限管理', '高级数据分析', 'API 集成支持'],
  },
  {
    name: '企业版',
    sub: '适合集团与私有化部署',
    price: '个性化',
    unit: '',
    features: ['私有化部署', '独立模型与知识库', 'SSO 与审计日志', '系统深度集成', '企业 SLA 服务'],
  },
];

const faqs = [
  '什么是 Sabuddy？',
  '接入 Sabuddy 需要开发吗？',
  'Sabuddy 可以接入哪些销售渠道？',
  'AI 回复不准确怎么办？',
  '是否支持人工接管和团队协作？',
  '企业数据是否安全？',
  '上线周期一般需要多久？',
  '如何申请企业版演示？',
];

const newsItems = [
  {
    tag: '功能更新',
    time: '约 9 分钟',
    date: '2026年7月8日',
    coverTitle: '让最懂业务的人',
    coverSub: '3分钟搭建 AI 销冠智能体',
    title: '「功能更新」Sabuddy Builder：让最懂业务的人，3 分钟搭建 AI 销冠智能体',
    desc: 'AI 客服已经不是问题。真正的问题是：企业怎么搭建并持续维护一个真正可用、可迭代、能推动成交的 AI 销冠系统。',
  },
  {
    tag: '解决方案',
    time: '约 11 分钟',
    date: '2026年7月2日',
    coverTitle: '金牌客服不再难',
    coverSub: 'AI 客服接入抖音私信',
    title: '「解决方案」AI 客服接入抖音私信，金牌客服不再难复制',
    desc: '面向广告投放、直播咨询和私域承接场景，Sabuddy 帮助团队统一响应标准，提升私信线索转化效率。',
  },
  {
    tag: '功能更新',
    time: '约 7 分钟',
    date: '2026年6月25日',
    coverTitle: '群越多，客服越忙？',
    coverSub: '让 AI 客服帮你盯企微群',
    title: '「功能更新」群越多，客服响应越慢？让 AI 客服帮你回复企微群',
    desc: '把群咨询、关键词提醒、线索识别和人工接管串成自动流程，让客服团队在高并发场景下也能稳定响应。',
  },
];

const workflowTabs = [
  {
    key: 'agent',
    label: 'SabuddyAgent',
    icon: MessageSquareText,
    image: workflowAgent,
    title: 'SabuddyAgent',
    desc: '像真人销售一样主动接待、判断意向、推荐方案，并持续推进客户完成购买决策。',
    bullets: ['主动识别客户需求', '引导咨询进入购买路径', '关键时刻提醒人工接管'],
  },
  {
    key: 'builder',
    label: 'SabuddyBuilder',
    icon: Bot,
    image: workflowBuilder,
    title: 'SabuddyBuilder',
    desc: '把销售话术、知识库、转人工条件和工具调用配置成可执行流程，让团队快速复制销冠能力。',
    bullets: ['3 分钟配置销售流程', '知识库与 SOP 一体编排', '数据回写业务系统'],
  },
  {
    key: 'claw',
    label: 'SabuddyClaw',
    icon: Sparkles,
    image: workflowClaw,
    title: 'SabuddyClaw',
    desc: '自动安装 AI 技能，覆盖获客、客服、跟进、转化与复购运营。',
    bullets: ['一句话安装销售技能', '全渠道客户动作自动触发', '与人工团队无缝协同'],
  },
];

const industryScenarios = [
  {
    title: '大健康',
    desc: '健康咨询 + 项目方案推荐 + 到院/到店预约转化',
    image: industryHealth,
  },
  {
    title: '电商与零售',
    desc: '新客接待 + 智能选品推荐 + 大促期间万单无压力',
    image: industryRetail,
  },
  {
    title: '教培',
    desc: '课程咨询 + 试听邀约 + 续费 / 转介绍闭环',
    image: industryEducation,
  },
  {
    title: '金融与科技',
    desc: '线索筛选 + 产品咨询 + 风险提示 + 顾问接管',
    image: industryFinance,
    wide: true,
  },
  {
    title: '本地生活',
    desc: '门店咨询 + 套餐推荐 + 预约提醒 + 复购运营',
    image: industryLocal,
    wide: true,
  },
];

const aboutValues = [
  '我们的愿景是每个企业不在为增长担忧',
  '我们希望每家企业在 AI 生产力面前不走弯路',
  '我们协助企业搭建一套基于 AI 的增长与交付体系',
  'AI 销售是基于运营和持续自我迭代的新增长体系',
];

const aboutProductValues = [
  {
    stage: '快速扩张期',
    points: [
      'AI 销售实现接单量至少 4 倍提升，缓解市场红利期的市占率问题',
      '帮助企业在获客窗口期更快吃到红利，把线索扩张转化为订单扩张',
    ],
  },
  {
    stage: '成熟稳定期',
    points: [
      'AI 销售有效削峰填谷，让销售团队有更多精力服务高价值客户',
      'AI 销售帮助团队突破单产极限，稳定复制优秀 SOP 且千人千面落地执行',
      '严格执行 SOP 动作，过程好，结果才稳定',
    ],
  },
  {
    stage: '转型期',
    points: [
      'AI 销售避免当前业务和未来业务之间产生摩擦',
      '快速解决新业务的产能平均问题，让新生产验证速度提升 3 倍',
    ],
  },
  {
    stage: '衰落期',
    points: ['AI 销售通过降本增效，为企业保留转型和修复现金流的空间'],
  },
];

const aboutProductInsights = [
  {
    title: '4 代 AI 销售迭代',
    points: [
      '客户与知识库结合，让留学公司落地后实现新人成单留存提升',
      '托管直面客户，保健品社群与单聊长期转化率提升，人工成本降低',
      'K12、兴趣教育、AI 课等场景中，可视化人机结合带来接单量提升',
      '系统持续自研迭代中，把模型能力沉淀成更稳定的销售流程',
    ],
  },
  {
    title: 'AI 非工具',
    points: [
      'AI 是新的管理体系和协作模式',
      'AI 工作流需要重新覆盖传统工作模式',
      '真正的价值不只是回复，而是让团队围绕增长目标重新组织执行',
    ],
  },
];

export default function App() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  const openTrialModal = () => setIsTrialModalOpen(true);
  const closeTrialModal = () => setIsTrialModalOpen(false);

  return (
    <div className="site-page">
      <Header onTrialClick={openTrialModal} />
      <HomePage onTrialClick={openTrialModal} />
      <Footer />
      <TrialQrModal isOpen={isTrialModalOpen} onClose={closeTrialModal} />
    </div>
  );
}

function HomePage({ onTrialClick }: { onTrialClick: () => void }) {
  return (
    <main>
      <WechatContact />
      <Hero onTrialClick={onTrialClick} />
      <LogoBand />
      <Metrics />
      <ToolCards />
      <Workflow />
      <CustomerStrip />
      <Industries />
      <Pricing />
      <News />
      <FAQ />
      <AboutSection />
      <DeveloperDocs />
      <FinalCTA onTrialClick={onTrialClick} />
    </main>
  );
}

function WechatContact() {
  return (
    <aside className="wechat-contact" aria-label="企业微信联系方式">
      <div className="wechat-contact-card">
        <img src={wechatQr} alt="添加企业微信二维码" />
        <p>扫描立即体验</p>
      </div>
      <button className="wechat-contact-button" type="button" aria-label="添加企业微信">
        <MessageCircle size={27} strokeWidth={1.75} />
      </button>
      <span className="wechat-contact-label">扫描体验</span>
    </aside>
  );
}

function Header({ onTrialClick }: { onTrialClick: () => void }) {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Sabuddy 首页">
        <span className="brand-dot">S</span>
        <strong>Sabuddy.ai</strong>
      </a>
      <nav className="nav-links">
        {navItems.map((item) => (
          <a href={item.href} key={item.label}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <a href={loginUrl} target="_blank" rel="noreferrer">登录</a>
        <button className="nav-button" onClick={onTrialClick} type="button">免费试用</button>
      </div>
    </header>
  );
}

function AboutSection() {
  return (
    <section className="about-page section-wrap" id="关于我们">
      <div className="about-hero">
        <div>
          <div className="eyebrow">About Sabuddy</div>
          <h2>关于我们</h2>
        </div>
        <p>
          Sabuddy 致力于帮助企业把 AI 从工具变成增长体系。我们相信，AI 销售不是简单替代客服回复，而是协助企业建立可运营、可交付、可持续迭代的销售增长系统。
        </p>
      </div>

      <div className="about-section">
        <SectionTitle title="我们的价值观" desc="让企业在 AI 时代少走弯路，把增长能力真正沉淀到组织里。" />
        <div className="about-value-grid">
          {aboutValues.map((value, index) => (
            <article className="about-value-card" key={value}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{value}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="about-section">
        <SectionTitle title="产品价值" desc="企业在不同阶段需要不同的增长答案，AI 销售的价值是让销售动作持续稳定地产生结果。" />
        <div className="about-stage-grid">
          {aboutProductValues.map((group) => (
            <article className="about-stage-card" key={group.stage}>
              <h3>{group.stage}</h3>
              <ul>
                {group.points.map((point) => (
                  <li key={point}><Check size={15} /> {point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <div className="about-section">
        <SectionTitle title="我们对产品的理解" desc="AI 销售不是一个单点工具，而是一套围绕增长目标重新组织的管理体系、协作模式和执行流程。" />
        <div className="about-insight-grid">
          {aboutProductInsights.map((insight) => (
            <article className="about-insight-card" key={insight.title}>
              <h3>{insight.title}</h3>
              <div>
                {insight.points.map((point) => (
                  <p key={point}>{point}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeveloperDocs() {
  return (
    <section className="developer-docs section-wrap" id="开发文档">
      <SectionTitle title="开发文档" desc="面向企业交付、私有化部署和系统集成的技术接入说明。" />
      <div className="docs-grid">
        <article>
          <span>01</span>
          <h3>渠道接入</h3>
          <p>支持官网、企微、社媒私信、CRM 等触点接入，统一沉淀咨询、线索和客户状态。</p>
        </article>
        <article>
          <span>02</span>
          <h3>知识库与 SOP</h3>
          <p>导入企业知识库、销售话术、转人工规则和跟进节奏，让 AI 按业务流程执行。</p>
        </article>
        <article>
          <span>03</span>
          <h3>私有化部署</h3>
          <p>支持本地服务器、独立数据库、权限审计、业务系统接口和企业级 SLA 交付。</p>
        </article>
      </div>
      <a className="primary-button" href="#demo">联系技术顾问</a>
    </section>
  );
}

function Hero({ onTrialClick }: { onTrialClick: () => void }) {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <div className="eyebrow">下一代 AI 销售增长系统 · Sabuddy Enterprise</div>
        <h1>
          <span>Sabuddy.ai</span> 是成交导向的 AI 销冠智能体
        </h1>
        <p>
          7x24 小时在线，自动回复、主动跟进、精准转人工，帮助企业把每一条咨询线索转化为可衡量的增长结果。
        </p>
        <div className="hero-actions">
          <button className="primary-button" onClick={onTrialClick} type="button">免费试用</button>
          <a className="secondary-button" href="#产品服务">
            观看演示 <ArrowRight size={14} />
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <img src={heroProduct} alt="Sabuddy AI 销售工作台界面" />
      </div>
    </section>
  );
}

function LogoBand() {
  return (
    <section className="logo-band section-wrap">
      <h2>像一线高手这样，被行业先行者验证</h2>
      <p>连接客户、渠道、知识库与销售动作，让 AI 成为团队的持续增长引擎</p>
      <div className="logo-marquee" aria-label="优秀客户 logo">
        <div className="logo-track">
          {[...partnerLogos, ...partnerLogos].map((logo, index) => (
            <span className="logo-card" key={`${logo.name}-${index}`}>
              <img src={logo.src} alt={logo.name} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section className="metrics section-wrap">
      <SectionTitle title="不是客服，而是像真人一样主动成交的 AI 销售" desc="主动理解需求、持续服务客户、引导购买决策，让咨询、跟进、转化和复购形成闭环。" />
      <div className="metric-grid">
        {metrics.map((item) => (
          <article className="metric-card" key={item.title}>
            <div>{item.value}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ToolCards() {
  return (
    <section className="tools section-wrap" id="产品服务">
      <SectionTitle title="不是被动的对话工具，而是更强的销冠团队" desc="把知识、话术、工具调用和转化策略整合成可执行 Agent。" />
      <div className="tool-grid">
        {tools.map((tool) => (
          <article className="tool-card" key={tool.title}>
            <span className="tool-label">{tool.label}</span>
            <div className="tool-icon-stage">
              <tool.icon className="tool-icon" size={68} strokeWidth={1.25} />
            </div>
            <h3>{tool.title}</h3>
            <p>{tool.desc}</p>
            <a href="#demo">
              了解更多 <ChevronRight size={13} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Workflow() {
  const [activeTab, setActiveTab] = useState(workflowTabs[0].key);
  const activeWorkflow = workflowTabs.find((tab) => tab.key === activeTab) ?? workflowTabs[0];

  return (
    <section className="workflow section-wrap">
      <SectionTitle
        title="三位一体的 AI 销冠系统"
        desc='不是"客服机器人"，而是会主动开单、会全渠道作战、3 分钟可上岗的销冠团队'
      />
      <div className="switcher" role="tablist" aria-label="产品模块">
        {workflowTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.key === activeWorkflow.key;

          return (
            <button
              aria-selected={isActive}
              className={isActive ? 'active' : undefined}
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              role="tab"
              type="button"
            >
              <Icon size={18} />
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="browser-frame">
        <img src={activeWorkflow.image} alt={`${activeWorkflow.label} 产品界面`} />
      </div>
      <div className="workflow-note">
        <h3>{activeWorkflow.title}</h3>
        <p>{activeWorkflow.desc}</p>
        <ul>
          {activeWorkflow.bullets.map((item) => (
            <li key={item}><Check size={14} /> {item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CustomerStrip() {
  return (
    <section className="customer-strip section-wrap">
      <h2>被 4000+ 企业选择，像一线团队这样验证</h2>
      <div className="customer-row">
        {customerLogos.map((logo) => (
          <span key={logo}>{logo}</span>
        ))}
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="industries section-wrap">
      <SectionTitle title="为你的行业量身打造，开箱即用" desc="沉淀高频成交场景，把复杂咨询转化为清晰、稳定、可复制的增长流程。" />
      <div className="industry-grid">
        {industryScenarios.map((scenario) => (
          <article className={scenario.wide ? 'industry-card wide' : 'industry-card'} key={scenario.title}>
            <img src={scenario.image} alt={`${scenario.title}行业占位图`} />
            <div className="industry-card-copy">
              <h3>{scenario.title}</h3>
              <p>{scenario.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="pricing section-wrap" id="价格">
      <SectionTitle title="价格" desc="选择适合当前团队阶段的 AI 销冠方案" />
      <div className="billing-toggle">
        <span>月付</span>
        <strong>年付省 20%</strong>
      </div>
      <div className="pricing-grid">
        {pricing.map((plan) => (
          <article className={plan.hot ? 'price-card hot' : 'price-card'} key={plan.name}>
            {plan.hot && <span className="hot-tag">推荐</span>}
            <h3>{plan.name}</h3>
            <p>{plan.sub}</p>
            <div className="price">
              <strong>{plan.price}</strong>
              <span>{plan.unit}</span>
            </div>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}><Check size={13} /> {feature}</li>
              ))}
            </ul>
            <a href="#demo">立即咨询</a>
          </article>
        ))}
      </div>
    </section>
  );
}

function News() {
  return (
    <section className="news section-wrap" id="博客">
      <SectionTitle title="最新动态" desc="产品更新、行业洞察与 AI 销售实践" />
      <div className="news-list">
        {newsItems.map((item, index) => (
          <article className="news-item" key={item.title}>
            <div className={`news-cover cover-${index + 1}`}>
              <strong>{item.coverTitle}</strong>
              <span>{item.coverSub}</span>
              <em>{item.tag}</em>
            </div>
            <div className="news-copy">
              <p>{item.time} · {item.date}</p>
              <h3>{item.title}</h3>
              <div>{item.desc}</div>
            </div>
          </article>
        ))}
      </div>
      <a className="more-link" href="#博客">查看更多</a>
    </section>
  );
}

function FAQ() {
  return (
    <section className="faq section-wrap">
      <div className="faq-title">
        <span>常见问题</span>
        <strong>FAQ</strong>
      </div>
      <div className="faq-list">
        {faqs.map((item) => (
          <details key={item}>
            <summary>
              <span>{item}</span>
              <ChevronDown size={15} />
            </summary>
            <p>Sabuddy 企业版会结合你的业务渠道、知识库和销售 SOP 进行配置，支持试点验证后再规模化上线。</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function FinalCTA({ onTrialClick }: { onTrialClick: () => void }) {
  return (
    <section className="final-cta section-wrap" id="demo">
      <div>
        <p>趁对手还不会带货时代，</p>
        <h2>让 Sabuddy Agent 替你推进每一次成交。</h2>
      </div>
      <button className="primary-button" onClick={onTrialClick} type="button">免费试用</button>
    </section>
  );
}

function TrialQrModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="trial-modal-backdrop" onClick={onClose} role="presentation">
      <div
        aria-labelledby="trial-modal-title"
        aria-modal="true"
        className="trial-modal"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
      >
        <button className="trial-modal-close" onClick={onClose} type="button" aria-label="关闭免费试用弹窗">
          ×
        </button>
        <img src={wechatQr} alt="扫码添加我们立即免费试用" />
        <p id="trial-modal-title">扫码添加我们立即免费试用</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="brand-dot">S</span>
          <strong>Sabuddy.ai</strong>
        </div>
        <div className="footer-links">
          <a href="#开发文档">服务条款</a>
          <a href="#开发文档">隐私政策</a>
          <a href="#开发文档">开发文档</a>
          <a href="#demo">联系我们</a>
        </div>
        <p>© 2026 Sabuddy. All rights reserved.</p>
      </div>
    </footer>
  );
}

function SectionTitle({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
}
