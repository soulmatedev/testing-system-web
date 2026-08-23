import React from 'react';
import css from './test-details.module.scss';
import { StatusBadge } from '../../test-list-block/status-badge';
import { formatShortDate } from '../../../../../shared/libs/utils/formatDate';

interface TestDetailsProps {
	name: string;
	description: string;
	status: string;
	questionsCount: number;
	executorLogin: string | null;
	updatedAt: string;
	/** Подпись основного действия: у обычного и завершённого теста она разная. */
	primaryLabel: string;
	onPrimaryClick: () => void;
	onDelete: () => void;
}

/**
 * Содержимое карточки теста из макета: бейдж статуса, название с описанием,
 * три плитки с ключевыми полями и строка действий.
 * Общее для модалок обычного и завершённого теста.
 */
export const TestDetails = (props: TestDetailsProps) => {
	const {
		name,
		description,
		status,
		questionsCount,
		executorLogin,
		updatedAt,
		primaryLabel,
		onPrimaryClick,
		onDelete,
	} = props;

	return (
		<div className={css.wrapper}>
			<div className={css.header}>
				<StatusBadge status={status} />
				<h2 className={css.name}>{name}</h2>
				{description && <p className={css.description}>{description}</p>}
			</div>

			<div className={css.tiles}>
				<div className={css.tile}>
					<div className={css.tileLabel}>Вопросов</div>
					<div className={css.tileCount}>{questionsCount}</div>
				</div>
				<div className={css.tile}>
					<div className={css.tileLabel}>Исполнитель</div>
					<div className={css.tileValue}>{executorLogin ?? 'Не назначен'}</div>
				</div>
				<div className={css.tile}>
					<div className={css.tileLabel}>Обновлён</div>
					<div className={css.tileValue}>{formatShortDate(updatedAt)}</div>
				</div>
			</div>

			<div className={css.actions}>
				<button type="button" className={css.primaryAction} onClick={onPrimaryClick}>
					{primaryLabel}
				</button>
				<button type="button" className={css.deleteAction} onClick={onDelete}>
					Удалить
				</button>
			</div>
		</div>
	);
};
