import {Flex, Image, List, Typography} from "antd";

const {Title, Paragraph, Text} = Typography;

const howItWorkData = [
    "Для пользователей: Заметили украденный велосипед? Сообщите об этом через наш сервис – ваша информация поможет вернуть транспорт и улучшить систему безопасности.",
    "Для сотрудников: Удобный инструмент для учета инцидентов, анализа данных и контроля за восстановлением пропавших велосипедов."
]

export const MainView = () => {
    return (
        <Flex vertical gap="medium">
            <Paragraph className={"font-medium"}>
                <Text strong>🚲 BikeGuard </Text>
                – это сервис для учета и отслеживания краж велосипедов в городах
                России. Мы помогаем
                компаниям, занимающимся прокатом, бороться с незаконными действиями, а пользователям – оперативно
                сообщать о случаях кражи.
            </Paragraph>
            <Flex gap="large" justify="space-between" align={"center"}>
                <List
                    size="small"
                    header={<Title level={3} className={"m-0"}>Как это работает?</Title>}
                    dataSource={howItWorkData}
                    className={"mb-4"}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                />
                <Image src={"src/assets/bikes.jpg"}/>
            </Flex>

            <Paragraph className={"mt-4"}>
                <Text strong>🔒 Безопасность и прозрачность</Text>
                – наш приоритет. Присоединяйтесь к BikeGuard и помогите сделать
                городской прокат велосипедов надежнее!
            </Paragraph>

            Приложение доступно без авторизации, но для полного функционала требуется регистрация.
        </Flex>
    );
};
