import ReactDOM from 'react';
import React from 'react';

var App = React.createClass({
  render() {
    return (
      <div>I'm react</div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById("app"));
