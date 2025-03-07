// ColorPicker.jsx
import React, { useState } from 'react';

const ColorPicker = () => {
  const [color, setColor] = useState('#ffffff'); // Default color is black

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div>
      <label htmlFor="colorInput">Choose a color: </label>
      <input
        id="colorInput"
        type="color"
        value={color}
        onChange={handleColorChange}
      />
      <p>Selected color: {color}</p>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: color,
          border: '1px solid #000',
          marginTop: '10px'
        }}
      />
    </div>
  );
};

export default ColorPicker;
