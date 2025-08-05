import {LoginForm} from "../../features/auth/ui/LoginForm/LoginForm.tsx";
import {ContentBlock} from "../../shared/ui/ContentBlock/ContentBlock.tsx";


export const LoginPage = () => {
    return (
        <ContentBlock title={"Вход"} children={<LoginForm/>}/>
    );
};
