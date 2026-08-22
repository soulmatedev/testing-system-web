import React from 'react';
import css from './list-item.module.scss';
import { ReactComponent as RightIcon } from '../../../../../../shared/assets/images/right-arrow.svg';
import { StatusBadge } from '../../status-badge';
import { Avatar } from '../../avatar';

interface TestListItemProps {
	title: string;
	description: string;
	status: string;
	questionsCount: number;
	executorLogin: string | null;
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
		onClick,
		isSelected,
	} = props;

	return (
		<div
			role="button"
			tabIndex={0}
			className={`${css.wrapper} ${isSelected ? css.selected : ''}`}
			onClick={onClick}
			onKeyDown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') onClick?.();
			}}
		>
			<div className={css.main}>
				<p className={css.name}>{title}</p>
				<p className={css.description}>{description}</p>
			</div>

			<div className={css.status}>
				<StatusBadge status={status} />
			</div>

			<p className={css.questionsCount}>{questionsCount}</p>

			<div className={css.executor}>
				{executorLogin ? (
					<>
						<Avatar label={executorLogin} />
						<span>{executorLogin}</span>
					</>
				) : (
					<span className={css.noExecutor}>Не назначен</span>
				)}
			</div>

			<button
				className={css.button}
				type="button"
			>
				<RightIcon />
			</button>
		</div>
	);
};
