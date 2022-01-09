import "./header.css";
function Header() {
  return (
    <div className="navbar wrapper">
      <h2 className="logo">ExpenseTracker.</h2>
      <ul className="navlist">
        <li className="nav-list-item">
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
        <li className="nav-list-item">
          <a className="nav-link" href="#">
            About
          </a>
        </li>
        <li className="nav-list-item">
          <a className="nav-link" href="#">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
