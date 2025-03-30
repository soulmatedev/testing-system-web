import { competencyAPI } from '../../../../competencies/api/api';
import css from './competencies-list.module.scss';
import { CompetencyCard } from './competency-card';
import { AddCompetenciesButton } from '../../../../../features/question-constructor-form/ui/add-competencies-button';

interface ICompetenciesListProps {
	answerID: number,
}

export const CompetenciesList = ({ answerID }: ICompetenciesListProps) => {
	const { data } = competencyAPI.useGetCompetenciesByAnswerQuery({ id: answerID });
	const competencies = data?.competencies || [];

	if (competencies.length === 0) {
		return <AddCompetenciesButton />;
	}

	return (
		<div className={css.wrapper}>
			{competencies.map((competency) => (
				<CompetencyCard key={competency.id} competency={competency} />
			))}
		</div>
	);
};
