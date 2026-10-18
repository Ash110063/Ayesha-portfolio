"use client";

import { useState } from "react";
import st from "./nurexa.module.css";

const screens = [
  {
    tab: "Dashboard",
    src: "/work/nurexa/admin-dashboard.webp",
    label: "Dashboard overview",
    text: "Users, revenue, active sessions and growth at a glance, then the activity trend and a live feed of system events. An operator knows if something needs attention within seconds.",
    alt: "Nurexa dashboard overview: four KPI cards for users, revenue, active sessions and growth, an activity trend chart and a recent activity feed.",
  },
  {
    tab: "Users",
    src: "/work/nurexa/admin-users.webp",
    label: "User management",
    text: "Team members as cards with role and status badges, quick View and Edit, and counts for active users, new joiners and admins across the top.",
    alt: "User management: totals for users, active users, new this month and admins, then team members as cards with role and status badges and View and Edit buttons.",
  },
  {
    tab: "Analytics",
    src: "/work/nurexa/admin-analytics.webp",
    label: "Analytics",
    text: "Traffic, sessions, user growth and revenue trends, with traffic sources broken down so teams see where conversations start.",
    alt: "Analytics dashboard: page views, unique visitors, average session and revenue cards, a user growth area chart and a traffic sources pie chart.",
  },
  {
    tab: "Notifications",
    src: "/work/nurexa/admin-notifications.webp",
    label: "Notifications",
    text: "Unread, this week and archived views, so sign-ups, deploys, load spikes and security alerts are never missed.",
    alt: "Notifications: unread, all, this week and archived counts, filter tabs, and alerts for a new user, a system update and high traffic.",
  },
];

export function AdminViewer() {
  const [i, setI] = useState(0);
  return (
    <div className={st.viewer}>
      <div className={st.viewerTabs} role="tablist" aria-label="Admin screens">
        {screens.map((x, j) => (
          <button key={x.tab} type="button" role="tab" aria-selected={i === j} onClick={() => setI(j)}>
            {x.tab}
          </button>
        ))}
      </div>
      <div className={st.screen}>
        {screens.map((x, j) => (
          <img
            key={x.src}
            src={x.src}
            width={1131}
            height={654}
            alt={i === j ? x.alt : ""}
            aria-hidden={i !== j}
            loading={j === 0 ? "eager" : "lazy"}
            className={i === j ? st.shown : undefined}
          />
        ))}
      </div>
      <div className={st.viewerCopy} aria-live="polite">
        <span className={`${st.small} ${st.label}`}>{screens[i].label}</span>
        <p>{screens[i].text}</p>
      </div>
    </div>
  );
}
