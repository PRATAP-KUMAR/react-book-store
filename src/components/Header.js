import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header = () => (
  <>
    <div className="panel-bg">
      <span className="Bookstore-CMS Text-Style-5">Bookstore CMS</span>
      <nav>
        <Link to="/"><span className="BOOKS Text-Style-3">BOOKS</span></Link>
        <Link to="/categories"><span className="CATEGORIES Text-Style-3">CATEGORIES</span></Link>
      </nav>
    </div>
  </>
);

export default Header;
