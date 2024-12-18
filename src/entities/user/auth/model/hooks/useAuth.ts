import { useDispatch } from 'react-redux';
import { authActions } from '../slices/authSlice';
import { AppDispatch } from '../../../../../app/store';

export const useAuth = () => {
	const dispatch: AppDispatch = useDispatch();

	const updateEmail = (email: string) => {
		dispatch(authActions.setEmail(email));
	};

	const updatePassword = (password: string) => {
		dispatch(authActions.setPassword(password));
	};

	const resetData = () => {
		dispatch(authActions.clearData());
	};

	return {
		updateEmail,
		updatePassword,
		resetData,
	};
};
