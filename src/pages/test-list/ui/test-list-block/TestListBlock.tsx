import { useNavigate } from 'react-router-dom';
import css from './TestListBlock.module.scss';
import { TestList } from './list';

export const TestListBlock = () => {
	const navigate = useNavigate();

	return (
		<div className={css.wrapper}>
			<div className={css.header}>
				<p>Список тестов</p>
			</div>
			<div className={css.block}>
				<div className={css.create_bar}>
					{/* <MainButton */}
					{/*	text="Создать тест" */}
					{/*	onClick={onCreateTestClick} */}
					{/* /> */}
				</div>
				<TestList />
			</div>
		</div>
	);
};
