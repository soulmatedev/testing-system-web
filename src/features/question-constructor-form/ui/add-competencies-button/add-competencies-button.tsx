import { useState } from 'react';
import css from './add-competencies-button.module.scss';
import { ReactComponent as CreateTagIcon } from '../../../../shared/assets/images/plus-icon.svg';
import { CompetencyModal } from '../competency-modal';
import { handleKeyDown } from '../../../../shared/libs/utils/handleKeyDown';

export const AddCompetenciesButton = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openCompetencyModal = () => {
		setIsModalOpen(true);
	};

	const closeCompetencyModal = () => {
		setIsModalOpen(false);
	};

	const handleInputKeyDown = handleKeyDown({
		keyCode: '',
		isActive: true,
		action: openCompetencyModal,
	});

	return (
		<div>
			<div
				className={css.wrapper}
				role="button"
				tabIndex={0}
				onKeyDown={handleInputKeyDown}
				onClick={openCompetencyModal}
			>
				<p className={css.competencies}>Добавить компетенцию</p>
				<CreateTagIcon className={css.create_tag_icon} />
			</div>

			<CompetencyModal active={isModalOpen} closeFunc={closeCompetencyModal} />
		</div>
	);
};
