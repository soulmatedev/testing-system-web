import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './test-list-block.module.scss';
import { TestList } from './list';
import { testAPI } from '../../../../entities/tests/api/api';
import { TestTabs } from '../tabs';
import { ALL_TESTS_TAB, COMPLETED_TESTS_TAB } from '../tabs/model/consts';
import { CompletedTestList } from './completed-tests-list';
import { MainButton } from '../../../../shared/ui/main-button';
import { StatCard } from './stat-card';
import { SearchIcon } from '../../../../shared/ui/icons';
import { ADMIN } from '../../../../shared/types/role';

export const TestListBlock = () => {
	const navigate = useNavigate();

	const userId = localStorage.getItem('id');
	const roleId = Number(localStorage.getItem('role'));
	const isAdmin = roleId === ADMIN;

	const [activeTab, setActiveTab] = useState(ALL_TESTS_TAB);
	const [search, setSearch] = useState('');

	const { data: allTests } = testAPI.useGetAllTestsQuery(undefined, { skip: !isAdmin });
	const { data: myTests } = testAPI.useGetTestsByUserQuery(undefined, { skip: isAdmin });

	// Данные обеих вкладок нужны сразу: счётчики и карточки статистики
	// показываются до переключения вкладки.
	const { data: completedTestsByUser } = testAPI.useGetCompletedTestsByUserQuery(Number(userId), {
		skip: isAdmin || !userId,
	});

	const { data: allCompletedTests } = testAPI.useGetAllCompletedTestsQuery(undefined, {
		skip: !isAdmin,
	});

	// Пустые тесты-черновики (name: '') создаются при заходе в конструктор
	// и остаются в БД, если тест не заполнили — в списке они не нужны.
	const notCompletedTests = useMemo(() => (
		(isAdmin ? allTests : myTests)
			?.filter((test) => test.status !== 'Завершен' && test.name.trim() !== '') ?? []
	), [isAdmin, allTests, myTests]);

	const completedTests = useMemo(() => (
		(isAdmin ? allCompletedTests : completedTestsByUser) ?? []
	), [isAdmin, allCompletedTests, completedTestsByUser]);

	const matchesSearch = (name: string) => name.toLowerCase().includes(search.toLowerCase());

	const filteredNotCompleted = useMemo(
		() => notCompletedTests.filter((test) => matchesSearch(test.name)),
		[notCompletedTests, search],
	);

	const filteredCompleted = useMemo(
		() => completedTests.filter((test) => matchesSearch(test.name)),
		[completedTests, search],
	);

	const onCreateTest = () => navigate('/test-constructor');

	return (
		<div className={css.wrapper}>
			<div className={css.header}>
				<div>
					<h1 className={css.title}>Список тестов</h1>
					<p className={css.subtitle}>Назначенные и завершённые проверки знаний команды</p>
				</div>
				<div className={css.headerActions}>
					<div className={css.searchField}>
						<SearchIcon />
						<input
							className={css.search}
							placeholder="Поиск по тестам"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
					</div>
					{isAdmin && <MainButton text="Создать тест" onClick={onCreateTest} />}
				</div>
			</div>

			<div className={css.stats}>
				<StatCard label="Всего тестов" value={notCompletedTests.length + completedTests.length} />
				<StatCard label="В работе" value={notCompletedTests.length} tone="info" />
				<StatCard label="Завершено" value={completedTests.length} tone="success" />
				{/* «Средний балл» из макета: агрегата по результатам тестов на бэкенде
				    нет, поэтому показываем прочерк вместо выдуманного процента. */}
				<StatCard label="Средний балл" value="—" />
			</div>

			<div className={css.tabsRow}>
				<TestTabs
					data={[
						{ name: ALL_TESTS_TAB, disabled: false, count: filteredNotCompleted.length },
						{ name: COMPLETED_TESTS_TAB, disabled: false, count: filteredCompleted.length },
					]}
					activeName={activeTab}
					onTabChange={setActiveTab}
				/>
			</div>

			<div className={css.tableCard}>
				<div className={css.tableHeader}>
					<div>Название</div>
					<div>Статус</div>
					<div>Вопросов</div>
					<div>Исполнитель</div>
					<div>Обновлён</div>
					<div />
				</div>

				{activeTab === ALL_TESTS_TAB ? (
					<TestList data={filteredNotCompleted} />
				) : (
					<CompletedTestList data={filteredCompleted} />
				)}
			</div>
		</div>
	);
};
