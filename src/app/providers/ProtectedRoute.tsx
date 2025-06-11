import {Navigate, useLocation} from 'react-router-dom';
import type {ReactNode} from 'react';
import {useAuth} from "../../entities/auth/hooks/useAuth.ts";

export const ProtectedRoute = ({children}: { children: ReactNode }) => {
    const {isAuthenticated, isLoading} = useAuth();
    const location = useLocation();

    if (isLoading) {
        return <div>Загрузка...</div>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{from: location}} replace/>;
    }

    return children;
};
