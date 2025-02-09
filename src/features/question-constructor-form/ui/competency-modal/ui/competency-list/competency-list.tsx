import { useState } from 'react';
import css from './competency-list.module.scss';
import { ReactComponent as EditIcon } from '../../../../../../shared/assets/images/edit.svg';
import { ReactComponent as CrossIcon } from '../../../../../../shared/assets/images/cross-icon.svg';
import { ReactComponent as UpArrow } from '../../../../../../shared/assets/images/up-arrow.svg';
import { ReactComponent as DownArrow } from '../../../../../../shared/assets/images/down-arrow.svg';
import { SquareCheckbox } from '../../../../../../shared/ui/square-checkbox';
import { competenciesAPI } from '../../../../../../entities/competencies/api/api';
import { ICompetency } from '../../../../../../entities/competencies/api/types';
import { ConfirmationModal } from '../../../../../../pages/passing-test/ui/modal';
import { useDeleteCompetency } from './libs/useDeleteCompetency';

export const CompetencyList = () => {
	const { data } = competenciesAPI.useGetCompetenciesQuery();
	const { onDeleteCompetency } = useDeleteCompetency();
	const competencies = data?.competencies || [];

	const [expandedId, setExpandedId] = useState<number | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [competencyToDelete, setCompetencyToDelete] = useState<number | null>(null);

	const toggleDescription = (id: number) => {
		setExpandedId(expandedId === id ? null : id);
	};

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
			{competencies.map(({ id, name, description }: ICompetency) => (
				<div key={id} className={css.item}>
					<div className={css.header}>
						<div className={css.name}>
							<SquareCheckbox />
							<p className={css.title}>{name}</p>
						</div>
						<div className={css.options_wrapper}>
							<div className={css.options}>
								<EditIcon className={css.icon} />
								<CrossIcon className={css.icon} onClick={() => handleDeleteClick(id)} />
							</div>
						</div>
					</div>
					<div className={css.body}>
						{expandedId === id ? (
							<DownArrow
								className={`${css.arrow} ${css.expanded}`}
								onClick={() => toggleDescription(id)}
							/>
						) : (
							<UpArrow
								className={`${css.arrow} ${css.collapsed}`}
								onClick={() => toggleDescription(id)}
							/>
						)}
						<div className={`${css.description} ${expandedId === id ? css.full : ''}`}>
							{description}
						</div>
					</div>
				</div>
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
