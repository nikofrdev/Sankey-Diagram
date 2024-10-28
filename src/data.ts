export interface FilterType {
  subdivision: string;
  holding: string;
  company: string;
}

export interface Indicator {
  title: string;
  unit: string;
  value: number;
  groups: { name: string; value: number }[];
}

export interface TableData {
  name: string;
  value: number;
}

export interface SankeyNode {
  name: string;
}

export interface SankeyLink {
  source: string;
  target: string;
  value: number;
}

export const data = [
  {
    subdivision: "Филиал 1",
    holding: "Холдинг 1",
    company: "Компания 1",
    indicator: {
      title: "ПОКАЗАТЕЛЬ 1",
      unit: "шт.",
      value: 3013,
      groups: [
        { name: "группа1", value: 2800 },
        { name: "группа2", value: 213 },
      ],
    },
    table: [
      { name: "Клиент 1", value: 1200 },
      { name: "Клиент 2", value: 1100 },
    ],
    sankeyNodes: [
      { name: "Филиал 1" },
      { name: "Холдинг 1" },
      { name: "Компания 1" },
    ],
    sankeyLinks: [
      { source: "Филиал 1", target: "Холдинг 1", value: 2100 },
      { source: "Холдинг 1", target: "Компания 1", value: 1500 },
    ],
  },
  {
    subdivision: "Филиал 1",
    holding: "Холдинг 1",
    company: "Компания 2",
    indicator: {
      title: "ПОКАЗАТЕЛЬ 2",
      unit: "шт.",
      value: 4567,
      groups: [
        { name: "группа1", value: 2800 },
        { name: "группа2", value: 213 },
      ],
    },
    table: [
      { name: "Клиент 1", value: 1200 },
      { name: "Клиент 2", value: 1100 },
    ],
    sankeyNodes: [
      { name: "Филиал 1" },
      { name: "Холдинг 1" },
      { name: "Компания 2" },
    ],
    sankeyLinks: [
      { source: "Филиал 1", target: "Холдинг 1", value: 2300 },
      { source: "Холдинг 1", target: "Компания 2", value: 2000 },
    ],
  },
  {
    subdivision: "Филиал 1",
    holding: "Холдинг 2",
    company: "Компания 1",
    indicator: {
      title: "ПОКАЗАТЕЛЬ 3",
      unit: "шт.",
      value: 3500,
      groups: [
        { name: "группа1", value: 2500 },
        { name: "группа2", value: 2000 },
      ],
    },
    table: [
      { name: "Клиент 5", value: 2000 },
      { name: "Клиент 6", value: 2500 },
    ],
    sankeyNodes: [
      { name: "Филиал 1" },
      { name: "Холдинг 2" },
      { name: "Компания 1" },
    ],
    sankeyLinks: [
      { source: "Филиал 1", target: "Холдинг 2", value: 1600 },
      { source: "Холдинг 2", target: "Компания 1", value: 1100 },
    ],
  },
  {
    subdivision: "Филиал 1",
    holding: "Холдинг 2",
    company: "Компания 2",
    indicator: {
      title: "ПОКАЗАТЕЛЬ 4",
      unit: "шт.",
      value: 5500,
      groups: [
        { name: "группа1", value: 2500 },
        { name: "группа2", value: 2000 },
      ],
    },
    table: [
      { name: "Клиент 5", value: 2000 },
      { name: "Клиент 6", value: 2500 },
    ],
    sankeyNodes: [
      { name: "Филиал 1" },
      { name: "Холдинг 2" },
      { name: "Компания 2" },
    ],
    sankeyLinks: [
      { source: "Филиал 1", target: "Холдинг 2", value: 4500 },
      { source: "Холдинг 2", target: "Компания 2", value: 2000 },
    ],
  },
  {
    subdivision: "Филиал 2",
    holding: "Холдинг 1",
    company: "Компания 1",
    indicator: {
      title: "ПОКАЗАТЕЛЬ 5",
      unit: "шт.",
      value: 3150,
      groups: [
        { name: "группа1", value: 1800 },
        { name: "группа2", value: 350 },
      ],
    },
    table: [
      { name: "Клиент 3", value: 1000 },
      { name: "Клиент 4", value: 600 },
    ],
    sankeyNodes: [
      { name: "Филиал 2" },
      { name: "Холдинг 1" },
      { name: "Компания 1" },
    ],
    sankeyLinks: [
      { source: "Филиал 2", target: "Холдинг 1", value: 3500 },
      { source: "Холдинг 1", target: "Компания 1", value: 2000 },
    ],
  },
  {
    subdivision: "Филиал 2",
    holding: "Холдинг 1",
    company: "Компания 2",
    indicator: {
      title: "ПОКАЗАТЕЛЬ 6",
      unit: "шт.",
      value: 4250,
      groups: [
        { name: "группа1", value: 1800 },
        { name: "группа2", value: 350 },
      ],
    },
    table: [
      { name: "Клиент 3", value: 1000 },
      { name: "Клиент 4", value: 600 },
    ],
    sankeyNodes: [
      { name: "Филиал 2" },
      { name: "Холдинг 1" },
      { name: "Компания 2" },
    ],
    sankeyLinks: [
      { source: "Филиал 2", target: "Холдинг 1", value: 4500 },
      { source: "Холдинг 1", target: "Компания 2", value: 2000 },
    ],
  },
  {
    subdivision: "Филиал 2",
    holding: "Холдинг 2",
    company: "Компания 1",
    indicator: {
      title: "ПОКАЗАТЕЛЬ 7",
      unit: "шт.",
      value: 3750,
      groups: [
        { name: "группа1", value: 1800 },
        { name: "группа2", value: 350 },
      ],
    },
    table: [
      { name: "Клиент 3", value: 1000 },
      { name: "Клиент 4", value: 600 },
    ],
    sankeyNodes: [
      { name: "Филиал 2" },
      { name: "Холдинг 2" },
      { name: "Компания 1" },
    ],
    sankeyLinks: [
      { source: "Филиал 2", target: "Холдинг 2", value: 3500 },
      { source: "Холдинг 2", target: "Компания 1", value: 2000 },
    ],
  },
  {
    subdivision: "Филиал 2",
    holding: "Холдинг 2",
    company: "Компания 2",
    indicator: {
      title: "ПОКАЗАТЕЛЬ 8",
      unit: "шт.",
      value: 5100,
      groups: [
        { name: "группа1", value: 2100 },
        { name: "группа2", value: 550 },
      ],
    },
    table: [
      { name: "Клиент 3", value: 1500 },
      { name: "Клиент 4", value: 800 },
    ],
    sankeyNodes: [
      { name: "Филиал 2" },
      { name: "Холдинг 2" },
      { name: "Компания 2" },
    ],
    sankeyLinks: [
      { source: "Филиал 2", target: "Холдинг 2", value: 2100 },
      { source: "Холдинг 2", target: "Компания 2", value: 1300 },
    ],
  },
];
