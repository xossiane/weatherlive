import React from 'react';
import { render, screen } from '@testing-library/react';
import Variables from '.';
import '@testing-library/jest-dom';

test('renders New York text using getByRole', () => {
  render(
    <Variables
      data={{
        name: 'New York',
        sys: { country: 'US' },
        weather: [{ main: 'Clear', description: 'Sunny' }],
        main: { temp: 25 },  // Ensure `main.temp` is defined
        wind: { speed: 10 },
      }}
    />
  );

  // Check if the heading element contains "New York"
  const headingElement = screen.getByRole('heading', { name: /New York/i });
  expect(headingElement).toBeInTheDocument();
});
