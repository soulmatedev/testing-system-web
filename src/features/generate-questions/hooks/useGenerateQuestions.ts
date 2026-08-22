import { useState } from 'react';
import { toast } from 'react-toastify';
import { v4 as uuid } from 'uuid';
import { aiAPI } from '../../../entities/ai';
import { questionAPI } from '../../../entities/questions/api/api';
import { IDraftQuestion } from '../model/types';

export const useGenerateQuestions = () => {
	const [topic, setTopic] = useState('');
	const [type, setType] = useState('single');
	const [count, setCount] = useState(3);

	const [drafts, setDrafts] = useState<IDraftQuestion[]>([]);

	const [generateQuestions, { isLoading: isGenerating }] = aiAPI.useGenerateQuestionsMutation();
	const [createQuestion] = questionAPI.useCreateMutation();

	const runGeneration = async () => {
		if (!topic.trim()) {
			toast.error('Укажите тему для генерации');
			return;
		}

		try {
			const response = await generateQuestions({ topic, type, count }).unwrap();
			// draftId генерируется на фронте — ответ бэкенда содержит только
			// доменные поля черновика, без id (см. entities/ai/api/types.ts).
			setDrafts(response.questions.map((question) => ({ ...question, draftId: uuid() })));
		} catch (error) {
			toast.error('Не удалось сгенерировать вопросы');
			console.error(error);
		}
	};

	const updateDraft = (draftId: string, changes: Partial<IDraftQuestion>) => {
		setDrafts((prev) => prev.map((draft) => (
			draft.draftId === draftId ? { ...draft, ...changes } : draft
		)));
	};

	const discardDraft = (draftId: string) => {
		setDrafts((prev) => prev.filter((draft) => draft.draftId !== draftId));
	};

	const saveDraft = async (draftId: string) => {
		const draft = drafts.find((item) => item.draftId === draftId);
		if (!draft) return;

		try {
			await createQuestion({
				text: draft.text,
				type: draft.type,
				answers: draft.answers,
				pairs: draft.pairs,
			}).unwrap();

			toast.success('Вопрос сохранён в библиотеку');
			discardDraft(draftId);
		} catch (error) {
			toast.error('Ошибка при сохранении вопроса');
			console.error(error);
		}
	};

	return {
		topic,
		setTopic,
		type,
		setType,
		count,
		setCount,
		drafts,
		isGenerating,
		runGeneration,
		updateDraft,
		discardDraft,
		saveDraft,
	};
};
