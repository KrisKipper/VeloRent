import {useSignUpMutation} from "../api/authApi.ts";
import {useNavigate} from "react-router-dom";
import {routes} from "../../../app/routing/constants.ts";
import type {SignUpRequest} from "../api/types.ts";
import {useAlert} from "../../../shared/hooks/useAlert.ts";

export const useRegisterForm = () => {
    const [signUp, {isLoading}] = useSignUpMutation();
    const navigate = useNavigate();
    const {showAlert, contextHolder} = useAlert();

    const onFinish = async (values: SignUpRequest) => {
        try {
            const id = crypto.randomUUID();
            await signUp({...values, clientId: id});

            navigate(routes.login);
            showAlert({type: "success", text: 'Вы зарегистрированы'})
        } catch (err) {
            console.error('Ошибка при регистрации:', err);
            showAlert({type: "success", text: 'Ошибка при регистрации'})
        }
    };

    return {
        onFinish, isLoading, contextHolder
    };
};
