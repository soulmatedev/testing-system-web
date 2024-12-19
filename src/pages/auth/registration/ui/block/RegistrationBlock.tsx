import css from '../RegistrationPage.module.scss';
import { RegistrationLoginInput } from './ui/login-input';
import { RegistrationPasswordInput } from './ui/password-input';
import { RegButton } from './ui/reg-button';
import { RegistrationEmailInput } from './ui/email-input';

export const RegistrationBlock = () => (
	<div className={css.block}>
		<p className={css.header}>Регистрация</p>
		<RegistrationLoginInput />
		<RegistrationEmailInput />
		<RegistrationPasswordInput />
		<RegButton />
	</div>
);
