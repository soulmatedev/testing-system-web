import React from 'react';
import { useNavigate } from 'react-router-dom';
import css from './test-info-modal.module.scss';
import { Modal } from '../../../../../shared/ui/modal';
import { SecondButton } from '../../../../../shared/ui/second-button';
import { MainButton } from '../../../../../shared/ui/main-button';

interface SelectQuestionsModalProps {
	id: number | null,
	name: string,
	description: string,
	active: boolean,
	closeFunc: (active: boolean) => void,
}

export const TestInfoModal = (props: SelectQuestionsModalProps) => {
	const {
		id,
		name,
		description,
		active,
		closeFunc,
	} = props;

	const navigate = useNavigate();

	const handleNavigateToTest = () => {
		navigate(`/test/${id}`);
	};

	return (
		<Modal
			active={active}
			closeFunc={closeFunc}
		>
			<div className={css.wrapper}>
				<div>
					<p className={css.title}>Название</p>
					<h1 className={css.name}>{name}</h1>
				</div>

				<div>
					<p className={css.title}>Описание</p>
					<h1 className={css.description}>{description}</h1>
				</div>

				<div>
					<p className={css.title}>Компетенции</p>
					<div>-</div>
				</div>

				<div className={css.options}>
					<SecondButton
						text="Удалить"
						height={32}
					/>
					<MainButton
						text="Перейти к тесту"
						height={32}
						onClick={handleNavigateToTest}
					/>
				</div>
			</div>
		</Modal>
	);
};
