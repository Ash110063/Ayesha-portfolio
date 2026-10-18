import type { Metadata } from "next";
import { CaseFrame, Cols3, Decisions, NextUp, Plate, Problems, RoleGrid, Section, caseStyles as s } from "@/components/case/CaseFrame";
import { RtlDemo } from "./RtlDemo";
import st from "./cplusoft.module.css";

export const metadata: Metadata = {
  title: "Cplusoft — Ayesha Riaz",
  description:
    "Case study: leading the repositioning of an AI and software company, from product story to a bilingual English and Arabic web platform for global and MENA markets.",
};

const IMG = "/work/cplusoft";

export default function CplusoftCaseStudy() {
  return (
    <>
      {/* Brand and Arabic faces used only on this page */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=IBM+Plex+Sans+Arabic:wght@400;500;600&display=swap"
        precedence="default"
      />
      <CaseFrame
        className={st.page}
        eyebrow="01 / Product strategy & leadership"
        title="Cplusoft"
        lede="Leading the repositioning of an AI and software company, from product story to a bilingual web platform built to win enterprise clients across global and MENA markets."
        tags={[
          { label: "Product strategy" },
          { label: "Design leadership" },
          { label: "Web platform" },
          { label: "Arabic / RTL", highlight: true },
        ]}
        facts={[
          { label: "Role", value: "Product Design Lead" },
          { label: "Year", value: "2026" },
          { label: "Markets", value: "Global, Qatar & MENA" },
          { label: "Languages", value: "English · العربية" },
        ]}
        toc={[
          { id: "challenge", label: "The challenge" },
          { id: "role", label: "My role" },
          { id: "decisions", label: "Key decisions" },
          { id: "identity", label: "Visual system" },
          { id: "mena", label: "Designing for MENA" },
          { id: "outcome", label: "Outcome" },
        ]}
      >
        <Plate
          src={`${IMG}/laptop.webp`}
          width={1000}
          height={567}
          alt="Cplusoft homepage on a laptop: 'Artificial intelligence, engineered for real-world execution' over a teal particle field, with lime call-to-action buttons."
          tag="Global homepage"
          sub="Cplusoft.com"
        />

        <Section id="challenge" n="01" label="Challenge" title="The company had changed. Its story hadn't.">
          <div className={s.indent}>
            <p>
              Cplusoft had grown from a software services shop into a company delivering AI agents, automation and SaaS products. Its
              website still described the old business, and it spoke to every buyer the same way.
            </p>
            <Problems
              items={[
                { title: "A generic message", text: "The site listed services instead of explaining why a client should trust Cplusoft with AI work." },
                {
                  title: "One site for very different buyers",
                  text: "Enterprise and government clients in Qatar expected local relevance, Arabic and proof of delivery. The global site offered none of that.",
                },
                {
                  title: "No system behind the pages",
                  text: "Every new case study, campaign or market page was designed from scratch, which slowed sales and marketing down.",
                },
              ]}
            />
            <p className={s.pull}>
              The real question was not how the website should look. It was <mark>how Cplusoft should present itself to win the clients it now wants.</mark>
            </p>
          </div>
        </Section>

        <Section id="role" n="02" label="Role" title="I owned the strategy and led the team from positioning to launch.">
          <div className={s.indent}>
            <p>
              I worked directly with the founders on what Cplusoft should stand for, then turned those decisions into structure, design
              direction and a system the team could build on.
            </p>
            <RoleGrid
              items={[
                { label: "Strategy", text: "Defined positioning, audiences and the core message with the founders." },
                { label: "Leadership", text: "Set the design direction, planned the work and reviewed the team's output." },
                { label: "Engineering", text: "Worked with developers on feasibility, content structure and the RTL build." },
                { label: "Hands-on", text: "Designed the key pages myself, including the homepage hero and page system." },
              ]}
            />
          </div>
        </Section>

        <Plate
          src={`${IMG}/hero-screen.webp`}
          width={991}
          height={558}
          alt="Full-width Cplusoft hero: navigation with Home highlighted in lime, the headline 'Artificial intelligence, engineered for real-world execution', and Explore and Watch Demo buttons."
          tag="Homepage hero"
          sub="Execution over hype"
        />

        <Section id="decisions" n="03" label="Decisions" title="Four calls that shaped the platform.">
          <Decisions
            items={[
              {
                title: "Lead with execution, not AI hype.",
                text: "Every AI company claims intelligence. We positioned Cplusoft around delivery instead: AI engineered for real-world execution, delivered through modern software systems.",
                tradeoff: "A quieter message, but a far more credible one for enterprise buyers who have seen demos that never shipped.",
              },
              {
                title: "One brand, separate market experiences.",
                text: "Rather than translating the global site, I proposed a dedicated MENA experience that leads with what Qatari organisations were asking for: automation, bilingual AI agents and data kept in-country.",
                tradeoff: "Two experiences to maintain, offset by running both on one design system.",
              },
              {
                title: "Build a page system, not a set of pages.",
                text: "I defined reusable templates for case studies (hero, challenge, process, tech stack, testimonial, call to action) and industry landing pages for ad campaigns, starting with hospitality.",
                tradeoff: "A slower first delivery. New pages after it ship faster and stay on brand.",
              },
              {
                title: "Design for proof.",
                text: "Enterprise buyers decide on evidence, so templates lead with problem, process and outcome rather than showcase imagery.",
                tradeoff: "Pages only work with real project content, so every case study depends on the team writing it well.",
              },
            ]}
          />
        </Section>

        <Section id="identity" n="04" label="Visual system" title="Composed teal, lime for action, movement in the imagery.">
          <div className={st.specimen}>
            <div className={st.specCard}>
              <div className={st.specRow}>
                <span>Primary typeface</span>
                <span>Headings</span>
              </div>
              <div className={st.aa} aria-hidden>
                Aa
              </div>
              <div className={st.specRow}>
                <span>INTER</span>
                <span>Regular · Medium</span>
              </div>
            </div>
            <div className={`${st.specCard} ${st.swatches}`} role="img" aria-label="Brand palette: deep teal #051C24, lime #D0F94A, mint #3CDB9D, white #FFFFFF">
              <div className={st.sw} style={{ background: "var(--cp-teal)", color: "#fff" }}>
                <b>Deep teal</b>#051C24
              </div>
              <div className={st.sw} style={{ background: "var(--cp-lime)" }}>
                <b>Lime</b>#D0F94A
              </div>
              <div className={st.sw} style={{ background: "var(--cp-mint)" }}>
                <b>Mint</b>#3CDB9D
              </div>
              <div className={st.sw} style={{ background: "#fff" }}>
                <b>White</b>#FFFFFF
              </div>
            </div>
          </div>
          <p className={st.philosophy}>
            Deep teal backgrounds set a composed, confident tone, while lime marks the actions that matter. Bold type and generous spacing build
            a clear reading order, and fluid imagery suggests movement and possibility. Together they present AI and software grounded in
            precision, usability and practical outcomes.
          </p>
        </Section>

        <Plate
          src={`${IMG}/philosophy.webp`}
          width={991}
          height={388}
          alt="Four stacked Cplusoft page designs (AI Lab, Pre-built AI models, AI & software development, Engineering intelligence beyond the obvious) with glowing lime star shapes."
          tag="Page system"
          sub="One system, many pages"
        />
        <Plate
          src={`${IMG}/mobile-lab.webp`}
          width={1000}
          height={496}
          alt="Left: the Cplusoft homepage on a phone held in two hands. Right: three AI Lab cards — Fundamental research, Red-teaming and evaluation, Model deployment research."
          tag="Mobile & AI Lab"
          sub="Responsive components"
        />

        <Section id="mena" n="05" label="MENA" title="Designed for Qatar, in both directions.">
          <div className={st.menaIntro}>
            <p>
              For the MENA market I led a dedicated, fully bilingual experience. Arabic is a first-class version with its own layout logic, not a
              mirrored afterthought, and the page speaks to what Qatari enterprise and government buyers care about: automation, Gulf Arabic AI
              agents and data that stays in Qatar.
            </p>
            <div>
              <p className={st.arLine} lang="ar">
                أتمتة مصممة لطريقة عمل قطر
              </p>
              <p className={`${s.mono} ${st.arCaption}`}>Automation built for how Qatar works</p>
            </div>
          </div>

          <RtlDemo />
          <p className={`${s.mono} ${st.demoNote}`}>Switch the language to see the layout mirror. Recreated from the live MENA page.</p>

          <div className={st.rules}>
            {[
              ["Mirror", "Layout follows reading direction", "Navigation, grids, form placement, card order and directional icons all reverse in Arabic."],
              ["Keep", "Some things never flip", "The logo, media, Latin brand names and numerals keep their original orientation."],
              ["Type", "Arabic gets its own type settings", "Larger body size and taller line height, because Arabic script needs more vertical room to read well."],
              ["Words", "Written, not translated", "Headlines were written for Arabic readers so each version keeps its tone, not a word-for-word copy."],
            ].map(([label, title, text]) => (
              <div key={label}>
                <span className={`${s.mono} ${st.label}`}>{label}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>

          <div className={st.flowWrap}>
            <span className={`${s.mono} ${st.flowLabel}`}>Designed flow · bilingual customer-service agent (Arabic RTL)</span>
            <div className={st.flow} tabIndex={0} aria-label="Agent flow, scrolls sideways on small screens">
              <img
                src={`${IMG}/agent-flow.webp`}
                width={1320}
                height={472}
                loading="lazy"
                alt="Arabic right-to-left agent workflow: new message on WhatsApp, web or voice, then detect language, then a Gulf Arabic check that routes to a Khaleeji Arabic agent or an English agent, then a check whether a human is needed, which either hands off to on-call staff or sends the reply."
              />
            </div>
            <p className={st.flowNote}>
              The MENA page explains automation through a real workflow instead of a list of services, so buyers can see where a person stays in
              the loop.
            </p>
          </div>
        </Section>

        <Section id="outcome" n="06" label="Outcome" title="One design system, two markets, two languages.">
          <div className={s.indent}>
            <p>Cplusoft now presents itself as an AI delivery partner, with a global site and a bilingual MENA experience in English and Arabic, all on one system.</p>
          </div>
          <Cols3
            items={[
              { title: "Clear positioning", text: "A credible, execution-first story for enterprise and government conversations." },
              { title: "Faster launches", text: "New case studies and campaign pages start from templates, not a blank canvas." },
              { title: "Ready for the Gulf", text: "A localized Arabic experience for clients in Qatar and the wider region." },
            ]}
          />
          <p className={`${s.mono} ${st.context}`}>
            <span>
              <b>12+</b>years
            </span>
            <span>
              <b>800+</b>projects
            </span>
            <span>
              <b>500+</b>clients
            </span>
            <span>Cplusoft&apos;s track record across MENA, the UK and the US</span>
          </p>
        </Section>

        <NextUp href="/work/nurexa" label="Next case study · 02 / Voice & conversational AI" title="Nurexa" />
      </CaseFrame>
    </>
  );
}
