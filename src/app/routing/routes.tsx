import {createBrowserRouter} from 'react-router-dom';
import {LoginPage} from "../../pages/login";
import {Layout} from "../../shared/ui/Layout/Layout.tsx";
import {routes} from "./constants.ts";
import {MainPage} from "../../pages/main";
import {ProtectedRoute} from "../providers/ProtectedRoute.tsx";
import {RegisterPage} from "../../pages/register";
import {ReportTheftPage} from "../../pages/report-theft";

export const router = createBrowserRouter([
    {
        path: routes.index,
        element: <Layout/>,
        children: [
            {
                path: routes.index,
                element:
                    <ProtectedRoute>
                        <MainPage/>
                    </ProtectedRoute>,
            },
            {
                path: routes.login,
                element: <LoginPage/>,
            },
            {
                path: routes.register,
                element: <RegisterPage/>,
            },
            {
                path: routes.reportTheft,
                element: <ReportTheftPage/>,
            },
        ],
    },
]);
