import css from './passing-test-page.module.scss';
import { PassingTestBlock } from './block';

export const PassingTestPage = () => {
	const a = '';
	return (
		<div className={css.wrapper}>
			<PassingTestBlock />
		</div>
	);
};
