import { Link } from "react-router-dom";

const SupportedLink = () => {
  return (
    <ul>
      <li>
        <Link to="/todo">Todo</Link>
      </li>
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
      <li>
        <Link to="/signin">Sign In</Link>
      </li>
    </ul>
  );
};

export default SupportedLink;
