import React from 'react';
import { useSelector } from 'react-redux';
import { CreateQuestionButton } from './create-question-button';
import { QuestionFormRenderer } from '../../question-form-renderer';
import { QuestionTextInput } from './question-text-input';
import { QuestionTypeDropdownContainer } from './question-type-dropdown-container';
import css from './question-constructor.module.scss';
import { getCurrentQuestion } from '../../../entities/questions/model/slice';

/**
 * Карточка создания вопроса из макета: заголовок, поле текста,
 * строка с типом вопроса и кнопкой сохранения, ниже — форма вариантов
 * ответа выбранного типа (QuestionFormRenderer).
 */
export const QuestionConstructor = () => {
	const { id } = useSelector(getCurrentQuestion);

	return (
		<div className={css.card}>
			<div className={css.label}>{id ? 'Редактирование вопроса' : 'Новый вопрос'}</div>

			<div className={css.text_field}>
				<QuestionTextInput />
			</div>

			<div className={css.controls}>
				<QuestionTypeDropdownContainer />
				<div className={css.spacer} />
				<CreateQuestionButton />
			</div>

			<div className={css.answers}>
				<QuestionFormRenderer />
			</div>
		</div>
	);
};
