import React from 'react';

/**
 * 클래스형태 컴포넌트
 */
class ProfilePageClass extends React.Component {
  showMessage = () => {
    //this :(mutable) 변할수 있는 값
    alert('Followed ' + this.props.user);
  };

  handleClick = () => {
    setTimeout(this.showMessage, 3000);
  };

  render() {
    return <button onClick={this.handleClick}>Follow</button>;
  }
}

export default ProfilePageClass;
