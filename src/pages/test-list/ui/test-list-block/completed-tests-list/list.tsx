import React, { useState } from 'react';
import css from './list.module.scss';
import { TestListItem } from './item';
import { ITest } from '../../../../../entities/tests/api/types';
import { CompletedTestsModal } from '../../modals/completed-tests-modal';
import { Pagination } from '../pagination';

interface TestListProps {
	data: ITest[] | undefined;
}

const PAGE_SIZE = 8;

export const CompletedTestList = ({ data }: TestListProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedTest, setSelectedTest] = useState<ITest | null>(null);
	const [page, setPage] = useState(1);

	const testArray = data || [];
	const pageCount = Math.max(1, Math.ceil(testArray.length / PAGE_SIZE));
	const pageItems = testArray.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

	const openTestInfoModal = (test: ITest) => {
		setSelectedTest(test);
		setIsModalOpen(true);
	};

	const closeTestInfoModal = () => {
		setIsModalOpen(false);
		setSelectedTest(null);
	};

	if (testArray.length === 0) {
		return (
			<div className={css.not_found_block}>
				<p className={css.not_found}>Здесь пока ничего нет, но это отличный повод начать!</p>
			</div>
		);
	}

	return (
		<>
			{pageItems.map((test) => (
				<TestListItem
					key={test.id}
					title={test.name}
					description={test.description}
					status={test.status}
					questionsCount={test.questions?.length ?? test.questionsCount ?? 0}
					executorLogin={test.user?.login ?? null}
					updatedAt={test.updatedAt}
					isSelected={selectedTest?.id === test.id}
					onClick={() => openTestInfoModal(test)}
				/>
			))}

			<div className={css.footer}>
				<div>
					Показано
					{' '}
					{pageItems.length}
					{' '}
					из
					{' '}
					{testArray.length}
				</div>
				<Pagination page={page} pageCount={pageCount} onPageChange={setPage} />
			</div>

			<CompletedTestsModal
				id={selectedTest?.id ?? null}
				name={selectedTest?.name ?? ''}
				description={selectedTest?.description ?? ''}
				user={selectedTest?.user ?? null}
				status={selectedTest?.status ?? ''}
				questionsCount={selectedTest?.questions?.length ?? selectedTest?.questionsCount ?? 0}
				updatedAt={selectedTest?.updatedAt ?? ''}
				active={isModalOpen}
				closeFunc={closeTestInfoModal}
			/>
		</>
	);
};
