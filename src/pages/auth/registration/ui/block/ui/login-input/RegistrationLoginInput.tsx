import { useSelector } from 'react-redux';
import css from './RegistrationLoginInput.module.scss';
import { Input } from '../../../../../../../shared/ui/input';
import { useAuth } from '../../../../../../../entities/user/auth/model/hooks/useAuth';
import { selectLogin } from '../../../../../../../entities/user/auth/model/selectors/authSelectors';
import { InputTypes } from '../../../../../../../shared/ui/input/InputTypes';

export const RegistrationLoginInput = () => {
	const { updateLogin } = useAuth();

	const login = useSelector(selectLogin);

	return (
		<div className={css.login}>
			<p className={css.label}>Логин</p>
			<Input
				placeholder="Введите логин"
				width={349}
				height={40}
				value={login}
				type={InputTypes.TEXT}
				onChange={(e) => updateLogin(e.target.value)}
			/>
		</div>
	);
};
