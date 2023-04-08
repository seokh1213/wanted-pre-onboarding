import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="page">
      <h1>Main Page</h1>
      <p>Support Link</p>
      <ul>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
    </div>
  );
};

export default Main;
