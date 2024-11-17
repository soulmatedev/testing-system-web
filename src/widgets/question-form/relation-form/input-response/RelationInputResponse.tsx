import css from './RelationInputResponse.module.scss';
import { InputWithRoundedCheckbox } from '../../../input-with-rounded-checkbox/input-with-rounded-checkbox';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as MinusIcon } from '../../../../shared/images/minus-icon.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as PlusIcon } from '../../../../shared/images/plus-icon.svg';

export const RelationInputResponse = () => {
	const a = '';
	return (
		<div className={css.wrapper}>
			<div className={css.inputs}>
				<InputWithRoundedCheckbox
					placeholder=""
					width={250}
					height={36}
				/>
				<InputWithRoundedCheckbox
					placeholder=""
					width={250}
					height={36}
				/>
			</div>
			<PlusIcon className={css.minus_icon} />
			<MinusIcon className={css.plus_icon} />
		</div>
	);
};
