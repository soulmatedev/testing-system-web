import css from './registration-page.module.scss';
import { RegistrationForm } from '../../../features/auth/registration/ui/form';

export const RegistrationPage = () => (
	<div className={css.wrapper}>
		<RegistrationForm />
	</div>
);
