import { RootState } from '../../../../app/reducers';

export const selectQuestions = (state: RootState) => state.test.questions;
export const selectTitle = (state: RootState) => state.test.name;
export const selectDescription = (state: RootState) => state.test.description;
