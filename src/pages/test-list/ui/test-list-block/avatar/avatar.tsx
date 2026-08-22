import React from 'react';
import css from './avatar.module.scss';

interface AvatarProps {
	label: string;
}

// Инициал берём из первой буквы логина/названия — своей аватарки в системе нет.
export const Avatar = ({ label }: AvatarProps) => (
	<div className={css.avatar}>
		{label.trim().charAt(0).toUpperCase() || '—'}
	</div>
);
