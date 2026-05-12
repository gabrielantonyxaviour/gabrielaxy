export interface Project {
  name: string;
  url: string;
  description: string;
}

export interface ProjectCategory {
  category: string;
  items: Project[];
}

export const projectCategories: ProjectCategory[] = [
  {
    category: "brand",
    items: [
      {
        name: "cosmiclan",
        url: "https://cosmiclan.com",
        description: "high agency. raw throughput.",
      },
    ],
  },
  {
    category: "startup",
    items: [
      {
        name: "larinova",
        url: "https://larinova.com",
        description: "making doctors life easier",
      },
    ],
  },
  {
    category: "growth",
    items: [
      {
        name: "rax tech",
        url: "https://rax-tech.com",
        description: "iot, hse, e-surv, software, marine",
      },
    ],
  },
];
