import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../app/store';
import { RootState } from '../../../app/reducers';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
