import { ChangeEvent } from 'react';
import css from './SingleChoiceInputResponse.module.scss';
import { InputWithRoundedCheckbox } from '../../../input-with-rounded-checkbox/input-with-rounded-checkbox';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as CrossIcon } from '../../../../shared/images/cross-icon.svg';
import { IResponse } from '../../../../entities/single-choose/slice/singleChooseSlice';

interface SingleChoiceInputResponseProps {
	response: IResponse;
	index: number;
	onDelete: (id: number) => void;
	onTextChange: (id: number, text: string) => void;
	onSelect: (id: number) => void;
	selected: boolean;
}

export const SingleChoiceInputResponse = ({
	response,
	index,
	onDelete,
	onTextChange,
	onSelect,
	selected,
}: SingleChoiceInputResponseProps) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onTextChange(response.id, e.target.value);
	};

	const handleCheckboxChange = () => {
		onSelect(response.id);
	};

	return (
		<div className={css.wrapper}>
			<InputWithRoundedCheckbox
				placeholder="Ответ"
				width={600}
				height={36}
				showCheckbox
				value={response.text}
				onChange={handleChange}
				checked={selected}
				onCheckboxChange={handleCheckboxChange}
			/>
			<CrossIcon className={css.cross_icon} onClick={() => onDelete(response.id)} />
		</div>
	);
};
