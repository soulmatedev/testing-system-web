import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import cx from 'classnames';
import css from './modal.module.scss';
import { useModal } from '../../libs/utils/useModal';
import { CloseModalButton } from './close-modal-button';

interface IModalProps {
	active: boolean;
	closeFunc: (active: boolean) => void;
	styles?: string;
	children: React.ReactNode;
	modalInModalActive?: boolean;
}

const portal = document.getElementById('portal');

/** Компонент - модальное окно */
export const Modal = (props: IModalProps) => {
	const {
		active,
		closeFunc,
		modalInModalActive,
		styles,
		children,
	} = props;

	const {
		modalRef,
		modalContentRef,
	} = useModal(closeFunc, active, modalInModalActive);

	const onClose = () => closeFunc(false);

	if (!portal) {
		return null;
	}

	return (
		ReactDOM.createPortal(
			<CSSTransition
				in={active}
				timeout={500}
				nodeRef={modalRef}
				classNames={{
					enter: css.modal_enter,
					enterActive: css.modal_enter_active,
					exit: css.modal_exit,
					exitActive: css.modal_exit_active,
				}}
				unmountOnExit
			>
				<div
					className={css.modal}
					ref={modalRef}
					role="presentation"
				>
					<div
						className={cx(css.content_wrapper, styles)}
						ref={modalContentRef}
					>
						<CloseModalButton onClose={onClose} />
						{children}
					</div>
				</div>
			</CSSTransition>,
			portal,
		)
	);
};
