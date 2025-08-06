import {ContentBlock} from "../../shared/ui/ContentBlock/ContentBlock.tsx";
import {MainView} from "../../entities/MainView";

export const MainPage = () => {
    return (
        <ContentBlock title={"Добро пожаловать в BikeGuard - защитим велосипеды вместе!"} children={<MainView/>}/>
    );
};
