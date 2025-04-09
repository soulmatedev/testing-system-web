import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import css from './navbar.module.scss';

export const Navbar = () => {
	const navigate = useLocation();
	return (
		<div className={css.navbar}>
			<NavLink className={css.navbar_link} to="/test-list">Логотип</NavLink>
			<div className={css.items}>
				<NavLink
					to="/test-list"
					className={`${css.navbar_link} ${navigate.pathname === '/test-list' ? css.active : ''}`}
				>
					Список тестов
				</NavLink>
				<NavLink
					to="/library-questions"
					className={`${css.navbar_link} ${navigate.pathname === '/library-questions' ? css.active : ''}`}
				>
					Библиотека вопросов
				</NavLink>
				<NavLink
					to="/test-constructor"
					className={`${css.navbar_link} ${navigate.pathname === '/test-constructor' ? css.active : ''}`}
				>
					Конструктор тестов
				</NavLink>
			</div>
			<div className={css.profile}>Профиль</div>
		</div>
	);
};
