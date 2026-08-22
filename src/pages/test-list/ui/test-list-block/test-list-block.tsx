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

export const TestListBlock = () => {
	const navigate = useNavigate();

	const userId = localStorage.getItem('id');
	const roleId = localStorage.getItem('role');

	const [activeTab, setActiveTab] = useState(ALL_TESTS_TAB);
	const [search, setSearch] = useState('');

	const { data: allTests } = testAPI.useGetAllTestsQuery(undefined, {
		skip: roleId === '0',
	});

	const { data: myTests } = testAPI.useGetTestsByUserQuery(undefined, {
		skip: roleId !== '0',
	});

	// Раньше эти запросы делались лениво (только при переключении на вкладку
	// «Завершённые»). Теперь счётчик завершённых тестов виден сразу на вкладке
	// и в карточках статистики, поэтому грузим данные независимо от activeTab.
	const {
		data: completedTestsByUser,
	} = testAPI.useGetCompletedTestsByUserQuery(Number(userId), {
		skip: roleId !== '0' || !userId,
	});

	const {
		data: allCompletedTests,
	} = testAPI.useGetAllCompletedTestsQuery(undefined, {
		skip: roleId === '0',
	});

	// Пустые тесты-черновики (name: '') создаются автоматически при заходе
	// в конструктор (см. TestBlock) и остаются в БД, если тест не заполнили —
	// исключаем их из статистики и счётчиков вкладок здесь же, один раз,
	// чтобы цифры совпадали с тем, что реально показывает таблица.
	const notCompletedTests = (roleId === '0' ? myTests : allTests)
		?.filter((test) => test.status !== 'Завершен' && test.name.trim() !== '') ?? [];

	const completedTests = roleId === '0' ? completedTestsByUser : allCompletedTests;

	const filteredNotCompletedTests = useMemo(() => (
		notCompletedTests.filter((test) => test.name.toLowerCase().includes(search.toLowerCase()))
	), [notCompletedTests, search]);

	const filteredCompletedTests = useMemo(() => (
		(completedTests ?? []).filter((test) => test.name.toLowerCase().includes(search.toLowerCase()))
	), [completedTests, search]);

	// Статистика считается по уже загруженным данным — без дополнительных
	// запросов к API.
	const totalTests = notCompletedTests.length + (completedTests?.length ?? 0);

	// «Средний балл» есть в макете, но требует агрегации результатов по
	// каждому тесту — такой ручки нет ни на бэкенде, ни на фронте. Не
	// изобретаем эту логику, просто честно показываем прочерк на её месте.
	const averageScoreLabel = '—';

	const onCreateTest = () => navigate('/test-constructor');

	return (
		<div className={css.wrapper}>
			<div className={css.header}>
				<div>
					<h1 className={css.title}>Список тестов</h1>
					<p className={css.subtitle}>Назначенные и завершённые проверки знаний команды</p>
				</div>
				<div className={css.headerActions}>
					<div className={css.searchWrapper}>
						<input
							className={css.search}
							placeholder="Поиск по тестам"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
					</div>
					<MainButton text="Создать тест" onClick={onCreateTest} height={40} />
				</div>
			</div>

			<div className={css.stats}>
				<StatCard label="Всего тестов" value={totalTests} />
				<StatCard label="В работе" value={notCompletedTests.length} />
				<StatCard label="Завершено" value={completedTests?.length ?? 0} />
				<StatCard label="Средний балл" value={averageScoreLabel} />
			</div>

			<div className={css.block}>
				<div className={css.tabsRow}>
					<TestTabs
						data={[
							{ name: ALL_TESTS_TAB, disabled: false, count: filteredNotCompletedTests.length },
							{ name: COMPLETED_TESTS_TAB, disabled: false, count: filteredCompletedTests.length },
						]}
						activeName={activeTab}
						onTabChange={setActiveTab}
					/>
				</div>

				<div className={css.headers}>
					<div>Название</div>
					<div>Статус</div>
					<div>Вопросов</div>
					<div>Исполнитель</div>
				</div>

				{activeTab === ALL_TESTS_TAB ? (
					<TestList data={filteredNotCompletedTests} />
				) : (
					<CompletedTestList data={filteredCompletedTests} />
				)}
			</div>
		</div>
	);
};
