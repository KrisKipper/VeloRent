import {Button, DatePicker, Form, Input, Select} from "antd";
import {COMMON_VALIDATOR, TEXT_ONLY_VALIDATOR} from "../../shared/lib/validators.ts";
import {BICYCLE_TYPES} from "../../shared/constants/bikes.ts";
import {useReportTheftForm} from "./model/hooks/useReportTheftForm.ts";

export const ReportTheftForm = () => {
    const {onFinish, isLoading, contextHolder} = useReportTheftForm()

    return (
        <>
            <Form onFinish={onFinish} layout="vertical" className={"w-[50%] my-0 mx-auto flex flex-col justify-center"}>
                <Form.Item
                    name="ownerFullName"
                    label="Имя и фамилия владельца"
                    rules={[COMMON_VALIDATOR, TEXT_ONLY_VALIDATOR]}
                >
                    <Input placeholder="Иван Иванов"/>
                </Form.Item>

                <Form.Item name="type" label="Тип велосипеда" rules={[COMMON_VALIDATOR]}>
                    <Select
                        placeholder="Выберите тип велосипеда"
                        allowClear
                    >
                        {BICYCLE_TYPES.map(type => (
                            <Select.Option key={type.value} value={type.value}>
                                {type.label}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item name="color" label="Цвет">
                    <Input placeholder="Фиолетовый"/>
                </Form.Item>

                <Form.Item name="description" label="Описание происшествия">
                    <Input.TextArea showCount maxLength={300}/>
                </Form.Item>

                <Form.Item name="date" label="Дата кражи" rules={[COMMON_VALIDATOR]}>
                    <DatePicker placeholder={"Выберите дату"}/>
                </Form.Item>


                <Form.Item className={"flex items-center justify-center"}>
                    <Button
                        color="purple"
                        variant="solid"
                        htmlType="submit"
                        loading={isLoading}
                        block
                    >
                        Заявить
                    </Button>
                </Form.Item>
            </Form>
            {contextHolder}
        </>
    );
};
