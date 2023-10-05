import React from "react";

class UserClass extends React.Component {
  render() {
    const { name, location, avatar_url } = this?.props?.userInfo;
    return (
      <div className="user-card">
        <img className="avatar-img" src={avatar_url} alt="Avatar Img" />
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h3>Contact:7302466350</h3>
      </div>
    );
  }
}

export default UserClass;
