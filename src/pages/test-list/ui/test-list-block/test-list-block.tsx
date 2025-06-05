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
	const roleId = localStorage.getItem('role');

	const [activeTab, setActiveTab] = useState(ALL_TESTS_TAB);

	const shouldFetchCompletedTests = activeTab === COMPLETED_TESTS_TAB && Boolean(userId);

	const { data: allTests } = testAPI.useGetAllTestsQuery(undefined, {
		skip: roleId === '0',
	});

	const { data: myTests } = testAPI.useGetTestsByUserQuery(undefined, {
		skip: roleId !== '0',
	});

	const {
		data: completedTestsByUser,
	} = testAPI.useGetCompletedTestsByUserQuery(Number(userId), {
		skip: !(roleId === '0' && shouldFetchCompletedTests),
	});

	const {
		data: allCompletedTests,
	} = testAPI.useGetAllCompletedTestsQuery(undefined, {
		skip: !(roleId !== '0' && shouldFetchCompletedTests),
	});

	const filteredAllTests = (roleId === '0' ? myTests : allTests)?.filter(test => test.status !== 'Завершен') ?? [];

	const completedTests = roleId === '0' ? completedTestsByUser : allCompletedTests;

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
				{completedTests && (
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
