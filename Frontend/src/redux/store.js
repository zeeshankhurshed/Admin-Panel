import { combineReducers, configureStore } from '@reduxjs/toolkit'; 
import { persistStore,persistReducer } from 'redux-persist'; 
import storage from 'redux-persist/lib/storage'; 
// import persistStore from 'redux-persist/es/persistStore';
import { authApi } from '../redux/services/authApi';
import { studentApi } from '../redux/services/studentsApi';
import authSlice from './features/authSlice'; 
import { feeApi } from '../redux/services/feeApi';

const persistConfig = {
  key: 'user',
  storage,
};

const rootReducer = combineReducers({ 
  auth: authSlice, 
  [studentApi.reducerPath]: studentApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [feeApi.reducerPath]:feeApi.reducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(studentApi.middleware, authApi.middleware, feeApi.middleware),
});

export const persistor = persistStore(store);
