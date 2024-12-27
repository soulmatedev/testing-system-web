import { useSelector } from 'react-redux';
import { MainButton } from '../../../../../../../shared/ui/button';
import { selectIsFormValid } from '../../../../../../../entities/user/auth/model/selectors/authSelectors';

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
