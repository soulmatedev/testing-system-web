import css from './PassingTestPage.module.scss';
import { PassingTestBlock } from './block/PassingTestBlock';

export const PassingTestPage = () => {
	const a = '';
	return (
		<div className={css.wrapper}>
			<PassingTestBlock />
		</div>
	);
};
