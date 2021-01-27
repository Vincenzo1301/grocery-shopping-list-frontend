import Item from './item/Item.js';
import './App.css';
import React, { Component } from 'react';




import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav, NavbarBrand, Form, FormControl, Button } from 'react-bootstrap';
import 'react-bootstrap/NavbarBrand';



export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { items: [] };
  }

  componentDidMount() {
    fetch(`http://localhost:8080/api/v1/items`, {
        headers: {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"}
    })
      .then(result => result.json())
      .then(items => this.setState({ items }))
  }

  open=()=> {
    var axios = require('axios');

    axios.get(
      'http://localhost:8080/api/v1/items/download-pdf',
      {
        headers: {
          'Content-type': 'application/json',
          'x-auth-token': this.props.token
        },
        responseType: 'blob'
      }
    )
        .then(response => {
          //Create a Blob from the PDF Stream
          const file = new Blob([response.data], {
            type: "application/pdf"
          });
          //Build a URL from the file
          const fileURL = URL.createObjectURL(file);
          //Open the URL on new Window
          window.open(fileURL);
        })
        .catch(error => {
          console.log(error);
        });
   }

  render() {
    return (
      <div>
        <div className="header">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Lebensmittelvorrat</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link onClick={this.open} href="#home">Drucken</Nav.Link>
            </Nav>
          </Navbar>
        </div>
        <div className="grid">
          {
            this.state.items.map((item, i) => (
              <Item name={item.name} data={item.imageFile.data} out={item.out} id={item.id}/>
            ))
          }
        </div>
      </div>
    );
  }
}
