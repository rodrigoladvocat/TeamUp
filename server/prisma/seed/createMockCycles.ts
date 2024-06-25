import { Cycle } from "@prisma/client";

export const cycles: Cycle[] = [
  {
    id: 1,
    cycleName: "2023.1",
    initialDate: new Date("2023-01-01"),
    finalDate: new Date("2023-06-30"),
    lastUpdated: new Date("2023-06-01")
  },
  {
    id: 2,
    cycleName: "2023.2",
    initialDate: new Date("2023-07-01"),
    finalDate: new Date("2023-12-31"),
    lastUpdated: new Date("2023-12-01")
  }
];
