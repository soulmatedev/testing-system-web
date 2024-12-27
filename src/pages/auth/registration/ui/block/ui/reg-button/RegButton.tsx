import { useSelector } from 'react-redux';
import { MainButton } from '../../../../../../../shared/ui/button';
import { selectIsFormValid } from '../../../../../../../entities/user/auth/model/selectors/authSelectors';

interface RegButtonProps {
	onSignUp: () => void,
}

export const RegButton = (props: RegButtonProps) => {
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
