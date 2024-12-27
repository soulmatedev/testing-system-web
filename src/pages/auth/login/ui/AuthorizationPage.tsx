import css from './AuthorizationPage.module.scss';
import { AuthorizationBlock } from './block';

export const AuthorizationPage = () => (
	<div className={css.wrapper}>
		<AuthorizationBlock />
	</div>
);
