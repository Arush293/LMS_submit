import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

// Create a Redux store
const store = configureStore({
  reducer: {
    auth: authReducer, // Add the auth slice reducer
  },
});

// Export the store for use in your application
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
