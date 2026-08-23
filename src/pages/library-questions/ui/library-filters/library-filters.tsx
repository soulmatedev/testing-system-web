import React from 'react';
import cx from 'classnames';
import css from './library-filters.module.scss';
import { competencyAPI } from '../../../../entities/competencies/api/api';

export interface ILibraryFilter {
	/** null — «Все вопросы», иначе значение question.type. */
	type: string | null;
	label: string;
	count: number;
}

interface LibraryFiltersProps {
	filters: ILibraryFilter[];
	activeType: string | null;
	onFilterChange: (type: string | null) => void;
}

export const LibraryFilters = (props: LibraryFiltersProps) => {
	const { filters, activeType, onFilterChange } = props;

	// Блок «Темы» из макета: своей сущности тем в системе нет, ближайшая
	// по смыслу — компетенции, они уже заводятся администратором.
	const { data: competencies } = competencyAPI.useGetCompetenciesQuery();

	return (
		<aside className={css.sidebar}>
			<div className={css.label}>Фильтры</div>
			<div className={css.filters}>
				{filters.map(({ type, label, count }) => (
					<button
						type="button"
						key={label}
						className={cx(css.filter, activeType === type && css.active)}
						onClick={() => onFilterChange(type)}
					>
						<span>{label}</span>
						<span className={css.count}>{count}</span>
					</button>
				))}
			</div>

			{competencies?.competencies?.length ? (
				<>
					<div className={css.divider} />
					<div className={css.label}>Темы</div>
					<div className={css.topics}>
						{competencies.competencies.map((competency) => (
							<span key={competency.id} className={css.topic}>{competency.name}</span>
						))}
					</div>
				</>
			) : null}
		</aside>
	);
};
