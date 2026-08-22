import React from 'react';
import cx from 'classnames';
import css from './pagination.module.scss';

interface PaginationProps {
	page: number;
	pageCount: number;
	onPageChange: (page: number) => void;
}

export const Pagination = ({ page, pageCount, onPageChange }: PaginationProps) => {
	if (pageCount <= 1) return null;

	const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

	return (
		<div className={css.pagination}>
			{pages.map((pageNumber) => (
				<button
					key={pageNumber}
					type="button"
					className={cx(css.pageButton, pageNumber === page && css.active)}
					onClick={() => onPageChange(pageNumber)}
				>
					{pageNumber}
				</button>
			))}
		</div>
	);
};
