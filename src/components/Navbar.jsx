import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2><strong>Teacher Management System</strong></h2>
      <Link to="/teachers"><strong>Teachers</strong></Link>
      <Link to="/add"><strong>Add Teacher</strong></Link>
    </nav>
  );
}

export default Navbar;