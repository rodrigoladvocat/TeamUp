import { Cycle } from "@prisma/client";

export const cycles: Cycle[] = [
  {
    id: 1,
    cycleName: "2022.1",
    initialDate: new Date("2022-02-01"),
    finalDate: new Date("2022-06-01"),
    lastUpdated: new Date("2022-05-25"),
    emailSent: true
  },
  {
    id: 2,
    cycleName: "2022.2",
    initialDate: new Date("2022-07-01"),
    finalDate: new Date("2022-11-01"),
    lastUpdated: new Date("2022-10-25"),
    emailSent: true
  },
  {
    id: 3,
    cycleName: "2023.1",
    initialDate: new Date("2023-02-01"),
    finalDate: new Date("2023-06-01"),
    lastUpdated: new Date("2023-05-25"),
    emailSent: true
  },
  {
    id: 4,
    cycleName: "2023.2",
    initialDate: new Date("2023-07-01"),
    finalDate: new Date("2023-11-01"),
    lastUpdated: new Date("2023-10-25"),
    emailSent: true
  },
  {
    id: 5,
    cycleName: "2024.1",
    initialDate: new Date("2024-02-01"),
    finalDate: new Date("2024-07-15"),
    lastUpdated: new Date("2024-02-01"),
    emailSent: false
  },
];
