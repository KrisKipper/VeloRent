import React from 'react';
import {Outlet} from 'react-router-dom';
import {ConfigProvider, Layout as AntLayout} from 'antd';
import {Header} from "../../../widgets/Header/Header.tsx";
import '../../styles/global.css';

const {Content} = AntLayout;

export const Layout: React.FC = () => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#00b96b',
                },
            }}
        >
            <AntLayout className="flex justify-center items-center w-[100vw] min-h-[100vh]">
                <Header/>

                <Content className="container m-auto">
                    <Outlet/>
                </Content>
            </AntLayout>
        </ConfigProvider>
    );
};
