import css from './competency-card.module.scss';
import { ReactComponent as DeleteIcon } from '../../../../../../shared/assets/images/small-cross.svg';
import { ICompetency } from '../../../../../competencies/api/types';

interface ICompetencyCardProps {
	competency: ICompetency,
}

export const CompetencyCard = (props: ICompetencyCardProps) => {
	const { competency } = props;
	return (
		<div className={css.wrapper}>
			<p className={css.name}>{competency.name}</p>
			<DeleteIcon className={css.icon} />
		</div>
	);
};
