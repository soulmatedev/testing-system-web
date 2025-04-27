import React, { useState } from 'react';
import css from './competency-list.module.scss';
import { competencyAPI } from '../../../../../../entities/competencies/api/api';
import { ConfirmationModal } from '../../../../../../pages/passing-test/ui/modal';
import { useDeleteCompetency } from './libs/useDeleteCompetency';
import { CompetencyItem } from './ui/competency-item';
import { ICompetency } from '../../../../../../entities/competencies/api/types';

interface ICompetencyListProps {
	openEditModal: (competency: ICompetency) => void,
}

export const CompetencyList = (props: ICompetencyListProps) => {
	const { openEditModal } = props;
	const { data } = competencyAPI.useGetCompetenciesQuery();
	const competencies = data?.competencies || [];

	const { onDeleteCompetency } = useDeleteCompetency();

	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

	const [competencyToDelete, setCompetencyToDelete] = useState<number | null>(null);

	const handleDeleteClick = (id: number) => {
		setCompetencyToDelete(id);
		setIsDeleteModalOpen(true);
	};

	const confirmDelete = async () => {
		if (competencyToDelete !== null) {
			await onDeleteCompetency(competencyToDelete);
		}
		setIsDeleteModalOpen(false);
		setCompetencyToDelete(null);
	};

	const cancelDelete = () => {
		setIsDeleteModalOpen(false);
		setCompetencyToDelete(null);
	};

	if (!competencies.length) {
		return <p className={css.not_found}>Список компетенций пуст</p>;
	}

	return (
		<div className={css.list}>
			{competencies.map((competency) => (
				<CompetencyItem
					key={competency.id}
					competency={competency}
					onDelete={handleDeleteClick}
					onEdit={openEditModal}
				/>
			))}

			<ConfirmationModal
				isOpen={isDeleteModalOpen}
				onConfirm={confirmDelete}
				onCancel={cancelDelete}
				message="Вы уверены, что хотите удалить эту компетенцию?"
			/>
		</div>
	);
};
