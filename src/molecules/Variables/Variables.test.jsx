import { render, screen } from '@testing-library/react';
import Variables from '.';
import '@testing-library/jest-dom';

test('renders New York text using getByRole', () => {
  render(<Variables data={{ name: 'New York', sys: { country: 'US' }, weather: [{ description: 'Sunny' }] }} />);

  // Check if the heading element contains "New York"
  const headingElement = screen.getByRole('heading', { name: /New York/i });
  expect(headingElement).toBeInTheDocument();
});