import css from './registration-page.module.scss';
import { RegistrationBlock } from './block';

export const RegistrationPage = () => (
	<div className={css.wrapper}>
		<RegistrationBlock />
	</div>
);
