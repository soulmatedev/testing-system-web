import React, { useMemo, useState } from 'react';
import css from './library-questions-page.module.scss';
import { QuestionConstructor } from '../../../features/question-constructor-form';
import { QuestionList } from '../../../features/question-constructor-form/ui/question-list';
import { questionAPI } from '../../../entities/questions/api/api';
import { testAPI } from '../../../entities/tests/api/api';
import { IQuestion } from '../../../entities/questions/api/types';
import { SecondButton } from '../../../shared/ui/second-button';
import { GenerateQuestionsModal } from '../../../features/generate-questions';
import { SearchIcon } from '../../../shared/ui/icons';
import { ILibraryFilter, LibraryFilters } from './library-filters';
import { questionTypeLabel } from '../../../features/question-constructor-form/model/question-types';
import { useEditQuestion } from '../../../features/question-constructor-form/hooks/useEditQuestion';

export const LibraryQuestionsPage = () => {
	const { data: questions } = questionAPI.useGetAllQuery({
		limit: 127,
		page: 1,
		search: '',
	});

	// Нужен только для подписи «в N тестах» на карточке вопроса —
	// отдельной ручки для этого счётчика на бэкенде нет, считаем по тестам.
	const { data: tests } = testAPI.useGetAllTestsQuery();

	const { startEditQuestion } = useEditQuestion();

	const [isGenerateModalOpen, setIsGenerateModalOpen] = useState(false);
	const [search, setSearch] = useState('');
	const [activeType, setActiveType] = useState<string | null>(null);

	const questionList = useMemo(() => questions ?? [], [questions]);

	const usageByQuestionId = useMemo(() => {
		const usage = new Map<number, number>();
		tests?.forEach((test) => {
			test.questions?.forEach((question) => {
				usage.set(question.id, (usage.get(question.id) ?? 0) + 1);
			});
		});
		return usage;
	}, [tests]);

	const filters: ILibraryFilter[] = useMemo(() => {
		const countByType: Record<string, number> = {};
		questionList.forEach((question) => {
			countByType[question.type] = (countByType[question.type] ?? 0) + 1;
		});

		return [
			{ type: null, label: 'Все вопросы', count: questionList.length },
			...Object.entries(countByType).map(([type, count]) => ({
				type,
				label: questionTypeLabel(type),
				count,
			})),
		];
	}, [questionList]);

	const visibleQuestions = useMemo(() => questionList.filter((question) => {
		const matchesSearch = question.text.toLowerCase().includes(search.toLowerCase());
		const matchesType = activeType === null || question.type === activeType;
		return matchesSearch && matchesType;
	}), [questionList, search, activeType]);

	const testsCount = tests?.filter((test) => test.name.trim() !== '').length ?? 0;

	return (
		<div className={css.wrapper}>
			<div className={css.header}>
				<div>
					<h1 className={css.title}>Библиотека вопросов</h1>
					<p className={css.subtitle}>
						{questionList.length}
						{' вопросов · используются в '}
						{testsCount}
						{' тестах'}
					</p>
				</div>
				<div className={css.headerActions}>
					<div className={css.searchField}>
						<SearchIcon />
						<input
							className={css.search}
							placeholder="Поиск по вопросам"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
					</div>
					<SecondButton text="Сгенерировать с ИИ" onClick={() => setIsGenerateModalOpen(true)} />
				</div>
			</div>

			<div className={css.content}>
				<div className={css.list}>
					<QuestionConstructor />

					{visibleQuestions.map((question: IQuestion, index) => (
						<QuestionList
							key={question.id}
							question={question}
							number={index + 1}
							usageCount={usageByQuestionId.get(question.id) ?? 0}
							onEdit={startEditQuestion}
						/>
					))}
				</div>

				<LibraryFilters
					filters={filters}
					activeType={activeType}
					onFilterChange={setActiveType}
				/>
			</div>

			<GenerateQuestionsModal active={isGenerateModalOpen} closeFunc={setIsGenerateModalOpen} />
		</div>
	);
};
