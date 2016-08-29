import React from 'react';
import ReactDOM from 'react-dom';

var App = React.createClass({
	getInitialState() {
		return ({
			name: "Dan",
			tempName: "",
			list: ["1", "2", "3"],
		})
	},
	render() {
		return (
			<div>
				<div onClick={this.handleClick}>
					{this.state.tempName}
				</div>
				<input onChange={this.handleChange}/>
				{this.state.list.map(value => {
					return (
						<div key={value}>{value}</div>
					)
				})}
			</div>
		)
	},
	handleChange(event) {
		this.setState({
			tempName: event.target.value,
		})
	},
	handleClick() {
		this.setState({
			name: this.state.tempName, 
		})
	}
});

ReactDOM.render(<App />, document.getElementById("app"));
