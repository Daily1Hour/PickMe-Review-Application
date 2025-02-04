import { VStack, Text } from "@chakra-ui/react";
import ButtonItem from "./ButtonItem";
import { useReviewIdStore } from "@/shared/store/useReviewIdStore";

interface ReviewListProps {
    filteredItems: { id: string; label: string }[] | undefined;
}

const ReviewList = ({ filteredItems }: ReviewListProps) => {
    const { reviewId, setReviewId } = useReviewIdStore();
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
                        onClick={() => {
                            setReviewId(item.id);
                        }}
                    ></ButtonItem>
                ))
            )}
        </VStack>
    );
};

export default ReviewList;
