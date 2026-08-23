import React from 'react';
import cx from 'classnames';
import css from './avatar.module.scss';

// В макете аватар встречается в трёх размерах: в строке таблицы (26px),
// в шапке (30px) и на странице профиля (64px).
export type AvatarSize = 's' | 'm' | 'l';

interface AvatarProps {
	/** Логин или название, из которого берётся инициал. */
	label: string;
	size?: AvatarSize;
	/** Розовый — акцентный аватар текущего пользователя, серый — в списках. */
	tone?: 'accent' | 'muted';
}

export const Avatar = ({ label, size = 'm', tone = 'accent' }: AvatarProps) => {
	const initial = label.trim().charAt(0).toUpperCase();

	return (
		<span className={cx(css.avatar, css[size], css[tone])}>
			{initial || '—'}
		</span>
	);
};
