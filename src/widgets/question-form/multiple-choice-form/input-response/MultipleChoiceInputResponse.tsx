import css from './MultipleChoiceInputResponse.module.scss';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as CrossIcon } from '../../../../shared/images/cross-icon.svg';
import { SquareCheckboxInput } from '../../../square-checkbox-input/square-checkbox-input';

interface MultipleChoiceInputResponseProps {
	index: number;
	onDelete: (index: number) => void;
}

export const MultipleChoiceInputResponse = ({ index, onDelete }: MultipleChoiceInputResponseProps) => {
	const a = '';
	return (
		<div className={css.wrapper}>
			<SquareCheckboxInput
				placeholder="Ответ"
				width={600}
				height={36}
				showCheckbox
			/>
			<CrossIcon className={css.cross_icon} onClick={() => onDelete(index)} />
		</div>
	);
};
