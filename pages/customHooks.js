import useInput from '../components/CustomHooks/useInput';
import useScroll from '../components/CustomHooks/useScroll';
import useFadeIn from '../components/CustomHooks/useFadeIn';

/**
 * customHooks page
 */
const customHooks = () => {
  const validator = value => value.length < 10;

  //useInput
  const value = useInput('', validator);

  //useScroll
  const {
    state: { x, y },
    element
  } = useScroll();

  //useFadeIn
  const fadeIn = useFadeIn(5, 10);

  return (
    <div>
      <div>
        <h2>useInput</h2>
        <input {...value} />
      </div>
      <div>
      <h2>useScroll</h2>
      <div>
        {x} / {y}
      </div>
      <div
        ref={element}
        style={{
          border: '1px solid black',
          width: '100px',
          height: '100px',
          overflow: 'auto'
        }}
      >
        <p>
          여기는 DIV 스타일에 overflow: auto; 속성을 주었다. 내용의 양이 DIV
          영역보다 많으면 스클롤바가 표시되고 적으면 표시되지 않는다. ====> 이
          글은 예를 보이기 위한 것이므로 읽을 필요가 없다. 여기는 DIV 스타일에
          overflow: auto; 속성을 주었다. 내용의 양이 DIV 영역보다 많으면
          스클롤바가 표시되고 적으면 표시되지 않는다.여기는 DIV 스타일에
          overflow: auto; 속성을 주었다. 내용의 양이 DIV 영역보다 많으면
          스클롤바가 표시되고 적으면 표시되지 않는다.여기는 DIV 스타일에
          overflow: auto; 속성을 주었다. 내용의 양이 DIV 영역보다 많으면
          스클롤바가 표시되고 적으면 표시되지 않는다.여기는 DIV 스타일에
          overflow: auto; 속성을 주었다. 내용의 양이 DIV 영역보다 많으면
          스클롤바가 표시되고 적으면 표시되지 않는다.여기는 DIV 스타일에
          overflow: auto; 속성을 주었다. 내용의 양이 DIV 영역보다 많으면
          스클롤바가 표시되고 적으면 표시되지 않는다.
        </p>
      </div>
      </div>
      <div>
        <h2>useFadeIn</h2>
        <h2 {...fadeIn}>This will fade in.</h2>
      </div>
    </div>
  );
};
export default customHooks;
