import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import css from './navbar.module.scss';

export const Navbar = () => {
	const location = useLocation();
	const login = localStorage.getItem('login');
	const profileId = localStorage.getItem('id');
	const roleId = Number(localStorage.getItem('role'));

	const navigate = useNavigate();

	const onProfileClick = () => {
		navigate(`/profile/${profileId}`);
	};

	const isUser = roleId === 0;

	return (
		<div className={css.navbar}>
			<NavLink className={css.navbar_link} to="/test-list" />
			<div className={css.items}>
				<NavLink
					to="/test-list"
					className={`${css.navbar_link} 
					${location.pathname === '/test-list' ? css.active : ''}`}
				>
					Список тестов
				</NavLink>
				{!isUser && (
					<>
						<NavLink
							to="/library-questions"
							className={`${css.navbar_link} 
							${location.pathname === '/library-questions' ? css.active : ''}`}
						>
							Библиотека вопросов
						</NavLink>
						<NavLink
							to="/test-constructor"
							className={`${css.navbar_link} 
							${location.pathname === '/test-constructor' ? css.active : ''}`}
						>
							Конструктор тестов
						</NavLink>
					</>
				)}
			</div>
			<button
				className={css.profile}
				onClick={onProfileClick}
				type="button"
			>
				<p>{login}</p>
				<div className={css.avatar} />
			</button>
		</div>
	);
};
