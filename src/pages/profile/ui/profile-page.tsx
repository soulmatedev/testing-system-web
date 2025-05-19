import React from 'react';
import css from './profile-page.module.scss';
import { ProfileBlock } from './block';

export const ProfilePage = () => {
	const a = 'a';
	return (
		<div className={css.wrapper}>
			<ProfileBlock />
		</div>
	);
};
