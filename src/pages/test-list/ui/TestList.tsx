import css from './TestList.module.scss';
import { TestListBlock } from './test-list-block/TestListBlock';

export const TestList = () => {
	const a = 'a';
	return (
		<div className={css.wrapper}>
			<TestListBlock />
		</div>
	);
};
