import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import Header from './Header';
import '../css/Categories.css';

const Categories = () => {
  const abc = useSelector((categories) => categories.checkStatusReducer);
  const dispatch = useDispatch();

  const handleSubmitButtton = () => {
    dispatch(checkStatus());
  };

  return (
    <>
      <Header />
      <button type="button" className="CheckButton" onClick={handleSubmitButtton}>Check Status</button>
      <h1>{abc}</h1>
    </>
  );
};

export default Categories;
