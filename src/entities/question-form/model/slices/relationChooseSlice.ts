import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IResponse {
	id: number;
	headerText: string;
	description: string;
}

interface IRelationChooseScheme {
	questionText: string;
	responses: IResponse[];
}

const initialState: IRelationChooseScheme = {
	questionText: '',
	responses: [{ id: 1, headerText: '', description: '' }],
};

export const relationChooseSlice = createSlice({
	name: 'relationChoose',
	initialState,
	selectors: {
		getResponses: (state: IRelationChooseScheme) => state.responses,
	},
	reducers: {
		addRelation(state) {
			const newId = state.responses.length ? state.responses[state.responses.length - 1].id + 1 : 1;
			state.responses.push({ id: newId, headerText: '', description: '' });
		},
		removeRelation(state, action: PayloadAction<number>) {
			state.responses = state.responses.filter((response) => response.id !== action.payload);
		},
		updateRelationText(state, action: PayloadAction<IResponse>) {
			const response = state.responses.find((response) => response.id === action.payload.id);
			if (response) {
				response.headerText = action.payload.headerText;
				response.description = action.payload.description;
			}
		},
		clearResponses(state) {
			state.responses = [];
		},
	},
});

export const {
	actions: relationChooseActions,
	reducer: relationChooseReducer,
	selectors: relationChooseSelectors,
} = relationChooseSlice;
