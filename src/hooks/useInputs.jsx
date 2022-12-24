import { useState } from 'react';

export default function useInputs(initialForm) {
  const [inputs, setInputs] = useState(initialForm);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const reset = () => setInputs(initialForm);

  return [inputs, onChange, reset];
}
