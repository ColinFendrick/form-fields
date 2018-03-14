import React, { Component } from 'react';
import Field from './field';
import myData from './placeholder-data.json';

class Forms extends Component {
	render() {
		const fieldList = myData.map(({ name, type, size }, index) => {
			return <Field 
				name={name} 
				type={type}
				size={size}
				key={index}
			/>;
		});
		return (
			<div>
				<form>
					{fieldList}
					<button type="submit">add</button>
				</form>
			</div>
		);
	}
}

export default Forms;