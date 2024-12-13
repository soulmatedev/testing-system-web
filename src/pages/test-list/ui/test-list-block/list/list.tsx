import { useSelector } from 'react-redux';
import css from './list.module.scss';
import { TestListItem } from './item';
import { RootState } from '../../../../../app/reducers';
import { ITest } from '../../../../../entities/question-form/model/slices/testDetailsSlice';

export const TestList = () => {
	const tests = useSelector((state: RootState) => state.testDetails.tests);

	return (
		<div className={css.wrapper}>
			<div className={css.wrapper}>
				{tests.map((test: ITest) => (
					<TestListItem
						id={test.id}
						key={test.id}
						title={test.title}
						description={test.description}
					/>
				))}
			</div>
		</div>
	);
};
