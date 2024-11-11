import { useNavigate } from 'react-router-dom';
import css from './TestListBlock.module.scss';
import { MainButton } from '../../../../widgets/button/button';

export const TestListBlock = () => {
	const navigate = useNavigate();

	const onCreateTestClick = () => {
		navigate('/create-test');
	};

	return (
		<div className={css.block}>
			<p>Список тестов</p>
			<MainButton
				text="Создать тест"
				onClick={onCreateTestClick}
			/>
		</div>
	);
};
