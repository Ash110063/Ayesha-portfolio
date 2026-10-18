import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { CaseFrame, Cols3, Decisions, NextUp, Plate, Problems, RoleGrid, Section, caseStyles as s } from "@/components/case/CaseFrame";
import { RolePicker } from "./RolePicker";
import { AdminViewer } from "./AdminViewer";
import st from "./nurexa.module.css";

export const metadata: Metadata = {
  title: "Nurexa — Ayesha Riaz",
  description:
    "Case study: leading the design of Nurexa, a white-label B2B AI receptionist — positioning, website, voice UX and admin panel.",
};

const IMG = "/work/nurexa";
const GRAD = "linear-gradient(100deg, #ff4fa3, #9b5cff 55%, #ff7a2f)";

const waveDelays = [-0.1, -0.5, -0.3, -0.8, -0.2, -0.6, -0.9, -0.4, -0.7, -0.15, -0.55, -0.35, -0.85, -0.25, -0.65, -0.45];

export default function NurexaCaseStudy() {
  return (
    <CaseFrame
      className={st.page}
      highlight={GRAD}
      glow="rgba(155, 92, 255, 0.22)"
      eyebrow="02 / Voice & conversational AI"
      title="Nurexa"
      lede="Designing a white-label AI receptionist for B2B teams, from the website that sells it to the admin panel that runs it."
      tags={[{ label: "Conversational UX", highlight: true }, { label: "Voice AI" }, { label: "SaaS admin" }, { label: "Brand world" }]}
      facts={[
        { label: "Role", value: "Product Design Lead" },
        { label: "Team", value: "Led with AI engineers" },
        { label: "Market", value: "B2B, white-label" },
        { label: "Status", value: "Live in beta", status: true },
      ]}
      toc={[
        { id: "challenge", label: "The challenge" },
        { id: "role", label: "My role" },
        { id: "decisions", label: "Key decisions" },
        { id: "voice", label: "Designing the voice" },
        { id: "roles", label: "Sell by role" },
        { id: "admin", label: "Admin panel" },
        { id: "identity", label: "Brand world" },
        { id: "outcome", label: "Outcome" },
      ]}
    >
      <Plate
        src={`${IMG}/web-hero.webp`}
        width={1131}
        height={720}
        alt="Nurexa website hero: 'Nurexa – Conversational AI that connects, converts & scales' above a pink cratered planet, with a floating astronaut and a Get Yours Now button."
        tag="Website hero"
        sub="AI receptionist"
      />

      <Section id="challenge" n="01" label="Challenge" title="A product nobody can see, asking for a business's most important conversations.">
        <div className={s.indent}>
          <p>
            Nurexa gives businesses role-specific AI assistants across websites, mobile apps, business systems and phone lines. Each client
            connects its own data, and Nurexa answers in that client&apos;s brand voice, 24/7. The product was powerful, but hard to explain and
            hard to trust.
          </p>
          <Problems
            items={[
              { title: "An invisible product", text: "A voice agent has no screen. Buyers had to imagine what it would sound like and do before they would book a demo." },
              { title: "Trust is the real barrier", text: "Handing customer conversations to an AI feels risky. Nurexa had to feel warm, reliable and in control, not experimental." },
              {
                title: "Two very different users",
                text: "Decision-makers judge the website in minutes. Operators then live in the admin panel every day and need clarity, not spectacle.",
              },
            ]}
          />
          <p className={s.pull}>
            The question was how to make an AI receptionist feel <mark>human enough to buy and dependable enough to run.</mark>
          </p>
        </div>
      </Section>

      <Section id="role" n="02" label="Role" title="I led the project end to end, side by side with the AI engineers.">
        <div className={s.indent}>
          <p>I owned how Nurexa is positioned, how it is sold on the website and how businesses manage it once it&apos;s live.</p>
          <RoleGrid
            items={[
              { label: "Positioning", text: "Framed Nurexa as a premium, emotionally intelligent AI receptionist rather than a generic chatbot." },
              { label: "Website", text: "Structured the story from first impression to sign-up: how it works, use cases and trust." },
              { label: "Admin panel", text: "Designed the dashboard, user management, analytics and notifications for daily operators." },
              { label: "Brand world", text: "Created the space-themed identity, illustration direction and the dark UI system behind both." },
            ]}
          />
          <p className={s.note}>
            Working with the AI engineers meant designing around what the agent could actually do: how it connects to data sources, which
            channels it runs on and where a person needs to step in.
          </p>
        </div>
      </Section>

      <Plate
        src={`${IMG}/web-whatitdoes.webp`}
        width={1131}
        height={640}
        alt="Website section 'Nurexa – Bot with whitelabeling feature' listing what it does: builds customised chatbots, automates workflows, retrieves from knowledge bases, connects to apps and CRMs, and full brand-voice customisation."
        tag="White-label"
        sub="What it does"
      />

      <Section id="decisions" n="03" label="Decisions" title="Five calls that shaped Nurexa.">
        <Decisions
          items={[
            {
              title: "Sell a receptionist, not a chatbot.",
              text: "The website promises a front desk that never sleeps, never misses a call and remembers every name. Buyers already know what a great receptionist is worth.",
              tradeoff: "A narrower story than “AI for everything”, but one buyers grasp in seconds.",
            },
            {
              title: "Make the voice feel human before anyone hears it.",
              text: (
                <>
                  Copy and layout carry warmth: Nurexa <em>listens, pauses and responds</em>. Sections like Always On Duty and Human-Like
                  Communication answer the trust question head on.
                </>
              ),
              tradeoff: "Fewer specs above the fold, so the integrations story moves lower on the page.",
            },
            {
              title: "Show setup as three steps.",
              text: (
                <>
                  Connecting data sources, defining conversation flows and deploying across channels became <em>Configure → Plug it in → Launch</em>.
                </>
              ),
              tradeoff: "It simplifies a real technical process, so the detail lives in demos and docs.",
            },
            {
              title: "Sell by role.",
              text: "Instead of a feature list, buyers pick the assistant they need: Account, HR, Sales or Support Specialist. White-labeling lets each client present it as its own.",
              tradeoff: "Four role stories to maintain, but each maps to a real buying conversation.",
            },
            {
              title: "Calm admin, expressive marketing.",
              text: "The website is cinematic and illustrated. The admin panel keeps the palette but strips back decoration, so operators scan numbers, people and alerts fast.",
              tradeoff: "Two levels of visual intensity in one brand, held together by shared tokens.",
            },
          ]}
        />
      </Section>

      <Plate
        src={`${IMG}/web-setup.webp`}
        width={1131}
        height={500}
        alt="Setup section: a rocket launching beside three steps — Configure (link your data sources and define conversation flows), Plug it in (telephony, website or app), Launch."
        tag="Onboarding"
        sub="Configure · Plug in · Launch"
      />
      <Plate
        src={`${IMG}/web-alwayson.webp`}
        width={1131}
        height={590}
        alt="Sections 'Always On Duty' and 'Human-Like Communication' above an illustrated alien landscape with a small robot and a rocket on legs."
        tag="Trust story"
        sub="Always on · human-like"
      />

      <Section
        id="voice"
        n="04"
        label="Voice UX"
        title={
          <>
            Designing what a <span className={s.hl}>voice</span> looks like.
          </>
        }
      >
        <div className={`${s.indent} ${st.voiceIntro}`}>
          <p>
            A voice agent needs a visible counterpart for the people who set it up and review it. I defined four agent states and a call view
            that shows what Nurexa heard, what it said and what it did, so operators can trust it without listening to every call.
          </p>
        </div>
        <div className={st.voice}>
          <div className={st.call} aria-label="Example call transcript">
            <div className={st.callTop}>
              <span className={st.avatar} aria-hidden>
                <svg width="18" height="18" viewBox="0 0 18 18">
                  <path d="M3 9h1.5M6 5v8M9 3v12M12 6v6M15 8v2" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </span>
              <div>
                <b>Front desk · Nurexa</b>
                <small>Inbound call · 02:14</small>
              </div>
              <span className={st.live}>Live</span>
            </div>
            <div className={st.transcript}>
              <div className={`${st.bubble} ${st.caller}`}>
                <small>Caller</small>Hi, I&apos;d like to move my Thursday appointment if possible.
              </div>
              <div className={`${st.bubble} ${st.agent}`}>
                <small>Nurexa</small>Of course, Sara. I can see you&apos;re booked for 11:00 on Thursday. Would 2:30 that afternoon or Friday at
                10:00 work better?
              </div>
              <div className={`${st.bubble} ${st.caller}`}>
                <small>Caller</small>Friday at ten is perfect.
              </div>
              <div className={`${st.bubble} ${st.agent}`}>
                <small>Nurexa</small>Done. You&apos;re confirmed for Friday at 10:00, and I&apos;ve sent the details by text.
              </div>
              <span className={st.action}>
                <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
                  <path d="M2 6.5l2.5 2.5L10 3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                Rescheduled · calendar synced
              </span>
            </div>
            <div className={st.wave} aria-hidden>
              {waveDelays.map((d, i) => (
                <i key={i} style={{ animationDelay: `${d}s` }} />
              ))}
              <span>Speaking</span>
            </div>
          </div>

          <div className={st.states} aria-label="Agent states">
            <div className={st.state}>
              <span className={`${st.orb} ${st.listen}`} style={{ "--c": "var(--nx-blue)" } as CSSProperties} aria-hidden />
              <div>
                <h4>Listening</h4>
                <p>Soft ring pulses with the caller&apos;s voice, so it&apos;s clear Nurexa is paying attention.</p>
              </div>
            </div>
            <div className={st.state}>
              <span className={`${st.orb} ${st.think}`} aria-hidden />
              <div>
                <h4>Thinking</h4>
                <p>A slow colour turn while it checks calendars, CRMs or the knowledge base.</p>
              </div>
            </div>
            <div className={st.state}>
              <span className={`${st.orb} ${st.speak}`} style={{ "--c": "var(--nx-pink)" } as CSSProperties} aria-hidden />
              <div>
                <h4>Speaking</h4>
                <p>A faster ring and waveform, matched to the reply.</p>
              </div>
            </div>
            <div className={st.state}>
              <span className={`${st.orb} ${st.handoff}`} aria-hidden>
                <svg width="20" height="20" viewBox="0 0 20 20">
                  <path d="M6 13a4 4 0 0 1 8 0M10 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" fill="none" stroke="#fff" strokeWidth="1.4" />
                </svg>
              </span>
              <div>
                <h4>Handing off</h4>
                <p>Neutral and still. A person takes over, with the full conversation attached.</p>
              </div>
            </div>
          </div>
        </div>
        <p className={`${s.mono} ${s.caption}`}>UI concept · agent states and call view</p>
      </Section>

      <Section id="roles" n="05" label="Roles" title="Buyers choose a specialist, not a feature list.">
        <RolePicker />
        <p className={`${s.mono} ${s.caption}`}>Interactive · each specialist keeps its planet colour from the website</p>
      </Section>

      <Plate
        src={`${IMG}/web-roles.webp`}
        width={1131}
        height={520}
        alt="'Ready to bring AI chatbots on board?' section with four specialist cards — Account, HR, Sales and Support — each with its own glowing planet and a Request Yours button."
        tag="Website"
        sub="Specialist roles"
      />

      <Section id="admin" n="06" label="Admin" title="The admin panel: the most important number before any scroll.">
        <AdminViewer />
      </Section>

      <Section
        id="identity"
        n="07"
        label="Brand"
        title={
          <>
            A friendly <span className={s.hl}>space world</span> instead of cold AI blue.
          </>
        }
      >
        <div className={st.palette} role="list" aria-label="Nurexa palette">
          <div className={st.swatch} role="listitem" style={{ background: "#050307" }}>
            <b>Deep space</b>#050307
          </div>
          <div className={st.swatch} role="listitem" style={{ background: "var(--nx-pink)", color: "#1a0610" }}>
            <b>Nebula pink</b>#FF4FA3
          </div>
          <div className={st.swatch} role="listitem" style={{ background: "var(--nx-violet)", color: "#12062a" }}>
            <b>Orbit violet</b>#9B5CFF
          </div>
          <div className={st.swatch} role="listitem" style={{ background: "var(--nx-orange)", color: "#2a0e02" }}>
            <b>Lava orange</b>#FF7A2F
          </div>
          <div className={st.swatch} role="listitem" style={{ background: "var(--nx-grad)", color: "#14060f" }}>
            <b>Signal</b>Gradient
          </div>
        </div>
        <Cols3
          items={[
            { title: "Why space", text: "It signals advanced technology, while astronauts and rockets keep it playful and human." },
            { title: "Planets as roles", text: "Each specialist has its own planet colour, so roles are easy to tell apart." },
            { title: "Two intensities", text: "One palette and component set runs the cinematic website and the calm admin." },
          ]}
        />
      </Section>

      <Plate
        src={`${IMG}/web-benefits.webp`}
        width={1131}
        height={880}
        alt="'Reliable. Scalable. Secure.' section listing five benefits with gradient pills: speed to value, better user engagement, cost savings, scalable growth and a tech-first mindset."
        tag="Website"
        sub="Reliable · scalable · secure"
      />
      <Plate
        src={`${IMG}/web-flow.webp`}
        width={1131}
        height={490}
        alt="'Revolutionize your user conversations' section with a call-routing flow: press button, AI request, then receive call, transfer call or hang up."
        tag="Website"
        sub="Call routing"
      />

      <Section id="outcome" n="08" label="Outcome" title="One product story, from first scroll to daily dashboard.">
        <p className={`${s.mono} ${st.beta}`}>Live in beta</p>
        <div className={s.indent}>
          <p>Nurexa launched in beta with a website that sells it and an admin panel that runs it, both on one design system.</p>
        </div>
        <Cols3
          items={[
            { title: "Trust-first pitch", text: "An AI receptionist that is warm, always on and remembers every customer." },
            { title: "Offer by role", text: "Account, HR, Sales and Support specialists, white-labeled under each client's brand." },
            { title: "Scannable admin", text: "Operators see users, activity and alerts at a glance, on the same system as the site." },
          ]}
        />
      </Section>

      <NextUp href="/work/cplusoft" label="Previous case study · 01 / Product strategy & leadership" title="Cplusoft" />
    </CaseFrame>
  );
}
