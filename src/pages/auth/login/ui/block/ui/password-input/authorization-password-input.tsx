import { useSelector } from 'react-redux';
import css from './authorization-password-input.module.scss';
import { useAuth } from '../../../../../../../entities/user/auth/model/useAuth';
import { Input } from '../../../../../../../shared/ui/input';
import { selectPassword } from '../../../../../../../entities/user/auth/model/authSelectors';
import { InputTypes } from '../../../../../../../shared/ui/input/InputTypes';

export const AuthorizationPasswordInput = () => {
	const { updatePassword } = useAuth();

	const password = useSelector(selectPassword);

	return (
		<div className={css.password}>
			<p className={css.label}>Пароль</p>
			<Input
				placeholder="Введите пароль"
				width={349}
				height={40}
				type={InputTypes.PASSWORD}
				value={password}
				onChange={(e) => updatePassword(e.target.value)}
			/>
		</div>
	);
};
