import React from 'react';
import { ReactComponent as FindIcon } from '../../../../shared/assets/images/find-icon.svg';
import css from './SearchBar.module.scss';

interface ISearchBarProps {
	tagName: string,
	onTagNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export const SearchBar = (props: ISearchBarProps) => {
	const { tagName, onTagNameChange } = props;

	const inputWidth = Math.max(6, tagName.length + 1);

	return (
		<div className={css.wrapper}>
			<div className={css.find}>
				<FindIcon />
			</div>
			<input
				placeholder="Поиск"
				className={css.input}
				value={tagName}
				onChange={onTagNameChange}
				style={{ width: `${inputWidth}ch` }}
			/>
		</div>
	);
};
