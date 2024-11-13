import React from 'react';
import css from './textarea.module.scss';

interface TextAreaProps {
	placeholder: string;
	width?: number;
	height?: number;
}

export const TextArea = (props: TextAreaProps) => {
	const {
		placeholder, width, height,
	} = props;
	return (
		<textarea
			className={css.textarea}
			placeholder={placeholder}
			style={{ width, height }}
		/>
	);
};
