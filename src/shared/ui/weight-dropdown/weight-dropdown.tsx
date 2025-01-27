import React, { ChangeEvent } from 'react';
import css from './weight-dropdown.module.scss';

export enum WeightValues {
	ZERO = 0,
	QUARTER = 0.25,
	HALF = 0.5,
	THREE_QUARTERS = 0.75,
	ONE = 1,
}

interface WeightDropdownProps {
	placeholder?: string;
	width?: number;
	height?: number;
	value?: WeightValues;
	onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const WeightDropdown = (props: WeightDropdownProps) => {
	const {
		placeholder, height, width, value, onChange,
	} = props;

	const weightOptions = Object.keys(WeightValues)
		.filter((key) => !isNaN(Number(key)))
		.map((key) => Number(key))
		.sort((a, b) => a - b);

	return (
		<div className={css.wrapper} style={{ width, height }}>
			<select
				className={css.inputField}
				value={value}
				onChange={onChange}
			>
				{placeholder && (
					<option value="" disabled>
						{placeholder}
					</option>
				)}
				{weightOptions.map((weight) => (
					<option key={weight} value={weight}>
						{weight}
					</option>
				))}
			</select>
		</div>
	);
};
