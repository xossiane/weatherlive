import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import WeatherApp from './WeatherApp'; // Adjust the path as needed

// Mock the fetch function to return test data for New York
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        weather: [{ main: 'Clear', description: 'clear sky' }],
        main: { temp: 25, humidity: 30 },
        wind: { speed: 10 },
        name: 'New York',
        sys: { country: 'US' },
        cod: 200,
      }),
  })
);

// Mock the geolocation API
const mockGeolocation = {
  getCurrentPosition: jest.fn().mockImplementationOnce((success) =>
    success({
      coords: {
        latitude: 40.7128,
        longitude: -74.0060,
      },
    })
  ),
};

global.navigator.geolocation = mockGeolocation;

// Simple test to check initial loading state
test('renders loading state initially', () => {
  render(<WeatherApp />);

  const loader = screen.getByAltText('loading');
  expect(loader).toBeInTheDocument();
});
