import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../../app/reducers';

export const getTests = (state: RootState) => state.testDetails.tests;

export const selectTestById = (id: number) => createSelector(
	getTests,
	(tests) => tests.find((test) => test.id === id),
);
