import { Modal } from '../../../../shared/ui/modal';
import css from './competency-modal.module.scss';
import { CompetencyList } from './ui/competency-list';
import { SecondButton } from '../../../../shared/ui/second-button';

interface CompetencyModalProps {
	active: boolean;
	closeFunc: (active: boolean) => void;
}

export const CompetencyModal = (props: CompetencyModalProps) => {
	const { active, closeFunc } = props;
	return (
		<Modal active={active} closeFunc={closeFunc}>
			<div className={css.wrapper}>
				<div className={css.header}>
					<p className={css.title}>Компетенции</p>
					<SecondButton text="Создать" height={20} width={55} />
				</div>
				<CompetencyList />
			</div>
		</Modal>
	);
};
