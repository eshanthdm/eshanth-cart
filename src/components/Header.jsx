// Header.jsx

import { Link } from "react-router-dom";

function Header() {
  return (
    <div style={{ background: "black", padding: "10px" }}>
      <Link to="/Home" style={{ color: "white", marginRight: "15px" }}>
        Home
      </Link>

      <Link to="/blog" style={{ color: "White" }}>
        Blog
      </Link>
      <Link to="/Contact" style={{ color: "White" }}>
        contact
      </Link>
      <Link to="/Product" style={{ color: "White" }}>
        Product
      </Link>
       <Link to="/Address" style={{ color: "White" }}>
        Address
      </Link>
    </div>
  );
}

export default Header;