import { useNavigate } from 'react-router-dom';
import css from './TestListBlock.module.scss';
import { MainButton } from '../../../../widgets/button/button';
import { TestList } from './list';

export const TestListBlock = () => {
	const navigate = useNavigate();

	const onCreateTestClick = () => {
		navigate('/create-test');
	};

	return (
		<div className={css.block}>
			<div className={css.create_bar}>
				<p>Список тестов</p>
				<MainButton
					text="Создать тест"
					onClick={onCreateTestClick}
				/>
			</div>
			<TestList />
		</div>
	);
};
