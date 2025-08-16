// src/data.ts

// -----------------------------
// Type Definitions
// -----------------------------

// Each project/assignment card in the portfolio
export type WorkItem = {
  title: string; // Project name
  description: string; // Short summary of the project
  image?: string; // Optional image/logo path
  link: string; // URL to the GitHub repo or live project
  tech: string[]; // List of technologies used
};

// Skills section data type
export type SkillsData = {
  description: string; // Short intro about your skills
  languages: string[]; // Programming languages you know
  tools: string[]; // Frameworks, libraries, and tools you use
};

// Resource links section data type
export type ResourceItem = {
  title: string; // Resource name
  image?: string; // Optional icon/logo path
  summary: string; // Short description of the resource
  link: string; // URL to the resource
};

// -----------------------------
// Basic Information Section
// -----------------------------

export const basicInfo = {
  name: "Hi, I'm Marissa Abao!", // Main heading in the Basic Information section
  role: 'Full-Stack Developer', // Your role/title
  blurb:
    'This portfolio is my final project for WEBD-3012 Business Systems Build and Testing. Over the term, I’ve learned how to keep my code clean, run smooth with automated tests, and set up a build-and-release process so updates can go live quickly and reliably. I love creating interfaces that look great and work even better — and yes, I had fun putting this one together!',
  email: 'mabao@rrc.ca', // Contact email
  location: 'Winnipeg, MB', // Your location
  links: [
    { label: 'GitHub', url: 'https://github.com/mabao-rrc' }, // GitHub profile link
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/marissaabao/' }, // LinkedIn profile link
  ],
};

// -----------------------------
// Work / Projects Section
// -----------------------------
export const workItems: WorkItem[] = [
  {
    title: 'Coding Assignment 11: Docker File',
    description: 'Dockerfile and README to run a Create React App locally (served at localhost:7775).',
    link: 'https://github.com/mabao-rrc/webd-3012-coding-assignments/tree/main/Coding_Assignment_%2311_MAbao',
    tech: ['Docker', 'Create React App', 'Node.js', 'README'],
  },
  {
    title: 'Coding Assignment 12: Web Component Library',
    description:
      'Component library with Storybook. Built buttons, tables, radios, dropdowns, and cards; added basic tests and linting.',
    link: 'https://github.com/mabao-rrc/abao_marissa_coding_assignment12',
    tech: ['React', 'TypeScript', 'Storybook', 'ESLint', 'Prettier', 'Jest', 'Docker'],
  },
  {
    title: 'Coding Assignment 13: UC Component Library',
    description: 'React + TypeScript library with Husky pre-commit checks and GitHub Actions CI.',
    link: 'https://github.com/mabao-rrc/abao_marissa_ui_garden_build_checks',
    tech: ['React', 'TypeScript', 'Husky', 'ESLint', 'Prettier', 'Jest', 'Docker'],
  },
];

// -----------------------------
// Skills Section
// -----------------------------
export const skills: SkillsData = {
  description:
    'I build modern frontend applications, add automated tests for reliability, and use Docker for smooth deployments. With tools like ESLint, Prettier, and GitHub Actions, I keep code clean, maintainable, and deployment-ready through efficient CI/CD pipelines.',
  languages: ['TypeScript', 'JavaScript', 'HTML', 'CSS'],
  tools: ['React', 'Jest', 'ESLint', 'Prettier', 'Docker', 'GitHub Actions'],
};

// -----------------------------
// Resources Section
// -----------------------------
export const resources: ResourceItem[] = [
  {
    title: 'Course GitHub Org',
    image: '/images/github.svg',
    summary: 'Where course work and examples live.',
    link: 'https://github.com/',
  },
  {
    title: 'Docker',
    image: '/images/docker.svg',
    summary: 'Official site for Docker — containerization platform used in all assignments.',
    link: 'https://www.docker.com/',
  },
  {
    title: 'Storybook',
    image: '/images/storybook.svg',
    summary: 'UI development environment used for building and testing components in Assignment 12.',
    link: 'https://storybook.js.org/',
  },
  {
    title: 'React',
    image: '/images/react.svg',
    summary: 'JavaScript library for building user interfaces. Used in all assignments.',
    link: 'https://react.dev/',
  },
  {
    title: 'TypeScript',
    image: '/images/typescript.svg',
    summary: 'Typed superset of JavaScript used for type safety in Assignments 12 and 13.',
    link: 'https://www.typescriptlang.org/',
  },
  {
    title: 'ESLint',
    image: '/images/eslint.svg',
    summary: 'Tool for identifying and fixing problems in JavaScript/TypeScript code.',
    link: 'https://eslint.org/',
  },
  {
    title: 'Prettier',
    image: '/images/prettier.png',
    summary: 'Opinionated code formatter to keep code style consistent.',
    link: 'https://prettier.io/',
  },
  {
    title: 'Jest',
    image: '/images/jest.svg',
    summary: 'JavaScript testing framework used for unit tests.',
    link: 'https://jestjs.io/',
  },
  {
    title: 'GitHub Actions',
    image: '/images/github.svg',
    summary: 'CI/CD platform for automating build, test, and deployment pipelines.',
    link: 'https://github.com/features/actions',
  },
  {
    title: 'Visual Studio Code',
    image: '/images/vscode.svg',
    summary: 'Code editor used for writing and debugging all assignments.',
    link: 'https://code.visualstudio.com/',
  },
];
