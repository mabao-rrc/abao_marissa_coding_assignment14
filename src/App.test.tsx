import { render, screen } from '@testing-library/react';
import App from './App';

/** Silence React Router v7 "Future Flag" warnings during tests */
const originalWarn = console.warn;
beforeAll(() => {
  jest.spyOn(console, 'warn').mockImplementation((...args: any[]) => {
    const [msg] = args;
    if (typeof msg === 'string' && msg.includes('React Router Future Flag Warning')) {
      return; // swallow only these warnings
    }
    return originalWarn(...args); // keep other warnings
  });
});
afterAll(() => {
  (console.warn as unknown as jest.Mock).mockRestore();
});

// -------------------------------------------------------------
// Test 1: Verify the Basic Info heading (your name) is displayed
// (App renders "/" by default, so this should be visible immediately.)
// -------------------------------------------------------------
test('renders Basic Info heading (name)', () => {
  render(<App />);
  expect(screen.getByText(/Marissa Abao/i)).toBeInTheDocument();
});

// -------------------------------------------------------------
// Test 2: Verify the "Work" section heading when routed to /work
// App uses BrowserRouter, which reads from window.location.
// Push /work into history BEFORE rendering so that route is active.
// -------------------------------------------------------------
test('renders Work section heading', () => {
  window.history.pushState({}, 'Work', '/work');
  render(<App />);
  expect(screen.getByRole('heading', { level: 2, name: /^Work$/i })).toBeInTheDocument();
});
