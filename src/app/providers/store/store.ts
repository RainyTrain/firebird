import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { mainPageUsersReducer } from 'pages/MainPage/model/reducers/MainPageUsersReducer';
import { useDispatch } from 'react-redux';
import thunk from 'redux-thunk';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

export const reducers = combineReducers({ users: mainPageUsersReducer });

export const store = createStore(reducers, composedEnhancer);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
