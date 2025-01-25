import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

const SidebarContainer = ({ children }: { children: ReactNode }) => {
    return (
        <Flex
            position="fixed" // 화면에 고정
            w="250px"
            bg="gray.200" // 밝은 회색 배경
            color="black" // 글자는 검정색
            padding="20px"
            direction="column"
            gap="10px"
            height="100vh" // 화면을 가득 채움
            overflowY="auto" // 스크롤 기능 추가
        >
            {children}
        </Flex>
    );
};

export default SidebarContainer;
