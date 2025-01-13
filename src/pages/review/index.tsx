import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import Sidebar from "../../features/side";
import FirstRender from "./ui/firstRender";
import ReviewPage from "@/features/review";

const Review = () => {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const handleSidebarSelect = async (reviewId: string | null) =>
        setSelectedId(reviewId);

    useEffect(() => {
        // 페이지 렌더링 시 스크롤을 맨 위로 이동
        window.scrollTo(0, 0);
    }, [selectedId]); // state가 변경될 때마다 실행

    return (
        <div style={{ display: "flex" }}>
            <Sidebar reviewId={selectedId} onSelect={handleSidebarSelect} />

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
                <ReviewPage
                    reviewId={selectedId}
                    onSelect={handleSidebarSelect}
                />
            </Box>
        </div>
    );
};

export default Review;
