import React, { useState } from 'react';
import { Modal } from '../../../../../shared/ui/modal';
import css from './create-competency-modal.module.scss';
import { CompetencyNameInput } from './ui/competency-name-input';
import { CompetencyDescriptionTextarea } from './ui/competency-description-textarea';
import { CreateCompetencyButton } from './ui/create-competency-button';

interface CreateCompetencyModalProps {
	active: boolean;
	closeFunc: (active: boolean) => void;
}

export const CreateCompetencyModal = (props: CreateCompetencyModalProps) => {
	const { active, closeFunc } = props;

	const [name, setName] = useState('');
	const [description, setDescription] = useState('');

	const handleNameChange = (newName: string) => setName(newName);
	const handleDescriptionChange = (newDescription: string) => setDescription(newDescription);

	const handleSuccess = () => {
		setName('');
		setDescription('');
		closeFunc(false);
	};

	return (
		<Modal active={active} closeFunc={closeFunc}>
			<div className={css.wrapper}>
				<div className={css.header}>
					<p className={css.title}>Создание компетенции</p>
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
				<CreateCompetencyButton
					name={name}
					description={description}
					onSuccess={handleSuccess}
				/>
			</div>
		</Modal>
	);
};
