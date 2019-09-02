import { useState } from 'react';

/**
 * input onchange
 * @param {string} initialValue 초기값
 * @param {func} validator 조건함수
 */
const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  // onChange 이벤트
  const onChange = e => {
    const {
      target: { value }
    } = e;

    let willUpdate = true;
    if (typeof validator === 'function') {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

export default useInput;