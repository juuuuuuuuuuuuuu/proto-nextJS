/**
 * 함수형 컴포넌트
 * render될 때 값들을 유지한다.
 * @param {Object} props props
 */
const ProfilePageFunc = props => {
  const showMessage = () => {
    alert(`Followed ${props.user}`);
  };

  const handleClick = () => {
    setTimeout(showMessage, 3000);
  };

  return <button onClick={handleClick}>Follow</button>;
};
export default ProfilePageFunc;
