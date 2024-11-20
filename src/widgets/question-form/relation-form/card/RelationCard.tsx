import css from '../input-response/RelationInputResponse.module.scss';
import { InputWithRoundedCheckbox } from '../../../input-with-rounded-checkbox/input-with-rounded-checkbox';
import { TextArea } from '../../../textarea/textarea';

export const RelationCard = () => {
	const a = '';
	return (
		<div className={css.card}>
			<div className={css.inputs}>
				<InputWithRoundedCheckbox
					placeholder="Вопрос"
					width={235}
					height={36}
					showDeleteIcon
				/>
			</div>
			<div>
				<TextArea
					placeholder="Ответ"
					width={235}
					height={150}
				/>
			</div>
		</div>
	);
};
