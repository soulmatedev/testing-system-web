import css from './RegistrationEmailInput.module.scss';
import { Input } from '../../../../../../../shared/ui/input';
import { useAuth } from '../../../../../../../entities/user/auth/model/hooks/useAuth';

export const RegistrationEmailInput = () => {
	const { updateEmail } = useAuth();
	return (
		<div className={css.login}>
			<p className={css.label}>Почта</p>
			<Input
				placeholder="Введите почту"
				width={349}
				height={40}
				onChange={(e) => updateEmail(e.target.value)}
			/>
		</div>
	);
};
