import css from './TestListBlock.module.scss';
import { MainButton } from '../../../../widgets/button/button';

export const TestListBlock = () => {
	const a = 'a';
	return (
		<div className={css.block}>
			<p>Список тестов</p>
			<MainButton
				text="Создать тест"
			/>
		</div>
	);
};
