import {type SignUpRequest, useSignUpMutation} from "../api/authApi.ts";
import {useNavigate} from "react-router-dom";
import {message} from "antd";
import {routes} from "../../../app/routing/constants.ts";

export const useRegisterForm = () => {
    const [signUp, {isLoading}] = useSignUpMutation();
    const navigate = useNavigate();

    const onFinish = async (values: SignUpRequest) => {
        try {
            const id = crypto.randomUUID();
            await signUp({...values, clientId: id});
            
            navigate(routes.login);
            message.success('Вы зарегистрированы');
        } catch (err) {
            console.error('Ошибка при регистрации:', err);
            message.error('Ошибка при регистрации');
        }
    };

    return {
        onFinish, isLoading
    };
};
