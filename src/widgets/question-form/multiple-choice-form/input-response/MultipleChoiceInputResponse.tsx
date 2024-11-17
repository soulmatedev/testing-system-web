import css from './MultipleChoiceInputResponse.module.scss';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as MinusIcon } from '../../../../shared/images/minus-icon.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as PlusIcon } from '../../../../shared/images/plus-icon.svg';
import { SquareCheckboxInput } from '../../../square-checkbox-input/square-checkbox-input';

export const MultipleChoiceInputResponse = () => {
	const a = '';
	return (
		<div className={css.wrapper}>
			<SquareCheckboxInput
				placeholder="Ответ"
				width={600}
				height={36}
				showCheckbox
			/>
			<PlusIcon className={css.minus_icon} />
			<MinusIcon className={css.plus_icon} />
		</div>
	);
};
