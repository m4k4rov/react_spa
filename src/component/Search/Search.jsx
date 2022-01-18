import {useState} from "react";
import './Search.sass';

function Search ({cb = Function.prototype}) {

  const [value, setValue] = useState('')

  const handleKey = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  }

  const handleSubmit = () => {
    cb(value);
  }

    return (
      <div className="search">
        <input
          placeholder="Search"
          className="search__input"
          type="text"
          value={value}
          onChange={(ev) => setValue(ev.target.value)}
          onKeyDown={handleKey}
        />
        <button onClick={handleSubmit} className="search__button">Search</button>
      </div>
    )
}

export {Search};