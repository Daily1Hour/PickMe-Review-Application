import { Flex, Input, Stack, Image } from "@chakra-ui/react";
import { Container } from "@styleguide/react";

import Sidebar from "@/features/side";
import ReviewPage from "@/features/review";
import SectionBar from "@/features/side/ui/sectionNav/sectionBar";

const Review = () => {
    return (
        <Container>
            <Sidebar />
            <Flex
                flex="1"
                bg="whiteAlpha.100"
                paddingLeft="25%" // 좌측 패딩
                paddingRight="25%" // 우측 패딩
                display="flex"
                flexDirection="column"
                height="100vh" // 화면 전체 높이를 채움
                alignItems="left" // 수직 정렬
                justifyContent="flex-start" // 수평 정렬
                gap="100px" // 자식 요소들 사이에 20px 간격
            >
                <ReviewPage />
            </Flex>
            <SectionBar />
        </Container>
    );
};

export default Review;
