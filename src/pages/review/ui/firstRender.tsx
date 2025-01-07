import { Text, Button, Box } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

interface Props {
    onCreate: (reviewId: string | null) => void;
}

const FirstRender = ({ onCreate }: Props) => {
    // 버튼 클릭 시 호출되는 함수
    const handleCreateReviewClick = () => {
        onCreate(null);
    };

    return (
        // 처음 렌더링 될 때
        <Box
            flex="1"
            padding="20px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh" // 화면 전체 높이를 채움
        >
            <Text
                fontSize="2xl"
                fontWeight="bold"
                marginBottom="10px"
                textAlign="center"
            >
                면접 회고 작성하기
            </Text>
            <Text textAlign="center">
                면접 회고를 작성하려면 아래 버튼을 클릭하세요.
            </Text>
            <Button
                colorScheme="teal"
                marginTop="20px"
                textAlign="center"
                onClick={handleCreateReviewClick} // 버튼 클릭 시 페이지 이동
            >
                면접 회고 작성하기
            </Button>
        </Box>
    );
};

export default FirstRender;
