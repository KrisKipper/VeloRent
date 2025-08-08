import {ContentBlock} from "../../shared/ui/ContentBlock/ContentBlock.tsx";
import {ReportTheftForm} from "../../features/ReportTheftForm/ReportTheftForm.tsx";


export const ReportTheftPage = () => {
    return (
        <ContentBlock title={"Сообщить о краже"} children={<ReportTheftForm/>}/>
    );
};
