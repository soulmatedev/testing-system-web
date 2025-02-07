import { useSelector } from 'react-redux';
import { MainButton } from '../../../../../../shared/ui/main-button';
import { selectIsFormValid } from '../../../../../../entities/user/auth/model/authSelectors';

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
