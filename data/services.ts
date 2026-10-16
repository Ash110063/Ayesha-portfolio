// "Services I offer" chips. Icon parts are positioned exactly as the
// layered vector groups in Figma (inset = top right bottom left, in %).

export type IconPart = { src: string; inset: string };

export type Service = {
  label: string;
  width: number;
  iconLeft: number;
  textLeft: number;
  icon: IconPart[];
};

const I = "/assets/icons";

export const services: Service[][] = [
  [
    {
      label: "UI/UX Design",
      width: 134,
      iconLeft: 13,
      textLeft: 37,
      icon: [{ src: `${I}/uiux.svg`, inset: "13.57% 9.07% 13.56% 9.07%" }],
    },
    {
      label: "Brand Identity",
      width: 134,
      iconLeft: 12,
      textLeft: 37,
      icon: [
        { src: `${I}/brand-a.svg`, inset: "0 0 41.21% 0" },
        { src: `${I}/brand-b.svg`, inset: "23.63% 23.63% 0 23.63%" },
      ],
    },
  ],
  [
    {
      label: "Pitch Deck",
      width: 114,
      iconLeft: 14,
      textLeft: 37,
      icon: [
        { src: `${I}/pitch-body.svg`, inset: "0.01% 14.84% 0.01% 14.85%" },
        { src: `${I}/pitch-line.svg`, inset: "35.34% 88.28% 58.8% 0" },
        { src: `${I}/pitch-l-top.svg`, inset: "15.69% 89.14% 74.3% 0.86%" },
        { src: `${I}/pitch-l-bottom.svg`, inset: "50.85% 89.14% 39.15% 0.86%" },
        { src: `${I}/pitch-line.svg`, inset: "35.34% 0 58.8% 88.28%" },
        { src: `${I}/pitch-r-top.svg`, inset: "15.69% 0.86% 74.3% 89.14%" },
        { src: `${I}/pitch-r-bottom.svg`, inset: "50.85% 0.86% 39.15% 89.14%" },
      ],
    },
    {
      label: "Web Design",
      width: 121,
      iconLeft: 12,
      textLeft: 37,
      icon: [{ src: `${I}/web.svg`, inset: "0 1.95%" }],
    },
  ],
  [
    {
      label: "UX Audit",
      width: 114,
      iconLeft: 17,
      textLeft: 47,
      icon: [{ src: `${I}/ux-audit.svg`, inset: "0" }],
    },
    {
      label: "Design Consultancy",
      width: 168,
      iconLeft: 14,
      textLeft: 37,
      icon: [{ src: `${I}/consultancy.svg`, inset: "0" }],
    },
  ],
];
