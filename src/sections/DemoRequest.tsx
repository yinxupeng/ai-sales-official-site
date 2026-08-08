import { FormEvent, useState } from 'react';

export function DemoRequest() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="section demo-section" id="demo">
      <div className="demo-copy">
        <span className="eyebrow">预约增长诊断</span>
        <h2>拿一批老线索先跑给你看</h2>
        <p>你什么都不用承诺，只需要带着线索池、客单价和当前转化数据，我们一起算清楚 Sabuddy 是否值得投入。</p>
      </div>
      <form className="demo-form" onSubmit={handleSubmit}>
        <label>
          姓名
          <input name="name" placeholder="请输入姓名" required />
        </label>
        <label>
          公司
          <input name="company" placeholder="请输入公司名称" required />
        </label>
        <label>
          手机号
          <input name="phone" placeholder="请输入手机号" required />
        </label>
        <label>
          需求类型
          <select name="plan" defaultValue="enterprise">
            <option value="diagnosis">1 对 1 增长诊断</option>
            <option value="pilot">老线索试点验证</option>
            <option value="enterprise">企业私有化部署</option>
          </select>
        </label>
        <label className="wide">
          留言
          <textarea name="message" placeholder="可以简单描述行业、客单价、线索量、销售团队规模和当前转化问题" />
        </label>
        <button className="btn primary full" type="submit">提交诊断预约</button>
        {submitted ? <p className="form-success">已记录预约信息，正式版本可接入企业表单或 CRM。</p> : null}
      </form>
    </section>
  );
}
