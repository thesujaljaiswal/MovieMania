import { configureStore,combineReducers } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";
import ratingSlice from './ratingSlice'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'movie mania',
    version: 1,
    storage,
}
const rootReducer=combineReducers({home: homeSlice,rating:ratingSlice});

const persistedReducer = persistReducer(persistConfig, rootReducer)
//combined both to persist

export const store= configureStore({ 
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor=persistStore(store);

