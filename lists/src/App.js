import React, { Component } from 'react';
import Lists from './Lists.js';
import AddList from './AddList.js';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
	lists: [],
	items: {}
    };
  }

  handleAddList(s) {
    //console.log(typeof s);
      this.state.items[s] =[];
      this.setState({lists: this.state.lists.concat(s)});

  }

  handleAddItem(s, name) {
    console.log(name);
    var a = this.state.items[name];
    console.log(a);
      a.push({'name': s});
      console.log(a);
      this.setState({items: this.state.items})
  }


  render() {
    return (
      <div className="App">
          {console.log('list:'+this.state.lists )}
          {console.log(this.state.items)}
        <AddList addList={this.handleAddList.bind(this)} />
        <div id="listsDiv" className="List">
          <Lists lists={this.state.lists} items={this.state.items} addItem={this.handleAddItem.bind(this)} />
        </div>
      </div>
    );
  }

}

export default App;
