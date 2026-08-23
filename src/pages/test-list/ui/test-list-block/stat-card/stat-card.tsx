import React from 'react';
import cx from 'classnames';
import css from './stat-card.module.scss';

// Тон значения из макета: нейтральный, синий («в работе») и зелёный («завершено»).
export type StatTone = 'default' | 'info' | 'success';

interface StatCardProps {
	label: string;
	value: number | string;
	tone?: StatTone;
}

export const StatCard = ({ label, value, tone = 'default' }: StatCardProps) => (
	<div className={css.card}>
		<p className={css.label}>{label}</p>
		<p className={cx(css.value, css[tone])}>{value}</p>
	</div>
);
