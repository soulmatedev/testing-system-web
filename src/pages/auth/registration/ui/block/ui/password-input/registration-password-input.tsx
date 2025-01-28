import { useSelector } from 'react-redux';
import css from './registration-password-input.module.scss';
import { Input } from '../../../../../../../shared/ui/input';
import { useAuth } from '../../../../../../../entities/user/auth/model/useAuth';
import { selectPassword } from '../../../../../../../entities/user/auth/model/authSelectors';
import { InputTypes } from '../../../../../../../shared/ui/input/InputTypes';

export const RegistrationPasswordInput = () => {
	const { updatePassword } = useAuth();

	const password = useSelector(selectPassword);

	return (
		<div className={css.password}>
			<p className={css.label}>Пароль</p>
			<Input
				placeholder="Введите пароль"
				width={349}
				height={40}
				value={password}
				type={InputTypes.PASSWORD}
				onChange={(e) => updatePassword(e.target.value)}
			/>
		</div>
	);
};
