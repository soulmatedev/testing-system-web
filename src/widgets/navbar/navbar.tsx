import { NavLink, useLocation } from 'react-router-dom';
import css from './navbar.module.scss';

export const Navbar = () => {
	const navigate = useLocation();
	return (
		<div className={css.navbar}>
			<NavLink className={css.navbar_link} to="/">Логотип</NavLink>
			<div className={css.items}>
				<NavLink
					to="/test-list"
					className={`${css.navbar_link} ${navigate.pathname === '/test-list' ? css.active : ''}`}
				>
					Список тестов
				</NavLink>
				<NavLink
					to="/question-constructor"
					className={`${css.navbar_link} ${navigate.pathname === '/question-constructor' ? css.active : ''}`}
				>
					Конструктор вопросов
				</NavLink>
				<NavLink
					to="/test-constructor"
					className={`${css.navbar_link} ${navigate.pathname === '/test-constructor' ? css.active : ''}`}
				>
					Конструктор теста
				</NavLink>
			</div>
			<div className={css.profile}>Профиль</div>
		</div>
	);
};
