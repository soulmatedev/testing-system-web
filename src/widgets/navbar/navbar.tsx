import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import cx from 'classnames';
import css from './navbar.module.scss';
import { questionAPI } from '../../entities/questions/api/api';
import { ADMIN } from '../../shared/types/role';
import { Avatar } from '../../shared/ui/avatar';

export const Navbar = () => {
	const login = localStorage.getItem('login') ?? '';
	const profileId = localStorage.getItem('id');
	const roleId = Number(localStorage.getItem('role'));

	const navigate = useNavigate();

	const isAdmin = roleId === ADMIN;

	// Счётчик вопросов в шапке из макета. Берём уже существующий запрос
	// библиотеки — RTK Query отдаст его из кэша, если страница библиотеки
	// уже загружалась. Сотруднику библиотека недоступна, поэтому пропускаем.
	const { data: questions } = questionAPI.useGetAllQuery(
		{ limit: 127, page: 1, search: '' },
		{ skip: !isAdmin },
	);

	const onProfileClick = () => navigate(`/profile/${profileId}`);

	const navLinkClassName = ({ isActive }: { isActive: boolean }) => cx(css.navbar_link, isActive && css.active);

	return (
		<header className={css.navbar}>
			<div className={css.inner}>
				<NavLink to="/test-list" className={css.logo}>
					<img
						className={css.logo_mark}
						src={`${process.env.PUBLIC_URL}/apple-touch-icon.png`}
						alt=""
					/>
					<span className={css.logo_text}>Testly</span>
				</NavLink>

				<nav className={css.items}>
					<NavLink to="/test-list" className={navLinkClassName}>
						Список тестов
					</NavLink>
					{isAdmin && (
						<>
							<NavLink to="/library-questions" className={navLinkClassName}>
								Библиотека вопросов
							</NavLink>
							<NavLink to="/test-constructor" className={navLinkClassName}>
								Конструктор тестов
							</NavLink>
						</>
					)}
				</nav>

				<div className={css.side}>
					{isAdmin && questions && (
						<div className={css.counter}>
							{questions.length}
							{' '}
							вопросов
						</div>
					)}
					<button
						className={css.profile}
						onClick={onProfileClick}
						type="button"
					>
						<Avatar label={login} size="m" />
						<span className={css.login}>{login}</span>
					</button>
				</div>
			</div>
		</header>
	);
};
