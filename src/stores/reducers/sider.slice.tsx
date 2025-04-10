import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    open:false,
}

const storeSider=createSlice({
    name:'storeSider',
    initialState,
    reducers:{
        setOpen:(state,action)=>{
            state.open=!action.payload
        }
    }
});
export const {setOpen}=storeSider.actions;
export default storeSider.reducer;