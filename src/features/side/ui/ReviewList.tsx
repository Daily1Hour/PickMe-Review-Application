import { VStack, Text } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import ButtonItem from "./ButtonItem";

interface ReviewListProps {
    filteredItems: { id: string; label: string }[] | undefined;
}

const ReviewList = ({ filteredItems }: ReviewListProps) => {
    const navigate = useNavigate();

    const { reviewId } = useParams<{ reviewId: string | undefined }>();

    // 클릭된 아이템의 ID가 현재 reviewId와 같으면 navigate를 호출하지 않음
    const handleButtonClick = (itemId: string) => {
        if (reviewId !== itemId) {
            navigate(`${itemId}`); // 클릭 시 item.id 값을 URL에 추가하여 해당 경로로 이동
        }
    };

    return (
        <VStack align="stretch">
            {!filteredItems || filteredItems.length === 0 ? (
                <Text>검색된 항목이 없습니다.</Text>
            ) : (
                filteredItems.map((item) => (
                    <ButtonItem
                        key={item.id}
                        label={item.label}
                        isSelected={reviewId === item.id}
                        onClick={() => handleButtonClick(item.id)}
                    ></ButtonItem>
                ))
            )}
        </VStack>
    );
};

export default ReviewList;
