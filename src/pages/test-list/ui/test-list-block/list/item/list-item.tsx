import React from 'react';
import cx from 'classnames';
import css from './list-item.module.scss';
import { StatusBadge } from '../../status-badge';
import { Avatar } from '../../../../../../shared/ui/avatar';
import { ChevronRightIcon } from '../../../../../../shared/ui/icons';
import { formatShortDate } from '../../../../../../shared/libs/utils/formatDate';

interface TestListItemProps {
	title: string;
	description: string;
	status: string;
	questionsCount: number;
	executorLogin: string | null;
	updatedAt: string;
	onClick?: () => void;
	isSelected: boolean;
}

export const TestListItem = (props: TestListItemProps) => {
	const {
		title,
		description,
		status,
		questionsCount,
		executorLogin,
		updatedAt,
		onClick,
		isSelected,
	} = props;

	return (
		<div
			role="button"
			tabIndex={0}
			className={cx(css.row, isSelected && css.selected)}
			onClick={onClick}
			onKeyDown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') onClick?.();
			}}
		>
			<div className={css.main}>
				<div className={css.name}>{title}</div>
				<div className={css.description}>{description}</div>
			</div>

			<div>
				<StatusBadge status={status} />
			</div>

			<div className={css.questionsCount}>{questionsCount}</div>

			<div className={css.executor}>
				<Avatar label={executorLogin ?? '—'} size="s" tone="muted" />
				<span className={css.executorName}>{executorLogin ?? 'Не назначен'}</span>
			</div>

			<div className={css.updatedAt}>{formatShortDate(updatedAt)}</div>

			<div className={css.chevron}>
				<ChevronRightIcon />
			</div>
		</div>
	);
};
