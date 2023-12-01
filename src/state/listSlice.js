import { createSlice } from '@reduxjs/toolkit';

const initialState = ['hello', 'there', 'a', 'b', 'c'];

const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        add: (state, actions) => {
            state.push(actions.payload)
        },
        sortUD: (state) => {
            state.sort()
        },
        sortDU: (state) => {
            state.sort((a,b)=> b.localeCompare(a));
        }
    }
})

export const listToShow = (state) => state.list;
export const {add, sortUD, sortDU} = listSlice.actions;
export default listSlice.reducer;