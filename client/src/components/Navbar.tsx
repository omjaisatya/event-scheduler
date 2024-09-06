import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => (
  <nav>
    {/* <Link to="/">Home</Link> */}
    <Link to="/user">User</Link>
    <Link to="/admin">Admin</Link>
  </nav>
);

export default Navbar;
