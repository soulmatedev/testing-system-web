import React from 'react';
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
			<p
				className={css.question}
				onClick={navigateToRegistration}
			>
				Не зарегистрированы?
			</p>
		</div>
	);
};
