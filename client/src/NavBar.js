import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div>
        <Link to='/'>All Plans</Link>
        <Link to='/map'>Map</Link>
      </div>
    </nav>
  );
};

export default NavBar;
