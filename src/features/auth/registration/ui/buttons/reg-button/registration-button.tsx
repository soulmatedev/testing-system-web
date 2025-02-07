import { useSelector } from 'react-redux';
import { MainButton } from '../../../../../../shared/ui/main-button';
import { selectIsFormValid } from '../../../../../../entities/user/auth/model/authSelectors';

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
