import React from 'react';
import { useNavigate } from 'react-router-dom';
import css from './list-item.module.scss';
import { ReactComponent as RightIcon } from '../../../../../../shared/assets/images/right-arrow.svg';

interface TestListItemProps {
	id: number,
	title: string;
	description: string;
}

export const TestListItem = (props: TestListItemProps) => {
	const { id, title, description } = props;

	const navigate = useNavigate();
	const INSIDE_TEST_BUTTON_HEIGHT = 30;
	const INSIDE_TEST_BUTTON_WIDTH = 50;

	const handleNavigateToTest = () => {
		navigate(`/test/${id}`);
	};

	return (
		<div className={css.wrapper}>
			<p className={css.name}>{title}</p>
			<p className={css.description}>{description}</p>
			<div className={css.button}>
				<RightIcon />
			</div>
		</div>
	);
};
