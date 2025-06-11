import React from 'react';
import {Button, Flex, Layout, Menu, Space} from 'antd';
import {Link} from 'react-router-dom';
import {useAuth} from "../../entities/auth/model/useAuth.ts";
import {routes} from "../../app/routing/constants.ts";

const {Header: AntHeader} = Layout;

export const Header: React.FC = () => {
    const {isAuthenticated, logout} = useAuth();

    return (
        <AntHeader className="shadow-sm m-auto bg-primary-200 w-full">
            <div className="container mx-auto flex justify-between items-center max-w-[1440px]">
                <Link to={routes.index} className="text-xl font-bold">
                    Velo App
                </Link>

                <Flex gap={16}>
                    <Menu mode="horizontal" className="border-0">
                        <Menu.Item key="home">
                            <Link to={routes.index}>Главная</Link>
                        </Menu.Item>
                        <Menu.Item key="bikes">
                            <Link to={routes.bikes}>Велосипеды</Link>
                        </Menu.Item>
                    </Menu>

                    <Space>
                        {isAuthenticated ? (
                            <Button onClick={logout}>Выйти</Button>
                        ) : (
                            <>
                                <Link to="/login">
                                    <Button type="text">Войти</Button>
                                </Link>
                                <Link to="/register">
                                    <Button type="primary">Регистрация</Button>
                                </Link>
                            </>
                        )}
                    </Space>
                </Flex>
            </div>
        </AntHeader>
    );
};
