import React from 'react';
import type { WorkItem } from '../data';

/**
 * WorkCard
 * - Uses a vertical (column) layout so text stays at the top
 *   and the logo sits at the bottom.
 * - Fixed logo box (same max size) so cards line up nicely.
 * - Height: 100% so the grid can stretch cards to equal height.
 */
const WorkCard: React.FC<{ item: WorkItem }> = ({ item }) => (
  <article
    style={{
      border: '1px solid #eee',
      borderRadius: 12,
      padding: 16,
      background: '#fafafa',
      boxShadow: '0 1px 3px rgba(0,0,0,0.04)',

      // Make the card fill available height inside the grid
      height: '100%',

      // Vertical layout: text at top, logo at bottom
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: 12,
    }}
  >
    {/* TOP: Text content */}
    <div>
      <h3 style={{ marginTop: 0 }}>{item.title}</h3>

      <p>{item.description}</p>

      <p style={{ fontSize: 14 }}>
        <strong>Tech:</strong> {item.tech.join(', ')}
      </p>

      <a href={item.link} target="_blank" rel="noreferrer">
        View Project →
      </a>
    </div>

    {/* BOTTOM: Consistent logo box */}
    {item.image && (
      <div
        style={{
          // Reserve a consistent area for the logo so all cards align
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 12,
          // Optional: give this area some min height so the card heights match even
          // when an image is a bit shorter/taller.
          minHeight: 72,
        }}
      >
        <img
          src={item.image}
          alt={item.title}
          style={{
            // Keep all logos visually consistent
            maxWidth: 64,
            maxHeight: 64,
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </div>
    )}
  </article>
);

/**
 * WorkList
 * - Responsive grid
 * - Align items to stretch so all cards can be equal height.
 */
const WorkList: React.FC<{ items: WorkItem[] }> = ({ items }) => (
  <div
    style={{
      display: 'grid',
      gap: 16,
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      alignItems: 'stretch', // let cards stretch to same height
    }}
  >
    {items.map((it, idx) => (
      <WorkCard key={idx} item={it} />
    ))}
  </div>
);

export default WorkList;
