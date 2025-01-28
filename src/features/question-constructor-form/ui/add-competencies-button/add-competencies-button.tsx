import css from './add-competencies-button.module.scss';
import { ReactComponent as CreateTagIcon } from '../../../../shared/assets/images/plus-icon.svg';

export const AddCompetenciesButton = () => {
	const a = '';
	// const { data: competencies } = competenciesAPI.useGetCompetenciesQuery();
	// console.log(competencies);
	return (
		<div className={css.wrapper}>
			<p className={css.competencies}>Добавить компетенцию</p>
			<CreateTagIcon className={css.create_tag_icon} />
		</div>
	);
};
