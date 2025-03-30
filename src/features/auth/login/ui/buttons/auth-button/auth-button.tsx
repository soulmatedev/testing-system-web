import { useSelector } from 'react-redux';
import { selectIsFormValid } from '../../../../../../entities/user/auth/model/authSelectors';
import { MainButton } from '../../../../../../shared/ui/main-button';

interface AuthButtonProps {
	onSignIn: () => void,
}

export const AuthButton = (props: AuthButtonProps) => {
	const { onSignIn } = props;
	const isFormValid = useSelector(selectIsFormValid);

	return (
		<MainButton
			text="Войти"
			disabled={!isFormValid}
			onClick={onSignIn}
		/>
	);
};
