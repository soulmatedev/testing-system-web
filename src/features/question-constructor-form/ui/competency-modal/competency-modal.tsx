import { Modal } from '../../../../shared/ui/modal';
import css from './competency-modal.module.scss';
import { CreateCompetencyInput } from './ui/create-competency-input';
import { CompetencyList } from './ui/competency-list';

interface CompetencyModalProps {
	active: boolean;
	closeFunc: (active: boolean) => void;
}

export const CompetencyModal = (props: CompetencyModalProps) => {
	const { active, closeFunc } = props;
	return (
		<Modal active={active} closeFunc={closeFunc}>
			<div className={css.wrapper}>
				<p className={css.title}>Компетенции</p>
				<CompetencyList />
				<CreateCompetencyInput />
			</div>
		</Modal>
	);
};
