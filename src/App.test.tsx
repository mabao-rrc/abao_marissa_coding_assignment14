import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Basic Info heading (name)', () => {
  render(<App />);
  expect(screen.getByText(/Marissa Abao/i)).toBeInTheDocument();
});

test('renders Work section heading', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Work/i })).toBeInTheDocument();
});
