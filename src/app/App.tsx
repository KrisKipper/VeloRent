import {ConfigProvider} from 'antd';
import {RouterProvider} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from "./store.ts";
import {router} from "./routing/routes.tsx";
import '../shared/styles/global.css';

function App() {
    return (
        <ConfigProvider>
            <Provider store={store}>
                <RouterProvider router={router}/>
            </Provider>
        </ConfigProvider>
    );
}

export default App;
