import React from 'react';
import type { ResourceItem } from '../data';

const ResourceCard: React.FC<{ item: ResourceItem }> = ({ item }) => (
  <li style={{ marginBottom: 12 }}>
    {item.image && <img src={item.image} alt="" style={{ width: 28, verticalAlign: 'middle', marginRight: 8 }} />}
    <a href={item.link} target="_blank" rel="noreferrer">
      <strong>{item.title}</strong>
    </a>
    <div style={{ fontSize: 14 }}>{item.summary}</div>
  </li>
);

const Resources: React.FC<{ items: ResourceItem[] }> = ({ items }) => (
  <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
    {items.map((r, i) => (
      <ResourceCard key={i} item={r} />
    ))}
  </ul>
);

export default Resources;
