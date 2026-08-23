import React from 'react';
import cx from 'classnames';
import css from './status-badge.module.scss';

interface StatusBadgeProps {
	status: string;
}

// Домен знает два статуса теста (models.TestStatus на бэкенде): «Создан»
// и «Завершен». В части старых записей статус лежит латиницей ("created"),
// поэтому приводим значение к единому виду только для отображения.
const COMPLETED_STATUSES = ['Завершен', 'Завершён', 'completed'];
const CREATED_STATUSES = ['created'];

export const StatusBadge = ({ status }: StatusBadgeProps) => {
	const isCompleted = COMPLETED_STATUSES.includes(status);
	const label = CREATED_STATUSES.includes(status) ? 'Создан' : status;

	return (
		<span className={cx(css.badge, isCompleted && css.success)}>
			{label}
		</span>
	);
};
