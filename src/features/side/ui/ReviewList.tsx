import { VStack, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import ButtonItem from "./ButtonItem";

interface ReviewListProps {
    filteredItems: { id: string; label: string }[] | undefined;
    selectedReviewId: string | undefined;
    setSelectedReviewId: Dispatch<SetStateAction<string | undefined>>;
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
                    <ButtonItem
                        key={item.id}
                        label={item.label}
                        isSelected={selectedReviewId === item.id}
                        onClick={() => {
                            navigate(`${item.id}`); // 클릭 시 item.id 값을 URL에 추가하여 해당 경로로 이동
                            setSelectedReviewId(item.id);
                        }}
                    ></ButtonItem>
                ))
            )}
        </VStack>
    );
};

export default ReviewList;
