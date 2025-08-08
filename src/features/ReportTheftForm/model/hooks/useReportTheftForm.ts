import {useReportTheftMutation} from "../../api/reportTheftApi.ts";
import type {ReportTheftRequest} from "../../api/types.ts";
import {useAlert} from "../../../../shared/hooks/useAlert.ts";

export const useReportTheftForm = () => {
    const [reportTheft, {isLoading}] = useReportTheftMutation();
    const {showAlert, contextHolder} = useAlert();

    const onFinish = async (values: ReportTheftRequest) => {
        try {
            const id = crypto.randomUUID();
            const licenseNumberId = crypto.randomUUID();
            await reportTheft({...values, clientId: id, licenseNumber: licenseNumberId});

            showAlert({type: "success", text: 'Кража зарегистрирована'})
        } catch (err) {
            showAlert({type: "error", text: 'Ошибка при регистрации кражи'})
            console.error('Ошибка при регистрации кражи:', err);
        }
    };

    return {
        onFinish, isLoading, contextHolder
    };
};
