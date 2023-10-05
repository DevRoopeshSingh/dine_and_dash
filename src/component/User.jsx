
const User = ({ userInfo }) => {
  const { location, name } = userInfo;
  return (
    <div className="user-card">
      <h2>Name:{name}</h2>
      <h3>Location:{location}</h3>
      <h3>Contact:7302466350</h3>
    </div>
  );
};

export default User;
