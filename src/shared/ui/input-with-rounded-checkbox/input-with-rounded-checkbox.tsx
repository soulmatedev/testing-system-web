import React, { ChangeEvent } from 'react';
import { Hint } from '@skbkontur/react-ui';
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
	onCheckboxChange?: (checked: boolean) => void;
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

	const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (onCheckboxChange) {
			onCheckboxChange(e.target.checked);
		}
	};

	return (
		<div className={css.wrapper} style={{ width, height }}>
			<input
				className={css.inputField}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
			{showCheckbox && (
				<Hint text="Верный ответ">
					<input
						type="checkbox"
						className={css.checkbox}
						checked={checked}
						onChange={handleCheckboxChange}
					/>
				</Hint>
			)}
		</div>
	);
};
