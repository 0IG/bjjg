import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-header">
        <Link to="/recommended">SHOW RECOMMENDED</Link>
      </h1>
      {/* <div className="navbar-icons">
        <Link to='/'>

        </Link>
      </div> */}
    </nav>
  );
}
