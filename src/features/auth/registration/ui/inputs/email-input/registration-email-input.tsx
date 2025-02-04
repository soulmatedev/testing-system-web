import css from './registration-email-input.module.scss';
import { Input } from '../../../../../../shared/ui/input';
import { InputTypes } from '../../../../../../shared/ui/input/InputTypes';

interface RegistrationEmailInputProps {
	value: string,
	onChange: (value: string) => void;
}

export const RegistrationEmailInput = (props: RegistrationEmailInputProps) => {
	const { value, onChange } = props;

	return (
		<div className={css.login}>
			<p className={css.label}>Почта</p>
			<Input
				placeholder="Введите почту"
				width={349}
				height={40}
				value={value}
				type={InputTypes.TEXT}
				onChange={(e) => onChange(e.target.value)}
			/>
		</div>
	);
};
