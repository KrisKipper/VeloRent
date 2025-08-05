import {ContentBlock} from "../../shared/ui/ContentBlock/ContentBlock.tsx";
import {RegisterForm} from "../../features/auth/ui/RegisterForm/RegisterForm.tsx";


export const RegisterPage = () => {
    return (
        <ContentBlock title={"Регистрация"} children={<RegisterForm/>}/>
    );
};
