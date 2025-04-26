import React from 'react';
import css from './list.module.scss';
import { TestListItem } from './item';
import { testAPI } from '../../../../../entities/tests/api/api';
import { ITest } from '../../../../../entities/tests/api/types';

export const TestList = () => {
	const { data } = testAPI.useGetTestsByUserQuery();

	const testArray = data || [];

	return (
		<div className={css.wrapper}>
			{testArray.length === 0 ? (
				<div className={css.not_found_block}>
					<p className={css.not_found}>Здесь пока ничего нет, но это отличный повод начать!</p>
				</div>
			) : (
				<div className={css.block}>
					{testArray.map((test: ITest) => (
						<TestListItem
							id={test.id}
							key={test.id}
							title={test.name}
							description={test.description}
						/>
					))}
				</div>
			)}
		</div>
	);
};
