import React from 'react';
import { useSelector } from 'react-redux';
import { useCreateQuestion } from '../../hooks';
import { MainButton } from '../../../../shared/ui/main-button';
import { getCurrentQuestion } from '../../../../entities/questions/model/slice';

export const CreateQuestionButton = () => {
	const { text, type } = useSelector(getCurrentQuestion);

	const { createOrUpdateQuestion } = useCreateQuestion();

	const onCreateQuestion = async () => {
		await createOrUpdateQuestion(type);
	};

	return (
		<MainButton
			text="Сохранить"
			disabled={type === 'chooseType' || !text}
			onClick={onCreateQuestion}
		/>
	);
};
