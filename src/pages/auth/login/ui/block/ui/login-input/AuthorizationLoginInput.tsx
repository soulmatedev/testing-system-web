import css from '../../../AuthorizationPage.module.scss';
import { Input } from '../../../../../../../shared/ui/input';
import { useAuth } from '../../../../../../../entities/user/auth/model/hooks/useAuth';

export const AuthorizationLoginInput = () => {
	const { updateEmail } = useAuth();
	return (
		<div className={css.login}>
			<p className={css.label}>Логин</p>
			<Input
				placeholder="Введите логин"
				width={349}
				height={40}
				onChange={(e) => updateEmail(e.target.value)}
			/>
		</div>
	);
};
