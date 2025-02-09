import { useState } from 'react';
import { Modal } from '../../../../shared/ui/modal';
import css from './competency-modal.module.scss';
import { CompetencyList } from './ui/competency-list';
import { CreateCompetencyModal } from './create-competency-modal';
import { SecondButton } from '../../../../shared/ui/second-button';

interface CompetencyModalProps {
	active: boolean;
	closeFunc: (active: boolean) => void;
}

export const CompetencyModal = (props: CompetencyModalProps) => {
	const { active, closeFunc } = props;
	const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

	const openCreateCompetencyModal = () => {
		setIsCreateModalOpen(true);
	};

	const closeCreateCompetencyModal = () => {
		setIsCreateModalOpen(false);
	};

	return (
		<>
			<Modal active={active} closeFunc={closeFunc} modalInModalActive={isCreateModalOpen}>
				<div className={css.wrapper}>
					<div className={css.header}>
						<p className={css.title}>Компетенции</p>
						<SecondButton
							text="Создать"
							onClick={openCreateCompetencyModal}
							height={20}
							width={55}
						/>
					</div>
					<CompetencyList />
				</div>
			</Modal>

			<CreateCompetencyModal
				active={isCreateModalOpen}
				closeFunc={closeCreateCompetencyModal}
			/>
		</>
	);
};
