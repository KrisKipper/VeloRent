import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from "../../../shared/api/instance.ts";


interface SignInRequest {
    email: string;
    password: string;
}

interface SignInResponse {
    token: string;
    user: {
        email: string;
        firstName?: string;
        lastName?: string;
    };
}

interface SignUpRequest {
    email: string;
    password: string;
    clientId: string;
    firstName?: string;
    lastName?: string;
}

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({
        signIn: builder.mutation<SignInResponse, SignInRequest>({
            query: (credentials) => ({
                url: '/auth/sign_in',
                method: 'POST',
                body: credentials,
            }),
        }),
        signUp: builder.mutation<void, SignUpRequest>({
            query: (credentials) => ({
                url: '/auth/sign_up',
                method: 'POST',
                body: credentials,
            }),
        }),
    }),
});

export const {
    useSignInMutation,
    useSignUpMutation,
} = authApi;
