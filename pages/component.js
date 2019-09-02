import { useState } from 'react';
import ProfilePageClass from '../components/ProfilePageClass';
import ProfilePageFunc from '../components/ProfilePageFunc';

/**
 * class vs function 컴포넌트 props 데이터 비교
 */
const Component = () => {
  // useState() 호출 후 반환하는 배열 ==> [상태값, 상태를 설정하는 함수]
  const [value, setName] = useState('Dan');

  return (
    <div>
      <label>
        <b>choose name</b>
        <select value={value} onChange={e => setName(e.target.value)}>
          <option value="Dan">Dan</option>
          <option value="Sophie">Sophie</option>
          <option value="Jane">Jane</option>
        </select>
      </label>
      <h1>introduce {value}</h1>
      <p>
        <ProfilePageClass user={value} />
        <b>class</b>
      </p>
      <p>
        <ProfilePageFunc user={value} />
        <b>function</b>
      </p>
    </div>
  );
};
export default Component;
