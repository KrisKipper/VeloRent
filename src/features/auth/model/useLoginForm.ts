import {useSignInMutation} from "../api/authApi.ts";
import {useNavigate} from "react-router-dom";
import {message} from "antd";
import {useDispatch} from "react-redux";
import {setToken} from "./slice.ts";

export const useLoginForm = () => {
    const [signIn, {isLoading}] = useSignInMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onFinish = async (values: { email: string; password: string }) => {
        try {
            const {data} = await signIn(values);
            if (data === undefined) {
                message.error('Ошибка получения данных');
                return;
            }
            localStorage.setItem('token', data.token);
            dispatch(setToken(data.token));
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
