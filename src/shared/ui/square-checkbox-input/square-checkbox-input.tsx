import React, { ChangeEvent } from 'react';
import css from './square-checkbox-input.module.scss';

interface InputProps {
	placeholder: string;
	width?: number;
	height?: number;
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	showCheckbox?: boolean;
}

export const SquareCheckboxInput = ({
	placeholder,
	width,
	height,
	value,
	onChange,
	showCheckbox = false,
}: InputProps) => (
	<div className={css.wrapper} style={{ width, height }}>
		<input
			className={css.inputField}
			placeholder={placeholder}
			style={{ height }}
			value={value}
			onChange={onChange}
		/>
		{showCheckbox && <input type="checkbox" className={css.checkbox} />}
	</div>
);
