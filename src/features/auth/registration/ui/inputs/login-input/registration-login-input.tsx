import { useSelector } from 'react-redux';
import css from './registration-login-input.module.scss';
import { Input } from '../../../../../../shared/ui/input';
import { useAuth } from '../../../../../../entities/user/auth/model/useAuth';
import { selectLogin } from '../../../../../../entities/user/auth/model/authSelectors';
import { InputTypes } from '../../../../../../shared/ui/input/InputTypes';

interface RegistrationLoginInputProps {
	value: string,
	onChange: (value: string) => void;
}

export const RegistrationLoginInput = (props: RegistrationLoginInputProps) => {
	const { value, onChange } = props;

	return (
		<div className={css.login}>
			<p className={css.label}>Логин</p>
			<Input
				placeholder="Введите логин"
				width={349}
				height={40}
				value={value}
				type={InputTypes.TEXT}
				onChange={(e) => onChange(e.target.value)}
			/>
		</div>
	);
};
