import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import Sidebar from "./ui/sidebar";

const ReviewPage = () => {
    const [selectedItem, setSelectedItem] = useState("면접 회고 1");

    return (
        <div style={{ display: "flex" }}>
            {/* Sidebar에 selectedItem과 setSelectedItem을 props로 전달 */}
            <Sidebar
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
            />

            {/* Main Content 영역 */}
            <Box flex="1" bg="gray.100" padding="20px">
                <Text
                    fontSize="2xl"
                    fontWeight="bold"
                    marginBottom="10px"
                    textAlign="center"
                >
                    {selectedItem}
                </Text>
                <Text textAlign="center">
                    This is the detailed content for{" "}
                    <strong>{selectedItem}</strong>.
                </Text>
            </Box>
        </div>
    );
};

export default ReviewPage;
