import React from 'react';

type Link = { label: string; url: string };
type Props = {
  name: string;
  role: string;
  blurb: string;
  email?: string;
  location?: string;
  links?: Link[];
};

const BasicInfo: React.FC<Props> = ({ name, role, blurb, email, location, links }) => (
  <header style={{ marginBottom: '2rem' }}>
    <h1 style={{ margin: 0 }}>{name}</h1>
    <p style={{ margin: '0.25rem 0 1rem' }}>{role}</p>
    <p>{blurb}</p>
    <ul style={{ listStyle: 'none', padding: 0, margin: '0.5rem 0' }}>
      {email && <li><strong>Email:</strong> {email}</li>}
      {location && <li><strong>Location:</strong> {location}</li>}
    </ul>
    {links?.length ? (
      <p>
        {links.map((l, i) => (
          <a key={i} href={l.url} target="_blank" rel="noreferrer" style={{ marginRight: 12 }}>
            {l.label}
          </a>
        ))}
      </p>
    ) : null}
  </header>
);

export default BasicInfo;
