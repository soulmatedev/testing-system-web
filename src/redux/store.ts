import { configureStore } from '@reduxjs/toolkit';
import { singleChooseReducer } from '../entities/single-choose/slice/singleChooseSlice';
import { multipleChooseReducer } from '../entities/multiple-choose/slice/multipleChooseSlice';

const store = configureStore({
	reducer: {
		singleChoose: singleChooseReducer,
		multipleChoose: multipleChooseReducer,
	},
});

export default store;
