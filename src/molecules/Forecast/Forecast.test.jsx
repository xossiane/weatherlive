import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Forecast from './';
import fetchMock from 'jest-fetch-mock';

// Mock forecast data
const mockForecastData = {
  list: [
    {
      dt_txt: "2023-07-13 12:00:00",
      main: { temp: 25, humidity: 60 },
      weather: [{ description: "clear sky" }],
      wind: { speed: 5 }
    },
    {
      dt_txt: "2023-07-14 12:00:00",
      main: { temp: 28, humidity: 65 },
      weather: [{ description: "few clouds" }],
      wind: { speed: 6 }
    },
    {
      dt_txt: "2023-07-15 12:00:00",
      main: { temp: 22, humidity: 55 },
      weather: [{ description: "scattered clouds" }],
      wind: { speed: 4 }
    },
    {
      dt_txt: "2023-07-16 12:00:00",
      main: { temp: 24, humidity: 50 },
      weather: [{ description: "broken clouds" }],
      wind: { speed: 3 }
    }
  ]
};

// Mocking the fetch function
beforeEach(() => {
  fetchMock.resetMocks();
  fetchMock.mockResponseOnce(JSON.stringify(mockForecastData));
});

jest.setTimeout(10000); // Set timeout to 10 seconds

test('renders loading state initially', () => {
  render(<Forecast lat={0} lon={0} API_KEY="test" />);

  const loader = screen.getByAltText('loading');
  expect(loader).toBeInTheDocument();
});
