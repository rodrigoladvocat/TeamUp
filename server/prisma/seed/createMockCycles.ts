import { Cycle } from "@prisma/client";

export const cycles: Cycle[] = [
  {
    id: 1,
    cycleName: "2024.1",
    initialDate: new Date("2024-01-01"),
    finalDate: new Date("2024-04-30"),
    lastUpdated: new Date("2024-04-30"),
    emailSent: false
  },
  {
    id: 2,
    cycleName: "2024.2",
    initialDate: new Date("2024-05-01"),
    finalDate: new Date("2024-07-07"),
    lastUpdated: new Date("2024-06-30"),
    emailSent: false
  }
];
