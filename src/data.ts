// src/data.ts
export type WorkItem = {
  title: string;
  description: string;
  image?: string;
  link: string;
  tech: string[];
};

export type SkillsData = {
  description: string;
  languages: string[];
  tools: string[];
};

export type ResourceItem = {
  title: string;
  image?: string; // or icon URL
  summary: string;
  link: string;
};

export const basicInfo = {
  name: 'Marissa Abao',
  role: 'Full-Stack Developer',
  blurb:
    'Student at Red River College Polytech. Passionate about clean UI, testing, and CI/CD.',
  email: 'mabao@rrc.ca',
  location: 'Winnipeg, MB',
  links: [
    { label: 'GitHub', url: 'https://github.com/mabao-rrc' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/marissaabao/' },
  ],
};

export const workItems: WorkItem[] = [
  {
    title: 'UC Component Library (Assignment 13)',
    description:
      'React + TypeScript library with Husky pre-commit checks and GitHub Actions CI.',
    image: '/logo192.png',
    link: 'https://github.com/mabao-rrc/abao_marissa_ui_garden_build_checks',
    tech: ['React', 'TypeScript', 'Husky', 'ESLint', 'Prettier', 'Jest', 'Docker'],
  },
  // add more projects here
];

export const skills: SkillsData = {
  description:
    'Comfortable across frontend tooling, testing, and Dockerized deployments.',
  languages: ['TypeScript', 'JavaScript', 'HTML', 'CSS'],
  tools: ['React', 'Jest', 'ESLint', 'Prettier', 'Docker', 'GitHub Actions'],
};

export const resources: ResourceItem[] = [
  {
    title: 'Course GitHub Org',
    image: '/logo192.png',
    summary: 'Where course work and examples live.',
    link: 'https://github.com/',
  },
  // add more links/resources
];
