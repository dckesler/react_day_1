//Display a list of friends
//{name: "Josh", email: "josh@jsoh.com"}
//Show an "active" friend's info
//Be able to switch between friends

import ReactDOM from 'react-dom';
import React from 'react';

var Mini = React.createClass({
  getInitialState() {
    return {
      activeFriend: {},
      friends: [
        {name: "Brian", email: "briean@mentor.com"},
        {name: "Gidelea", email: "gidela@gmail.com"},
        {name: "Eleesha", email: "eleshaa@mentor.com"},
        {name: "Josh", email: "josh@jor.com"},
      ]
    }
  },
  render() {
    return (
      <div>
        <button onClick={this.toggleEmails}>Show Email</button>
        <div>
          <h1>{this.state.activeFriend.name}</h1>
          <h1>{this.state.activeFriend.email}</h1>
        </div>
        {this.state.friends.map(friend => {
          return (
            <div
              onClick={this.setActiveFriend.bind(this, friend)}
              key={friend.email}>
              {friend.name}
              {this.state.showEmail ? friend.email : null}
            </div>
          )
        })}
      </div>
    )
  },
  toggleEmails() {
    this.setState({
      showEmail: !this.state.showEmail,
    });
  },
  setActiveFriend(friend) {
    this.setState({
      activeFriend: friend,
    })
  }
});

ReactDOM.render(<Mini/>, document.getElementById("app"));
