import { useSelector, useDispatch } from 'react-redux';
import { logout } from './slice.ts';
import type {RootState} from "../../../app/store.ts";

export const useAuth = () => {
    const { token } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    return {
        isAuthenticated: !!token,
        logout: () => dispatch(logout()),
    };
};
