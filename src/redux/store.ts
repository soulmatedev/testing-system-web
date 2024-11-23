import { configureStore } from '@reduxjs/toolkit';
import { singleChooseReducer } from '../entities/single-choose/slice/singleChooseSlice';
import { multipleChooseReducer } from '../entities/multiple-choose/slice/multipleChooseSlice';
import { relationChooseReducer } from '../entities/relation-choose/slice/relationChooseSlice';

const store = configureStore({
	reducer: {
		singleChoose: singleChooseReducer,
		multipleChoose: multipleChooseReducer,
		relationChoose: relationChooseReducer,
	},
});

export default store;
