import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    count: 0,
    text: 'Hi'
}

export const counterSlice = createSlice({
    name: 'count',
    initialState,
    reducers: {
        incr: (state) => {
            state.count += 1;
        },
        decr: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        showHi: (state) => {
            state.text = 'Hello'
        },
        hideHi: (state) => {
            state.text = ''
        },
    }
})

export const {incr, decr, reset, showHi, hideHi} = counterSlice.actions; // ЭКШИОНЫ
export default counterSlice.reducer; // РЕДЬЮСЕР ДЛЯ СТОРА