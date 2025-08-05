import {useDispatch, useSelector} from 'react-redux';
import {logout} from './slice.ts';
import type {RootState} from "../../../app/store.ts";

export const useAuth = () => {
    const dispatch = useDispatch();
    const {token} = useSelector((state: RootState) => state.auth);

    const localToken = localStorage.getItem('token');
    const actualToken = token || localToken;


    const handleLogout = () => {
        localStorage.removeItem('token');
        dispatch(logout());
    }

    return {
        logout: handleLogout,
        isAuthenticated: actualToken,
        isLoading: false, // TODO
        token: actualToken,
    };
};
