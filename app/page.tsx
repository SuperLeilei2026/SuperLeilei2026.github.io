import Image from "next/image";

const githubUrl = "https://github.com/leinstein908";
const cityAfterimageUrl =
  "https://leinstein908.github.io/city-afterimage/";
const cityAfterimageRepo = "https://github.com/leinstein908/city-afterimage";
const wechatArticleUrl =
  "https://mp.weixin.qq.com/s/GFpqHJEK8MmPXbtDw8uDyw";
const fitnessArticleUrl =
  "https://mp.weixin.qq.com/s/OAKAnXNgp4Eqy-ZFCykm6w";
const newYearVideoUrl = "https://weixin.qq.com/sph/A7UUXFvaaT";

const projects = [
  {
    eyebrow: "LOCAL PROTOTYPE · EXPRESSION",
    number: "02",
    title: "宠物表达分身",
    subtitle: "伍六七表情工坊",
    description:
      "从真实宠物的照片、口头禅、表情与动作出发，生成属于它的表达提案。技术只是手段，我更在意怎样保留一段关系里独有的语气。",
    forWho: "想把自家宠物的个性带进日常聊天的养宠人",
    need: "通用表情包很难保留一只宠物独有的动作、语气和关系记忆",
    image: "/wu67-enfp-expression-preview.png",
    imageAlt: "伍六七 ENFP 表情系统十六张预览",
    accentImage: "/sticker-wu67-contact-sheet.png",
    accentAlt: "伍六七九张专属表情提案",
    tone: "rose",
    tags: ["微信式对话 MVP", "宠物 IP", "表达系统"],
  },
  {
    eyebrow: "PERSONAL TOOL · CREATION",
    number: "03",
    title: "小雷编辑部 × 伍六七",
    subtitle: "个人思想与内容工作台",
    description:
      "把聊天、生活片段、灵感、文章、配图和角色关系组织成持续创作的链路。它不是替我写一篇文章，而是帮助我保留个人语气与长期问题。",
    forWho: "像我一样，在聊天和生活里不断积累素材的长期创作者",
    need: "灵感散落在不同入口，普通 AI 写作又容易洗掉个人语气和关系脉络",
    image: "/editorial-studio-entries.png",
    imageAlt: "小雷编辑部生活与灵感界面",
    accentImage: "/wu67-character-system.png",
    accentAlt: "Leinstein 与伍六七角色系统设定",
    tone: "blue",
    tags: ["本机工作台", "写作系统", "长期记忆"],
  },
  {
    eyebrow: "PUBLIC DEMO · RESEARCH",
    number: "04",
    title: "Research Framing Compiler",
    subtitle: "研究判断编译器",
    description:
      "把专家对研究框架的一次修改，编译为下一次可执行、可解释、可迭代的判断规则。公开 Demo 使用虚构课题，并把最终判断留给人。",
    forWho: "需要共同修改研究框架的专业研究者与评审者",
    need: "专家反馈常停留在一次性批注里，难以转化为下一轮研究可复用的判断规则",
    image: "/research-framing-compiler-og.png",
    imageAlt: "Research Framing Compiler 项目预览",
    tone: "wine",
    tags: ["人在回路", "判断规则", "公开 Demo"],
  },
  {
    eyebrow: "LOCAL MVP 03 · DECISION",
    number: "05",
    title: "BUY / RENT / WAIT",
    subtitle: "数码产品决策与资产成本工具",
    description:
      "把公开买价、30 天租金、残值和使用把握放进同一张可解释的决策图；购买以后，继续追踪每天成本与租赁翻转日。",
    forWho: "面对高价数码产品，在买、租、等之间反复犹豫的人",
    need: "价格、残值和真实使用频率分散，凭感觉做决定后也不知道买得是否值得",
    image: "/buy-rent-wait-og.png",
    imageAlt: "BUY RENT WAIT 项目预览",
    tone: "gold",
    tags: ["市场研究", "可解释决策", "资产成本"],
  },
];

const workMethods = [
  {
    number: "I",
    title: "听见没有说清的问题",
    text: "从真实对话、行为和限制里，辨认用户真正卡住的地方。",
  },
  {
    number: "II",
    title: "把隐性判断拆开",
    text: "让证据、假设、分歧和取舍变得可见，也允许人反驳。",
  },
  {
    number: "III",
    title: "做成可以参与的体验",
    text: "用原型、故事、课程或一次现场，把复杂方案带到人面前。",
  },
  {
    number: "IV",
    title: "让一次实践继续生长",
    text: "把有效判断沉淀为内容、模板、工作流和可复用系统。",
  },
];

const futureRooms = [
  {
    room: "201",
    code: "CITY",
    title: "让城市理解人",
    question:
      "居民对一条街、一个社区的微小感受，怎样进入公共讨论，而不被压缩成冷冰冰的数据？",
    seeds: "已有种子：城市潜像 · 城市肖像 · 生活圈",
    people: "想遇见：城市研究者 · 社区营造者 · Civic Tech",
    tone: "pink",
  },
  {
    room: "202",
    code: "ENERGY & SOCIAL",
    title: "以能量，而不是效率为目标",
    question:
      "AI 能不能看见谁让你有能量、什么活动让你回来，也知道什么时候该从 gogogo 里停一下？",
    seeds: "已有种子：ENFP 表达系统 · 生活记录 · 社交能量",
    people: "想遇见：HCI · 行为设计 · 社交产品 · 社区主理人",
    tone: "lavender",
  },
  {
    room: "301",
    code: "CREATIVE STAGE",
    title: "让共同创作成为关系媒介",
    question:
      "如果陌生人共同写一首歌、讲一个故事或完成一次现场，AI 能不能让一段真实关系发生？",
    seeds: "已有种子：300 人演唱会 · 内容/IP · 现场编导",
    people: "想遇见：音乐人 · 生成音频工程师 · 导演 · 互动创作者",
    tone: "blue",
  },
  {
    room: "302",
    code: "INTELLIGENCE SYSTEMS",
    title: "把判断变成会学习的系统",
    question:
      "面对政策、城市和生活中的复杂选择，AI 怎样解释证据与分歧，同时把最终判断留给人？",
    seeds: "已有种子：研究判断编译器 · 数字平台 · 决策工具",
    people: "想遇见：研究者 · 产品经理 · 知识/Agent 工程师",
    tone: "gold",
  },
];

export default function Home() {
  return (
    <main id="top">
      <a className="skip-link" href="#now">跳到主要内容</a>
      <div className="top-ribbon" aria-hidden="true">
        <span>PERSONAL STUDIO</span>
        <span>ROOM 908</span>
        <span>EST. 2026</span>
      </div>

      <header className="site-header">
        <nav className="nav-group" aria-label="作品导航">
          <a href="#now">现在</a>
          <a href="#how">关于</a>
        </nav>
        <a className="wordmark" href="#top" aria-label="Leinstein 首页">
          <span>L</span>
          <b>LEINSTEIN</b>
        </a>
        <nav className="nav-group nav-group-right" aria-label="合作导航">
          <a href="#next">未来</a>
          <a href="#together">联系</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-ornament hero-ornament-left" aria-hidden="true">
          <span>R</span>
          <i />
          <small>RESEARCH</small>
        </div>
        <div className="hero-center">
          <p className="hero-kicker">RESEARCH · PRODUCT · PEOPLE</p>
          <h1 id="hero-title">LEINSTEIN</h1>
          <div className="portrait-medallion">
            <span className="portrait-halo" aria-hidden="true" />
            <Image
              src="/leinstein-portrait.jpg"
              alt="Leinstein 的个人照片"
              width={1800}
              height={1800}
              priority
              unoptimized
            />
            <div className="portrait-ribbon">CURIOUS ABOUT PEOPLE</div>
          </div>
          <p className="hero-role">
            宏观经济与空间规划研究者
            <span>×</span>
            AI 产品构建者
            <span>×</span>
            内容与现场创作者
          </p>
          <h2>研究复杂系统，设计人的参与，创造值得共同记住的东西。</h2>
          <p className="hero-intro">
            我喜欢从人与人的真实交互开始：听见模糊需求，找到藏在经验里的判断，
            再把它做成可运行的工具、能被理解的故事，或一次让人愿意参与的现场。
          </p>
          <div className="hero-actions">
            <a className="hotel-button hotel-button-primary" href="#now">
              看我做过什么 <span aria-hidden="true">↓</span>
            </a>
            <a
              className="hotel-button"
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              打开 GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="hero-ornament hero-ornament-right" aria-hidden="true">
          <span>P</span>
          <i />
          <small>PARTICIPATION</small>
        </div>
        <p className="availability">
          <i aria-hidden="true" /> OPEN FOR AI PRODUCT · SOLUTIONS · COLLABORATION
        </p>
      </section>

      <section className="opening-note" aria-label="我的关注">
        <p>A NOTE FROM LEINSTEIN</p>
        <h2>我不想只是给每一种兴趣加上一个“AI+”。</h2>
        <blockquote>
          当 AI 真正进入生活，它能不能帮助人更好地感受、表达、连接，
          并共同作出判断？
        </blockquote>
      </section>

      <section className="section-shell now-section" id="now">
        <SectionTitle
          number="01"
          eyebrow="NOW / 项目背后的需求察觉"
          title="这些项目，是为谁、解决什么问题？"
          note="每个项目都从一个具体的人和一种真实困境开始。"
        />

        <article className="flagship-card" id="city-afterimage">
          <div className="flagship-visual">
            <div className="hotel-screen">
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
            </div>
            <span className="screen-label">60 SEC DEMO · PLAYABLE</span>
          </div>
          <div className="flagship-copy">
            <div className="project-number">01 / FLAGSHIP</div>
            <p className="project-eyebrow">CITY AFTERIMAGE · 城市潜像</p>
            <h3>先陪你一起画出完美一天的画像，再决定住在哪儿。</h3>
            <p>
              面向异地入职者的可解释迁居决策 Agent。它不从房源开始，
              而是从真实班表、通勤底线与生活场景出发，先生成一份可修改的“生活潜像”，
              再连接武汉地图证据与三种生活圈建议。
            </p>
            <div className="need-lines">
              <span><b>为谁</b>刚到陌生城市工作，不知道住在哪里才能兼顾通勤与生活的人</span>
              <span><b>要解决</b>房源平台只回答“哪里有房”，却没有先理解“你想过怎样的一天”</span>
            </div>
            <div className="fact-row" aria-label="城市潜像项目数据">
              <span><b>22</b><small>个武汉生活圈种子</small></span>
              <span><b>3</b><small>种不同决策角色</small></span>
              <span><b>40→35</b><small>分钟即时重规划</small></span>
            </div>
            <ul className="clean-list">
              <li>在揭晓地名前，先确认系统是否真的认出了你</li>
              <li>明确区分实时地图、开放数据、演示坐标与模型估算</li>
              <li>当用户反对或修改约束，推荐、证据与普通一天一起重算</li>
            </ul>
            <div className="inline-links">
              <a href={cityAfterimageUrl} target="_blank" rel="noreferrer">
                体验在线作品 ↗
              </a>
              <a href={cityAfterimageRepo} target="_blank" rel="noreferrer">
                查看代码与说明 ↗
              </a>
            </div>
          </div>
        </article>

        <div className="project-grid">
          {projects.map((project) => (
            <article
              className={`project-card project-card-${project.tone}`}
              key={project.number}
            >
              <div className="project-image">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                  unoptimized
                />
                {project.accentImage ? (
                  <div className="project-accent-image">
                    <Image
                      src={project.accentImage}
                      alt={project.accentAlt ?? ""}
                      fill
                      sizes="180px"
                      unoptimized
                    />
                  </div>
                ) : null}
              </div>
              <div className="project-card-copy">
                <div className="project-card-topline">
                  <span>{project.eyebrow}</span>
                  <b>{project.number}</b>
                </div>
                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p>{project.description}</p>
                <div className="need-lines">
                  <span><b>为谁</b>{project.forWho}</span>
                  <span><b>要解决</b>{project.need}</span>
                </div>
                <ul className="tag-list">
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <article className="professional-case">
          <div className="case-seal" aria-hidden="true">
            <span>06</span>
            <small>ANONYMISED<br />CASE</small>
          </div>
          <div className="case-copy">
            <p>PROFESSIONAL PRACTICE · 省级数字平台业务产品化</p>
            <h3>当业务与技术说着不同语言，怎样把模糊需求变成可上线、可迭代的数字产品？</h3>
            <p>
              长期面对需求模糊、参与者众多、数据不完整的问题；参与需求梳理、
              开发协同、上线验收与反馈迭代。这里不展示单位材料，只保留可迁移的方法。
            </p>
            <div className="need-lines">
              <span><b>为谁</b>共同建设省级数字平台的跨部门业务人员与技术团队</span>
              <span><b>要解决</b>业务需求、数据口径与开发语言彼此错位，造成反复沟通和返工</span>
            </div>
          </div>
          <ol className="case-process" aria-label="数字平台业务产品化流程">
            <li><span>01</span>业务需求</li>
            <li><span>02</span>协同开发</li>
            <li><span>03</span>上线验收</li>
            <li><span>04</span>持续反馈</li>
          </ol>
        </article>
      </section>

      <section className="people-section" id="how">
        <div className="section-shell">
          <SectionTitle
            number="02"
            eyebrow="BRINGING PEOPLE IN / 把人带进来"
            title="我不只做系统，也组织现场"
            note="沟通不是最后一步，而是产品的一部分。"
            light
          />
          <div className="people-grid">
            <article className="people-card people-card-pink">
              <span className="people-metric">300</span>
              <p>PEOPLE · PERSONAL CONCERT</p>
              <h3>组织自己的 300 人个人演唱会</h3>
              <p className="people-description">
                从一个想法走到一次真实聚集：策划内容、组织流程，也站到人群面前完成表达。
              </p>
            </article>
            <article className="people-card people-card-course">
              <div className="course-diagram" aria-label="谋采写审交五阶段工作流示意">
                {['谋', '采', '写', '审', '交'].map((step) => (
                  <span key={step}>{step}</span>
                ))}
              </div>
              <p>AI WORKFLOW · INTERNAL SHARING</p>
              <h3>把复杂 AI 讲成人能听懂、也能照着做的工作流</h3>
              <p className="people-description">
                用组织架构解释 Agent 与 Skill，用“谋—采—写—审—交”拆开研究流程，
                并用 21 屏 HTML 课件完成现场分享。
              </p>
              <ul className="micro-tags">
                <li>课程设计</li><li>概念转译</li><li>现场表达</li>
              </ul>
            </article>
            <article className="people-card people-card-video">
              <div className="people-visual">
                <Image
                  src="/new-year-video-illustration.png"
                  alt="从歌词改编、现场统筹到后期协作的新年视频创作插画"
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                  unoptimized
                />
              </div>
              <p>VIDEO · FULL-CYCLE CREATION</p>
              <h3>从歌词改编到现场与后期统筹</h3>
              <p className="people-description">
                全程策划编导新年视频，负责歌词改编、视频策划、现场统筹与后期剪辑统筹。
              </p>
              <a href={newYearVideoUrl} target="_blank" rel="noreferrer">
                观看公开作品 ↗
              </a>
            </article>
          </div>

          <div className="writing-strip">
            <div>
              <p>WRITING / 公众号「暴暴躁躁」</p>
              <h3>我的公众号文章</h3>
              <span>从寻找值得长期投入的大问题，到在健身和生活里观察自己的行动方式。</span>
            </div>
            <div className="article-showcase">
              <a className="article-card" href={wechatArticleUrl} target="_blank" rel="noreferrer">
                <div className="article-card-image">
                  <Image
                    src="/article-big-question-illustration.png"
                    alt="寻找一个足够重要的问题的文章插画"
                    fill
                    sizes="(max-width: 760px) 100vw, 50vw"
                    unoptimized
                  />
                </div>
                <div>
                  <span>关于选择与投入</span>
                  <h4>我想找到一个大到足以吞掉我全部犹豫的问题</h4>
                  <p>当方向很多、犹豫太久，我开始寻找一个真正值得长期投入的问题。</p>
                  <i aria-hidden="true">阅读文章 ↗</i>
                </div>
              </a>
              <a className="article-card" href={fitnessArticleUrl} target="_blank" rel="noreferrer">
                <div className="article-card-image">
                  <Image
                    src="/article-fitness-illustration.png"
                    alt="在健身与日常行动中观察自己的文章插画"
                    fill
                    sizes="(max-width: 760px) 100vw, 50vw"
                    unoptimized
                  />
                </div>
                <div>
                  <span>关于身体与行动</span>
                  <h4>不爱看书的我罚自己健身</h4>
                  <p>从一句自我玩笑出发，记录身体、行动与真实生活里荒诞又具体的瞬间。</p>
                  <i aria-hidden="true">阅读文章 ↗</i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell method-section">
        <SectionTitle
          number="03"
          eyebrow="HOW I WORK / 我怎样工作"
          title="研究、产品与表达，是同一条链"
          note="捕捉具体生活 → 提炼隐性判断 → 做成工具或故事 → 邀请别人参与"
        />
        <div className="method-grid">
          {workMethods.map((method) => (
            <article key={method.number}>
              <span>{method.number}</span>
              <h3>{method.title}</h3>
              <p>{method.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="next-section" id="next">
        <div className="section-shell">
          <SectionTitle
            number="04"
            eyebrow="NEXT / 想找同道人一起做"
            title="我对这些方向感兴趣，想认识同道人"
            note="AI × 城市与社区 · AI × ENFP 能量恢复 · AI × 音乐与 Social · 可解释判断系统"
          />
          <p className="next-intro">
            我正在继续探索 AI × 城市社区、AI × ENFP 能量恢复、AI × 音乐共同创作与 Social，
            以及可解释的复杂判断系统。想认识正在做这些事情的人，一起交换真实场景、问题和原型。
          </p>
          <div className="room-grid">
            {futureRooms.map((room) => (
              <article className={`room-card room-${room.tone}`} key={room.room}>
                <div className="room-number">
                  <span>{room.room}</span>
                  <small>OPEN ROOM</small>
                </div>
                <p>{room.code}</p>
                <h3>{room.title}</h3>
                <blockquote>{room.question}</blockquote>
                <div className="room-notes">
                  <span>{room.seeds}</span>
                  <span>{room.people}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="together-section" id="together">
        <div className="together-crest" aria-hidden="true">L</div>
        <p>TOGETHER / 欢迎敲门</p>
        <h2>如果你手里有一个真实场景、一群具体的人，或一个一直想试的小实验——</h2>
        <blockquote>我们可以先把它做成一个小而真实的原型。</blockquote>
        <p className="together-people">
          想认识音乐人、社区营造者、城市研究者、独立开发者、交互与服务设计师，
          以及所有把 AI 看作关系媒介，而不只是效率工具的人。
        </p>
        <div className="contact-actions">
          <a href={githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={wechatArticleUrl} target="_blank" rel="noreferrer">读我的文章 ↗</a>
        </div>

        <div className="channel-grid" aria-label="我的内容账号">
          <article>
            <div>
              <p>XIAOHONGSHU</p>
              <h3>暴暴躁躁伍六七</h3>
              <span>小红书号：4262611562</span>
            </div>
            <a
              href="/xiaohongshu-profile.jpg"
              target="_blank"
              rel="noreferrer"
              aria-label="打开小红书暴暴躁躁伍六七的完整名片"
            >
              <Image
                src="/xiaohongshu-qr.jpg"
                alt="暴暴躁躁伍六七的小红书二维码"
                width={400}
                height={400}
                unoptimized
              />
            </a>
          </article>
          <article>
            <div>
              <p>WECHAT OFFICIAL ACCOUNT</p>
              <h3>暴暴躁躁</h3>
              <span>写 AI、城市、生活与伍六七</span>
            </div>
            <a
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
                unoptimized
              />
            </a>
          </article>
        </div>
      </section>

      <footer>
        <span>LEINSTEIN · ROOM 908</span>
        <span>研究复杂系统 · 设计人的参与 · 创造共同记忆</span>
        <a href="#top">回到大厅 ↑</a>
      </footer>
    </main>
  );
}

function SectionTitle({
  number,
  eyebrow,
  title,
  note,
  light = false,
}: {
  number: string;
  eyebrow: string;
  title: string;
  note: string;
  light?: boolean;
}) {
  return (
    <div className={`section-title${light ? " section-title-light" : ""}`}>
      <span className="section-number">{number}</span>
      <div>
        <p>{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <small>{note}</small>
    </div>
  );
}
