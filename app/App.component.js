import ReactDOM from 'react-dom';
import React from 'react';

var App = React.createClass({
  getInitialState() {
    return {
      name: "Dan",
      email: "danielckesler@gmail.com",
      friends: [
        {name: "Brian"},
        {name: "Sterling"},
        {name: "Gustav"},
        {name : "Josh"},
        {name : "Eilisssha"},
      ]
    };
  },
  render() {
    return (
      <div>
        {this.state.name}
        <button onClick={this.clickHandler}>
          Click
        </button>
        <input onChange={this.inputHandler}/>
        {this.state.friends
          .filter(friend => {
            return friend.name !== "Josh"
          })
          .map((friend) => {
          return (
            <div
              onClick={this.friendNamer.bind(this, friend.name)}
              key={friend.name}>
              {friend.name}
            </div>
          )
        })}
      </div>
    )
  },
  friendNamer(name) {
    this.setState({
      name: name,
    })
  },
  inputHandler(event) {
    this.setState({
      name: event.target.value,
    })
  },
  clickHandler() {
    this.setState({
      name: "Brian",
    });
  },
})

ReactDOM.render(<App />, document.getElementById("app"));
