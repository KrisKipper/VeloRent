import {createSlice} from '@reduxjs/toolkit';
import {authApi} from '../api/authApi.ts';

interface AuthState {
    token: string | null;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    token: localStorage.getItem('token') || null,
    isAuthenticated: !!localStorage.getItem('token'),
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.token = null;
            state.isAuthenticated = false;
            localStorage.removeItem('token');
        },
        setToken: (state, action) => {
            state.token = action.payload;
            state.isAuthenticated = true;
            localStorage.setItem('token', action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                authApi.endpoints.signIn.matchFulfilled,
                (state, {payload}) => {
                    // payload: { status: 'OK', data: { token: string, user: {...} } }
                    state.token = payload.token;
                    state.isAuthenticated = true;
                    localStorage.setItem('token', payload.token);
                }
            )
    },
});

export const {logout, setToken} = authSlice.actions;
export const authReducer = authSlice.reducer;
