import css from './SingleChoiceInputResponse.module.scss';
import { InputWithRoundedCheckbox } from '../../../input-with-rounded-checkbox/input-with-rounded-checkbox';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as CrossIcon } from '../../../../shared/images/cross-icon.svg';

interface SingleChoiceInputResponseProps {
	index: number;
	onDelete: (index: number) => void;
}

export const SingleChoiceInputResponse = ({ index, onDelete }: SingleChoiceInputResponseProps) => {
	const a = '';
	return (
		<div className={css.wrapper}>
			<InputWithRoundedCheckbox
				placeholder="Ответ"
				width={600}
				height={36}
				showCheckbox
			/>
			<CrossIcon className={css.cross_icon} onClick={() => onDelete(index)} />
		</div>

	);
};
