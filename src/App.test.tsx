import { render, screen } from '@testing-library/react';
import App from './App';

// -------------------------------------------------------------
// Test 1: Verify the Basic Info heading (your name) is displayed
// -------------------------------------------------------------
test('renders Basic Info heading (name)', () => {
  render(<App />);
  expect(screen.getByText(/Marissa Abao/i)).toBeInTheDocument();
});

// -------------------------------------------------------------
// Test 2: Verify the "Work" section heading is displayed
// - Use heading level 2 to avoid matching unrelated headings
// - Use exact match /^Work$/i so "Languages / Frameworks" is not matched
// -------------------------------------------------------------
test('renders Work section heading', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 2, name: /^Work$/i })).toBeInTheDocument();
});
