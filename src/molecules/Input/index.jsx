import React from 'react';
import './index.css';

function Input({ inputValue, onInputChange, onIconClick, onEnterKey }) {
  return (
    <div className="input">
      <input
        className="form-control"
        tabIndex={0}
        aria-label="Input for search"
        value={inputValue}
        placeholder="Search for a city"
        onChange={(event) => onInputChange(event.target.value)}
        onKeyDown={onEnterKey}
      />
      <i className="fa-solid fa-search" onClick={onIconClick}></i>
    </div>
  );
}

export default Input;