import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  const logout = () => {
    window.open("http://localhost:8080/auth/logout", "_self");
  };

  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          Ivory
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            {user?.photos?.[0] ? (
              <img src={user?.photos?.[0]?.value} alt="" className="avatar" />
            ) : (
              <div>{user.displayName[0].toUpperCase()}</div>
            )}
          </li>
          <li className="listItem">{user.displayName}</li>
          <li className="listItem" onClick={logout}>
            Logout
          </li>
        </ul>
      ) : (
        <Link className="link" to="login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
