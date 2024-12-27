import { configureStore } from '@reduxjs/toolkit';
import { reducers } from './reducers';
import { authAPI } from '../entities/user/auth/api/api';

export const store = configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: false,
	}).concat(authAPI.middleware),
});

export default store;
export type AppDispatch = typeof store.dispatch;
