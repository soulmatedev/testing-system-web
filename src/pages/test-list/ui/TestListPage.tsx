import css from './TestListPage.module.scss';
import { TestListBlock } from './test-list-block/TestListBlock';

export const TestListPage = () => {
	const a = 'a';
	return (
		<div className={css.wrapper}>
			<TestListBlock />
		</div>
	);
};
