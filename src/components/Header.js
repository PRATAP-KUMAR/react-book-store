import { Link } from 'react-router-dom';
import '../css/Header.css';
import { FaUser } from 'react-icons/fa';

const Header = () => (
  <>
    <div className="top-bar">
      <span className="Bookstore-CMS">Bookstore CMS</span>
      <nav>
        <Link to="/"><span className="BOOKS">BOOKS</span></Link>
        <Link to="/categories"><span className="CATEGORIES">CATEGORIES</span></Link>
      </nav>
      <div className="user-logo">
        <FaUser />
      </div>
    </div>
  </>
);

export default Header;
