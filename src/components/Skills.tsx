import React from 'react';
import type { SkillsData } from '../data';

const Pill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span
    style={{
      display: 'inline-block',
      padding: '6px 10px',
      borderRadius: 999,
      border: '1px solid #ddd',
      marginRight: 8,
      marginBottom: 8,
      fontSize: 14,
    }}
  >
    {children}
  </span>
);

const Skills: React.FC<SkillsData> = ({ description, languages, tools }) => (
  <div style={{ marginTop: 16, marginBottom: 24 }}>
    <p>{description}</p>
    <h4>Languages / Frameworks</h4>
    <div>
      {languages.map((l, i) => (
        <Pill key={i}>{l}</Pill>
      ))}
    </div>
    <h4 style={{ marginTop: 16 }}>Tools</h4>
    <div>
      {tools.map((t, i) => (
        <Pill key={i}>{t}</Pill>
      ))}
    </div>
  </div>
);

export default Skills;
