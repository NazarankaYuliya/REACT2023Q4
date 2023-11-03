import { useState } from 'react';

function ErrorButton() {
  const [hasError, setHasError] = useState(false);

  const handleClick = () => {
    setHasError(true);
  };

  if (hasError) {
    throw new Error('Error from button');
  }

  return (
    <button className="error-button" onClick={handleClick}>
      Trigger Error
    </button>
  );
}

export default ErrorButton;
