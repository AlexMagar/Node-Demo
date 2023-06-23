import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    dataList: [],
}
const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers:{
        showForm: (state, action) => {
            state.dataList = [...state.dataList, action.payload];
        }
    }
})

const {reducer, actions} = formSlice;
export const {showForm} = actions;
export default reducer;