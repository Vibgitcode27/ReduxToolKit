"use client"

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { parseArgs } from "util";

export interface CounterState {
    value : number;
}

export interface AsyncCall {
    count : number,
    name : string,
    gender : string,
    probablity : number,
    loading : boolean,
    error : any
}

const initialState2 : AsyncCall = {
    count : 0,
    name : '',
    gender : '',
    probablity : 0,
    loading : false,
    error : null
}

const initialState : CounterState = {
    value : 0
}


export const getAPIData = createAsyncThunk("counter" , async () => {
    const response = await fetch("https://api.genderize.io/?name=luc")
    const data = await response.json();
    return data;
})

export const gitUsers = createSlice({
    name: "gitUser",
    initialState: initialState2,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAPIData.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAPIData.fulfilled, (state, action) => {
                state.loading = false;
                state.count = action.payload.count;
                state.name = action.payload.name;
                state.gender = action.payload.gender;
                state.probablity = action.payload.probablity;
            })
            .addCase(getAPIData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const counterSlice = createSlice ({
    name : 'counter' ,
    initialState,
    reducers: {
        increment : (state) => { state.value += 1},
        decrement : (state) => { state.value -= 1},
        incrementByAmount : (state , action) => {
            state.value += action.payload;
        }
    }
})

export const { increment , decrement , incrementByAmount } = counterSlice.actions
export default counterSlice.reducer;