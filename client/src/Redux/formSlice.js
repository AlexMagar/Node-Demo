import {createSlice} from "@reduxjs/toolkit"

const formSlice = createSlice({
    name: 'form',
    initialState : {
        data:[]
    },
    reducers:{
        showForm: (state, action) => {
            state.data = [...state.data, action.payload];
        }
    }

})

const {reducer, actions} = formSlice;
export const {showForm} = actions;
export default reducer;