import { useState, useEffect, useRef } from 'react';

/**
 * element의 scroll 이벤트 감지후 좌표값 리턴
 * @returns {Object} 좌표값, element
 */
const useScroll = () => {
  const [state, setState] = useState({x: 0, y: 0});
  const element = useRef();
  const onScroll = () => {
    setState({x: element.current.scrollLeft, y: element.current.scrollTop});
  };
  useEffect(() => {
    element.current && element.current.addEventListener("scroll", onScroll);
    return () => element.current && element.current.removeEventListener("scroll", onScroll);
  }, []);
  return { state, element};
};

export default useScroll;