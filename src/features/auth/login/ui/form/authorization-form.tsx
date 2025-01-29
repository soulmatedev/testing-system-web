import css from './authorization-form.module.scss';
import { AuthorizationEmailInput } from '../inputs/login-input';
import { AuthorizationPasswordInput } from '../inputs/password-input';
import { AuthButton } from '../buttons/auth-button';
import { useLogin } from '../../model/useLogin';

export const AuthorizationForm = () => {
	const {
		email,
		password,
		onSignIn,
		handleChangeEmail,
		handleChangePassword,
		navigateToRegistration,
	} = useLogin();

	return (
		<div className={css.block}>
			<p className={css.header}>Войти</p>
			<AuthorizationEmailInput value={email} onChange={handleChangeEmail} />
			<AuthorizationPasswordInput value={password} onChange={handleChangePassword} />
			<AuthButton onSignIn={onSignIn} />
			{/* eslint-disable-next-line max-len */}
			{/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
			<p
				className={css.question}
				onClick={navigateToRegistration}
			>
				Не зарегистрированы?
			</p>
		</div>
	);
};
