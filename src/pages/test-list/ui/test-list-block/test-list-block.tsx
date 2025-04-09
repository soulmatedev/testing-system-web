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
				<div className={css.create_bar}>
					{/* <MainButton */}
					{/*	text="Создать тест" */}
					{/*	onClick={onCreateTestClick} */}
					{/* /> */}
				</div>
				<TestList />
			</div>
		</div>
	);
};
