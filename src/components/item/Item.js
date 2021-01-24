import './Item.css';
import logo from './../../resources/brot2.png';

function Item() {
  return (
    <div className="item">
      <div  >
        <img className="photo" src={logo} alt="Logo" />
      </div>
      <div className="item-body">
        <p>Brot</p>
      </div>
    </div>
  );
}

export default Item;
