import {Link} from "react-router-dom";
import {routes} from "../../../app/routing/constants.ts";
import {Menu} from "antd";

const menuItems = [
    {key: "home", to: routes.index, label: "Главная"},
    {key: "reportTheft", to: routes.reportTheft, label: "Сообщить о краже"},
    {key: "bikes", to: routes.bikes, label: "Велосипеды"},
];

export const NavigationMenu = () => (
    <Menu
        mode="horizontal"
        className="border-0 bg-primary-200 max-w-[100px]"
        items={menuItems.map((item) => ({
            key: item.key,
            label: <Link to={item.to}>{item.label}</Link>,
        }))}
    />
);
