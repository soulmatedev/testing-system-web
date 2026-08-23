import React from 'react';
import css from './test-settings.module.scss';
import { ExecutorDropdown } from '../../../executor-dropdown';
import { IAccountResponse } from '../../../../entities/user/auth/api/types';

interface TestSettingsProps {
	executor: string;
	onExecutorChange: (value: string) => void;
	executors: IAccountResponse[];
}

const NOT_SUPPORTED_HINT = 'Параметр появится, когда его начнёт хранить сервер';

/**
 * Панель «Параметры» из макета конструктора.
 * Реально сохраняется только исполнитель — остальные параметры
 * (срок, проходной балл, переключатели) бэкенд пока не хранит,
 * поэтому они показаны, но отключены, чтобы не терять ввод молча.
 */
export const TestSettings = (props: TestSettingsProps) => {
	const { executor, onExecutorChange, executors } = props;

	return (
		<aside className={css.sidebar}>
			<div className={css.label}>Параметры</div>

			<div className={css.field}>
				<span className={css.fieldLabel}>Исполнитель</span>
				<ExecutorDropdown
					value={executor}
					onChange={onExecutorChange}
					options={executors}
				/>
			</div>

			<div className={css.field} title={NOT_SUPPORTED_HINT}>
				<span className={css.fieldLabel}>Срок прохождения</span>
				<input className={css.input} placeholder="Не задан" disabled />
			</div>

			<div className={css.field} title={NOT_SUPPORTED_HINT}>
				<span className={css.fieldLabel}>Проходной балл</span>
				<input className={css.input} placeholder="Не задан" disabled />
			</div>

			<div className={css.divider} />

			<div className={css.toggleRow} title={NOT_SUPPORTED_HINT}>
				<span className={css.toggleLabel}>Перемешивать вопросы</span>
				<span className={css.toggle} />
			</div>
			<div className={css.toggleRow} title={NOT_SUPPORTED_HINT}>
				<span className={css.toggleLabel}>Показывать результат</span>
				<span className={css.toggle} />
			</div>
		</aside>
	);
};
