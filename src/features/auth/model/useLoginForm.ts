import {useSignInMutation} from "../api/authApi.ts";
import {useNavigate} from "react-router-dom";
import {message} from "antd";
import {useDispatch} from "react-redux";
import {setToken} from "./slice.ts";
import {routes} from "../../../app/routing/constants.ts";

export const useLoginForm = () => {
    const [signIn, {isLoading}] = useSignInMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onFinish = async (values: { email: string; password: string }) => {
        try {
            const response = await signIn(values);
            if (!response.data?.data) {
                message.error('Ошибка получения данных');
                return;
            }

            const token = response.data.data.token;
            dispatch(setToken(token));
            message.success('Вход выполнен успешно!');
            navigate(routes.index);
        } catch (err) {
            console.error('Ошибка при входе:', err);
            message.error('Неверный email или пароль');
        }
    };

    return {
        onFinish, isLoading
    };
};
