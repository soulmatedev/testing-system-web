import React from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { MainButton } from '../../../../shared/ui/main-button';
import css from './profile-block.module.scss';
import { ADMIN } from '../../../../shared/types/role';

export const ProfileBlock = () => {
	const navigate = useNavigate();
	const login = localStorage.getItem('login');
	const email = localStorage.getItem('email');
	const role = Number(localStorage.getItem('role'));

	const onLogoutClick = () => {
		navigate('/');
		localStorage.removeItem('id');
		localStorage.removeItem('login');
		localStorage.removeItem('email');
		localStorage.removeItem('token');
		toast.success('Вы вышли из аккаунта');
	};

	const roleText = role === ADMIN ? 'Администратор' : 'Пользователь';

	return (
		<div className={css.wrapper}>
			<p className={css.header}>Профиль</p>
			<div className={css.block}>
				<div className={css.user}>
					<p className={css.title}>Имя пользователя</p>
					<div className={css.login}>{login}</div>
				</div>
				<div className={css.user}>
					<p className={css.title}>Почта</p>
					<div className={css.email}>{email}</div>
				</div>
				<div>
					<p className={css.title}>Роль</p>
					<div className={css.role}>{roleText}</div>
				</div>
			</div>
			<div>
				<MainButton
					text="Выйти"
					width={100}
					onClick={onLogoutClick}
				/>
			</div>
		</div>
	);
};
