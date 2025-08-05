import React from 'react';
import {Button, Flex, Layout, Space} from 'antd';
import {Link} from 'react-router-dom';
import {useAuth} from "../../features/auth/model/useAuth.ts";
import {routes} from "../../app/routing/constants.ts";
import {NavigationMenu} from "../../features/NavigationMenu/ui/NavigationMenu.tsx";

const {Header: AntHeader} = Layout;

export const Header: React.FC = () => {
    const {isAuthenticated, logout} = useAuth();

    return (
        <AntHeader className="shadow-sm m-auto bg-primary-200 w-full p-4 min-h-max">
            <div className="container mx-auto flex justify-between items-center max-w-[1440px]">
                <Link to={routes.index} className="text-xl font-bold">
                    Velo Rent
                </Link>

                <Flex gap={16}>
                    <Space>
                        {isAuthenticated ? (
                            <Button onClick={logout}>Выйти</Button>
                        ) : (
                            <>
                                <Link to="/login">
                                    <Button color="purple" variant="outlined">Войти</Button>
                                </Link>
                                <Link to="/register">
                                    <Button color="purple" variant="solid">Регистрация</Button>
                                </Link>
                            </>
                        )}
                    </Space>
                    <NavigationMenu/>
                </Flex>
            </div>
        </AntHeader>
    );
};
