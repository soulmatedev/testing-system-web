import React from 'react';
import css from './create-answer-button.module.scss';
import { handleKeyDown } from '../../../../../shared/libs/utils/handleKeyDown';

interface ICreateAnswerButtonProps {
	onCreateAnswer: () => void,
}

export const CreateAnswerButton = (props: ICreateAnswerButtonProps) => {
	const { onCreateAnswer } = props;

	const handleButtonKeyDown = handleKeyDown({
		keyCode: 'Enter',
		isActive: true,
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		action: () => {},
	});

	return (
		<div
			className={css.add_answer}
			onClick={onCreateAnswer}
			onKeyDown={handleButtonKeyDown}
			role="button"
			tabIndex={0}
		>
			Добавить вариант
		</div>
	);
};
