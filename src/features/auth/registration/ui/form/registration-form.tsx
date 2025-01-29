import css from './registration-form.module.scss';
import { RegistrationLoginInput } from '../inputs/login-input';
import { RegistrationPasswordInput } from '../inputs/password-input';
import { RegistrationButton } from '../buttons/reg-button';
import { RegistrationEmailInput } from '../inputs/email-input';
import { useRegistration } from '../../model/useRegistration';

export const RegistrationForm = () => {
	const {
		email,
		login,
		password,
		onSignUp,
		handleChangeEmail,
		handleChangeLogin,
		handleChangePassword,
	} = useRegistration();

	return (
		<div className={css.block}>
			<p className={css.header}>Регистрация</p>
			<RegistrationLoginInput value={login} onChange={handleChangeLogin} />
			<RegistrationEmailInput value={email} onChange={handleChangeEmail} />
			<RegistrationPasswordInput value={password} onChange={handleChangePassword} />
			<RegistrationButton onSignUp={onSignUp} />
		</div>
	);
};
