import { useState } from "react";
import { Box } from "@chakra-ui/react";
import Sidebar from "../../features/side";
import FirstRender from "./ui/firstRender";
import ClickList from "./ui/clickList";
import CreateReviewPage from "@/features/create";

const ReviewPage = () => {
    const [selectedItem, setSelectedItem] = useState<string>("");
    const [isCreatingReview, setIsCreatingReview] = useState<boolean>(false);

    return (
        <div style={{ display: "flex" }}>
            <Sidebar
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
            />

            <Box
                // flex="1"
                // bg="gray.100"
                // padding="20px"
                // display="flex"
                // flexDirection="column"
                // alignItems="center"
                // justifyContent="center"
                // height="100vh" // 화면 전체 높이를 채움
                flex="1"
                bg="whiteAlpha.100"
                paddingLeft="30%" // 좌측 패딩 10%
                paddingRight="30%" // 우측 패딩 10%
                display="flex"
                flexDirection="column"
                height="100vh" // 화면 전체 높이를 채움
                alignItems="left" // 수직 정렬
                justifyContent="flex-start" // 수평 정렬
                gap="100px" // 자식 요소들 사이에 20px 간격
            >
                {isCreatingReview ? (
                    <CreateReviewPage />
                ) : selectedItem === "" ? (
                    <FirstRender state={setIsCreatingReview} />
                ) : (
                    <ClickList selectedItem={selectedItem} />
                )}
            </Box>
        </div>
    );
};

export default ReviewPage;
