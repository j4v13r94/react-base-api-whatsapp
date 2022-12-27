import React, { useState } from 'react';

export function MyApp() {
  const [showDiv, setShowDiv] = useState(false);

  function handleButtonClick() {
    setShowDiv(true);
  }

  return (
    <div>
      <button onClick={handleButtonClick}>Show Div</button>
      { showDiv && <div>This div will be shown when the button is clicked</div> }
    </div>
  );
}