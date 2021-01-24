import Item from './item/Item.js'
import './App.css'

function App() {
  return (
    <div>
      <div className="header">
        <h1>Grocery Shopping List</h1>
      </div>
      <div className="grid">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
      </div>
    </div>
  );
}

export default App;
