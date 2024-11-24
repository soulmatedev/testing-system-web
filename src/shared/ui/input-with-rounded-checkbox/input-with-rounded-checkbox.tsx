import React, { ChangeEvent } from 'react';
import css from './input-with-rounded-checkbox.module.scss';

interface InputProps {
	placeholder: string;
	width?: number;
	height?: number;
	showCheckbox?: boolean;
	showDeleteIcon?: boolean;
	value?: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	checked?: boolean;
	onCheckboxChange?: () => void;
}

export const InputWithRoundedCheckbox = (props: InputProps) => {
	const {
		placeholder,
		width,
		height,
		showCheckbox = false,
		showDeleteIcon = false,
		value,
		onChange,
		checked,
		onCheckboxChange,
	} = props;

	return (
		<div className={css.wrapper} style={{ width, height }}>
			<input
				className={css.inputField}
				placeholder={placeholder}
				style={{ height }}
				value={value}
				onChange={onChange}
			/>
			{showCheckbox && (
				<input
					type="checkbox"
					className={css.checkbox}
					checked={checked}
					onChange={onCheckboxChange}
				/>
			)}
		</div>
	);
};
