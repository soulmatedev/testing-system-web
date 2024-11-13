import css from './InputResponse.module.scss';
import { Input } from '../../../input/input';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as MinusIcon } from '../../../../shared/images/minus-icon.svg';

export const InputResponse = () => {
	const a = '';
	return (
		<div className={css.wrapper}>
			<Input placeholder="Ответ" width={600} height={36} />
			<MinusIcon className={css.minus_icon} />
		</div>
	);
};
