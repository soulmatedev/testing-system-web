import React from 'react';
import css from './test-list-block.module.scss';
import { TestList } from './list';

export const TestListBlock = () => {
	const a = '';
	return (
		<div className={css.wrapper}>
			<div className={css.header}>
				<p>Список тестов</p>
			</div>
			<div className={css.block}>
				<div className={css.headers}>
					<div>Название</div>
					<div>Описание</div>
				</div>
				<TestList />
			</div>
		</div>
	);
};
