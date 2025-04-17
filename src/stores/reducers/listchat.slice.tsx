import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
    gender: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    email: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    nat: string;
}

const initialState: User[] = [];

const storeListChat = createSlice({
    name: 'chatList',
    initialState,
    reducers: {
        saveList: (state, action: PayloadAction<User[]>) => {
            console.log(state);
            return action.payload; // ghi đè toàn bộ danh sách
        },
        addUser: (state, action: PayloadAction<User>) => {
            const isExits=state.find(x=>x.email===action.payload.email)
            if(!isExits){
                state.push(action.payload);
            }
        },
        removeUserByEmail: (state, action: PayloadAction<string>) => {
            return state.filter((user) => user.email !== action.payload);
        },
    },
});
export const { saveList,addUser,removeUserByEmail } = storeListChat.actions;
export default storeListChat.reducer;
