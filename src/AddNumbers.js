import React, { useState } from 'react';
import axios from 'axios';

function AddNumbers() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleAdd = () => {
    axios.post('http://20.175.170.113:5000/add', { num1, num2 })
      .then(response => {
        setResult(response.data.result);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h2>Add Two Numbers</h2>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br />
      <button onClick={handleAdd}>Add</button>
      <br />
      {result && <p>Result: {result}</p>}
    </div>
  );
}

export default AddNumbers;
