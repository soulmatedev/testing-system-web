import { configureStore } from '@reduxjs/toolkit';
import { responsesReducer } from './slice/responsesSlice';

const store = configureStore({
	reducer: {
		responses: responsesReducer,
	},
});

export default store;
