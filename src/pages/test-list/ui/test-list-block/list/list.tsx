import { useSelector } from 'react-redux';
import css from './list.module.scss';
import { TestListItem } from './item';
import { RootState } from '../../../../../app/reducers';
// eslint-disable-next-line import/extensions,@typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/extensions
import { ITest } from '../../../../../entities/question-types/model/slices/testDetailsSlice';

export const TestList = () => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const tests = useSelector((state: RootState) => state.testDetails.tests);

	return (
		<div className={css.wrapper}>
			{tests.length === 0 ? (
				<div className={css.not_found_block}>
					<p className={css.not_found}>Здесь пока ничего нет, но это отличный повод начать!</p>
				</div>
			) : (
				<div className={css.block}>
					{tests.map((test: ITest) => (
						<TestListItem
							id={test.id}
							key={test.id}
							title={test.title}
							description={test.description}
						/>
					))}
				</div>
			)}
		</div>
	);
};
