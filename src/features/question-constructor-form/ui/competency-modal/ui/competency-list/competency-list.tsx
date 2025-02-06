import css from './competency-list.module.scss';
import { ReactComponent as EditIcon } from '../../../../../../shared/assets/images/edit.svg';
import { ReactComponent as CrossIcon } from '../../../../../../shared/assets/images/cross-icon.svg';

export const CompetencyList = () => {
	const competencies: string[] = [];

	return (
		<div className={css.list}>
			{competencies.length > 0 ? (
				competencies.map((competency, index) => (
					// eslint-disable-next-line react/no-array-index-key
					<div key={index} className={css.item}>
						<p>{competency}</p>
						<div className={css.options}>
							<EditIcon />
							<CrossIcon />
						</div>
					</div>
				))
			) : (
				<p className={css.not_found}>Список компетенций пуст</p>
			)}
		</div>
	);
};
