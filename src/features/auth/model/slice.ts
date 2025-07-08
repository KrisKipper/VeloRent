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
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                authApi.endpoints.signIn.matchFulfilled,
                (state, {payload}) => {
                    state.token = payload.token;
                    state.isAuthenticated = true;
                    localStorage.setItem('token', payload.token);
                }
            )
            .addMatcher(
                authApi.endpoints.checkAuth.matchFulfilled,
                (state) => {
                    state.isAuthenticated = true;
                }
            )
            .addMatcher(
                authApi.endpoints.checkAuth.matchRejected,
                (state) => {
                    state.token = null;
                    state.isAuthenticated = false;
                    localStorage.removeItem('token');
                }
            );
    },
});

export const {logout} = authSlice.actions;
export const authReducer = authSlice.reducer;
