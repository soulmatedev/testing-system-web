import React from 'react';
import css from './input.module.scss';

interface InputProps {
	placeholder: string;
	width?: number;
	height?: number;
}

export const Input = (props: InputProps) => {
	const {
		placeholder, width, height,
	} = props;
	return (
		<input
			className={css.input}
			placeholder={placeholder}
			style={{ width, height }}
		/>
	);
};
