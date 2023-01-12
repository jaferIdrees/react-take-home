import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import campaignsReducer from './campaign'

const store = configureStore({
    reducer: campaignsReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;