import React, { useState } from 'react';
import css from './input.module.scss';
import { InputTypes } from './InputTypes';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as EyeOpen } from './icons/eye-open.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as EyeClose } from './icons/eye-close.svg';

interface InputProps {
	placeholder: string,
	width?: number,
	height?: number,
	disabled?: boolean,
	value?: string,
	onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined,
	type: InputTypes,
}

export const Input = (props: InputProps) => {
	const {
		placeholder,
		width,
		height,
		onChange,
		disabled = false,
		value,
		type,
	} = props;

	const [isPasswordVisible, setPasswordVisible] = useState(false);

	const currentType = type === InputTypes.PASSWORD && isPasswordVisible ? 'text' : type;

	const togglePasswordVisibility = () => {
		setPasswordVisible((prev) => !prev);
	};

	return (
		<div className={css.inputWrapper} style={{ width }}>
			<input
				className={`${css.input} ${disabled ? css.disabled : ''}`}
				onChange={onChange}
				placeholder={placeholder}
				disabled={disabled}
				value={value}
				type={currentType}
				style={{ height }}
			/>
			{type === InputTypes.PASSWORD && (
				<button
					type="button"
					className={css.eyeButton}
					onClick={togglePasswordVisibility}
					aria-label={isPasswordVisible ? 'Скрыть пароль' : 'Показать пароль'}
				>
					{isPasswordVisible ? <EyeClose /> : <EyeOpen />}
					{' '}
				</button>
			)}
		</div>
	);
};
