import { Text } from "@chakra-ui/react";

interface Props {
    selectedItem: string;
}

const ClickList = ({ selectedItem }: Props) => {
    return (
        // 사이드바에서 목록 클릭 시
        <>
            <Text
                fontSize="2xl"
                fontWeight="bold"
                marginBottom="10px"
                textAlign="center"
            >
                {selectedItem}
            </Text>
            <Text textAlign="center">
                This is the detailed content for <strong>{selectedItem}</strong>
                .
            </Text>
        </>
    );
};

export default ClickList;
