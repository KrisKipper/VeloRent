import {Button, Form, Input} from 'antd';
import {useLoginForm} from "../../model/useLoginForm.ts";

export const LoginForm = () => {
    const {onFinish, isLoading} = useLoginForm()

    return (
        <Form onFinish={onFinish} layout="vertical" className={"w-[50%] my-0 mx-auto flex flex-col justify-center"}>
            <Form.Item
                name="email"
                label="Email"
                rules={[
                    {required: true, message: 'Пожалуйста, введите email!'},
                    {type: 'email', message: 'Некорректный email'},
                ]}
            >
                <Input placeholder="user@example.com"/>
            </Form.Item>
            <Form.Item
                name="password"
                label="Пароль"
                rules={[{required: true, message: 'Пожалуйста, введите пароль!'}]}
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
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};
