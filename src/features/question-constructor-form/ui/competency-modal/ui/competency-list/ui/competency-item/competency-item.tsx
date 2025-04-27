import React, { useState } from 'react';
import css from './competency-item.module.scss';
import { ReactComponent as EditIcon } from '../../../../../../../../shared/assets/images/edit.svg';
import { ReactComponent as CrossIcon } from '../../../../../../../../shared/assets/images/cross-icon.svg';
import { ReactComponent as UpArrow } from '../../../../../../../../shared/assets/images/up-arrow.svg';
import { ReactComponent as DownArrow } from '../../../../../../../../shared/assets/images/down-arrow.svg';
import { ICompetency } from '../../../../../../../../entities/competencies/api/types';
import { SquareCheckbox } from '../../../../../../../../shared/ui/square-checkbox';

interface CompetencyItemProps {
	competency: ICompetency,
	onDelete: (id: number) => void,
	onEdit: (competency: ICompetency) => void
}

export const CompetencyItem = (props: CompetencyItemProps) => {
	const { competency, onDelete, onEdit } = props;
	const { id, name, description } = competency;
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleDescription = () => {
		setIsExpanded((prev) => !prev);
	};

	return (
		<div className={css.item}>
			<div className={css.header}>
				<div className={css.name}>
					<SquareCheckbox />
					<p className={css.title}>{name}</p>
				</div>
				<div className={css.options_wrapper}>
					<div className={css.options}>
						<EditIcon className={css.icon} onClick={() => onEdit(competency)} />
						<CrossIcon className={css.icon} onClick={() => onDelete(id)} />
					</div>
				</div>
			</div>
			<div className={css.body}>
				{isExpanded ? (
					<DownArrow className={`${css.arrow} ${css.expanded}`} onClick={toggleDescription} />
				) : (
					<UpArrow className={`${css.arrow} ${css.collapsed}`} onClick={toggleDescription} />
				)}
				<div className={`${css.description} ${isExpanded ? css.full : ''}`}>{description}</div>
			</div>
		</div>
	);
};
