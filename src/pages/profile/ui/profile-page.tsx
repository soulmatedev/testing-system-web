import React from 'react';
import css from './profile-page.module.scss';
import { ProfileBlock } from './block';

export const ProfilePage = () => (
	<div className={css.wrapper}>
		<ProfileBlock />
	</div>
);
