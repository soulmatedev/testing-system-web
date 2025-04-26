import React from 'react';
import css from './test-list-block.module.scss';
import { TestList } from './list';
import { testAPI } from '../../../../entities/tests/api/api';

export const TestListBlock = () => {
	const { data } = testAPI.useGetTestsByUserQuery();

	const hasTests = (data?.length ?? 0) > 0;

	return (
		<div className={css.wrapper}>
			<div className={css.header}>
				<p>Список тестов</p>
			</div>
			<div className={css.block}>
				{hasTests && (
					<div className={css.headers}>
						<div>Название</div>
						<div>Описание</div>
					</div>
				)}
				<TestList data={data} />
			</div>
		</div>
	);
};
