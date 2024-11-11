import React from 'react';
import css from './button.module.scss';

interface MainButtonProps {
	text: string;
}

export const MainButton = (props: MainButtonProps) => {
	const { text } = props;
	return (
		<button
			className={css.button}
			type="button"
		>
			{text}
		</button>
	);
};
