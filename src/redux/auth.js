import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../axios.config';

const initialState = {
    access_token: null,
    user: {
        money: 0,
        firstName: "",
        lastName: '',
        avatarUrl: '',
    }
};

export const incrementAsync = createAsyncThunk(
    'auth',
    async amount => {
        const response = await axiosInstance.get('auth/profile');
        return response.data;
    },
);

export const counterSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.access_token = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setMoney: (state, action) => {
            state.user = { ...state.user, money: action.payload }
        },
        logout: (state, action) => {
            state = initialState
        }
    },
    extraReducers: builder => {
        builder.addCase(incrementAsync.fulfilled, (state, action) => {
            state.user += action.payload;
        });
    },
});

export const { setToken, setUser, logout, setMoney } = counterSlice.actions;

export const selectToken = state => state.auth.access_token;
export const selectUser = state => state.auth.user;
export default counterSlice.reducer;

