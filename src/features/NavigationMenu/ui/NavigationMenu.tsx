import React from "react";
import {Link} from "react-router-dom";
import {routes} from "../../../app/routing/constants.ts";
import {Menu} from 'antd';


export const NavigationMenu: React.FC = () => {
    return (
        <Menu mode="horizontal" className="border-0">
            <Menu.Item key="home">
                <Link to={routes.index}>Главная</Link>
            </Menu.Item>
            <Menu.Item key="bikes">
                <Link to={routes.bikes}>Велосипеды</Link>
            </Menu.Item>
        </Menu>
    )
}
