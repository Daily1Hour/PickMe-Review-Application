import { Box, Heading, Button } from "@chakra-ui/react";

import InterviewDetail from "./ui/InterviewDetail";
import Preparation from "./ui/Preparation";
import InterviewProcess from "./ui/InterviewProcess";
import QuestionsAnswers from "./ui/QuestionsAnswers";
import Communication from "./ui/Communication";
import InterviewAnalysis from "./ui/InterviewAnalysis";
import NextPreparation from "./ui/NextPreparation";

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
            gap="100px" // 자식 요소들 사이에 20px 간격
        >
            <Heading textAlign="center" size="3xl" marginTop="50px">
                면접 회고 작성
            </Heading>

            <InterviewDetail />
            <Preparation />
            <InterviewProcess />
            <QuestionsAnswers />
            <Communication />
            <InterviewAnalysis />
            <NextPreparation />
            <Button colorPalette="green">저장</Button>
        </Box>
    );
};

export default CreateReviewPage;