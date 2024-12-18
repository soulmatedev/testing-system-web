import css from '../AuthorizationPage.module.scss';
import { AuthorizationLoginInput } from './ui/login-input';
import { AuthorizationPasswordInput } from './ui/password-input';
import { AuthButton } from './ui/auth-button';

export const AuthorizationBlock = () => (
	<div className={css.block}>
		<p className={css.header}>Войти</p>
		<AuthorizationLoginInput />
		<AuthorizationPasswordInput />
		<AuthButton />
	</div>
);
