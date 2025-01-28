import css from './registration-password-input.module.scss';
import { Input } from '../../../../../../shared/ui/input';
import { InputTypes } from '../../../../../../shared/ui/input/InputTypes';

interface RegistrationPasswordInputProps {
	value: string,
	onChange: (value: string) => void;
}


export const RegistrationPasswordInput = (props: RegistrationPasswordInputProps) => {
	const { value, onChange } = props;

	return (
		<div className={css.password}>
			<p className={css.label}>Пароль</p>
			<Input
				placeholder="Введите пароль"
				width={349}
				height={40}
				value={value}
				type={InputTypes.PASSWORD}
				onChange={(e) => onChange(e.target.value)}
			/>
		</div>
	);
};
