import { configureStore } from '@reduxjs/toolkit';
import storeSider from './reducers/sider.slice';
import storeListChat from './reducers/listchat.slice'
import storeHistorySearch from './reducers/historysearch.slice';
export const store = configureStore({
  reducer: {
    sider:storeSider,
    chatList:storeListChat,
    historySearch:storeHistorySearch
  },
});

// Tạo type RootState và AppDispatch để dùng trong app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;