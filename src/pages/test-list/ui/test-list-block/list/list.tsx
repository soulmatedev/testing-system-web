import React, { useState } from 'react';
import css from './list.module.scss';
import { TestListItem } from './item';
import { ITest } from '../../../../../entities/tests/api/types';
import { TestInfoModal } from '../../modals/test-item-modal';

interface TestListProps {
	data: ITest[] | undefined;
}

export const TestList = ({ data }: TestListProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedTest, setSelectedTest] = useState<ITest | null>(null);

	const testArray = data || [];

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
						{testArray.map((test) => (
							<TestListItem
								key={test.id}
								title={test.name}
								description={test.description}
								isSelected={selectedTest?.id === test.id}
								onClick={() => openTestInfoModal(test)}
							/>
						))}
					</div>
				)}
			</div>
			<TestInfoModal
				id={selectedTest?.id ?? null}
				name={selectedTest?.name ?? ''}
				description={selectedTest?.description ?? ''}
				active={isModalOpen}
				closeFunc={closeTestInfoModal}
			/>
		</>
	);
};
