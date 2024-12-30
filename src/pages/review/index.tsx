import { useState } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import Sidebar from "./ui/sidebar";
import { useNavigate } from "react-router";

const ReviewPage = () => {
    const [selectedItem, setSelectedItem] = useState<string>("");

    const navigate = useNavigate(); // 페이지 이동을 위한 navigate 훅

    // 버튼 클릭 시 호출되는 함수
    const handleCreateReviewClick = () => {
        navigate("/create-review"); // "/create-review" 페이지로 이동
    };

    return (
        <div style={{ display: "flex" }}>
            {/* Sidebar에 selectedItem과 setSelectedItem을 props로 전달 */}
            <Sidebar
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
            />

            {/* Main Content 영역 */}
            <Box
                flex="1"
                bg="gray.100"
                padding="20px"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                height="100vh" // 화면 전체 높이를 채움
            >
                {selectedItem === "" ? (
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
                ) : (
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
                            This is the detailed content for{" "}
                            <strong>{selectedItem}</strong>.
                        </Text>
                    </>
                )}
            </Box>
        </div>
    );
};

export default ReviewPage;
