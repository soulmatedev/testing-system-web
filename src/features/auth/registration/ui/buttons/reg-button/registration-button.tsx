import { useSelector } from 'react-redux';
import { selectIsFormValid } from '../../../../../../entities/user/auth/model/authSelectors';
import { MainButton } from '../../../../../../shared/ui/main-button';

interface RegButtonProps {
	onSignUp: () => void,
}

export const RegistrationButton = (props: RegButtonProps) => {
	const { onSignUp } = props;
	const isFormValid = useSelector(selectIsFormValid);

	return (
		<MainButton
			text="Готово"
			disabled={!isFormValid}
			onClick={onSignUp}
		/>
	);
};
