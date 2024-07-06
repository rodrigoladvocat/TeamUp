import { Cycle } from "@prisma/client";

export const cycles: Cycle[] = [
  {
    id: 1,
    cycleName: "2024.1",
    initialDate: new Date("2024-01-01"),
    finalDate: new Date("2024-04-30"),
    lastUpdated: new Date("2024-04-30"),
    emailSent: true
  },
  {
    id: 2,
    cycleName: "2024.2",
    initialDate: new Date("2024-05-01"),
    finalDate: new Date("2024-07-07"),
    lastUpdated: new Date("2024-06-30"),
    emailSent: true
  },
  {
    id: 3,
    cycleName: "2025.1",
    initialDate: new Date("2025-01-01"),
    finalDate: new Date("2025-04-01"),
    lastUpdated: new Date("2024-06-30"),
    emailSent: true
  },
  {
    id: 4,
    cycleName: "2025.2",
    initialDate: new Date("2025-07-01"),
    finalDate: new Date("2026-01-01"),
    lastUpdated: new Date("2024-06-30"),
    emailSent: true
  },
  {
    id: 5,
    cycleName: "2026.1",
    initialDate: new Date("2026-04-01"),
    finalDate: new Date("2026-12-01"),
    lastUpdated: new Date("2024-06-30"),
    emailSent: false
  },
];
