import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0}

const counterSlice = createSlice({
    name:"counter",
    initialState,
    // protita action er jnno reducer thakbe.
    // zemon increment 1ta action, decrement 1ta action. emn protita action er jnno reducer thakbe
    reducers: {},
})



