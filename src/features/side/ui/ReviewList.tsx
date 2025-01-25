import { VStack, Button, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

interface ReviewListProps {
    filteredItems: { id: string; label: string }[] | undefined;
    selectedReviewId: string | undefined | null;
    setSelectedReviewId: Dispatch<SetStateAction<string | null | undefined>>;
}

const ReviewList = ({
    filteredItems,
    selectedReviewId,
    setSelectedReviewId,
}: ReviewListProps) => {
    const navigate = useNavigate();
    return (
        <VStack align="stretch">
            {!filteredItems || filteredItems.length === 0 ? (
                <Text>검색된 항목이 없습니다.</Text>
            ) : (
                filteredItems.map((item) => (
                    <Button
                        key={item.id}
                        variant={
                            selectedReviewId === item.id ? "solid" : "ghost"
                        }
                        colorScheme={
                            selectedReviewId === item.id ? "teal" : "gray"
                        }
                        mb="10px"
                        onClick={() => {
                            navigate(`${item.id}`); // 클릭 시 item.id 값을 URL에 추가하여 해당 경로로 이동
                            setSelectedReviewId(item.id);
                        }}
                        justifyContent="flex-start" // 텍스트를 왼쪽 정렬
                    >
                        {item.label}
                    </Button>
                ))
            )}
        </VStack>
    );
};

export default ReviewList;
