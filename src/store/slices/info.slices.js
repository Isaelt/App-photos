import { createSlice } from '@reduxjs/toolkit';

export const infoSlice = createSlice({
    name: 'info',
    initialState: '',
    reducers: {
        setInfoG: (state, action) => action.payload
    }
})

export const { setInfoG } = infoSlice.actions;

export default infoSlice.reducer;