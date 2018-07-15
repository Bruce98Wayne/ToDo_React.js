import React, { Component } from 'react';

class ListItem extends Component {

    constructor(props) {
	super(props);
	console.log('Constructor: '+ this.props.item.name);
	this.state = { color: 'black' };
    }

    handleClick(event) {
	    //this.setState({color: 'grey'})
        event.target.style.color = 'grey';
    }

  render() {

    var item = this.props.item;
    var name = item.name;
      // console.log('ItemName: ')
      // console.log(item);
    return (
	    <span onClick={this.handleClick.bind(this)} style={{color: this.state.color}}>
        <strong>{name}</strong>
      </span>
    );

  }

}
export default ListItem;

