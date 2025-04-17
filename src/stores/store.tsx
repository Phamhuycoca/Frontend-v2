import { configureStore } from '@reduxjs/toolkit';
import storeSider from './reducers/sider.slice';
import storeListChat from './reducers/listchat.slice'
export const store = configureStore({
  reducer: {
    sider:storeSider,
    chatList:storeListChat
  },
});

// Tạo type RootState và AppDispatch để dùng trong app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;