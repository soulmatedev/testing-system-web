import React from 'react';
import css from './test-constructor-page.module.scss';
import { TestBlock } from '../../../features/creating-test';

export const TestConstructorPage = () => (
	<div className={css.wrapper}>
		<TestBlock />
	</div>
);
