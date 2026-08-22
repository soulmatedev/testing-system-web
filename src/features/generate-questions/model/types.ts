import { IGeneratedQuestion } from '../../../entities/ai';

// Черновик в списке модалки. draftId — локальный идентификатор списка
// (не id вопроса, у черновика его нет), нужен только для React key
// и адресации при редактировании/удалении конкретной карточки.
export interface IDraftQuestion extends IGeneratedQuestion {
	draftId: string;
}
