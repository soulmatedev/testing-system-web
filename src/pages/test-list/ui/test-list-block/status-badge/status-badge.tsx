import React from 'react';
import cx from 'classnames';
import css from './status-badge.module.scss';

interface StatusBadgeProps {
	status: string;
}

// Домен знает только два реальных статуса теста (models.TestStatus на бэкенде):
// "Создан" и "Завершен". Третьего состояния ("в работе") в системе нет —
// не придумываем его на фронте.
const COMPLETED_STATUS = 'Завершен';

export const StatusBadge = ({ status }: StatusBadgeProps) => (
	<span className={cx(css.badge, status === COMPLETED_STATUS && css.success)}>
		{status}
	</span>
);
