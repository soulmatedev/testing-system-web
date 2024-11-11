import React from 'react';
import css from './button.module.scss';

interface MainButtonProps {
	text: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const MainButton = (props: MainButtonProps) => {
	const { text, onClick } = props;
	return (
		<button
			className={css.button}
			type="button"
			onClick={onClick}
		>
			{text}
		</button>
	);
};
