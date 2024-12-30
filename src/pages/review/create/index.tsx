import { Box, Heading, Button } from "@chakra-ui/react";

import InterviewDetail from "./components/InterviewDetail";

const CreateReviewPage = () => {
    return (
        <Box
            flex="1"
            bg="whiteAlpha.100"
            paddingLeft="30%" // 좌측 패딩 10%
            paddingRight="30%" // 우측 패딩 10%
            display="flex"
            flexDirection="column"
            height="100vh" // 화면 전체 높이를 채움
            alignItems="left" // 수직 정렬
            justifyContent="flex-start" // 수평 정렬
        >
            <Heading textAlign="center" size="3xl" marginBottom="30px">
                면접 회고 작성
            </Heading>

            <InterviewDetail />

            <Button colorPalette="green">저장</Button>
        </Box>
    );
};

export default CreateReviewPage;
