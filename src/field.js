import React from 'react';

const Field = ({ name, size, type }) => {
	return (
		<input placeholder={name} type={type} />
	);
};

export default Field;