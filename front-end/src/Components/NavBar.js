import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-header">
        <Link to="/">Home</Link>
        <br />
        <Link to="/recommended">Recommened</Link>
      </h1>
      {/* <div className="navbar-icons">
        <Link to='/'>

        </Link>
      </div> */}
    </nav>
  );
}
