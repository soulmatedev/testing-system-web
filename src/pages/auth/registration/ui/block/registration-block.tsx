import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import css from './registration-block.module.scss';
import { RegistrationLoginInput } from './ui/login-input';
import { RegistrationPasswordInput } from './ui/password-input';
import { RegistrationButton } from './ui/reg-button';
import { RegistrationEmailInput } from './ui/email-input';
import { authAPI } from '../../../../../entities/user/auth/api/api';
import {
	selectEmail,
	selectLogin,
	selectPassword,
} from '../../../../../entities/user/auth/model/authSelectors';
import { ISignUpRequest } from '../../../../../entities/user/auth/api/types';
import { authActions } from '../../../../../entities/user/auth/model/authSlice';

export const RegistrationBlock = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [signUp] = authAPI.useSignUpMutation();

	const email = useSelector(selectEmail);
	const login = useSelector(selectLogin);
	const password = useSelector(selectPassword);

	const registrationData: ISignUpRequest = {
		email,
		login,
		password,
	};

	const validateForm = () => {
		const emailRegex = /^[\w.-]+@[\d.A-Za-z-]+\.[A-Za-z]{2,6}$/;
		if (!emailRegex.test(email)) {
			toast.error('Введите корректный адрес электронной почты');
			return false;
		}
		return true;
	};

	const onSignUp = async () => {
		if (!validateForm()) return;

		try {
			await signUp(registrationData).unwrap();
			toast.success('Регистрация прошла успешно');
			navigate('/');
			dispatch(authActions.clearData());
		} catch (err) {
			toast.error('Произошла ошибка при регистрации. Попробуйте позже.');
		}
	};

	return (
		<div className={css.block}>
			<p className={css.header}>Регистрация</p>
			<RegistrationLoginInput />
			<RegistrationEmailInput />
			<RegistrationPasswordInput />
			<RegistrationButton onSignUp={onSignUp} />
		</div>
	);
};
