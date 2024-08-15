import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from '@reduxjs/toolkit';

type CounterTyoe = {
    count: number;
}
const initialState = { count: 0}

const counterSlice = createSlice({
    name:"counter",
    initialState,
    // reducers**
    // protita action er jnno reducer thakbe.
    // zemon increment 1ta action, decrement 1ta action. emn protita action er jnno reducer thakbe
    reducers: {
        increment: (state )=>{
            state.count = state.count + 1;
        },
        decrement: (state)=>{
            state.count = state.count - 1;
        },

        // payload
        incrementByValue:(state, action) =>{
            state.count = state.count + action.payload;
        }

    },
})

export const {decrement, increment, incrementByValue} = counterSlice.actions;
export default counterSlice.reducer;