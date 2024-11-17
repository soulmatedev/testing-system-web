import React from 'react';
import css from './square-checkbox-input.module.scss';

interface InputProps {
	placeholder: string;
	width?: number;
	height?: number;
	showCheckbox?: boolean;
}

export const SquareCheckboxInput = (props: InputProps) => {
	const {
		placeholder,
		width,
		height,
		showCheckbox = false,
	} = props;

	return (
		<div className={css.wrapper} style={{ width, height }}>
			<input
				className={css.inputField}
				placeholder={placeholder}
				style={{ height }}
			/>
			{showCheckbox && (
				<input
					type="checkbox"
					className={css.checkbox}
				/>
			)}
		</div>
	);
};
