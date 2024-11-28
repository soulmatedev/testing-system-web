import css from './list-item.module.scss';
import { MainButton } from '../../../../../../shared/ui/button';

interface TestListItemProps {
	title: string;
	description: string;
}

export const TestListItem = ({ title, description }: TestListItemProps) => {
	const INSIDE_TEST_BUTTON_HEIGHT = 30;
	const INSIDE_TEST_BUTTON_WIDTH = 50;

	return (
		<div className={css.wrapper}>
			<p className={css.name}>{title}</p>
			<p className={css.description}>{description}</p>
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
