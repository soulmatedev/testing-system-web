import { useState } from 'react';
import css from './competency-list.module.scss';
import { competenciesAPI } from '../../../../../../entities/competencies/api/api';
import { ConfirmationModal } from '../../../../../../pages/passing-test/ui/modal';
import { useDeleteCompetency } from './libs/useDeleteCompetency';
import { CompetencyItem } from './ui/competency-item';

export const CompetencyList = () => {
	const { data } = competenciesAPI.useGetCompetenciesQuery();
	const competencies = data?.competencies || [];

	const { onDeleteCompetency } = useDeleteCompetency();

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [competencyToDelete, setCompetencyToDelete] = useState<number | null>(null);

	const handleDeleteClick = (id: number) => {
		setCompetencyToDelete(id);
		setIsModalOpen(true);
	};

	const confirmDelete = async () => {
		if (competencyToDelete !== null) {
			await onDeleteCompetency(competencyToDelete);
		}
		setIsModalOpen(false);
		setCompetencyToDelete(null);
	};

	const cancelDelete = () => {
		setIsModalOpen(false);
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
				/>
			))}

			<ConfirmationModal
				isOpen={isModalOpen}
				onConfirm={confirmDelete}
				onCancel={cancelDelete}
				message="Вы уверены, что хотите удалить эту компетенцию?"
			/>
		</div>
	);
};
