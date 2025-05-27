import { useMemo } from 'react';
import { IQuestion } from '../../../entities/questions/api/types';

export const useFilteredQuestions = (data: IQuestion[] | undefined, search: string): IQuestion[] => useMemo(() => {
	if (!data) return [];

	const normalize = (str: string) => str.toLowerCase()
		.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '')
		.replace(/\s{2,}/g, ' ')
		.trim();

	const normalizedSearch = normalize(search);

	return data.filter(q => normalize(q.text).includes(normalizedSearch));
}, [data, search]);
