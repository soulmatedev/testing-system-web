import { useDispatch } from 'react-redux';
import { authActions } from './authSlice';
import { AppDispatch } from '../../../../../../testing-system-web/src/app/store';

export const useAuth = () => {
	const dispatch: AppDispatch = useDispatch();

	const updateEmail = (email: string) => {
		dispatch(authActions.setEmail(email));
	};

	const updateLogin = (email: string) => {
		dispatch(authActions.setLogin(email));
	};

	const updatePassword = (password: string) => {
		dispatch(authActions.setPassword(password));
	};

	const resetData = () => {
		dispatch(authActions.clearData());
	};

	return {
		updateEmail,
		updateLogin,
		updatePassword,
		resetData,
	};
};
