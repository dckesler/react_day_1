import React from 'react';
import ReactDOM from 'react-dom';

var App = React.createClass({
	getInitialState() {
		return {
			list: [],
			currentItem: "",
		}
	},
	render() {
		return (
			<div>
				<input
					value={this.state.currentItem}
					onChange={this.handleChange}
				/>
				<button onClick={this.handleClick}>Add</button>
				{this.state.list.map((value, index) => {
					return (
						<div
							onClick={this.handleRemove.bind(this, index)}
							key={index}>
							{value}
						</div>
					)
				})}
			</div>
		)
	},
	handleRemove(removeIndex) {
		this.setState({
			list: this.state.list.filter((value, index) => {
				return index !== removeIndex
			})
		});
	},
	handleClick() {
		this.setState({
			list: this.state.list.concat([this.state.currentItem]),
			currentItem: "",
		})
	},
	handleChange(e) {
		this.setState({
			currentItem: e.target.value,
		})
	}
})

ReactDOM.render(<App />, document.getElementById("app"));
