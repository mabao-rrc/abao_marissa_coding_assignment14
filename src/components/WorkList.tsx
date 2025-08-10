import React from 'react';
import type { WorkItem } from '../data';

const WorkCard: React.FC<{ item: WorkItem }> = ({ item }) => (
  <article
    style={{
      border: '1px solid #eee',
      borderRadius: 12,
      padding: 16,
      background: '#fff',
      boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
    }}
  >
    {item.image && (
      <img
        src={item.image}
        alt={item.title}
        style={{
          display: 'block',
          margin: '0 auto', // center the image
          maxWidth: '100%',
          height: 'auto',
          maxHeight: 220,       // keep image from being huge
          objectFit: 'cover',
          borderRadius: 8,
          marginBottom: 12,
        }}
      />
    )}
    <h3 style={{ marginTop: 0 }}>{item.title}</h3>
    <p>{item.description}</p>
    <p style={{ fontSize: 14 }}>
      <strong>Tech:</strong> {item.tech.join(', ')}
    </p>
    <a href={item.link} target="_blank" rel="noreferrer">
      View Project →
    </a>
  </article>
);

const WorkList: React.FC<{ items: WorkItem[] }> = ({ items }) => (
  <div
    style={{
      display: 'grid',
      gap: 16,
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      alignItems: 'start',
    }}
  >
    {items.map((it, idx) => (
      <WorkCard key={idx} item={it} />
    ))}
  </div>
);

export default WorkList;
