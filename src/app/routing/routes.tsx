import {createBrowserRouter} from 'react-router-dom';
import {LoginPage} from "../../pages/login";
import {Layout} from "../../shared/ui/Layout/Layout.tsx";
import {MainPage} from "../../pages/main";
import {routes} from "./constants.ts";

export const router = createBrowserRouter([
    {
        path: routes.index,
        element: <Layout/>,
        children: [
            {
                path: routes.index,
                element: <MainPage/>,
            },
            {
                path: routes.login,
                element: <LoginPage/>,
            },
        ],
    },
]);


//<ProtectedRoute><MainPage/>
//                 </ProtectedRoute>
