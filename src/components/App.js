import Item from './item/Item.js';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Navbar, Nav, NavbarBrand, Form, FormControl, Button} from 'react-bootstrap';
import 'react-bootstrap/NavbarBrand';



function App() {
  return (
    <div>
      <div className="header">
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Lebensmittelvorrat</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Drucken</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="secondary">Search</Button>
    </Form>
  </Navbar>
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
