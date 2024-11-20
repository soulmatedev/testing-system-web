import React, { ChangeEvent } from 'react';
import css from './input-with-rounded-checkbox.module.scss';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as CrossIcon } from '../../shared/images/cross-icon.svg';

interface InputProps {
	placeholder: string;
	width?: number;
	height?: number;
	showCheckbox?: boolean;
	showDeleteIcon?: boolean;
	value?: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
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
			{showDeleteIcon && (
				<CrossIcon className={css.cross_icon} />
			)}
			{showCheckbox && (
				<input
					type="checkbox"
					className={css.checkbox}
				/>
			)}
		</div>
	);
};
