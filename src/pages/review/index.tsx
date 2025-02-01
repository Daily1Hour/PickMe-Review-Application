import { Box } from "@chakra-ui/react";
import Sidebar from "../../features/side";
import ReviewPage from "@/features/review";

const Review = () => {
    return (
        <div style={{ display: "flex" }}>
            <Sidebar />

            <Box
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
                <ReviewPage />
            </Box>
        </div>
    );
};

export default Review;
