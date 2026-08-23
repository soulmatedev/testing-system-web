import React from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import css from './profile-block.module.scss';
import { ADMIN } from '../../../../shared/types/role';
import { Avatar } from '../../../../shared/ui/avatar';
import { testAPI } from '../../../../entities/tests/api/api';
import { questionAPI } from '../../../../entities/questions/api/api';

export const ProfileBlock = () => {
	const navigate = useNavigate();

	const login = localStorage.getItem('login') ?? '';
	const email = localStorage.getItem('email') ?? '';
	const userId = localStorage.getItem('id');
	const isAdmin = Number(localStorage.getItem('role')) === ADMIN;

	const { data: allTests } = testAPI.useGetAllTestsQuery(undefined, { skip: !isAdmin });
	const { data: myTests } = testAPI.useGetTestsByUserQuery(undefined, { skip: isAdmin });
	const { data: questions } = questionAPI.useGetAllQuery(
		{ limit: 127, page: 1, search: '' },
		{ skip: !isAdmin },
	);
	const { data: completedTests } = testAPI.useGetCompletedTestsByUserQuery(Number(userId), {
		skip: !userId,
	});

	const tests = (isAdmin ? allTests : myTests)?.filter((test) => test.name.trim() !== '') ?? [];

	const onLogoutClick = () => {
		navigate('/');
		localStorage.removeItem('id');
		localStorage.removeItem('login');
		localStorage.removeItem('email');
		localStorage.removeItem('token');
		toast.success('Вы вышли из аккаунта');
	};

	const roleText = isAdmin ? 'Администратор' : 'Пользователь';

	return (
		<div className={css.wrapper}>
			<h1 className={css.header}>Профиль</h1>

			<div className={css.card}>
				<div className={css.identity}>
					<Avatar label={login} size="l" />
					<div>
						<div className={css.name}>{login}</div>
						<div className={css.email}>{email}</div>
					</div>
					<div className={css.spacer} />
					<span className={css.role}>{roleText}</span>
				</div>

				<div className={css.divider} />

				<div className={css.fields}>
					<div>
						<div className={css.title}>Имя пользователя</div>
						<div className={css.value}>{login}</div>
					</div>
					<div>
						<div className={css.title}>Почта</div>
						<div className={css.value}>{email}</div>
					</div>
					<div>
						<div className={css.title}>Роль</div>
						<div className={css.value}>{roleText}</div>
					</div>
					<div>
						<div className={css.title}>В команде с</div>
						{/* Даты регистрации бэкенд не хранит — показываем прочерк. */}
						<div className={css.value}>—</div>
					</div>
				</div>
			</div>

			<div className={css.stats}>
				<div className={css.statCard}>
					<div className={css.statLabel}>{isAdmin ? 'Создано тестов' : 'Назначено тестов'}</div>
					<div className={css.statValue}>{tests.length}</div>
				</div>
				{isAdmin && (
					<div className={css.statCard}>
						<div className={css.statLabel}>Вопросов в библиотеке</div>
						<div className={css.statValue}>{questions?.length ?? 0}</div>
					</div>
				)}
				<div className={css.statCard}>
					<div className={css.statLabel}>Пройдено</div>
					<div className={css.statValue}>{completedTests?.length ?? 0}</div>
				</div>
			</div>

			<button type="button" className={css.logout} onClick={onLogoutClick}>
				Выйти
			</button>
		</div>
	);
};
