import React, { useState } from 'react';
import cx from 'classnames';
import { ITestTabs } from '../model/types';
import css from './test-tabs.module.scss';

interface ITabsProps {
	data: ITestTabs[];
	activeName: string;
	onTabChange: (name: string) => void;
}

export const TestTabs = ({ data, activeName, onTabChange }: ITabsProps) => {
	const handleClick = (name: string, disabled: boolean) => {
		if (!disabled) {
			onTabChange(name);
		}
	};

	return (
		<div className={css.tabsBlock}>
			{data.map(({ name, disabled }) => (
				<button
					key={name}
					type="button"
					onClick={() => handleClick(name, disabled)}
					className={cx(
						css.tab,
						activeName === name && css.activeTab,
						disabled && css.disabled,
					)}
					disabled={disabled}
				>
					{name}
				</button>
			))}
		</div>
	);
};
