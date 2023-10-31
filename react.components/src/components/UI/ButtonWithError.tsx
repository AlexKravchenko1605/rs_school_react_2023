import { useState } from 'react';

const ButtonWithError = () => {
  const [isError, setError] = useState(false);

  if (isError) {
    throw new Error('I crashed!');
  }
  return (
    <button className="btn_error" onClick={() => setError(!isError)}>
      Show Error
    </button>
  );
};
export default ButtonWithError;
