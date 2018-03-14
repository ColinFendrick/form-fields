import React, { Component } from 'react';
import Field from './field';

class Forms extends Component {
	render() {
		return (
			<div>
				<form>
					<Field placeholder="text stuff whaa" />
					<button type="submit">add</button>
				</form>
			</div>
		);
	}
}

export default Forms;