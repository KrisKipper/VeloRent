import {Button, Form, Input} from 'antd';
import {useRegisterForm} from "../../model/useRegisterForm.ts";
import {COMMON_VALIDATOR, EMAIL_VALIDATOR, TEXT_ONLY_VALIDATOR} from "../../../../shared/lib/validators.ts";

export const RegisterForm = () => {
    const {onFinish, isLoading} = useRegisterForm()

    return (
        <Form onFinish={onFinish} layout="vertical" className={"w-[50%] my-0 mx-auto flex flex-col justify-center"}>
            <Form.Item
                name="firstName"
                label="Имя"
                rules={[TEXT_ONLY_VALIDATOR]}
            >
                <Input placeholder="Введите имя"/>
            </Form.Item>
            <Form.Item
                name="lastName"
                label="Фамилия"
                rules={[TEXT_ONLY_VALIDATOR]}
            >
                <Input placeholder="Введите фамилию"/>
            </Form.Item>
            <Form.Item
                name="email"
                label="Email"
                rules={[COMMON_VALIDATOR, EMAIL_VALIDATOR]}
            >
                <Input placeholder="user@example.com"/>
            </Form.Item>
            <Form.Item
                name="password"
                label="Пароль"
                rules={[COMMON_VALIDATOR]}
            >
                <Input.Password placeholder="••••••"/>
            </Form.Item>
            <Form.Item className={"flex items-center justify-center"}>
                <Button
                    color="purple"
                    variant="solid"
                    htmlType="submit"
                    loading={isLoading}
                    block
                >
                    Зарегистрироваться
                </Button>
            </Form.Item>
        </Form>
    );
};
