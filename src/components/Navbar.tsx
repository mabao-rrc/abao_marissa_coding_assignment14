// src/components/Navbar.tsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ marginBottom: '2rem' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Basic Info</Link>
      <Link to="/work" style={{ marginRight: '1rem' }}>Work</Link>
      <Link to="/skills" style={{ marginRight: '1rem' }}>Skills</Link>
      <Link to="/resources">Resources</Link>
    </nav>
  );
}
