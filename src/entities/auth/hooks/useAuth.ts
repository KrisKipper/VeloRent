import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useCheckAuthQuery} from '../api/authApi.ts';
import type {RootState} from "../../../app/store.ts";

export const useAuth = () => {
    const {token, isAuthenticated} = useSelector((state: RootState) => state.auth);
    const {data, isLoading, isError} = useCheckAuthQuery(undefined, {
        skip: !token,
    });

    useEffect(() => {
        if (isError && token) {
            localStorage.removeItem('token');
        }
    }, [isError, token]);

    return {
        isAuthenticated: isAuthenticated && !!data,
        isLoading: isLoading && !!token,
        token,
    };
};
