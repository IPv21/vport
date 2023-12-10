function Header() {
    const location = useLocation();
  
    return (
      <header>
        <div className="header-content">
          <h1>William Jollie</h1>
        </div>
        <nav>
          <ul>
            <li className="navButtons">
              <Link to="/theman" className={location.pathname === '/theman' ? 'active' : ''}>
                About Me
              </Link>
            </li>
            <li className="navButtons">
              <Link to="/theworks" className={location.pathname === '/theworks' ? 'active' : ''}>
                Portfolio
              </Link>
            </li>
            <li className="navButtons">
              <Link to="/thecall" className={location.pathname === '/thecall' ? 'active' : ''}>
                Contact Me
              </Link>
            </li>
            <li className="navButtons">
              <Link to="/resume" className={location.pathname === '/resume' ? 'active' : ''}>
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;