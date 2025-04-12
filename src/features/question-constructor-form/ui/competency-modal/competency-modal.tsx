import React, { useState } from 'react';
import { Modal } from '../../../../shared/ui/modal';
import css from './competency-modal.module.scss';
import { CompetencyList } from './ui/competency-list';
import { CreateCompetencyModal } from './create-competency-modal';
import { SecondButton } from '../../../../shared/ui/second-button';
import { EditCompetencyModal } from './edit-competency-modal';
import { ICompetency } from '../../../../entities/competencies/api/types';

interface CompetencyModalProps {
	active: boolean;
	closeFunc: (active: boolean) => void;
}

export const CompetencyModal = (props: CompetencyModalProps) => {
	const { active, closeFunc } = props;

	const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [selectedCompetency, setSelectedCompetency] = useState<ICompetency | null>(null);

	const openCreateCompetencyModal = () => setIsCreateModalOpen(true);
	const closeCreateCompetencyModal = () => setIsCreateModalOpen(false);

	const openEditCompetencyModal = (competency: ICompetency) => {
		setSelectedCompetency(competency);
		setIsEditModalOpen(true);
	};

	const closeEditCompetencyModal = () => {
		setIsEditModalOpen(false);
		setSelectedCompetency(null);
	};

	return (
		<>
			<Modal
				active={active}
				closeFunc={closeFunc}
				modalInModalActive={isCreateModalOpen || isEditModalOpen}
			>
				<div className={css.wrapper}>
					<div className={css.header}>
						<p className={css.title}>Компетенции</p>
						<SecondButton
							text="Создать"
							onClick={openCreateCompetencyModal}
							height={20}
							width={55}
							withBorder={false}
						/>
					</div>
					<CompetencyList openEditModal={openEditCompetencyModal} />
				</div>
			</Modal>

			<CreateCompetencyModal active={isCreateModalOpen} closeFunc={closeCreateCompetencyModal} />

			{selectedCompetency && (
				<EditCompetencyModal
					active={isEditModalOpen}
					closeFunc={closeEditCompetencyModal}
					competency={selectedCompetency}
				/>
			)}
		</>
	);
};
