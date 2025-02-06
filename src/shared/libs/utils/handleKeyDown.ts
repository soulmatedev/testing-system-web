/**
 * Обработчик нажатия клавиши.
 *
 * @param {string} keyCode - Код клавиши, например 'Enter'.
 * @param {boolean} isActive - Условие для выполнения действия (например, когда поле ввода не пустое).
 * @param {() => void} action - Функция, которую нужно вызвать при совпадении условия.
 */
type KeyHandlerProps = {
	keyCode: string;
	isActive: boolean;
	action: () => void;
};

export const handleKeyDown = (props: KeyHandlerProps) => {
	const { keyCode, isActive, action } = props;
	return (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.code === keyCode && isActive) {
			action();
		}
	};
};
