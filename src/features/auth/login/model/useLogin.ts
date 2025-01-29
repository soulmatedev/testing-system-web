import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { authActions } from '../../../../entities/user/auth/model/authSlice';
import { authAPI } from '../../../../entities/user/auth/api/api';
import { selectEmail, selectPassword } from '../../../../entities/user/auth/model/authSelectors';
import { ISignInRequest } from '../../../../entities/user/auth/api/types';

export const useLogin = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const email = useSelector(selectEmail);
	const password = useSelector(selectPassword);

	const [signIn] = authAPI.useSignInMutation();

	const navigateToRegistration = () => {
		navigate('/registration');
	};

	const validateForm = () => {
		const emailRegex = /^[\w.-]+@[\d.A-Za-z-]+\.[A-Za-z]{2,6}$/;
		if (!emailRegex.test(email)) {
			toast.error('Введите корректный адрес электронной почты.');
			return false;
		}
		return true;
	};

	const authorizationData: ISignInRequest = {
		email,
		password,
	};

	const onSignIn = async () => {
		if (!validateForm()) return;

		try {
			const res = await signIn(authorizationData)
				.unwrap();

			// eslint-disable-next-line camelcase,@typescript-eslint/naming-convention
			const { access_token } = res;
			// eslint-disable-next-line camelcase
			if (access_token) {
				localStorage.setItem('token', access_token);
				navigate('/test-list');
				toast.success('Авторизация прошла успешно');
				dispatch(authActions.clearData());
			} else {
				console.error('Токен не найден в ответе от сервера');
			}
		} catch (error) {
			if ((error as FetchBaseQueryError).status === 401) {
				toast.error(
					'Ошибка авторизации, пароль введен неверно',
				);
			} else if ((error as FetchBaseQueryError).status === 404) {
				toast.error(
					'Ошибка авторизации, аккаунт не найден',
				);
			} else {
				toast.error(
					'Произошла ошибка при авторизации',
				);
			}
		}
	};

	const handleChangeEmail = (email: string) => {
		dispatch(authActions.setEmail(email));
	};

	const handleChangePassword = (password: string) => {
		dispatch(authActions.setPassword(password));
	};

	return {
		email,
		password,
		onSignIn,
		handleChangeEmail,
		handleChangePassword,
		navigateToRegistration,
	};
};
