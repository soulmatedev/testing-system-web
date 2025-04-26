import React from 'react';
import css from './list-item.module.scss';
import { ReactComponent as RightIcon } from '../../../../../../shared/assets/images/right-arrow.svg';

interface TestListItemProps {
	title: string;
	description: string;
	onClick?: () => void;
	isSelected: boolean;
}

export const TestListItem = (props: TestListItemProps) => {
	const {
		title,
		description,
		onClick,
		isSelected,
	} = props;

	return (
		<button className={`${css.wrapper} ${isSelected ? css.selected : ''}`} onClick={onClick} type="button">
			<p className={css.name}>{title}</p>
			<p className={css.description}>{description}</p>
			<button
				className={css.button}
				type="button"
			>
				<RightIcon />
			</button>
		</button>
	);
};
