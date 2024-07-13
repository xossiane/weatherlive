import React from 'react';
import './index.css';

function Input({ inputValue, onInputChange, onIconClick, onEnterKey }) {
  return (
    <div className="input">
      <label htmlFor="city-search" className="sr-only">
        Search for a city
      </label>
      <input
        id="city-search"
        className="form-control"
        tabIndex={0}
        aria-label="Search for a city"
        value={inputValue}
        placeholder="Search for a city"
        onChange={(event) => onInputChange(event.target.value)}
        onKeyDown={onEnterKey}
      />
      <button
        className="search-button"
        onClick={onIconClick}
        aria-label="Search"
      >
        <i className="fa-solid fa-search" aria-hidden="true"></i>
      </button>
    </div>
  );
}

export default Input;