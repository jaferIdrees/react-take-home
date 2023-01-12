import { configureStore } from '@reduxjs/toolkit';
import campaignsReducer from './campaign'

const store = configureStore({
    reducer: campaignsReducer,
})

export default store;