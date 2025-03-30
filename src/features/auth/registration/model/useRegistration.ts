import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectEmail, selectLogin, selectPassword } from '../../../../entities/user/auth/model/authSelectors';
import { authAPI } from '../../../../entities/user/auth/api/api';
import { ISignUpRequest } from '../../../../entities/user/auth/api/types';
import { authActions } from '../../../../entities/user/auth/model/authSlice';

export const useRegistration = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const email = useSelector(selectEmail);
	const login = useSelector(selectLogin);
	const password = useSelector(selectPassword);
	const [signUp] = authAPI.useSignUpMutation();

	const validateForm = () => {
		const emailRegex = /^[\w.-]+@[\d.A-Za-z-]+\.[A-Za-z]{2,6}$/;
		if (!emailRegex.test(email)) {
			toast.error('Введите корректный адрес электронной почты');
			return false;
		}
		return true;
	};

	const registrationData: ISignUpRequest = {
		email,
		login,
		password,
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

	const handleChangeEmail = (email: string) => {
		dispatch(authActions.setEmail(email));
	};

	const handleChangeLogin = (login: string) => {
		dispatch(authActions.setLogin(login));
	};

	const handleChangePassword = (password: string) => {
		dispatch(authActions.setPassword(password));
	};

	return {
		email,
		login,
		password,
		onSignUp,
		handleChangeEmail,
		handleChangeLogin,
		handleChangePassword,
	};
};
