import Image from "next/image";

const githubUrl = "https://github.com/leinstein908";
const cityAfterimageRepo = "https://github.com/leinstein908/city-afterimage";
const wechatArticleUrl = "https://mp.weixin.qq.com/s/GFpqHJEK8MmPXbtDw8uDyw";

const capabilities = [
  {
    index: "01",
    title: "把模糊需求问清楚",
    text: "从业务现场、用户语言和现实约束中，找到真正值得解决的问题。",
  },
  {
    index: "02",
    title: "把判断做成工作流",
    text: "将专家经验拆成 Agent 分工、证据链、反馈机制与可检查的质量门。",
  },
  {
    index: "03",
    title: "把方案做成体验",
    text: "用原型、Demo 和清晰叙事，让复杂方案能被看见、讨论和验证。",
  },
  {
    index: "04",
    title: "把一次实践沉淀下来",
    text: "将方法整理成模板、内容资产与系统，让下一次创造更快开始。",
  },
];

const practiceCards = [
  {
    type: "AGENT WORKFLOW",
    number: "01",
    title: "政策研究 Multi-Agent 工作流",
    summary:
      "把需求规划、证据采集、分析写作、红队审核和格式交付组织成五阶段协作流程。",
    proof: ["7,358 字研究稿", "85 条证据", "15 条关键数据抽检 100%"],
  },
  {
    type: "DIGITAL GOVERNANCE",
    number: "02",
    title: "省级数字平台的业务产品化",
    summary:
      "从规划编制、多人协同审稿与跨部门数据问题出发，参与需求梳理、开发协同、上线验收和反馈迭代。",
    proof: ["真实业务流程", "跨部门协同", "上线后持续迭代"],
  },
  {
    type: "CONTENT SYSTEM",
    number: "03",
    title: "小雷编辑部 × 伍六七",
    summary:
      "把写作、生活观察、视觉叙事和猫咪 IP 组织成可持续的个人内容生产系统。",
    proof: ["思想与素材库", "文章生产工作流", "跨媒介视觉资产"],
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="回到首页">
          <span>L</span>
          <b>LEINSTEIN</b>
        </a>
        <nav aria-label="主导航">
          <a href="#work">作品</a>
          <a href="#about">关于</a>
          <a href="#contact">联系</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">
            <span>URBAN SYSTEMS</span>
            <i />
            <span>AI AGENTS</span>
            <i />
            <span>CONTENT</span>
          </p>
          <h1>
            把复杂问题，
            <br />
            变成<span>可以被体验</span>的答案。
          </h1>
          <p className="hero-intro">
            我是 Leinstein，一名把城市规划师的判断力转译成 AI 产品的人。
            我在省级智库研究城市，也用 Agent、原型与内容系统，
            把模糊需求做成可验证、可交付、可继续迭代的解决方案。
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#city-afterimage">
              看代表作品 <span aria-hidden="true">↘</span>
            </a>
            <a
              className="button button-ghost"
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <aside className="hero-note">
          <span className="note-dot" />
          <p>CURRENTLY</p>
          <strong>AI 产品与解决方案</strong>
          <small>上海 / 远程 · 开放合作机会</small>
        </aside>
        <div className="hero-index" aria-hidden="true">
          <b>01</b>
          <span>/ 04</span>
        </div>
      </section>

      <section className="manifesto" aria-label="个人定位">
        <p>我关心的不是让 AI 生成更多内容。</p>
        <h2>
          我更想知道：一个人的经验、判断与感受，
          <br />
          能不能被做成<span>别人真正用得上的能力</span>？
        </h2>
      </section>

      <section className="featured section-shell" id="work">
        <div className="section-heading">
          <p>SELECTED WORK / 代表作品</p>
          <span>2026</span>
        </div>
        <article className="featured-card" id="city-afterimage">
          <div className="featured-visual">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/city-afterimage-preview.png"
              aria-label="城市潜像 60 秒作品演示"
            >
              <source src="/city-afterimage-demo.mp4" type="video/mp4" />
              你的浏览器暂不支持视频播放。
            </video>
            <span className="visual-stamp">60 SEC DEMO</span>
          </div>
          <div className="featured-copy">
            <p className="project-kicker">CITY AFTERIMAGE / 城市潜像</p>
            <h2>先看见你想重复的一天，再决定住进哪里。</h2>
            <p>
              面向异地入职者的可解释迁居决策 Agent。它不从房源开始，
              而是从真实班表、通勤底线和具体生活场景出发，先生成一份可修改的“生活潜像”，
              再连接武汉地图证据与三个不同角色的生活圈建议。
            </p>
            <div className="project-facts">
              <span><b>22</b><small>个武汉生活圈</small></span>
              <span><b>3</b><small>种决策角色</small></span>
              <span><b>40→35</b><small>分钟即时重规划</small></span>
            </div>
            <ul className="project-points">
              <li>地点揭晓前，先让用户确认系统是否真正认出了自己</li>
              <li>区分实时地图、开放数据、演示坐标与模型估算</li>
              <li>用户反对证据或修改约束后，推荐与普通一天一起重算</li>
            </ul>
            <a
              className="text-link"
              href={cityAfterimageRepo}
              target="_blank"
              rel="noreferrer"
            >
              查看代码与完整说明 <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
      </section>

      <section className="practice section-shell">
        <div className="section-heading">
          <p>OTHER PRACTICE / 其他实践</p>
          <span>从研究到系统</span>
        </div>
        <div className="practice-grid">
          {practiceCards.map((card) => (
            <article className="practice-card" key={card.number}>
              <div>
                <span>{card.type}</span>
                <b>{card.number}</b>
              </div>
              <h3>{card.title}</h3>
              <p>{card.summary}</p>
              <ul>
                {card.proof.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="capability section-shell" id="about">
        <div className="section-heading section-heading-light">
          <p>HOW I WORK / 我怎样工作</p>
          <span>判断 → 产品 → 交付</span>
        </div>
        <div className="capability-grid">
          <div className="capability-intro">
            <h2>规划训练了我看见关系，AI 让我把关系做成系统。</h2>
            <p>
              过去近四年，我参与战略规划、政策研究和数字平台建设，
              长期处理需求模糊、参与者众多、信息不完整的问题。
              现在，我把这种复杂问题处理能力带进 Agent 产品与行业 AI。
            </p>
          </div>
          <div className="capability-list">
            {capabilities.map((item) => (
              <article key={item.index}>
                <span>{item.index}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="signal-strip" aria-label="实践信号">
        <div><b>30+</b><span>人内部分享</span></div>
        <div><b>5</b><span>阶段 Agent 研究流</span></div>
        <div><b>3</b><span>条长期创造主线</span></div>
        <div><b>1</b><span>人也能跨学科交付</span></div>
      </section>

      <section className="channels section-shell" aria-label="内容账号">
        <div className="section-heading">
          <p>FIELD NOTES / 内容现场</p>
          <span>生活观察也是研究的一部分</span>
        </div>
        <div className="channel-grid">
          <article className="channel-card xhs-card">
            <div className="channel-copy">
              <p>XIAOHONGSHU / 小红书</p>
              <h2>暴暴躁躁伍六七</h2>
              <span>小红书号：4262611562</span>
              <strong>年纪轻轻，就拥有一只伍六七。</strong>
              <a href="/xiaohongshu-profile.jpg" target="_blank" rel="noreferrer">
                打开完整名片 <i aria-hidden="true">↗</i>
              </a>
            </div>
            <a
              className="qr-frame"
              href="/xiaohongshu-profile.jpg"
              target="_blank"
              rel="noreferrer"
              aria-label="打开暴暴躁躁伍六七的小红书二维码"
            >
              <Image
                src="/xiaohongshu-qr.jpg"
                alt="暴暴躁躁伍六七的小红书二维码"
                width={400}
                height={400}
              />
            </a>
          </article>

          <article className="channel-card wechat-card">
            <div className="channel-copy">
              <p>WECHAT OFFICIAL ACCOUNT / 公众号</p>
              <h2>暴暴躁躁</h2>
              <span>作者：雷NOW</span>
              <strong>“我想找到一个大到足以吞掉我全部犹豫的问题”</strong>
              <a href={wechatArticleUrl} target="_blank" rel="noreferrer">
                阅读代表文章 <i aria-hidden="true">↗</i>
              </a>
            </div>
            <a
              className="qr-frame"
              href={wechatArticleUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="阅读暴暴躁躁公众号代表文章"
            >
              <Image
                src="/wechat-official-qr.jpg"
                alt="暴暴躁躁公众号二维码"
                width={430}
                height={430}
              />
            </a>
          </article>
        </div>
      </section>

      <footer id="contact">
        <div className="footer-lead">
          <p>LET&apos;S MAKE THE NEXT IDEA REAL.</p>
          <h2>如果你也在把复杂问题做成真正有用的 AI 产品，我们可以聊聊。</h2>
        </div>
        <div className="social-card">
          <p>FIND ME</p>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a href="/xiaohongshu-profile.jpg" target="_blank" rel="noreferrer">
            小红书 · 暴暴躁躁伍六七 <span aria-hidden="true">↗</span>
          </a>
          <a href={wechatArticleUrl} target="_blank" rel="noreferrer">
            公众号 · 暴暴躁躁 <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="footer-bottom">
          <span>LEINSTEIN</span>
          <span>Urban systems × AI agents × content</span>
          <a href="#top">回到顶部 ↑</a>
        </div>
      </footer>
    </main>
  );
}
