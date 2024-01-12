import { combineReducers, configureStore } from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage'
import  counterSlice  from "./slices/counter"
import  ticketSlice  from "./slices/ticket"
import { persistReducer, persistStore } from 'redux-persist';

const reducers = combineReducers({
  counter: counterSlice,
  ticket: ticketSlice,
})

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,

})

export const persistor = persistStore(store)