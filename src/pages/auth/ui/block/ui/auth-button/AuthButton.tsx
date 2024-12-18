import { useSelector } from 'react-redux';
import { MainButton } from '../../../../../../shared/ui/button';
import { selectIsFormValid } from '../../../../../../entities/user/auth/model/selectors/authSelectors';

export const AuthButton = () => {
	const isFormValid = useSelector(selectIsFormValid);

	return (
		<MainButton
			text="Войти"
			disabled={!isFormValid}
		/>
	);
};
