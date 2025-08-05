import {type ReactNode} from 'react';
import {Flex, Typography} from 'antd';

type Props = {
    title: string;
    children: ReactNode;
}

const {Title} = Typography;

export const ContentBlock = ({title, children}: Props) => {
    return (
        <Flex gap="middle" vertical align={"center"}>
            <Title>{title}</Title>
            {children}
        </Flex>
    );
};
