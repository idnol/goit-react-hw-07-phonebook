import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from './reducers';
import { persistStore, persistReducer } from 'redux-persist'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist/es/constants';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'contacts',
  storage,
}

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const persistRootReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistRootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
