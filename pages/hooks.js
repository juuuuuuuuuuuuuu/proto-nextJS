import { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = numbers => {
  console.log('평균값 계산중 ');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [lists, setLists] = useState([]);
  const [number, setNumber] = useState('');
  const inputEl = useRef(null);

  /**
   * useCallback(() => {}, []);
   * useCallback(생성하고 싶은 함수, 배열: 어떤 값이 바뀌었을 때 함수를 새로 생성해주어야하는지 명시)
   * 배열부분을 빈값으로 놓으면 컴포넌트가 처음렌더링 될 때에만 함수를 생성
   * ex)배열에 number 혹은 lists 값이 바뀌었을 때만 함수 생성
   */
  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(
    e => {
      const nextList = lists.concat(parseInt(number));
      setLists(nextList);
      inputEl.current.focus();
      setNumber('');
    },
    [number, lists]
  );


  /**
   * useMemo(() => {}, []);
   * useMemo: 렌더링 과정에서 특정값이 바뀌었을 때만 연산을 실행
   * 숫자, 문자열 ,객체처럼 일반 값을 재사용할 때 사용
   * 두번째 파라미터 는 lists값이 바뀌었을 때에만 실행하라는 의미
   */
  const avg = useMemo(() => getAverage(lists), [lists]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {lists.map((list, index) => {
          <li key={index}>{list}</li>;
        })}
      </ul>
      <div>
        <b>평균값: </b> {avg}
      </div>
    </div>
  );
};

export default Average;
