import React from 'react';
import css from './second-button.module.scss';

interface SecondButtonProps {
	text: string;
	width?: number;
	height?: number;
	disabled?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	withBorder?: boolean;
}

export const SecondButton = (props: SecondButtonProps) => {
	const {
		text,
		width,
		height,
		onClick,
		disabled = false,
		withBorder = true,
	} = props;
	return (
		<button
			className={`
				${css.second_button}
				${disabled ? css.disabled : ''}
				${!withBorder ? css.no_border : ''}
			`}
			type="button"
			onClick={onClick}
			disabled={disabled}
			style={{ width, height }}
		>
			{text}
		</button>
	);
};
