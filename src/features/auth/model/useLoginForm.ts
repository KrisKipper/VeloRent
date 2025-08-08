import {useSignInMutation} from "../api/authApi.ts";
import {useNavigate} from "react-router-dom";
import {message} from "antd";
import {useDispatch} from "react-redux";
import {setToken} from "./slice.ts";
import {routes} from "../../../app/routing/constants.ts";
import {useAlert} from "../../../shared/hooks/useAlert.ts";

export const useLoginForm = () => {
    const [signIn, {isLoading}] = useSignInMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {showAlert, contextHolder} = useAlert();

    const onFinish = async (values: { email: string; password: string }) => {
        try {
            const response = await signIn(values);
            if (!response.data?.data) {
                message.error('Ошибка получения данных');
                return;
            }

            const token = response.data.data.token;
            dispatch(setToken(token));
            showAlert({type: "success", text: 'Вход выполнен успешно!'})
            navigate(routes.index);
        } catch (err) {
            console.error('Ошибка при входе:', err);
            showAlert({type: "success", text: 'Неверный email или пароль'})
        }
    };

    return {
        onFinish, isLoading, contextHolder
    };
};
