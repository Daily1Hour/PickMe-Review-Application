import { useState } from "react";
import { Box } from "@chakra-ui/react";
import Sidebar from "../../features/side";
import FirstRender from "./ui/firstRender";
import ClickList from "./ui/clickList";
import CreateReviewPage from "@/features/create";

const ReviewPage = () => {
    const [state, setState] = useState({
        reviewId: "",
        isCreatingReview: false,
    });

    return (
        <div style={{ display: "flex" }}>
            <Sidebar
                //selectedItem={selectedItem}
                //setSelectedItem={setSelectedItem}
                setState={setState}
            />

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
                {state.isCreatingReview ? (
                    <CreateReviewPage state={setState} />
                ) : state.reviewId === "" ? (
                    <FirstRender state={setState} />
                ) : (
                    <ClickList selectedItem={state.reviewId} />
                )}
            </Box>
        </div>
    );
};

export default ReviewPage;
