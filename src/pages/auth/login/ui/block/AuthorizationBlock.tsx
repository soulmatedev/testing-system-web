import { useDispatch, useSelector } from 'react-redux';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import css from '../AuthorizationPage.module.scss';
import { AuthorizationEmailInput } from './ui/login-input';
import { AuthorizationPasswordInput } from './ui/password-input';
import { AuthButton } from './ui/auth-button';
import { authAPI } from '../../../../../entities/user/auth/api/api';
import { ISignInRequest } from '../../../../../entities/user/auth/api/types';
import { selectEmail, selectPassword } from '../../../../../entities/user/auth/model/selectors/authSelectors';
import { authActions } from '../../../../../entities/user/auth/model/slices/authSlice';

export const AuthorizationBlock = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [signIn] = authAPI.useSignInMutation();

	const email = useSelector(selectEmail);
	const password = useSelector(selectPassword);

	const authorizationData: ISignInRequest = {
		email,
		password,
	};

	const validateForm = () => {
		const emailRegex = /^[\w.-]+@[\d.A-Za-z-]+\.[A-Za-z]{2,6}$/;
		if (!emailRegex.test(email)) {
			toast.error('Введите корректный адрес электронной почты.');
			return false;
		}
		return true;
	};

	const onSignIn = async () => {
		if (!validateForm()) return;

		try {
			const res = await signIn(authorizationData)
				.unwrap();

			// eslint-disable-next-line camelcase
			const { access_token } = res;
			// eslint-disable-next-line camelcase
			if (access_token) {
				localStorage.setItem('token', access_token);
				navigate('/test-list');
				toast.success('Авторизация прошла успешно');
				dispatch(authActions.clearData());
			} else {
				console.error('Токен не найден в ответе от сервера.');
			}
		} catch (error) {
			if ((error as FetchBaseQueryError).status === 401) {
				toast.error(
					'Ошибка авторизации, Пароль введен неверно. Убедитесь в правильности ввода и повторите попытку.',
				);
			} else if ((error as FetchBaseQueryError).status === 404) {
				toast.error(
					'Ошибка авторизации, Аккаунт не найден. Проверьте данные или зарегистрируйтесь.',
				);
			} else {
				toast.error(
					'Ошибка! Произошла ошибка при авторизации. Пожалуйста, попробуйте еще раз позже.',
				);
			}
		}
	};

	return (
		<div className={css.block}>
			<p className={css.header}>Войти</p>
			<AuthorizationEmailInput />
			<AuthorizationPasswordInput />
			<AuthButton onSignIn={onSignIn} />
		</div>
	);
};
