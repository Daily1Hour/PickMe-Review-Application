import { Text, Button } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

interface Props {
    state: Dispatch<
        SetStateAction<{ reviewId: string; isCreatingReview: boolean }>
    >;
}

const FirstRender = ({ state }: Props) => {
    // 버튼 클릭 시 호출되는 함수
    const handleCreateReviewClick = () => {
        state({ reviewId: "", isCreatingReview: true }); // "/create-review" 페이지로 이동
    };

    return (
        // 처음 렌더링 될 때
        <>
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
        </>
    );
};

export default FirstRender;
