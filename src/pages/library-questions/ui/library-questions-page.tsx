import React from 'react';
import css from './library-questions-page.module.scss';
import { QuestionConstructor } from '../../../features/question-constructor-form';
import { QuestionList } from '../../../features/question-constructor-form/ui/question-list';
import { questionAPI } from '../../../entities/questions/api/api';
import { IQuestion } from '../../../entities/questions/api/types';

export const LibraryQuestionsPage = () => {
	const { data } = questionAPI.useGetAllQuery({
		limit: 127,
		page: 1,
		search: '',
	});

	return (
		<div className={css.wrapper}>
			<div className={css.block}>
				<p className={css.header}>Библиотека вопросов</p>
				<QuestionConstructor />
				<div className={css.list}>
					{data?.map((question: IQuestion) => (
						<QuestionList key={question.id} question={question} />
					))}
				</div>
			</div>
		</div>
	);
};
