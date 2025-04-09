import React from 'react';
import css from './list.module.scss';
import { TestListItem } from './item';

interface ITest {
	id: number;
	title: string;
	description: string;
}

export const TestList = () => {
	const tests: ITest[] = [];

	return (
		<div className={css.wrapper}>
			{tests.length === 0 ? (
				<div className={css.not_found_block}>
					<p className={css.not_found}>Здесь пока ничего нет, но это отличный повод начать!</p>
				</div>
			) : (
				<div className={css.block}>
					{tests.map((test: ITest) => (
						<TestListItem
							id={test.id}
							key={test.id}
							title={test.title}
							description={test.description}
						/>
					))}
				</div>
			)}
		</div>
	);
};
