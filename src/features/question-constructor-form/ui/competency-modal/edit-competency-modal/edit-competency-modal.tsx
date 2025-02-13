import { useState } from 'react';
import { Modal } from '../../../../../shared/ui/modal';
import css from './edit-competency-modal.module.scss';
import { EditCompetencyButton } from './ui/edit-competency-button';
import { CompetencyNameInput } from '../create-competency-modal/ui/competency-name-input';
import { CompetencyDescriptionTextarea } from '../create-competency-modal/ui/competency-description-textarea';
import { ICompetency } from '../../../../../entities/competencies/api/types';

interface CreateCompetencyModalProps {
	active: boolean,
	closeFunc: (active: boolean) => void,
	competency: ICompetency,
}

export const EditCompetencyModal = (props: CreateCompetencyModalProps) => {
	const {
		active, closeFunc, competency,
	} = props;

	const [name, setName] = useState(competency.name);
	const [description, setDescription] = useState(competency.description);

	const handleNameChange = (newName: string) => setName(newName);
	const handleDescriptionChange = (newDescription: string) => setDescription(newDescription);

	const handleSuccess = () => {
		closeFunc(false);
	};

	return (
		<Modal active={active} closeFunc={closeFunc}>
			<div className={css.wrapper}>
				<div className={css.header}>
					<p className={css.title}>Изменение компетенции</p>
				</div>
				<div className={css.inputs}>
					<CompetencyNameInput
						value={name}
						onChange={handleNameChange}
					/>
					<CompetencyDescriptionTextarea
						value={description}
						onChange={handleDescriptionChange}
					/>
				</div>
				<EditCompetencyButton
					id={competency.id}
					name={name}
					description={description}
					onSuccess={handleSuccess}
				/>
			</div>
		</Modal>
	);
};
