import {useSignInMutation} from "../api/authApi.ts";
import {useNavigate} from "react-router-dom";
import {message} from "antd";
import Cookies from "js-cookie";

export const useLoginForm = () => {
    const [signIn, {isLoading}] = useSignInMutation();
    const navigate = useNavigate();

    const onFinish = async (values: { email: string; password: string }) => {
        try {
            const {token} = await signIn(values).unwrap();
            Cookies.set("token", token);
            message.success('Вход выполнен успешно!');
            navigate('/');
        } catch (err) {
            console.error('Ошибка при входе:', err);
            message.error('Неверный email или пароль');
        }
    };

    return {
        onFinish, isLoading
    };
};
