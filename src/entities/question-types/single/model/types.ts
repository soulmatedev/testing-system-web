import { IAnswer } from '../../../answers/api/types';

export interface ISingleChooseScheme {
	answers: IAnswer[],
	questionCreated: boolean,
	addedOption: boolean,
}
