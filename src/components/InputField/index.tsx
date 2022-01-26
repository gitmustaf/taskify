import React from 'react';
import "./index.css"
const InputField = () => {
  return <form className='input'>
    <input type="input" placeholder="Enter a task" className="inputBox" />
    <button className="inputSubmit" type="submit">Go</button>
  </form>;
};

export default InputField;

