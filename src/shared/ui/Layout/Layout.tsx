import React from 'react';
import {Outlet} from 'react-router-dom';
import {Card, ConfigProvider, Layout as AntLayout} from 'antd';
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
            <AntLayout className="flex justify-center items-center w-[100vw] min-h-[100vh]"
                       style={{background: `center / cover no-repeat url("src/assets/bike.jpg")`}}>
                <Header/>

                <Content className="container m-auto mt-6">
                    <Card>
                        <Outlet/>
                    </Card>
                </Content>
            </AntLayout>
        </ConfigProvider>
    );
};
