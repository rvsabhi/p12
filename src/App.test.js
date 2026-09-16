import { render, screen } from '@testing-library/react';
import App from './App';

test('renders shopping cart', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', { name: /shopping cart/i })
  ).toBeInTheDocument();

  expect(screen.getByText(/laptop/i)).toBeInTheDocument();
  expect(screen.getByText(/headphones/i)).toBeInTheDocument();
  expect(screen.getByText(/mouse/i)).toBeInTheDocument();
  expect(screen.getByText(/total: ₹52800/i)).toBeInTheDocument();
});

