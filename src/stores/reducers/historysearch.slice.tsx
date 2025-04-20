import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface HistorySearch{
    id?:number;
    title:string;
    time:string;
}
const initialState:HistorySearch[]=[];

const storeHistorySearch=createSlice({
    name:'storeHistorySearch',
    initialState,
    reducers:{
        addHistorySearch:(state,action:PayloadAction<HistorySearch>)=>{
            if(action.payload.title === ''){
                return;
            }
            const history:HistorySearch={
                id:state.length+1,
                title:action.payload.title,
                time:new Date().toDateString()
            }
            state.unshift(history)
        },
        removeHistorySearch:(state,action:PayloadAction<number>)=>{
            const index = state.findIndex(item => item.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        }
    }
});
export const {addHistorySearch,removeHistorySearch}=storeHistorySearch.actions;
export default storeHistorySearch.reducer;