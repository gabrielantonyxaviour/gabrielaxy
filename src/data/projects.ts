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
    category: "Brand",
    items: [
      {
        name: "Cosmiclan",
        url: "https://cosmiclan.com",
        description: "high agency. raw throughput.",
      },
    ],
  },
  {
    category: "Startup",
    items: [
      {
        name: "Larinova",
        url: "https://larinova.com",
        description: "making doctors life easier",
      },
    ],
  },
  {
    category: "Growth",
    items: [
      {
        name: "Rax Tech",
        url: "https://rax-tech.com",
        description: "iot, hse, e-surv, software, marine",
      },
    ],
  },
];
