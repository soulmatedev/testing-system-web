import css from './list-item.module.scss';
import { MainButton } from '../../../../../../shared/ui/button/button';

export const TestListItem = () => {
	const INSIDE_TEST_BUTTON_HEIGHT = 30;
	const INSIDE_TEST_BUTTON_WIDTH = 50;

	return (
		<div className={css.wrapper}>
			<p>Название</p>
			<p>Описание</p>
			<div className={css.button}>
				<MainButton
					text=">"
					height={INSIDE_TEST_BUTTON_HEIGHT}
					width={INSIDE_TEST_BUTTON_WIDTH}
				/>
			</div>
		</div>
	);
};
