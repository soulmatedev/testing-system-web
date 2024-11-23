import { useDispatch } from 'react-redux';
import css from '../input-response/RelationInputResponse.module.scss';
import { InputWithRoundedCheckbox } from '../../../input-with-rounded-checkbox/input-with-rounded-checkbox';
import { TextArea } from '../../../textarea/textarea';
import { IResponse, relationChooseActions } from '../../../../entities/relation-choose/slice/relationChooseSlice';

interface RelationCardProps {
	response: IResponse;
}

export const RelationCard = ({ response }: RelationCardProps) => {
	const dispatch = useDispatch();

	const handleHeaderTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(relationChooseActions.updateRelationText({ ...response, headerText: event.target.value }));
	};

	const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		dispatch(relationChooseActions.updateRelationText({ ...response, description: event.target.value }));
	};

	return (
		<div className={css.card}>
			<div className={css.inputs}>
				<InputWithRoundedCheckbox
					placeholder="Заголовок"
					width={250}
					height={36}
					showDeleteIcon
					value={response.headerText}
					onChange={handleHeaderTextChange}
				/>
			</div>
			<div>
				<TextArea
					placeholder="Описание"
					width={250}
					height={180}
					value={response.description}
					onChange={handleDescriptionChange}
				/>
			</div>
		</div>
	);
};
