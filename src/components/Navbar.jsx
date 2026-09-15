import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">JobConnect</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/saved-jobs">Saved Jobs</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;