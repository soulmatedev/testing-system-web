import React from 'react';
import css from './stat-card.module.scss';

interface StatCardProps {
	label: string;
	value: number | string;
}

export const StatCard = ({ label, value }: StatCardProps) => (
	<div className={css.card}>
		<p className={css.label}>{label}</p>
		<p className={css.value}>{value}</p>
	</div>
);
