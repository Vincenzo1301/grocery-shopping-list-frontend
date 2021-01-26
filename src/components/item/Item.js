import React, { Component } from 'react';
import './Item.css';

export default class Item extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color: props.out ? '#F76C6C' : '#374785',
      out: props.out,
      id: props.id
    };

    this.changeColor = this.changeColor.bind(this);
    console.log("Beginning: " + this.state.out)

  }

  changeColor() {
    var newColor = this.state.color == '#374785' ? '#F76C6C' : '#374785';
    var newOut = !this.state.out;

    this.setState({ color: newColor, out: newOut })

    fetch(`http://localhost:8080/api/v1/items/` + this.state.id + `?out=` + newOut, {
      method: 'PATCH',
      headers: {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"}
  })

  }

  render() {

    return (
      <div className="item" onClick={this.changeColor} style={{background:this.state.color}}>
        <div  >
          <img className="photo" src={`data:image/jpeg;base64,${this.props.data}`} alt="Logo" />
        </div>
        <div className="item-body">
          <p className="p">{this.props.name}</p>
        </div>
      </div>
    );
  }
}