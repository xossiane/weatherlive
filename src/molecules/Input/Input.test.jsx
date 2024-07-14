import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Input from '.';
import '@testing-library/jest-dom';

test('renders input component with placeholder', () => {
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    render(<Input />);
  });

  // Check if input element is rendered with placeholder text
  const inputElement = screen.getByPlaceholderText('Search for a city');
  expect(inputElement).toBeInTheDocument();
});

test('calls onInputChange handler on typing', () => {
  const mockInputChange = jest.fn();

  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    render(<Input onInputChange={mockInputChange} />);
  });

  // Simulate typing into the input field
  const inputElement = screen.getByPlaceholderText('Search for a city');
  fireEvent.change(inputElement, { target: { value: 'New York' } });

  // Check if onInputChange handler was called correctly
  expect(mockInputChange).toHaveBeenCalledWith('New York');
});

test('calls onIconClick handler on button click', () => {
  const mockIconClick = jest.fn();

  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    render(<Input onIconClick={mockIconClick} />);
  });

  // Simulate clicking the search button
  const searchButton = screen.getByRole('button', { name: 'Search' });
  fireEvent.click(searchButton);

  // Check if onIconClick handler was called correctly
  expect(mockIconClick).toHaveBeenCalledTimes(1);
});

test('calls onEnterKey handler on pressing Enter key', () => {
  const mockEnterKey = jest.fn();

  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    render(<Input onEnterKey={mockEnterKey} />);
  });

  // Simulate pressing the Enter key on the input field
  const inputElement = screen.getByPlaceholderText('Search for a city');
  fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });

  // Check if onEnterKey handler was called correctly
  expect(mockEnterKey).toHaveBeenCalledTimes(1);
});
