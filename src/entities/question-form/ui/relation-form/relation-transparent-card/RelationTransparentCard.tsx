import css from './RelationTransparentCard.module.scss';
import { ReactComponent as PlusIcon } from '../../../../../shared/assets/images/plus-icon.svg';

interface RelationTransparentCardProps {
	onClick: () => void;
}

export const RelationTransparentCard = ({ onClick }: RelationTransparentCardProps) => (
	<button
		type="button"
		className={css.card}
		onClick={onClick}
	>
		<PlusIcon />
	</button>
);
