import React from 'react';
import css from './test-list-page.module.scss';
import { TestListBlock } from './test-list-block';

export const TestListPage = () => {
	const a = 'a';
	return (
		<div className={css.wrapper}>
			<TestListBlock />
		</div>
	);
};
