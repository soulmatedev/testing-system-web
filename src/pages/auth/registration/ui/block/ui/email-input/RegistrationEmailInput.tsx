import { useSelector } from 'react-redux';
import css from './RegistrationEmailInput.module.scss';
import { Input } from '../../../../../../../shared/ui/input';
import { useAuth } from '../../../../../../../entities/user/auth/model/hooks/useAuth';
import { selectEmail } from '../../../../../../../entities/user/auth/model/selectors/authSelectors';
import { InputTypes } from '../../../../../../../shared/ui/input/InputTypes';

export const RegistrationEmailInput = () => {
	const { updateEmail } = useAuth();

	const email = useSelector(selectEmail);

	return (
		<div className={css.login}>
			<p className={css.label}>Почта</p>
			<Input
				placeholder="Введите почту"
				width={349}
				height={40}
				value={email}
				type={InputTypes.TEXT}
				onChange={(e) => updateEmail(e.target.value)}
			/>
		</div>
	);
};
