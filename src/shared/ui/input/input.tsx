import React from 'react';
import css from './input.module.scss';

interface InputProps {
	placeholder: string;
	width?: number;
	height?: number;
	disabled?: boolean;
	onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

export const Input = (props: InputProps) => {
	const {
		placeholder, width, height, onChange, disabled = false,
	} = props;
	return (
		<input
			className={`${css.input} ${disabled ? css.disabled : ''}`}
			onChange={onChange}
			placeholder={placeholder}
			disabled={disabled}
			style={{ width, height }}
		/>
	);
};
