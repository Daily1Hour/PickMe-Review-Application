import { VStack, Text } from "@chakra-ui/react";
import ButtonItem from "./ButtonItem";

interface ReviewListProps {
    filteredItems: { id: string; label: string }[] | undefined;
}

const ReviewList = ({ filteredItems }: ReviewListProps) => {
    return (
        <VStack align="stretch">
            {!filteredItems || filteredItems.length === 0 ? (
                <Text>검색된 항목이 없습니다.</Text>
            ) : (
                filteredItems.map((item) => (
                    <ButtonItem
                        key={item.id}
                        itemId={item.id}
                        label={item.label}
                    ></ButtonItem>
                ))
            )}
        </VStack>
    );
};

export default ReviewList;
