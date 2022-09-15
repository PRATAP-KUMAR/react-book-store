import Header from './Header';
import '../css/Categories.css';

const Categories = () => (
  <>
    <Header />
    <button type="button" className="CheckButton" onClick={() => alert('Clicked')}>Check Status</button>
  </>
);

export default Categories;
