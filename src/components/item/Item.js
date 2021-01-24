import './Item.css';
import logo from './../../resources/milk.png';

function Item() {
  return (
    <div className="item">
      <div  >
        <img className="photo" src={logo} alt="Logo" />
      </div>
      <div className="item-body">
        <p className="p">Milch</p>
      </div>
    </div>
  );
}

export default Item;
