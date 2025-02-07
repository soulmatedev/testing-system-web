import React from 'react';
import css from './square-checkbox.module.scss';

interface SquareCheckboxProps {
	checked?: boolean;
	onChange?: () => void;
}

export const SquareCheckbox = (props: SquareCheckboxProps) => {
	const { checked, onChange } = props;
	return (
		<input
			type="checkbox"
			className={css.checkbox}
			checked={checked}
			onChange={onChange}
		/>
	);
};
