import css from './create-competency-input.module.scss';
import { ReactComponent as PlusIcon } from '../../../../../../shared/assets/images/primary-plus-icon.svg';

export const CreateCompetencyInput = () => (
	<div className={css.create}>
		<PlusIcon />
		<input
			placeholder="Добавить компетенцию"
			className={css.input}
		/>
		<button
			type="button"
			className={css.button}
		>
			Сохранить
		</button>
	</div>
);
