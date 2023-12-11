import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();

  return (
   <div className="header-content"> 
    <nav>
      <ul>
        <li className={location.pathname === "/theman" ? "active" : ""}>
          <Link to="/theman">About Me</Link>
        </li>
        <li className={location.pathname === "/theworks" ? "active" : ""}>
          <Link to="/theworks">Portfolio</Link>
        </li>
        <li className={location.pathname === "/thecall" ? "active" : ""}>
          <Link to="/thecall">Contact</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
}

export default Navigation;