import React, { Component } from 'react';
import Field from './field';
import myData from './placeholder-data.json';

class Forms extends Component {
	render() {
		const fieldList = myData.map(({ name, type }, index) => {
			return <Field 
				name={name} 
				type={type} 
				placeholder={name}
				index={index}
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