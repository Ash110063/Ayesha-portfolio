"use client";

import { useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import st from "./nurexa.module.css";

const roles = [
  {
    id: "account",
    tab: "Account",
    c: "#ffb43a",
    name: "Account Specialist",
    lead: "Answers billing and account questions and keeps customer records up to date.",
    line: "“Hi, I can help with your account. Is this about a payment, a plan change or your details?”",
    tools: ["CRM", "Billing", "Knowledge base"],
  },
  {
    id: "hr",
    tab: "HR",
    c: "#6f7dff",
    name: "HR Specialist",
    lead: "Handles leave, policy and onboarding questions for employees, around the clock.",
    line: "“Hello! I can check your leave balance, explain a policy or help with onboarding. What do you need?”",
    tools: ["HR system", "Policy docs", "Calendar"],
  },
  {
    id: "sales",
    tab: "Sales",
    c: "#4fe08a",
    name: "Sales Specialist",
    lead: "Qualifies leads, answers product questions and books demos for the team.",
    line: "“Thanks for reaching out. Can I ask a couple of quick questions so I connect you with the right person?”",
    tools: ["CRM", "Calendar", "Product catalogue"],
  },
  {
    id: "support",
    tab: "Support",
    c: "#ff6a4f",
    name: "Support Specialist",
    lead: "Solves common issues instantly and hands complex ones to a person with full context.",
    line: "“I'm sorry you're having trouble. Let me look up your order and see what I can fix right now.”",
    tools: ["Help desk", "Order system", "Knowledge base"],
  },
];

export function RolePicker() {
  const [i, setI] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const r = roles[i];

  const onKey = (e: KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const n = (i + (e.key === "ArrowRight" ? 1 : roles.length - 1)) % roles.length;
    setI(n);
    tabs.current[n]?.focus();
  };

  return (
    <div className={st.picker}>
      <div className={st.pickerTabs} role="tablist" aria-label="Nurexa specialists" onKeyDown={onKey}>
        {roles.map((x, j) => (
          <button
            key={x.id}
            ref={(el) => {
              tabs.current[j] = el;
            }}
            type="button"
            role="tab"
            id={`role-${x.id}`}
            aria-selected={i === j}
            aria-controls="role-panel"
            tabIndex={i === j ? 0 : -1}
            style={{ "--c": x.c } as CSSProperties}
            onClick={() => setI(j)}
          >
            <i aria-hidden />
            {x.tab}
          </button>
        ))}
      </div>
      <div className={st.pickerBody} role="tabpanel" id="role-panel" aria-labelledby={`role-${r.id}`}>
        <div>
          <div className={st.planet} style={{ "--c": r.c } as CSSProperties} aria-hidden />
          <h4>{r.name}</h4>
          <p className={st.lead}>{r.lead}</p>
        </div>
        <div>
          <p className={st.first}>
            <span className={st.small}>Opens with</span>
            {r.line}
          </p>
          <span className={st.small}>Connects to</span>
          <ul className={st.chips}>
            {r.tools.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
