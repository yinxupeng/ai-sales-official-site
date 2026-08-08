export type NavItem = {
  label: string;
  href: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type PainValue = {
  pain: string;
  value: string;
};

export type Capability = {
  title: string;
  description: string;
};

export type FlowStep = {
  title: string;
  description: string;
};

export type Scenario = {
  title: string;
  description: string;
};

export type Plan = {
  name: string;
  tag: string;
  audience: string;
  cta: string;
  highlighted?: boolean;
  features: string[];
};

export type DeploymentItem = {
  title: string;
  description: string;
};

export const navItems: NavItem[] = [
  { label: '增长难题', href: '#pain' },
  { label: '系统能力', href: '#capabilities' },
  { label: '适用行业', href: '#scenarios' },
  { label: '落地路径', href: '#pricing' },
  { label: '预约诊断', href: '#demo' },
];

export const metrics: Metric[] = [
  { value: '4x', label: '典型项目接单量提升' },
  { value: '1/4', label: '同等产出跟单人力' },
  { value: '2-4周', label: '试点看第一版结果' },
];

export const pains: PainValue[] = [
  { pain: '业绩增长难', value: '线索响应慢、SOP 落不实、跟进不干净，花钱买来的线索一半烂在池子里。' },
  { pain: '销售方差大', value: '销冠一走，判断标准、成交节奏和客户关系一起流失，新人产能爬坡周期长。' },
  { pain: '95% 用户躺尸', value: '成交只发生在少数高意向客户身上，大量已付获客成本卡在中途持续蒸发。' },
  { pain: '增长不可复制', value: '经营周期一变，团队缺口立刻暴露，本质是增长能力没有沉淀成可执行系统。' },
];

export const capabilities: Capability[] = [
  { title: '销冠判断系统化', description: '把资深顾问在关键节点上的判断标准提炼出来，交给 AI 在每一次咨询中执行。' },
  { title: 'AI 承接首轮咨询', description: '自动完成欢迎、需求识别、信息收集、答疑和下一步推进，减少销售低价值重复劳动。' },
  { title: '线索可视化跟单', description: '按客户阶段、跟进状态和意向强度管理线索池，避免线索沉默、遗漏和重复触达。' },
  { title: '人机协同派单', description: '标准动作交给 AI，高意向、高风险、复杂决策场景通知顾问介入。' },
  { title: '方法论内置执行', description: '不是知识库问答，而是把增长方法论、SOP、话术策略和推进节奏编排成可执行任务。' },
  { title: '老线索激活', description: '先拿一批历史线索跑试点，用真实触达、回复和转化数据验证增长空间。' },
  { title: '经营数据可追踪', description: '记录 AI 判断依据、会话过程、阶段变化和转化结果，让管理层能复盘、能优化。' },
  { title: '企业级私有化', description: '支持本地服务器、独立数据库、模型与业务系统对接，满足泛教育企业的数据安全要求。' },
];

export const flowSteps: FlowStep[] = [
  { title: '数据诊断', description: '盘点线索池、销售数据、转化路径和当前团队执行缺口。' },
  { title: '方法论萃取', description: '提炼销冠判断标准、成交节点、常见异议和行业话术策略。' },
  { title: 'AI 增长系统配置', description: '配置智能体、客户阶段、跟进任务、触达节奏和人工介入规则。' },
  { title: '老线索试点', description: '先拿一批历史线索跑 2-4 周，用真实结果验证可行性。' },
  { title: '人机协同跟进', description: 'AI 承接标准咨询和二次触达，顾问处理高价值复杂决策。' },
  { title: '结果复盘', description: '按接单量、回复率、转化率、人效和成交周期复盘效果。' },
  { title: '达标扩量', description: '试点跑通后接入更多账号、更多线索和更多业务团队。' },
  { title: '持续优化', description: '基于会话和成交数据持续优化策略，让系统越用越准。' },
];

export const scenarios: Scenario[] = [
  { title: '留学 / 国际教育', description: '客单价高、周期长、强依赖顾问经验，适合把关键判断节点标准化。' },
  { title: 'K12 教培', description: '线索量大、节奏快，用 AI 承接催单、答疑、二次触达和意向筛选。' },
  { title: '兴趣教育', description: '团队规模大、人效天花板明显，适合压缩标准跟单人力。' },
  { title: '青少年心理', description: '高度依赖信任和共情，AI 根据用户关注点动态调整沟通策略。' },
  { title: 'AI 教育', description: '新品类认知重、链路长，适合小团队用系统化跟进能力规模化起量。' },
  { title: '成教 / 认知教育', description: '客单分层明显、转化路径复杂，适合按人群和阶段精细推进。' },
];

export const plans: Plan[] = [
  {
    name: '增长诊断',
    tag: '先算账',
    audience: '适合想判断 AI 增长空间、线索池质量和回本门槛的教育机构',
    cta: '预约诊断',
    features: ['1 对 1 增长诊断', '线索池与销售数据盘点', '客单价回本测算', '关键转化缺口识别', '试点方案建议'],
  },
  {
    name: '试点增长版',
    tag: '推荐先跑',
    audience: '适合先拿一批老线索验证效果，再决定是否规模化扩量的销售团队',
    cta: '拿线索试跑',
    highlighted: true,
    features: ['2-4 周试点验证', 'AI 首轮咨询与跟进', '人机协同派单', '阶段化线索管理', '回复与转化数据复盘', '试点结果评估'],
  },
  {
    name: '企业规模化版',
    tag: '企业交付',
    audience: '适合多城市、多团队、多业务线，需要私有化部署和深度系统集成的企业',
    cta: '联系商务',
    features: ['多账号多团队接入', '本地服务器部署', '独立数据库与权限审计', 'CRM/订单系统集成', '专属方法论配置', '实施培训与验收支持'],
  },
];

export const deploymentItems: DeploymentItem[] = [
  { title: 'AI-BASE 方法论', description: '从业务目标出发，拆解销售判断、客户阶段、执行任务和复盘指标。' },
  { title: '真实成交链路', description: '不是 Demo 演示，而是进入线索跟进、咨询转化和成交推进的真实业务过程。' },
  { title: '业务系统集成', description: '支持对接 CRM、订单、企微中台、客户画像和企业自有接口。' },
  { title: '私有化与审计', description: '支持本地服务器、独立数据库、角色权限、执行记录和日志审计。' },
];
