import React from 'react';
import css from './button.module.scss';

interface MainButtonProps {
	text: string;
	width?: number;
	height?: number;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const MainButton = (props: MainButtonProps) => {
	const {
		text, width, height, onClick,
	} = props;
	return (
		<button
			className={css.button}
			type="button"
			onClick={onClick}
			style={{ width, height }}
		>
			{text}
		</button>
	);
};
