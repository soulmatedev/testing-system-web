import css from './authorization-page.module.scss';
import { AuthorizationForm } from '../../../features/auth/login/ui/form';

export const AuthorizationPage = () => (
	<div className={css.wrapper}>
		<AuthorizationForm />
	</div>
);
