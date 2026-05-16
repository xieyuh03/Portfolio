# Microsoft Connect Reviews — Impact Notes

> Microsoft 内部 Connect review 的原文留存 + 提炼总结。
> 跨两个产品阶段：**Dynamics 365 Finance**（2022 — 2025） · **Copilot Connector**（2025 — 至今）。
> 内容由用户半年一批陆续提供，本文档负责原文存档、提炼候选、最终汇入 portfolio about 页面。

---

## 时间线索引

| 时段 | 产品阶段 | 主要项目 |
|---|---|---|
| 2023 H1 | Dynamics 365 Finance | Vendor Invoice Approval App · AP Workspace · Bank FCR · AI Hackathon (Copilot for Bank) |
| 2023 H2 | Dynamics 365 Finance | AP Workspace 收尾 · 转入 Cash & Bank · **Modern Bank Reconciliation** · Payment 任务流梳理 |
| 2024 H1 | Dynamics 365 Finance | Modern Bank Reconciliation **上线 preview**（89 客户）· Bank Account Lifecycle · **Bank Rec Copilot** · Netting Rules · Cash Application POC · Immersive Home Page · 200K MAU CustTable |
| 2024 H2 | Dynamics 365 Finance | **D365 Finance Copilot Summary 242K MAU** · Bank Rec Copilot（**99.8% accuracy** · BALE 大会 demo）· **AI Tribe**（跨欧/美/亚）· Payment Automation 接手 · Enterprise Readiness（Defaulting / Legal Entity / Document Explorer）· Hackathon × 2 获奖 |
| 2025 H1 | **过渡** D365 Finance → Copilot Connector | **reorg + 2 周 handover** · Copilot Graph Connector demo（Jon Harris visit）· **Wave 1/2/3 connectors**（半数设计团队产出量）· 视频流程优化（**编辑时间 -70~80%**）· IDC 设计协作 · SharePoint global hub · 支持 Alina envisioning |
| 2025 H2 | Copilot Connector | 🎉 **晋升 next level** · **Copilot Connector Catalog Site**（Connector Agent 的数据底座）· **OAuth 2.0 Setup**（覆盖所有认证场景，11/2025 P0 上线）· **Notification（Email + Unified Center）** · Connector Recommendation · **Admin Setup UX Sprint**（Rohan / John Friedman / Jon Harris LT）· Digital Chief of Staff · Legal Agent · Vibe Coding / Coze 分享 |
| 2026 H1 | Copilot Connector + **MADS Design Agent** | **Simplified OAuth GA**（setup hours → minutes，**ICM 52→26**）· **Notification Phase 1 ships May** · Premium Data Provider · Connector Recommendation LT review · **MADS Design Agent foundational framework**（架构被 Sandra/Alina 采纳，PM 自建分支，Skill Hub）· Jon Harris / Shanying / Rohan LT 演讲 · 帮 Outlook 搭 Storybook · "how we design → how we work" |

---

## 半年原文 + 总结

### 2023 H1 · Dynamics 365 Finance

**Core priorities — 原文（用户提供）：**

> **Enable product success for vendor invoice approval mobile app**
> I completed the high-fidelity prototype design for the invoice approval app. As the project grew in scale, my role evolved to provide valuable support to Jordan, the lead designer for the Approvals App, which aims to integrate approvals for invoice, HR, and expenses into an app. Throughout the project, I collaborated with Jordan to help him refine the wireframe concept and design of the Approval App based on my design of invoice approval app through online meetings every two week. Additionally, I provided insights for Jordan to enhance the design details of the invoice approval aspect to better align with user behaviors and business logic. These efforts resulted in a cohesive and user-friendly wireframe design.
>
> In addition to my design work, I played an active role in organizing and coordinating communication between the design team, product managers, and other stakeholders. This included facilitating monthly meetings and conversation when needed to ensure timely sharing of project updates, resulting in improved collaboration on project progress.
>
> Despite challenges posed by priority and strategy changes, as well as limitations and integration issues involving F&O and Power Automate workflows, I remained committed to driving the project forward and worked collaboratively with cross-functional teams to find solutions.

> **Building trust and communication with partner teams**
> In the AP Workspace project, I participated in bi-weekly meetings with Project Manager Rayne to ensure progress synchronization, discussed project iteration design, established next steps, and plan project timelines. I provided insights for the design from persona and scenario perspectives to enhance the design to be user-centered, and helped PM gain a deeper understanding of the design rationale. Through rounds of iteration, PM and I reached a consensus on the final design, incorporating the feedback received from design reviews and heuristic evaluations conducted by the design teams. Additionally, I created a survey for the CAB meetings to let PM gather valuable insights directly from users, ensuring their perspectives were considered in the project's development.
>
> Regarding the Bank FCR project, I leaded collaborative meetings with Engineer Zhenren to facilitate timely adjustments to UI implementations, and collaborated with Eric to iterate and improve design requirements.

> **Project related to Payment with Cash & Bank team**
> In the Bank FCR (Foreign currency re-evaluation) project, I collaborated with the Project Manager and Engineer to fully comprehend the project requirements and background. I then proceeded to design wireframes and high-fidelity designs while ensuring timely delivery of the deliverables. Additionally, I provided support to the Engineer in completing the UI development by refining design details and adapting designs to conform to code constraints.
> In the AI hackathon project, I worked alongside Eric and Suzhen to brainstorm innovative ideas and develop a prototype that utilizes Copilot for Bank account management. My contribution to the project also involved creating a video demonstration with a clickable prototype that effectively showcased the developed idea.

> **AP workspace project**
> Through several rounds of iterations from wireframe to high fidelity design, I have redesigned the homepage of the workspace to enhance the visualization of the invoice automation process, utilizing a card format. This approach enables users to easily comprehend the process and take actions. Additionally, I simplified and standardized the card design while minimizing the customization effort and cost for development.
> The design has undergone multiple CF&O design reviews and has been refined through heuristic evaluation. Feedback and suggestions from other designers were also collected to optimize the design iteratively.
> Weekly updates were provided to the PM (Product Manager) to ensure business logic is accurately conveyed. By obtaining recognition from both the PM and engineers, we have built trust in the design.

**D&I — 原文（用户提供）：**

> **Practice allyship skills in the moment** — got familiar with backgrounds and responsibilities of all engineers/PMs; open attitude in exploring & communicating design concepts; bridged design–engineering gaps through open conversation.
>
> **Seek diverse perspectives** — proactive user-feedback gathering via surveys; engaged stakeholders across PM/engineering for holistic understanding; communicated user feedback back into the team to keep delivery aligned with original design intent.

**Manager comments（节选）：**

> "Your dedication to these core priorities and your involvement in the invoice approval app has driven this work to new heights… Your trust-building and communication within the team have been key to our project outcomes."

**Reflect on a challenge — 原文（用户提供）：**

> Through the AP Workspace project, I gained valuable experience in breaking free from the design component constraints of the F&O system and redesigning the workspace interface from a business and user experience perspective… As the Approval App project grew in scale, I also developed my cross-team communication skills… my involvement in the Bank FCR project provided me with a deeper understanding of the gap between design and implementation in the F&O system, and the limitations that arise during development.

---

#### 提炼总结（2023 H1）

**主导/支持的项目：**

1. **Vendor Invoice Approval App** — 完成高保真原型；随项目规模扩大，转为统一审批应用 Approvals App（Invoice / HR / Expense 三类合一）的协同支持角色，与 lead designer Jordan 双周同步细化 wireframe，把基于 Invoice Approval 的设计经验沉淀进统一 App。
2. **AP Workspace** — 突破 F&O 组件约束，从 persona / scenario 出发重设计 workspace 首页：用卡片化方式呈现 invoice 自动化流程，同时简化卡片标准、降低开发定制成本；经历多轮 CF&O design review + heuristic evaluation。
3. **Bank FCR（Foreign Currency Re-evaluation）** — 端到端负责 wireframe → 高保真，并支持工程师落地实现，按 code constraints 反向适配设计细节。
4. **AI Hackathon · Copilot for Bank Account Management** — 与 Eric / Suzhen 共同 brainstorm 并产出 Copilot 在银行账户管理场景下的 prototype，负责 clickable prototype + video demo 演示交付。

**跨项目的协作能力沉淀：**

- 在设计、PM、工程之间扮演沟通枢纽（月会、双周会、CAB survey），把用户视角持续注入产品决策。
- 在 Bank FCR 中通过工程协作建立了对"设计—实现 gap"的感知，反哺后续设计的可实现性判断。
- 通过用户调研 + heuristic evaluation 形成"发散—收敛"的设计迭代闭环。

**关键候选句（可入 portfolio）：**

> 在 Dynamics 365 Finance 阶段主导多个核心场景的端到端设计 —— Vendor Invoice Approval App、AP Workspace 首页重构、Bank FCR 等；其中 AP Workspace 突破 F&O 既有组件约束，从用户与业务视角重设计 invoice 自动化流程的卡片化呈现，在简化体验的同时降低开发定制成本。

> 在 Approvals App（统一 Invoice / HR / Expense 三类审批）的孵化过程中，承担设计协同与跨团队沟通的枢纽角色，推动设计、PM、工程之间通过双周会与 CAB survey 持续同步用户视角。

> 早期介入 AI 与企业场景结合的探索：在 AI Hackathon 中与团队共同搭建基于 Copilot 的银行账户管理 prototype，为后续转入 Copilot Connector 阶段做了方向铺垫。

---

### 2023 H2 · Dynamics 365 Finance

**Core priorities — 原文（用户提供）：**

> **1. Enable success for AP workspace project**
> In the pursuit of effective communication and feedback gathering for our design, I collaborated closely with Project Manager Rayne to create a comprehensive demo video, strategically sharing it on Yammer to engage stakeholders and to effectively showcase the designed features. Additionally, we conducted a survey to gather valuable insights. The combined result of these efforts was a positive reception, with the design receiving favorable feedback from both the Yammer platform and survey responses.
> In order to ensure a seamless and accurate design implementation, I produced a comprehensive Figma file that included detailed specifications like component dimensions, color usage, and font choices, thereby streamlining the development process and reducing the chances of misinterpretation. Simultaneously, my active engagement with the Platform team through E-mail and Teams conversation played a pivotal role in fostering collaboration and synergy between the design and development teams.

> **2. Learning Cash and Bank product area**
> To acquire a comprehensive understanding of crucial concepts in Cash and Bank Management area, including netting rules, netting automation, bank reconciliation, and bank accounts, I invested considerable time and effort. This involved a thorough review of background documents, testing the current F&O system, reviewing relevant recordings, and engaging in insightful conversations with the PM.
> To streamline the Payment application project and assess the operational behaviors for current F&O system, I summarized and visualized the entire task flow for payment proposal and payment automation. This involved creating a clear and accessible representation of the process, which served as a valuable reference for further project's design. I subsequently handed over this visualized task flow to my colleague, Michael, to continue the design work.

> **3. Cash and Bank projects design work**
> In order to ensure the effective establishment of project goals, alignment with project requirements, and the maintenance of design quality, I initiated a bi-weekly meeting with our Project Manager, Eric, to maintain regular project progress synchronization. Additionally, meetings with the Engineering team were strategically scheduled as per project requirements to deliberate on design features, address implementation challenges, and ensure alignment with development progress.
> To align design goals with PM's vision, I crafted detailed design briefs for each project. These briefs, containing insights for current issues, pertinent personas, and detailed scenarios, served as foundational documents providing a comprehensive understanding and guiding the entire design process. To systematically document each design step, I maintained design changelogs in Figma file, fostering transparency and accountability in design iterations and changes.
> To develop a comprehensive design solution for the Modern Bank Reconciliation project, I initiated the design from wireframe concepts to high-fidelity mockups, covering the entire reconciliation process from Bank Statement to Reconciliation Worksheet. Collaborating closely with the engineering team, we conducted multiple rounds of design iterations and technical evaluations, delving into significant topics like the navigation between the Bank Statement page and Reconciliation Worksheet, functional differentiation for these two pages, and behavior of Worksheet generation. The resulting effective communication paved the way for a refined and final design solution. Seeking user feedback and design validation, I collaborated with Mariah, our researcher, to conduct usability testing. Leveraging the insights we got from this research, I refined the design to improve user experience. These research findings and design enhancements were thoughtfully conveyed to the engineering team, ensuring a successful implementation of user-centric design approach.

**D&I — 原文（用户提供）：**

> **Practice allyship skills** — Modern Bank Reconciliation 中通过多轮 design iteration + technical evaluation 整合 PM/工程团队视角；面对 control limitations & responsive design issues 时与工程师 open communication 找替代方案。
>
> **Seek diverse perspectives** — Workspace 项目用 demo video + survey；Modern Bank Account 项目做 usability testing；首次向 PM/工程团队**系统介绍 research process 并 share findings**，为他们"first exposure to such a resource"。

**Manager comments（节选）：**

> "Yuheng you've had a very impactful last half of the year… You have really stepped up your quality of work, diligence in forming your rationale, building trust with your PM and Engineering partners, and making it all look 'easy'."
>
> "Your work on the updated AP automation workspace was a solid finish to your support of that product area, and your transition to Cash and Bank has been stellar. I'm impressed with your ability to quickly understand deep technical concepts within the Finance space… I believe the changes you've made will have a positive impact on **NSAT** once enough customers have the ability to leverage the new designs."
>
> "Continue to work with Maggie from the Research team and ensure you're leveraging her expertise…"
>
> "Going forward if you continue to operate at this level, I fully expect to see you flourish at Microsoft and in your career."

**Reflect on a challenge — 原文（用户提供）：**

> In the Bank Reconciliation project, I actively demonstrated a growth mindset by embracing challenges and setbacks in pursuit of an innovative design. I took personal accountability for convincing engineers to invest effort in achieving the right design instead of the easy one, fostering a collaborative environment through extensive communication and discussions during design reviews and technical evaluations.
> By listening to the engineers' perspectives and understanding the backend coding efforts associated with different design choices, I iterated quickly on design for mainly three rounds based on feedback from each meeting to ensure the design have rational behavior and feasibility for development. When faced with technical limitations such as restricted component use and responsive layout issues, I proactively engaged in rapid design modifications to ensure a consistent user experience.
> This experience provided me with a better understanding of F&O components' limitations for development, allowing me to bridge the gap between design and implementation.

---

#### 提炼总结（2023 H2）

**主导/支持的项目：**

1. **AP Workspace 收尾** — 与 PM Rayne 合作产出 demo video + Yammer 推广 + survey 反馈闭环，获得 stakeholder 正面认可；产出含组件尺寸/色彩/字体规范的完整 Figma 交付件，与 Platform 团队协作推进无损实现。
2. **转入 Cash & Bank 产品域** — 系统学习 netting rules / netting automation / bank reconciliation / bank accounts；将 payment proposal + payment automation 的全任务流可视化整理后交接给同事 Michael，确保产品域知识在团队内传承。
3. **Modern Bank Reconciliation** ⭐ — 从 wireframe 到高保真，端到端覆盖 Bank Statement → Reconciliation Worksheet 全流程；与工程团队进行多轮 design iteration & technical evaluation（重点议题：两页面之间的 navigation、功能划分、Worksheet 生成行为）；与 researcher Mariah 合作完成 usability testing，并把研究结论同步给工程团队推动用户为中心的实现。
4. **Cash & Bank 设计协作机制** — 与 PM Eric 建立双周节奏；每项目交付 design brief（含 issues / personas / scenarios）+ Figma changelog，让设计决策可追溯、可问责。

**关键能力/方法论沉淀：**

- 把 research craft 引入到 PM/工程团队（"first exposure to such a resource"），建立 design 决策的研究背书。
- 在 Modern Bank Reconciliation 中体现的 growth mindset：3 轮 design iteration 兼顾"对的设计"与"可实现性"，主动 modify 设计以适配 F&O 平台的 component 与 responsive 限制。
- 设计规范化交付（Figma spec + changelog + design brief）成为团队复用的工作流。

**Manager 给出的关键评价（可作为引述素材）：**

- "Quality of work… diligence in forming your rationale… building trust with PM and Engineering partners… making it all look 'easy'."
- 设计将对 **NSAT** 产生正向影响（一旦客户用上新设计）。

**关键候选句（可入 portfolio）：**

> 主导 D365 Finance **Modern Bank Reconciliation** 端到端体验设计 —— 从 wireframe 到高保真，覆盖 Bank Statement → Reconciliation Worksheet 全流程，并通过与研究员合作的可用性测试驱动设计迭代；3 轮 design–engineering 评审下兼顾"对的设计"与"可实现性"，推动工程团队投入实现而非选择易做方案。

> 在 AP Workspace 收尾阶段建立"demo video + Yammer + survey"的 stakeholder 反馈闭环，并通过完整 Figma 规范交付件 + 与 Platform 团队的紧密协作，让设计在实现端无损落地，预计对产品 NSAT 产生正向影响。

> 在 Cash & Bank 产品域引入 research-led design 的工作方式 —— 首次为 PM 与工程团队系统呈现 usability testing 过程与发现，并把方法沉淀为 design brief + Figma changelog 的可追溯工作流。

---

### 2024 H1 · Dynamics 365 Finance

**Core priorities — 原文（用户提供）：**

> **Enable success for projects in Bank Management area**
>
> *Modern Bank reconciliation* — Contributed to the successful implementation… addressed implementation challenges including page responsiveness and color accessibility. Provided design rationale for customization. Collaborated with PM to enhance functionality and design based on user feedback and technical insights, incorporating features like **pending match mechanism, multi-selection, and group selection interaction**. Designed a **data upgrade wizard** for bank reconciliation.
> **Impact:** Implemented new standard functionalities **instead of relying on an ISV solution**, enhancing competitive edge. **Succeeded in preview with 89 active preview customers within last 14 days (data from 4.30)**. Positive customer feedback: "the new features look promising", "happy to have the standard solutions", "what many customers have been waiting for". **Partners acknowledged that having new functionalities made it easier to recommend the standard solution over an ISV.** Ensured pixel-level design implementation.
>
> *Bank account lifecycle* — High-fidelity mockups for Bank account approval / Approval history / Approval setting page. Assisted engineers during development. **Impact:** Consensus among engineers and PM; smooth implementation without setbacks.
>
> *Bank reconciliation copilot* — Leveraged standard Copilot components to create a smooth Copilot sidebar interaction for **generating matching rules**. Collaborated with PM on Copilot trigger and notification mechanism. **Impact:** Supported engineers in successfully demonstrating POC. **Received strong positive feedback from leadership on continuing this Copilot scenario.** Familiar with Copilot design patterns. Aligned the new Copilot function with user cognition and existing F&O behaviors.

> **Design work for projects in Cash Management area**
>
> *Netting rules* — Completed design for Netting rules / Process automation / Cross-currency netting pages. **Impact:** Implemented with **100% consistency**. Succeeded in preview and currently **GA with no setbacks**.
>
> *Cash application POC (for AR)* — Collaborated with engineer & PM. **High-fidelity mockups in two weeks.** **Impact:** Design leveraged by engineer to verify end-to-end process (payment source → data capture → auto invoice matching). Demo presented to customers.

> **AI project and Copilot scenarios**
>
> *Immersive home page — Cashier persona* — Designed immersive home page for Cashier persona (making & sending payment scenario), daily iterations + demo. **Impact:** Assisted leadership in presenting the concept, **leading to widespread recognition**.
>
> *Immersive homepage payment scene* — Designed for **April (payables clerk) persona** with generating-payment-rule scenario. Integrated with SCM team's designs to present a **holistic Source-to-Pay story** to leadership. **Impact:** Validated value of immersive home page; laid groundwork for future planning.

> **200K MAU CustTable project** — Cross-team collaboration with PM/engineers + Michael + SCM designers through daily communication. Tested prompt results. **Impact:** **100% design consistency** in implementation.

**D&I — 原文摘要：**

> Engineer insights valued during design reviews; weekly **Design jams**; absorbed exemplary designs from Sales / SCM / Finance teams during Immersive Homepage exploration; cross-team Teams chat for 200K MAU alignment; weekly shared design updates with PMs/engineers.

**Manager comments（节选）：**

> "Your work on **Modern Bank Reconciliation** has been remarkable, introducing innovative features and receiving positive feedback from customers and partners… The **Bank Reconciliation Copilot** design received strong positive feedback from leadership, **showcasing your ability to deliver quickly, and on pivot toward this new AI journey Microsoft has started**. Your **immersive home page designs** for the Cashier and payables clerk personas received great recognition…"
>
> "Overall, your work has driven project success, built trust, **made customers excited for upcoming releases**, and enhanced your professional growth and technical skills."

**Reflect on a challenge — 原文摘要：**

> **AI perspectives** — Initial lack of AI/ChatGPT knowledge → proactively learned via meeting records, online documents, internal resources; discussed with engineering on F&O × AI integration; pivoted focus to immersive homepage + Copilot POCs to align with company AI strategy.
> **Cross-team collaboration** — Limited prior exposure to cross-time-zone collaboration on 200K MAU. Lesson: a lot of effort spent clarifying design rationales because alignment document came in late, contributing to schedule delay. **Need for early documentation of requirements & stakeholder alignment.**

---

#### 提炼总结（2024 H1）

**📊 首次出现的量化指标：**

- **Modern Bank Reconciliation 进入 preview，89 个活跃 preview 客户（截至 4.30 的 14 天数据）**
- **Netting Rules 100% design consistency 上线，preview → GA 无 setback**
- **200K MAU CustTable 100% design consistency**

**主导/支持的项目（按主线分类）：**

**Bank Management（产品落地）**
1. **Modern Bank Reconciliation 上线** ⭐ — 在 2023 H2 的设计基础上，进入 preview 并取得**替代 ISV 方案的市场竞争力**；新增 pending match 机制、多选 / 分组选择交互、数据升级向导；客户与合作伙伴正面反馈（partners 反映"更容易推荐 standard solution 而非 ISV"）。
2. **Bank Account Lifecycle** — 完成审批 / 审批历史 / 审批设置三页面高保真，工程实现零返工。
3. **Bank Reconciliation Copilot** ⭐ — 用标准 Copilot 组件构建 sidebar 交互生成 matching rules，POC 获 leadership 强力支持，是后续 Copilot 方向的关键 anchor。

**Cash Management**
4. **Netting Rules / Process Automation / Cross-Currency Netting** — 设计→ preview → **GA 无 setback**，100% 落地一致性。
5. **Cash Application POC (for AR)** — 两周快速产出，覆盖 payment source → data capture → auto invoice matching 端到端。

**AI / Copilot 方向**
6. **Immersive Home Page · Cashier persona** — 帮助 leadership 演示获得"widespread recognition"。
7. **Immersive Home Page · April（payables clerk）persona** — 与 SCM 团队联合呈现 **Source-to-Pay 完整故事**，验证 immersive home page 价值。
8. **200K MAU CustTable** — 跨团队（含 SCM 设计师 Michael 等）每日协作。

**关键能力/方法论沉淀：**

- 从被动学习 AI → 主动推动 Copilot 体验设计；获得 leadership 在 AI 方向上的关键支持。
- 跨团队 / 跨时区协作的教训：早期 alignment 文档先行，避免后期返工。
- "对客户讲故事"的能力：immersive home page 的 Source-to-Pay 联合演示是给 leadership 看 vision 的范式。

**Manager 给出的关键评价（可作为引述素材）：**

- Modern Bank Rec "**remarkable**, introducing innovative features and receiving positive feedback from customers and partners"
- Bank Rec Copilot 展示"**ability to deliver quickly, and on pivot toward this new AI journey Microsoft has started**"
- Immersive Home Page "**received great recognition**"
- "Made customers excited for upcoming releases"

**关键候选句（可入 portfolio）：**

> 主导 D365 Finance **Modern Bank Reconciliation** 从设计到 preview 上线 —— 进入 preview 后 14 天内取得 **89 个活跃 preview 客户**，正面客户反馈推动合作伙伴"更愿意推荐标准方案而非 ISV"；新增 pending match 机制、多选/分组选择、数据升级向导等关键交互。

> 在 Microsoft AI 战略转型的关键节点上做出快速响应：从零开始构建对 AI/Copilot 设计模式的理解，设计 **Bank Reconciliation Copilot** 用 Copilot sidebar 自动生成 matching rules，POC 获 leadership 强力支持，成为后续 Copilot 体验方向的 anchor。

> 在 Source-to-Pay 全景叙事中，独立完成 Cashier 与 payables clerk 两个 persona 的 **Immersive Home Page** 设计，联合 SCM 团队呈现完整故事并获 leadership "widespread recognition"，验证 immersive 体验在 Finance 场景的可行性。

> 同期推进 Netting Rules 等多个 Cash Management 项目 preview → GA 全流程，**100% 落地一致性，无 setback**。

---

### 2024 H2 · Dynamics 365 Finance

**Core priorities — 原文（用户提供）：**

> **Enable success for projects in AI and Copilot area**
>
> *200K MAU — Customer Summary* — Collaborated across teams to ensure consistent design style across scenarios and the success of UI implementations. **Impact:** **100% design consistency** for implementation, aligning with the company's 'AI-first' strategy. **D365 Finance Copilot Summary reached 242,202 monthly active users (data until 11/5/2024), with the Customer Summary contributing 112,239 MAU.**
>
> *Bank Reconciliation Copilot* — High-fidelity designs for 'Proposing Matching Transactions' and 'Generate Transaction Summary' scenarios using Copilot design library. Assisted in developing demos showcased at the **Business Application Launch Event (2024 release wave 2)**. **Impact:** Designs implemented with **100% consistency** for 'Proposing Matching Transactions', achieving **99.8% Copilot accuracy in 1:1 matching**. Successfully demoed at BALE for a large audience.
>
> *AI Tribe work* — Collaborated with PMs and designers across Europe, North America, and Asia on **Monitoring and Inspecting Immersive Home** (Teams cards, Copilot interaction, rule configuration). **100% participation in weekly sync meetings**. Contributed search & toast components to the **'AI ERP — Immersive Experience Toolkit'**.

> **Contribute to the success of the product team**
>
> *Payment Automation* — Took over from Michael. High-fidelity designs for **Payment Plan Template page**; improved Payment Plan + Wizard pages. Bi-weekly engineer syncs. **Completed XR1 & XR2 reviews** with consensus.
>
> *Modern Bank Reconciliation post-launch support* — Engineering review attendance; product development completed with no design issues; **approximately 50 active users** on the product.
>
> *Customer demo support for PMs* — Weekly meetings with PMs Eric (Bank) and Kai (Cash); high-fidelity designs with data for Bank/Cash showcase during customer meetings.

> **Design work for Enterprise readiness project**
>
> *Defaulting Value & Legal Entity Selection* — Quick iterations within **two weeks**. Explored designs for defaulted values in fields/lists, single/multiple legal entity selection. **Impact:** Contributed to the success of the **'Hyper Scale' presentation**.
>
> *Document Explorer* — Design exploration for search document & relationship map presentation. **Completed XR1 review** with consensus from PMs + leadership.

**D&I — 原文摘要：**

> Cross-team collaboration across countries/time zones in 200K MAU, AI Tribe, Enterprise Readiness; took over Payment Automation from Michael; participated in **two Hackathon projects**: **Judge GPT** (fake news evaluation) won **2nd Place "Hack for Society"**; **MindMend AI** (mental health sentiment analysis) got **honorable mention "Hack for D&I with C+AI China"**. Onboarding handover to new colleagues in **India and Ireland**.

**Security — 原文：**

> Completed all secure training on Viva Learning; kept mobile system updated.

**Manager comments（节选）：**

> "Your impact was felt by our team, our Product and Engineering partners, and our customers… The **Bank Reconciliation Copilot project was an especially good example** of this as you thought through the problems our customers were facing, looked for opportunities to improve, integrated AI concepts, and helped design a solution that was implementable by our Engineering partners."
>
> "You've also had some great exposure across the team with some of the **AI Tribe work**. I was glad to see you get involved and for the rest of the team to see your abilities on full display."

**Reflect on a challenge — 原文摘要：**

> AI Tribe 是**首次大规模跨团队、跨地理位置协作**（中途加入项目，靠 weekly sync + Teams 录像 + Figma 文件补 context 并建立角色）。Enterprise Readiness 双周与 manager 同步设计。学习用 **ADO** 文档化 workflow 与跟踪进度。

**Manager feedback on growth：**

> "Push the team to not always settle for the 'quick' solution… The **Document Explorer project** stands out because I've had to remind you to push the product team to think outside the box with regard to AI and to push them not to ship the 'quick' solution. Let's work in our 1:1's to better plan how you can **advocate to your product team for the best solution possible**."

---

#### 提炼总结（2024 H2）

**📊 量化指标（D365 Finance 阶段巅峰）：**

- **D365 Finance Copilot Summary 达到 242,202 MAU**（截至 2024/11/5），其中 **Customer Summary 贡献 112,239 MAU**
- **Bank Reconciliation Copilot 在 1:1 matching 场景实现 99.8% accuracy**
- 在 **Business Application Launch Event (2024 release wave 2)** 上做 demo
- Modern Bank Reconciliation 累计 ~50 个 active users
- 200K MAU / Bank Rec Copilot / AI Tribe Toolkit 均实现 **100% design consistency**

**主导/支持的项目（按主线分类）：**

**AI / Copilot 主线（已成为工作重心）**
1. **200K MAU · Customer Summary** ⭐ — 推动 D365 Finance Copilot Summary 跨过 240K MAU 量级，对齐公司 "AI-first" 战略。
2. **Bank Reconciliation Copilot 上线 & BALE 大会 demo** ⭐ — 'Proposing Matching Transactions' + 'Generate Transaction Summary' 两个核心场景；99.8% accuracy 是设计与工程紧密协作的成果。
3. **AI Tribe** ⭐ — 跨欧/美/亚的 Monitoring & Inspecting Immersive Home 设计；贡献 AI ERP Immersive Experience Toolkit 的 search & toast 组件。

**产品落地与支持**
4. **Payment Automation 接手** — 从 Michael 处接手 Payment Plan Template / Plan / Wizard，完成 XR1 & XR2 评审。
5. **Modern Bank Reconciliation post-launch** — ~50 active users 稳定运行。
6. **PM customer demo 支持** — 周节奏支持 Eric / Kai 在客户会议中演示。

**Enterprise Readiness**
7. **Defaulting Value & Legal Entity Selection** — 两周交付，支撑 "Hyper Scale" leadership 演讲。
8. **Document Explorer** — 完成 XR1，被 manager 指出"需要 push 团队选 best solution 而非 quick solution"，是后续 advocacy 能力的关键学习点。

**Hackathon（D&I + AI 双重视角）**
- **Judge GPT** — Fake news evaluation challenge，**2nd Place "Hack for Society"**
- **MindMend AI** — Mental health 情感分析，**Honorable mention "Hack for D&I with C+AI China"**
- Onboarding handover：与印度、爱尔兰新同事建立连接

**关键能力/方法论沉淀：**

- 从"Copilot 体验设计的执行者"成长为"AI 体验设计的可信合作伙伴"（manager 评价："trust and rely on you to think through the problem space"）。
- 大规模跨地理协作的方法：weekly sync + 录像复盘 + Figma 历史 + ADO workflow 跟踪。
- Manager 给出的下阶段成长方向：**advocate for the best solution, not the quickest one**（Document Explorer 教训），为后续 Copilot Connector 阶段的 advocacy 角色铺垫。

**关键候选句（可入 portfolio）：**

> 在 **D365 Finance Copilot** 体验设计中担任核心设计师之一 —— 主导 Customer Summary 等场景的体验设计，推动 D365 Finance Copilot Summary 累计达到 **242K 月活用户**（其中 Customer Summary 贡献 112K MAU），把"AI-first"战略转化为可量化的产品价值。

> 设计 **Bank Reconciliation Copilot** 的"Proposing Matching Transactions"与"Generate Transaction Summary"两个核心场景，落地实现 **99.8% Copilot 准确率（1:1 匹配场景）**，并在 **Business Application Launch Event (2024 release wave 2)** 面向大规模观众成功 demo。

> 作为亚太代表深度参与 **AI Tribe** 跨欧/美/亚的大规模设计协作 —— 完成 Monitoring & Inspecting Immersive Home 的设计，并贡献 AI ERP Immersive Experience Toolkit 的 search / toast 等基础组件，形成可复用的体验资产。

> 在公司 D&I + AI 双重价值导向下参与 Hackathon：**Judge GPT 获 "Hack for Society" 二等奖**；**MindMend AI 获 "Hack for D&I with C+AI China" honorable mention**。

---

### 2025 H1 · 过渡（Dynamics 365 Finance → Copilot Connector）

> ⚡ **关键节点**：此期间发生组织调整（reorg），用户在两周内完成 D365 Finance 工作的 handover 并 ramp up 到 **Copilot Connector / Extensibility** 领域。此后属于 Copilot Connector 阶段。

**Core priorities — 原文（用户提供）：**

> Quickly adapted to organizational changes by efficiently completing handover tasks and ramping up on new responsibilities **within two weeks**.
> **Impact:** Enabled a smooth, on-time release of Wave 1 connectors with no disruption to delivery timelines.

> Assist on the **Copilot Graph Connector presentation during Jon Harris's visit**. Created the video demo to walk through the set up process.
> **Impact:** Facilitated the success of the presentation. Supported leadership in driving project momentum and elevating design team visibility, while also **fostering cross-regional resource integration across the broader Extensibility team**.

> Collaborated closely with PMs to deliver design and video assets for both Wave 1 and Wave 2 releases.
> · **Wave 1: 2 connector UI designs, 7 logo designs, 3 videos**
> · **Wave 2: 8 connector UI designs, 8 logo designs, 5 videos**
> **Impact:** Contributed to **50% of the design team's total output**. Ensured timely delivery of public preview materials.

> Produced videos for the Wave 1 connector release, rapidly iterating on the initial design within two days. Aligned with PMs and Design Leadership to finalize the **video template** and shared best practices for recording.
> **Impact:** Video template created as guidance for all demo videos. **Reduced video editing time by 40%**, from 5–6 hours to ~3–4 hours during Wave 1.

> Building on Wave 1 experience, optimized the video production process by introducing **ClipChamp functions** to PMs and setting up a **shared cloud workspace** for collaboration.
> **Impact:** Further cut design-side editing time by **50% (down to 1–2 hours)**, eliminated an average of 30 minutes of back-and-forth communication, and reduced PM screen-recording attempts from **3–4 to just 1–2**.

> Collaborated with the **IDC design team** to deepen understanding of the Admin Center and connector setup design (libraries + background context). Contributed feedback through meetings, meeting notes, and Figma comments.
> **Impact:** Enhanced cross-team design alignment.

**D&I — 原文摘要：**

> Quick ramp-up on new topics via meetings with leadership / PM / design / engineering teams. Applied insights from **stakeholder research + competitive study** to validate decisions and provide suggestions to **Indian design partners** — contributing to a more inclusive product experience. Weekly sync with PM team; refined video editing collaboration process with clear rationale and structured guidance — **improving overall efficiency by 70–80%**.

**Security — 原文：**

> Completed **Security Foundations** + **Trust Code** trainings. Applied **security-first thinking** in design — proactively worked with PM & engineering on **data flow review, access control, and integration risks in connector features**. Adhered to Microsoft's security policies in resource sharing & public information releases.

**Manager comments（节选）：**

> "Although the reorg thing is unexpected, you demonstrated **remarkable adaptability and initiative**… By quickly completing handover tasks and ramping up on new responsibilities within just two weeks, you played a crucial role in delivering Wave 1, 2 & 3 connectors smoothly and on schedule."
>
> "You produced high-quality design and video assets, **accounting for half of the design team's total output**. Your efforts in producing and optimizing demo videos, including the creation of a standardized video template and introduction of efficient tools like ClipChamp, led to a substantial reduction in editing time…"
>
> "You actively facilitated knowledge sharing and alignment by deepening partnerships with the **IDC design team** and providing valuable, inclusive feedback to partners in India."
>
> "You **built a SharePoint site to create visibility for the global team**."
>
> "You contribute to your colleagues' success, such as **Alina's work on envisioning projects**. When a project or task assigns to you, you can always deliver the result actively."

**Reflect on a challenge — 原文摘要：**

> **ClipChamp introduction timing** — PMs were initially hesitant; learned the importance of **timing and team alignment when introducing new tools**. Used Wave 1 shared challenges as leverage, proposed new process backed by clear rationale + understanding of pain points.
>
> **Influencing India design team** — Initial UX concerns were dismissed for lack of immediate validation. Shifted approach to **evidence-based argumentation through heuristic evaluations + competitive analysis + user research**. Focused on **indirect impact via written meeting summaries + Figma comments** to embed design thinking into the process. Will continue leveraging structured, data-driven rationale + persistent respectful communication for cross-regional influence.

**Manager feedback on growth：**

> "Before making any changes, it's essential to gather enough information to ensure we're well-informed… Regarding the design critique case, I see this as an excellent opportunity for you to **develop your ability to influence others effectively**. I will pay close attention to this area so I can offer coaching to help you master these important **soft skills**."

---

#### 提炼总结（2025 H1）

**🔄 阶段切换（重要里程碑）：**

- 因 **reorg** 离开 Dynamics 365 Finance 团队，**两周内完成 handover + ramp up**，无缝衔接 **Copilot Connector / Extensibility** 领域，确保 Wave 1 connector 准时发布。

**📊 量化指标：**

- **Wave 1**：2 connector UI + 7 logo + 3 video；**Wave 2**：8 connector UI + 8 logo + 5 video
- 个人产出占 **设计团队总产出的 50%**
- **视频编辑时间从 5-6h → 1-2h（累计降幅 70-80%）**：Wave 1 模板节省 40%，Wave 2 ClipChamp + 共享云工作区再省 50%
- PM 录制重试次数 **从 3-4 次降至 1-2 次**，节省 30 分钟/次沟通往返

**主导/支持的项目（按主线）：**

**Copilot Connector 体验产出（Wave 1/2/3）**
1. **Copilot Graph Connector demo** — 为 **Jon Harris 来访 presentation** 制作视频 demo，支撑 leadership 推动项目势能与跨区域 Extensibility 团队整合。
2. **Wave 1/2/3 connector releases** — UI + logo + video 大规模交付，准时进入 public preview。

**协作工作流（设计运营层面的杠杆）**
3. **Demo 视频模板 + ClipChamp 工作流** ⭐ — 从产出方变成"流程定义方"：标准化模板成为团队所有 demo video 的 guidance；ClipChamp 共享云工作区把 design ↔ PM 协同时间砍掉 70-80%。
4. **SharePoint global hub** — 给全球团队建可见性站点。
5. **IDC 设计团队协作** — 深入理解 Admin Center 与 connector setup 设计；通过 evidence-based argumentation（heuristic + competitive + research）影响印度伙伴的设计决策。

**辅助 / D&I**
6. 支持同事 **Alina 的 envisioning projects**。
7. Security：完成 Security Foundations + Trust Code 培训；把 **data flow review / access control / integration risks** 引入 connector feature 设计流程。

**关键能力/方法论沉淀：**

- 从"项目执行者"过渡到"设计运营优化者"：用工具选型 + 模板化 + 工作流定义释放团队整体效率（70-80% 提升），是这一阶段最重要的成长 signal。
- 跨区域 indirect influence：以 evidence-based 论证（heuristic / competitive / research）+ 文档化（meeting summary / Figma 评论）累积渗透式影响力。
- Security-first 设计意识进入 connector 场景。

**Manager 给出的下阶段成长方向：**

- **Influence others / soft skills** —— 把"做得好"升级为"带得动"，manager 承诺亲自 coaching。这预示着 2025 H2 起的 advocacy / design leadership 转型。

**关键候选句（可入 portfolio）：**

> 在公司 reorg 调整中**两周内完成 D365 Finance handover 并 ramp up 到 Copilot Connector / Extensibility 领域**，确保 Wave 1 connector 公开发布零延误，并随后持续主导 Wave 1/2/3 三轮发布的设计与视频交付，个人产出占整个设计团队的 **50%**。

> 作为 Copilot Graph Connector 在 Jon Harris 来访 presentation 中的视觉与 demo 主创者，制作 setup 演示视频支撑 leadership 推动项目，并促成跨区域 Extensibility 团队资源整合。

> 主导 demo 视频协作工作流的标准化与工具升级 —— 制定团队级 video template、引入 ClipChamp 共享云工作区，把视频编辑时间从 5-6h 压缩到 1-2h（**累计降幅 70-80%**），PM 录制重试次数从 3-4 次降至 1-2 次，把设计运营本身做成可量化的杠杆。

> 通过 evidence-based 设计论证（heuristic evaluation + competitive analysis + user research）跨区域影响 IDC / 印度设计伙伴，以 indirect influence（meeting summary、Figma 评论）持续渗透设计思维，推动跨地区协作下的产品体验一致性。

> 把 **security-first 思维**（data flow review / access control / integration risks）引入 connector feature 设计流程，与 PM、工程团队协同评估。

---

### 2025 H2 · Copilot Connector  🎉 **晋升到下一个 level**

> 本期 Connect 的 manager comments 开头明确写道："Yuheng, you delivered strong impact this cycle **as you've been promoted to the next level**, through both solid execution and proactive leadership."

**Core priorities — 原文（用户提供）：**

> **Goal 1. Ensure the Success of Copilot Connector**
>
> *Designed, created, and maintained the Copilot Connector **Catalog Site**.*
> **Impact:** Established a unified and **public-facing platform** showcasing China Team's contributions — release newsletters, connector status, related resources, demo videos. **The site serves as the data foundation for the Connector Agent**, enabling users to retrieve connector-related information through natural language queries.
>
> *Produced demo videos for **Wave 3 & 4** connector releases (total of 4 videos).*
> **Impact:** Delivered **100%** of requested demo videos on time.
>
> *Collaborated with PM Danny Yao to complete the **Connector Setup OAuth 2.0** experience design.*
> **Impact:** Delivered end-to-end design flows covering **all authentication scenarios** on schedule. **Rolled out to P0 connectors in November 2025**, with full implementation planned for 2026.
>
> *Partnered with PM Ran Tang to design **Phase 1 Email Notification** and explored **Phase 2 Unified Notification Center**.*
> **Impact:** Addressed a **long-standing customer need** for connector health monitoring & alerting. Phase 1 currently under implementation; Phase 2 exploration initiated.
>
> *Explored **Connector Recommendation** design.*
> *Enhanced setup experience through **interaction, error message, and guidance** design improvements.*

> **Goal 2. Explore Design Opportunities and Strengthen Collaboration**
>
> *Partnered with PM Irene Huang to explore designs for the **Digital Chief of Staff** project.* Supported PMs in refining early-stage concepts and visualizing design flows for project pitching.
> *Explored **Legal Agent** design with PM Irene Huang.* Shaped initial design concepts and flows for leadership proposals.

> **Goal 3. Continuous Learning and Knowledge Sharing**
>
> *Shared insights on **Coze AI product** during the **OXC Team AI Competitive Study** and **Studio 8 AI Product Compass** sessions.*
> *Learning **Vibe Coding**.* Continued personal growth in technical proficiency.

**Security — 原文：**

> Prioritized secure design and implementation by collaborating with PMs and IDC team — e.g. **Connector Setup OAuth 2.0** covering all authentication scenarios. Notification designs for connector health monitoring & alerting supported **proactive risk mitigation and improved system reliability**.

**Behaviors demonstrated：**

> **Growth Mindset** — Vibe Coding learning + AI tool insights sharing.
> **Customer Obsessed** — Addressing long-standing health-monitoring/alerting needs; end-to-end flows enabling effective leadership presentations.
> **One Microsoft** — Cross-PM/IDC partnership; refining early-stage concepts/visualizations.

**Reflect — 原文摘要：**

> Challenge: **Presenting to LT within very limited time**. Struggled initially to convey key points & maintain focus. Learned the importance of **storytelling structure** — organizing content to highlight priorities upfront. Realized LT updates are not just about showing results but **connecting them to what support is needed from leadership**. Plan: create a **repeatable framework — problem, insight, impact, leadership asks** — and leverage team members for dry runs.

**Manager comments（节选 — 这次特别长且具体）：**

> "**You've been promoted to the next level**, through both solid execution and proactive leadership."
>
> "I especially appreciate your ownership of **admin setup UX improvements**, from driving the **design sprint**, gathering feedback from internal admins, shaping the setup patterns, and sharing with **Rohan's team, John Friedman & Jon Harris's LT**. Your initiative in reaching out to **Rohan and Shruti's teams** to ensure pattern alignment and design coherency shows a commitment to a high UX bar."
>
> "Your customer-centric approach is evident throughout your work on **OAuth 2.0 setup flows, notification center exploration, and connector recommendations**. You consistently think through **edge cases, error paths, and guidance details**."
>
> "I also want to call out your contributions to early exploration projects like **Digital Chief Staff and Legal Agent**. Your ability to quickly visualize concepts and help PMs clarify flows has **accelerated early-stage alignment and strengthened proposal readiness**."
>
> "Your security focus, especially in covering all authentication scenarios and designing notification experiences that surface connector health, directly contributes to **protecting user data and improving system reliability**. This is an important and often invisible part of design work."
>
> "Your **AI competitive insights, Coze analysis, and vibe-coding practice have added value to both our team and Studio 8's AI transformation**. I encourage you to continue summarizing these learnings and sharing them more broadly, as this will **grow your influence and accelerate team adoption of AI-native design practices**."

---

#### 提炼总结（2025 H2）

**🎉 阶段性里程碑：晋升下一个 level**（manager 明确归因于 "solid execution + proactive leadership"）

**📊 量化与里程碑：**

- **Connector Setup OAuth 2.0** —— **11/2025 P0 connectors 上线，2026 年全面实施**，覆盖所有认证场景
- **Wave 3 & 4 demo videos** —— **100% on time** 交付
- **Copilot Connector Catalog Site** —— 成为 **Connector Agent 的数据底座**
- **Phase 1 Email Notification** —— 实施中；Phase 2 Unified Notification Center 探索启动

**主导/支持的项目（按主线）：**

**Copilot Connector 体验骨架（核心交付）**
1. **Copilot Connector Catalog Site** ⭐ — 设计 + 维护，从一个对外平台升级为 **Connector Agent 的数据底座**（自然语言查询入口）。
2. **Connector Setup OAuth 2.0** ⭐ — 与 PM Danny Yao 合作，端到端覆盖所有认证场景；P0 在 11/2025 上线，2026 全面铺开。
3. **Notification 体系**（与 PM Ran Tang）— Phase 1 Email + Phase 2 Unified Notification Center；解决长期 connector 健康监控痛点。
4. **Connector Recommendation** — 提升 connector adoption 的设计探索。
5. **Setup experience enhancements** — interaction / error / guidance 整体打磨；与 IDC 团队对齐可落地实现路径。
6. **Wave 3 & 4 demo videos** — 4 个视频 100% 准时。

**Admin Setup UX 设计领导力** ⭐（manager 特别 call out）
7. **Admin Setup Design Sprint** — 主导 sprint、收集 internal admin 反馈、塑造 setup patterns，并向 **Rohan team / John Friedman / Jon Harris LT** 演讲。
8. **跨团队 pattern 对齐** — 主动联系 Rohan + Shruti 团队保证 design coherency。

**早期探索（visionary 协作）**
9. **Digital Chief of Staff** — 与 PM Irene Huang 早期概念可视化，支持 leadership pitching。
10. **Legal Agent** — 与 PM Irene Huang 初期概念 & flows。

**Learning & 团队影响力**
11. **AI 竞品分析 + Coze 分享** — 在 **OXC Team AI Competitive Study** + **Studio 8 AI Product Compass** 两场分享，为 **Studio 8's AI transformation** 提供价值。
12. **Vibe Coding 学习** — 技术能力补强，反哺设计与工程协作。

**关键能力/方法论沉淀：**

- **从 "执行 + 流程优化者" 升级为 "设计领导力 owner"**：admin setup sprint 是清晰的 leadership 表现（own + drive + advocate to LT）。
- **AI-native 设计实践推广者**：Coze + Vibe Coding 学习已不只是个人成长，而是支撑 Studio 8 整体 AI transformation。
- **edge case + error path + guidance** 是 manager 反复强调的 customer-obsessed 设计 signature。
- **security-first 设计深度落地**：OAuth 2.0 全场景、connector 健康通知都是"设计对系统可靠性的隐形贡献"。
- **下阶段成长方向（manager 给的）**：LT 演讲的可复用 framework（problem / insight / impact / asks）+ 把 AI learning 公开分享出去扩大 influence。

**Manager 给出的高密度评价（可作为引述素材）：**

- "Promoted to the next level… through both solid execution and **proactive leadership**."
- Admin setup work: "Initiative in reaching out to Rohan and Shruti's teams… **commitment to a high UX bar**."
- "Consistently think through **edge cases, error paths, and guidance details**."
- Early exploration: "**Accelerated early-stage alignment and strengthened proposal readiness**."
- Security: "**Protecting user data and improving system reliability** — important and often invisible part of design work."
- "Added value to both our team and **Studio 8's AI transformation**… **grow your influence and accelerate team adoption of AI-native design practices**."

**关键候选句（可入 portfolio）：**

> 在 Copilot Connector 阶段被晋升到下一 level —— manager 归因于"solid execution + proactive leadership"。本期独立主导从 **Connector Setup OAuth 2.0**（覆盖所有认证场景，11/2025 P0 上线、2026 全面铺开）到 **Notification 体系**（Phase 1 Email + Phase 2 Unified Center）的多个 Copilot Connector 核心体验骨架。

> 设计并维护 **Copilot Connector Catalog Site** —— 既是中国团队对外展示 release / status / resources / demo videos 的统一平台，也作为 **Connector Agent 的数据底座**，让 AI agent 通过自然语言为用户检索 connector 信息。

> 主导 **Admin Setup UX design sprint** —— 从 sprint 推动、internal admin 反馈收集、setup pattern 塑造，到向 **Rohan team / John Friedman / Jon Harris's LT** 演讲；主动对齐 Rohan + Shruti 团队的 pattern 一致性，把"设计执行"升级为跨团队 design leadership。

> 在 visionary / early-exploration 阶段为 PM 提供 **Digital Chief of Staff** 与 **Legal Agent** 的概念可视化与设计 flows，加速早期对齐、强化 leadership 提案 readiness。

> 把个人 AI learning（Coze 竞品分析 + Vibe Coding 实践）转化为团队级影响 —— 在 OXC Team AI Competitive Study 与 Studio 8 AI Product Compass 等场景分享，支撑 **Studio 8's AI transformation** 的 AI-native 设计实践落地。

---

### 2026 H1 · Copilot Connector + **MADS Design Agent**

> ⭐ 本期 manager 评价的 anchor 句："**MADS Design Agent has become a foundational framework for our team. The architecture you built is influencing not just Copilot Ext. designers but PMs and cross-design teams across MAC.**"

**Goal 1 — Ensuring Copilot Connector Success（原文）：**

> *Notification* — Completed **Phase 1** notification system design, passed stakeholder design review, collaborated with PM to drive delivery.
> **Impact:** Delivered the **first-ever connector notification experience**, addressing long-standing user demand for connector status visibility; **currently in backend testing, shipping in May**.

> *OAuth* — Designed end-to-end **simplified OAuth setup flow**, replacing complex manual steps with a guided, in-product experience. Collaborated with Danny Yao to launch **Simplified OAuth 2.0, covering 5 P0 connectors**.
> **Impact:** **Reduced connector setup time from hours to minutes.** Contributed to an **18% reduction in incoming ICMs** — team brought count from **52 (Nov '25) to 26 (Mar '26)**, hitting the **50% reduction target**.

> *Data Provider* — **Premium Data Provider Connector**: partnered with PM to design the complete **trial / BYOL / freemium** prototype flow and completed **LT spec review**.
> **Impact:** Drove progress across internal LT review and **three-way discussions with external data providers (e.g. Josh Bersin)**.

> *Connector Recommendation* — Built on Ran Tang's foundational work; continued with Neo Cheng; designed recommendation UI and supported **user-interview validation with tenant admins**.
> **Impact:** Interviews surfaced **differentiated needs between large centralized vs. SMB distributed admin models**, sharpening the solution focus; project advanced to **LT review stage**.

**Goal 2 — Exploring Design Opportunities & Strengthening Team Collaboration（原文）：**

> *Vibe Coding / MADS* — Aligned project direction with **Alina Lin**, unifying her Figma component library work with my code-first workflow **under the MADS framework**. Built a unified MADS skill and **published to Skill Hub**. **Led architecture decisions: established a modular two-tier orchestrator model based on Claude Code (skill-first, subagent-assisted)**, targeting expansion to other design teams (e.g. Li Qiao's team) and PM teams.
> **Impact:**
> · **Multiple PMs created their own branches in the MADS repo** — evolving from personal exploration to **cross-role adoption**.
> · Contributed to the establishment and evolvement of **Studio 8's skill hub** project.
> · Architecture approach **adopted by Sandra Yu and Alina Lin**, establishing a clear direction and model for further collaboration with other design and PM teams.

> *IDC Team Collaboration* — Weekly syncs to share progress, align on latest connector design directions, exchange AI workflow explorations.
> **Impact:** Cross-region design consistency; mutual AI exploration sparked **shared inspiration and advanced AI-native design practices across both teams**.

> *Sharing with Leadership* — **Co-presented with Alina Lin to Jon Harris in Suzhou** on AI-era workflow exploration and practices. Presented the **MADS Design Agent** project and next steps **to Shanying Leung**.
> **Impact:** Showcased Extensibility team's cutting-edge AI-era design exploration to Jon Harris. **Aligned with Studio 8's strategic direction; demonstrated progress on "change how we design" and "change how we work" within the Extensibility team, recognized by Shanying.**

**Goal 3 — Continuous Learning & Sharing（原文）：**

> *AI Transformation + Vibe Coding* — Shared topics including **GitHub AI-native workflow setup, Claude Code memory architecture, cross-platform agent differences, skill modularization, and Storybook component library setup** — through bi-weeklies, Teams chats, and dedicated workshops. Participated in Studio 8 DC Meet-ups; communicated with research team on potential skill integration.
> **Impact:** **Helped the Outlook team set up a Storybook component library, improving design-to-code handoff.** MADS skill sharing **sparked lively discussion at DC Meet-up**.

> *AI-Driven Productivity* — **Replaced manual Figma design with code-generated prototypes**, establishing a new design workflow and a **GitHub branch-based collaboration model with PMs**. MADS agent continuously optimized; now used as the **primary daily design generation tool**. **Replaced traditional slide decks with code-generated web presentations**.
> **Impact:** **MADS agent reduced page generation time from hours to minutes**, becoming a core daily design tool. Web-based presentations deliver more accurate content with significantly improved production efficiency and output quality.

> *Security* — Completed all required security training; followed **branch permission governance in the MADS repo**.
> **Impact:** **Zero security violations**; maintained repo security and access control as MADS expanded to multi-person collaboration.

**Behaviors demonstrated：**

> *Growth Mindset + Deliver Success* — Continuously optimizing MADS agent + AI-native workflows; shipping connector notification + OAuth improvements (hours → minutes).
> *Customer Obsessed + One Microsoft* — Addressing long-standing user needs; partnering across PMs, design leads, external providers for cross-role adoption.
> *Create Clarity + Generate Energy* — Aligning teams through clear leadership presentations; inspiring AI-native practice adoption across teams.
> *Respect / Integrity / Accountability* — Zero security violations, governance compliance, meeting ICM reduction targets.

**Reflect on setbacks — 原文（重要，呈现 growth mindset）：**

> Building AI-native workflows required a **high tolerance for dead ends**. MADS evolved through many iterations — from Figma MCP to component library exploration, then from a single .md file to **structured skills, subagents, and harness workflows**. As the technology moved fast, approaches that worked a few months ago were sometimes already obsolete.
>
> Not every path led somewhere. I spent **a full day trying to adapt existing web dev page code into the MADS workflow and hit a dead end**. **Another full day went into testing subagent behavior differences across platforms** before I could propose a viable cross-team framework. Costly, but not wasted — **knowing what doesn't work is as valuable as knowing what does**.
>
> The biggest learning was that **exploration compounds when shared**. Conversations with PMs and other designers surfaced blind spots I wouldn't have found alone. **The more people engaged, the better the system got.** In an environment where tools keep changing, the real skill is **building the habit of re-evaluating, adapting, and bringing others along in that process**.

**Manager comments（节选 — 这次格外有 ammunition）：**

> "**Simplified OAuth went GA**, a long-standing customer ask, and contributed to the team's **ICM reduction from 52 → 26**."
>
> "**Notification framework Phase 1 ships in May**, addressing the visibility gap users have been asking about."
>
> "**Premium Data Provider connector** moved through LT spec review with steady cross-partner alignment, including external providers."
>
> "**Connector recommendation upgraded with better SMB vs. centralized admin segmentation** surfaced from tenant interviews."
>
> "On AI transformation, **MADS Design Agent has become a foundational framework for our team**. The architecture you built is influencing **not just Copilot Ext. designers but PMs and cross-design teams across MAC**. The work has been **recognized by Jon Harris, Shanying, Rohan, and our Studio 8 DC group** — sharing sparked active, broad discussion, exactly the kind of energy we need as we shift from **'how we design' to 'how we work'**."
>
> "**Zero violations and clean repo governance as MADS agent scaled to multi-person collaboration** is great, keeping the foundation solid while we push fast on AI-native exploration."
>
> "I'm fully aligned with your insight that **exploration scales when shared**. Let's amplify this — engaging more people across disciplines (PM, Eng), across design teams, and across studios."

---

#### 提炼总结（2026 H1）

**📊 量化里程碑：**

- **Simplified OAuth 2.0 GA** —— 覆盖 5 个 P0 connectors，setup time **hours → minutes**
- **ICM 减半达标** —— 团队 incoming ICM 从 **52（Nov '25）→ 26（Mar '26）**，**减少 18%**，达到 50% reduction target
- **Notification Phase 1 ships May** —— 第一个 connector 通知体验
- **MADS agent 页面生成时间 hours → minutes**，成为日常主力工具
- **零安全违规** under MADS 多人协作

**主导/支持的项目（按主线）：**

**Copilot Connector 产品骨架持续交付**
1. **Simplified OAuth 2.0 GA** ⭐ — 与 Danny Yao 合作，解决 long-standing customer ask；setup hours → minutes；**贡献团队 ICM 减半**。
2. **Notification Phase 1** ⭐ — 第一个 connector 通知体验，**5 月发布**，解决长期 visibility gap。
3. **Premium Data Provider Connector** — trial / BYOL / freemium 完整原型 + LT spec review + **与 Josh Bersin 等外部 provider 三方对齐**。
4. **Connector Recommendation** — 接 Ran Tang 工作 + Neo Cheng 协作；**tenant admin 用户访谈区分 large centralized vs SMB distributed 模型**，进入 LT review。

**MADS Design Agent —— 团队 foundational framework** ⭐⭐⭐
5. **MADS 架构** — 基于 Claude Code 的 modular two-tier orchestrator（skill-first, subagent-assisted）。
6. **与 Alina Lin 统一 framework** — Figma component library + code-first workflow 合流 under MADS。
7. **跨角色采用** — **多个 PM 在 MADS repo 自建分支**；架构方法被 **Sandra Yu / Alina Lin 采纳**。
8. **Studio 8 Skill Hub** — MADS skill 发布到 hub，贡献其建立与演进。
9. **领导层认可** — 在 Suzhou 与 Alina Lin 共同向 **Jon Harris** 演讲；向 **Shanying Leung** 演讲 MADS Design Agent。

**AI-native 工作流推广**
10. **Outlook team Storybook 协助** — 帮其搭组件库，改进 design-to-code handoff。
11. **新工作流落地** — code-generated prototypes 替代 Figma manual design；GitHub branch-based PM 协作；**web-based presentations 替代 slides**。
12. **持续分享** — bi-weekly / Teams / workshop 上分享 GitHub AI-native workflow、Claude Code memory 架构、跨平台 agent 差异、skill 模块化、Storybook 等。

**关键能力/方法论沉淀：**

- **"如何设计 → 如何工作"的范式转变**（manager 原话："we shift from 'how we design' to 'how we work'"）—— 不只是 deliver design，而是改造团队的设计生产方式。
- **AI-native 工具链架构师**：从单 .md 文件 → 结构化 skill + subagent + harness 工作流；其架构成为跨团队复用的 framework。
- **Tolerance for dead ends**：花整天调试 web dev 代码进 MADS / 跨平台 subagent 差异 → 反过来证明"知道什么不 work"的价值。
- **Exploration compounds when shared**：跨 PM/设计师反馈把个人探索放大成系统级影响。

**Manager 给出的关键评价（强 ammunition）：**

- "**MADS Design Agent has become a foundational framework for our team**. Influencing not just Copilot Ext. designers but **PMs and cross-design teams across MAC**."
- "Recognized by **Jon Harris, Shanying, Rohan, and our Studio 8 DC group**."
- "Exactly the kind of energy we need as we shift from **'how we design' to 'how we work'**."
- Security：**zero violations and clean repo governance** as MADS scaled to multi-person collaboration.

**关键候选句（可入 portfolio）：**

> 与 PM Danny Yao 合作把 **Copilot Connector 的 OAuth 2.0 setup** 简化上线 GA —— 覆盖 5 个 P0 connectors，把用户的 setup 时间从 hours 压缩到 minutes，**贡献团队 incoming ICM 从 52（Nov '25）减至 26（Mar '26）**，达成 50% 减半目标。

> 主导 Copilot Connector 第一代 **Notification 体系 Phase 1** 设计，2026 年 5 月发布，填补长期存在的 connector status 可见性 gap；同期推进 Premium Data Provider 的 trial / BYOL / freemium 全流程设计，并与 **Josh Bersin** 等外部数据提供方完成三方对齐。

> 主导 **MADS Design Agent** 的架构与落地 —— 基于 Claude Code 的 modular two-tier orchestrator (skill-first / subagent-assisted)，把团队设计工作流从 Figma manual 转向 code-first；架构方法**被 Sandra Yu、Alina Lin 等采纳**，多位 PM 在 repo 中自建分支，从个人探索升级为跨角色 framework。

> 在 Microsoft 的 AI transformation 中扮演 **"how we design → how we work"** 的实践者：MADS Design Agent 已成为团队 foundational framework，被 **Jon Harris、Shanying、Rohan 与 Studio 8 DC group** 公开认可；同期帮助 Outlook 团队搭建 Storybook 组件库，把 AI-native 设计实践跨团队扩散。

---

## 跨阶段累计成果

> 在收齐 2023 H1 → 2026 H1 六个半年后，跨阶段合并的整体故事线如下。

### 1. Dynamics 365 Finance 阶段（2022 — 2025）的整体收束

- **从核心场景设计师 → AI/Copilot 体验设计师**：早期 Invoice Approval / AP Workspace / Bank FCR → **Modern Bank Reconciliation 上线**（preview 89 客户 → 后续稳定运行 ~50 active users，partners 更愿意推荐 standard solution 而非 ISV）→ **Bank Reconciliation Copilot**（**99.8% accuracy** + BALE 大会 demo）→ 推动 **D365 Finance Copilot Summary 达 242K MAU**（Customer Summary 贡献 112K）。
- **方法论**：design brief + Figma changelog + heuristic evaluation + usability testing（首次为 PM/工程团队系统呈现 research）。
- **协作**：AI Tribe 跨欧/美/亚的 large-scale collaboration；Immersive Home Page 与 SCM 联合呈现 Source-to-Pay 完整故事。
- **荣誉**：Hackathon Judge GPT 二等奖、MindMend AI honorable mention。

### 2. Copilot Connector 阶段（2025 — 至今）的崛起轨迹

- **快速 onboarding**（2025 H1）：reorg 后 2 周完成 handover 并 ramp up，Wave 1 connector 准时发布。
- **量化运营杠杆**（2025 H1）：Wave 1/2 个人占设计团队 50% 产出；video 编辑时间 -70~80%；PM 录制重试次数减半。
- **体验骨架交付**（2025 H2 → 2026 H1）：Catalog Site → 升级为 **Connector Agent 数据底座**；OAuth 2.0 全场景设计 → **Simplified OAuth GA**（setup hours→minutes，团队 **ICM 52→26**）；Email Notification → **Phase 1 ships 2026/5**；Premium Data Provider；Connector Recommendation 进 LT review。
- **设计 leadership**（2025 H2 起）：Admin Setup Sprint 直达 LT 演讲；跨团队 pattern 对齐；2026 H1 与 **Jon Harris / Shanying / Rohan / Studio 8 DC** 公开演讲获认可。
- **AI-native 设计推广**：从 2025 H2 的 Coze + Vibe Coding 个人学习 → 2026 H1 **MADS Design Agent 成为团队 foundational framework**（架构被 Sandra/Alina 采纳；多位 PM 自建分支；Skill Hub 发布；架构从单 .md → skill + subagent + harness 工作流）。
- **晋升**：2025 H2 由 manager 明确归因于"solid execution + proactive leadership"。
- **范式转变**（2026 H1）：从 "how we design" 推进到 **"how we work"**；code-generated prototypes 替代 Figma manual；web 演示替代 slides；零安全违规 under 多人协作。

---

## Portfolio about 页面候选 bullets

> 每段建议 **2-3 条**，从下方候选中筛选。

### Dynamics 365 Finance (2022 — 2025)

候选 A（产品落地导向）：

- 主导 D365 Finance **Modern Bank Reconciliation** 端到端体验设计 —— 从 wireframe 到高保真，进入 preview 14 天内取得 **89 个活跃 preview 客户**，正面反馈推动合作伙伴"更愿意推荐标准方案而非 ISV"；同期推进 Netting Rules 等多个 Cash Management 项目 preview → GA 无 setback。
- 设计 **Bank Reconciliation Copilot** 的"Proposing Matching Transactions"与"Generate Transaction Summary"两个核心场景，落地实现 **99.8% Copilot 准确率**（1:1 匹配），并在 **Business Application Launch Event (2024 release wave 2)** 面向大规模观众成功 demo。
- 推动 **D365 Finance Copilot Summary 累计达到 242K 月活用户**（其中 Customer Summary 贡献 112K），把"AI-first"战略转化为可量化的产品价值；同时作为亚太代表参与 **AI Tribe** 跨欧/美/亚设计协作，贡献 AI ERP Immersive Experience Toolkit 的基础组件。

候选 B（方法论 + 协作导向）：

- 在 Cash & Bank 产品域引入 research-led design 工作方式 —— 首次为 PM 与工程团队系统呈现 usability testing 过程与发现，并把方法沉淀为 design brief + Figma changelog 的可追溯工作流。
- 在 Source-to-Pay 全景叙事中完成 Cashier 与 payables clerk 两个 persona 的 **Immersive Home Page** 设计，联合 SCM 团队呈现完整故事并获 leadership "widespread recognition"。

### Copilot Connector (2025 — 至今)

候选 A（产品交付 + 量化 — 最硬）：

- 与 PM Danny Yao 合作把 **Connector Setup OAuth 2.0 简化版 GA** —— 覆盖 5 个 P0 connectors，把用户 setup 时间从 hours 压缩到 minutes，**贡献团队 incoming ICM 从 52（Nov '25）降至 26（Mar '26）**，达成 50% 减半目标。
- 主导 Copilot Connector 第一代 **Notification 体系 Phase 1** 设计（2026/5 发布），填补长期 connector status 可见性 gap；同期推进 Premium Data Provider 的 trial / BYOL / freemium 全流程设计，并与 **Josh Bersin** 等外部数据提供方完成三方对齐。
- 设计并维护 **Copilot Connector Catalog Site** —— 既是中国团队对外的统一展示平台，也作为 **Connector Agent 的数据底座**，让 AI agent 通过自然语言为用户检索 connector 信息。

候选 B（AI-native 设计 + leadership 导向 — 最有故事性）：

- 主导 **MADS Design Agent** 的架构与落地 —— 基于 Claude Code 的 modular two-tier orchestrator（skill-first / subagent-assisted），把团队设计工作流从 Figma manual 转向 code-first；架构方法被 **Sandra Yu、Alina Lin 等采纳**，多位 PM 在 repo 中自建分支，从个人探索升级为跨角色 framework，并被 **Jon Harris、Shanying、Rohan 与 Studio 8 DC group** 公开认可。
- 在公司 reorg 后 2 周完成 D365 Finance handover 并 ramp up 到 **Copilot Connector / Extensibility**；早期主导 Wave 1/2/3 三轮发布的设计与视频交付（个人产出占设计团队 **50%**），通过 video template + ClipChamp 工作流把视频编辑时间从 5-6h 降至 1-2h（**累计 -70~80%**）；同期主导 **Admin Setup UX design sprint** 并直达 LT 演讲，2025 H2 晋升下一 level。
- 把 AI-native 设计实践从个人探索推进到团队范式 —— 用 code-generated prototype 替代 Figma manual design，与 PM 建立 GitHub branch-based 协作 model；MADS agent 把页面生成时间从 hours 压到 minutes 成为日常主力工具；同期帮 **Outlook 团队搭建 Storybook 组件库**，推动跨团队 design-to-code handoff 实践扩散。


<!-- 等多批内容齐了再回填：合并去重，总结 D365 Finance → Copilot Connector 的整体故事线 -->

---

## Portfolio about 页面候选 bullets

<!-- 最终筛选出每段 2-3 条精炼 bullet，供 about 页直接使用 -->

### Dynamics 365 Finance (2022 — 2025)

<!-- 待累计后筛选 -->

### Copilot Connector (2025 — 至今)

<!-- 待累计后筛选 -->
