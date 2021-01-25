import React, { Component } from 'react';
import './Item.css';

export default class Item extends React.Component {

  constructor(props) {
    super(props);
    this.state = {color: '#374785'};

    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    console.log(this.state)
    var newColor = this.state.color == '#374785' ? '#F76C6C' : '#374785';
    this.setState({ color: newColor })
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