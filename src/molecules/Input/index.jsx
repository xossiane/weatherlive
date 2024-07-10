import './index.css'

function Input({inputValue, onInputChange}) {
  
  
  const handleChange = (event) => {
    onInputChange(event.target.value);
  };
  return (
    <div className="input">
         
        <input className="form-control" tabIndex={0} aria-label="Input for search" value={inputValue} placeholder='Search for a city'
        onChange={handleChange} />
        <i  className="fa-solid fa-search"></i>
    </div>
  );
}

export default Input;
