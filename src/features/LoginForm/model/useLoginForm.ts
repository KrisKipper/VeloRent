import {useSignInMutation} from "../../../entities/auth/api/authApi.ts";
import {useNavigate} from "react-router-dom";
import {message} from "antd";

export const useLoginForm = () => {
    const [signIn, {isLoading}] = useSignInMutation();
    const navigate = useNavigate();

    const onFinish = async (values: { email: string; password: string }) => {
        try {
            const {token} = await signIn(values).unwrap();
            message.success('Вход выполнен успешно!');
            navigate('/');
        } catch (err) {
            message.error('Неверный email или пароль');
        }
    };

    return {
        onFinish, isLoading
    };
};
