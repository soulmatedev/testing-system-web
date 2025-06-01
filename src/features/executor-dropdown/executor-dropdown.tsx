import React from 'react';
import css from './executor-dropdown.module.scss';
import { IAccountResponse } from '../../entities/user/auth/api/types';

interface ExecutorDropdownProps {
	value: string;
	onChange: (value: string) => void;
	options: IAccountResponse[];
}

export const ExecutorDropdown = (props: ExecutorDropdownProps) => {
	const { value, onChange, options } = props;
	return (
		<select
			className={css.questionType}
			value={value}
			onChange={(e) => onChange(e.target.value)}
		>
			<option value="">Не выбран</option>
			{options.map((executor) => (
				<option key={executor.id} value={executor.email}>
					{executor.login}
				</option>
			))}
		</select>
	);
};
