import './Item.css';
import logo from './../../resources/milk.png';

function Item(props) {
  return (
    <div className="item">
      <div  >
        <img className="photo" src={`data:image/jpeg;base64,${props.data}`} alt="Logo" />
      </div>
      <div className="item-body">
        <p className="p">{props.name}</p>
      </div>
    </div>
  );
}

export default Item;
