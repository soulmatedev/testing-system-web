import React from 'react';
import css from './textarea.module.scss';

interface TextAreaProps {
	placeholder: string;
	width?: number;
	height?: number;
	value?: string;
	onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea = (props: TextAreaProps) => {
	const {
		placeholder, width, height, value, onChange,
	} = props;
	return (
		<textarea
			className={css.textarea}
			placeholder={placeholder}
			style={{ width, height }}
			value={value}
			onChange={onChange}
		/>
	);
};
