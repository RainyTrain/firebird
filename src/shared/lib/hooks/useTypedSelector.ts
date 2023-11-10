import { RootState } from 'app/providers/store/store';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
