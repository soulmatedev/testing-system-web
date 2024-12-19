import css from './RegistrationPasswordInput.module.scss';
import { Input } from '../../../../../../../shared/ui/input';
import { useAuth } from '../../../../../../../entities/user/auth/model/hooks/useAuth';

export const RegistrationPasswordInput = () => {
	const { updatePassword } = useAuth();
	return (
		<div className={css.password}>
			<p className={css.label}>Пароль</p>
			<Input
				placeholder="Введите пароль"
				width={349}
				height={40}
				onChange={(e) => updatePassword(e.target.value)}
			/>
		</div>
	);
};
