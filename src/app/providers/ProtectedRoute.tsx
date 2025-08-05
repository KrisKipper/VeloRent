import {Navigate, useLocation} from 'react-router-dom';
import type {ReactNode} from 'react';
import {routes} from "../routing/constants.ts";
import {useAuth} from "../../features/auth/model/useAuth.ts";

export const ProtectedRoute = ({children}: { children: ReactNode }) => {
    const {isAuthenticated, isLoading} = useAuth();
    const location = useLocation();

    if (isLoading) {
        return <div>Загрузка...</div>;
    }

    if (!isAuthenticated) {
        return <Navigate to={routes.login} state={{from: location}} replace/>;
    }

    return children;
};
