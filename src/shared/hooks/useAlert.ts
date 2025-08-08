import {message} from "antd";
import type {MessageType} from "../types/message.ts";

type ShowAlertProps = {
    type: MessageType;
    text: string;
}

export const useAlert = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const showAlert = ({type, text}: ShowAlertProps) => {
        messageApi.open({
            type: type,
            content: text,
        });
    }

    return {
        contextHolder,
        showAlert,
    };
};
