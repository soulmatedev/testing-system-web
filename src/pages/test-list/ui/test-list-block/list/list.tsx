import React, { useState } from 'react';
import css from './list.module.scss';
import { TestListItem } from './item';
import { ITest } from '../../../../../entities/tests/api/types';
import { TestInfoModal } from '../../modals/test-item-modal';
import { Pagination } from '../pagination';

interface TestListProps {
	data: ITest[] | undefined;
}

const PAGE_SIZE = 8;

export const TestList = ({ data }: TestListProps) => {
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

	return (
		<>
			<div className={css.wrapper}>
				{testArray.length === 0 ? (
					<div className={css.not_found_block}>
						<p className={css.not_found}>Здесь пока ничего нет, но это отличный повод начать!</p>
					</div>
				) : (
					<div className={css.block}>
						{pageItems.map((test) => (
							<TestListItem
								key={test.id}
								title={test.name}
								description={test.description}
								status={test.status}
								questionsCount={test.questions?.length ?? 0}
								executorLogin={test.user?.login ?? null}
								isSelected={selectedTest?.id === test.id}
								onClick={() => openTestInfoModal(test)}
							/>
						))}
					</div>
				)}
			</div>

			{testArray.length > 0 && (
				<div className={css.footer}>
					<p className={css.shown}>
						Показано
						{' '}
						{pageItems.length}
						{' '}
						из
						{' '}
						{testArray.length}
					</p>
					<Pagination page={page} pageCount={pageCount} onPageChange={setPage} />
				</div>
			)}

			<TestInfoModal
				id={selectedTest?.id ?? null}
				name={selectedTest?.name ?? ''}
				description={selectedTest?.description ?? ''}
				user={selectedTest?.user ?? null}
				status={selectedTest?.status ?? ''}
				active={isModalOpen}
				closeFunc={closeTestInfoModal}
			/>
		</>
	);
};
