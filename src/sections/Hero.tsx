import { ArrowRight, Bot, CheckCircle2, MessageSquareText, ShieldCheck } from 'lucide-react';
import { metrics } from '../content/siteContent';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow">Sabuddy 企业版 · 泛教育 AI 增长销售系统</div>
        <h1>把销冠判断沉淀进系统，让增长持续稳定算得出</h1>
        <p className="hero-lead">
          面向留学、K12、兴趣教育、青少年心理、AI 教育与成教团队，把销售方法论、线索跟进和人机协同执行变成可复制的增长系统。
        </p>
        <div className="hero-actions">
          <a className="btn primary" href="#demo">
            预约 1 对 1 增长诊断 <ArrowRight size={18} />
          </a>
          <a className="btn ghost" href="#pricing">查看落地路径</a>
        </div>
        <div className="metric-row">
          {metrics.map((metric) => (
            <div className="metric" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="product-preview" aria-label="产品界面概览">
        <div className="preview-top">
          <span className="dot green" />
          <span>Sabuddy 增长驾驶舱</span>
          <strong>试点运行中</strong>
        </div>
        <div className="preview-body">
          <aside>
            <div className="account active">留学顾问组</div>
            <div className="account">K12 线索池</div>
            <div className="account">AI 课团队</div>
          </aside>
          <main>
            <div className="chat user">家长：想了解一下课程价格</div>
            <div className="chat ai">AI：我先确认孩子年级、目标和当前基础，再给您匹配合适方案。</div>
            <div className="logic-strip">
              <CheckCircle2 size={16} /> 当前策略：首轮咨询 · 信息收集
            </div>
          </main>
          <div className="preview-panel">
            <div><Bot size={16} /> 销冠判断：需求强度中高</div>
            <div><MessageSquareText size={16} /> 跟进任务：30 分钟后二次触达</div>
            <div><ShieldCheck size={16} /> 人工介入：高意向顾问接管</div>
          </div>
        </div>
      </div>
    </section>
  );
}
