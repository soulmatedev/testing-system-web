import React, { useState } from 'react';
import css from './test-list-block.module.scss';
import { TestList } from './list';
import { testAPI } from '../../../../entities/tests/api/api';
import { TestTabs } from '../tabs';
import { testTabs } from '../tabs/model/data';
import { ALL_TESTS_TAB, COMPLETED_TESTS_TAB } from '../tabs/model/consts';
import { CompletedTestList } from './completed-tests-list';

export const TestListBlock = () => {
	const userId = localStorage.getItem('id');

	const [activeTab, setActiveTab] = useState(ALL_TESTS_TAB);

	const shouldFetchCompletedTests = activeTab === COMPLETED_TESTS_TAB && Boolean(userId);

	const { data: allTests } = testAPI.useGetTestsByUserQuery();

	const { data: completedTests } = testAPI.useGetCompletedTestsByUserQuery(Number(userId), {
		skip: !shouldFetchCompletedTests,
	});

	const filteredAllTests = allTests?.filter(test => test.status !== 'Завершен') ?? [];

	const hasTests = ((activeTab === ALL_TESTS_TAB ? filteredAllTests : completedTests)?.length ?? 0) > 0;

	return (
		<div className={css.wrapper}>
			<div className={css.header}>
				<p>Список тестов</p>
			</div>

			<TestTabs
				data={testTabs}
				activeName={activeTab}
				onTabChange={setActiveTab}
			/>

			<div className={css.block}>
				{hasTests && (
					<div className={css.headers}>
						<div>Название</div>
						<div>Описание</div>
					</div>
				)}

				{activeTab === ALL_TESTS_TAB ? (
					<TestList data={filteredAllTests} />
				) : (
					<CompletedTestList data={completedTests} />
				)}
			</div>
		</div>
	);
};
