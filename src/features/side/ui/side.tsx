import { useEffect, useState } from "react";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { getSideData } from "../api/sideApi";
import { useQuery } from "@tanstack/react-query";
import { GetSideDTO } from "../api/getSideDTO";
import { useNavigate, useParams } from "react-router-dom";
import ButtonItem from "./ButtonItem";
import ReviewList from "./ReviewList";
import SearchBar from "./SearchBar";
import SidebarHeader from "./SidebarHeader";

const Sidebar = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(true);
    const [isSearchOpen, setIsSearchOpen] = useState(false); // 검색창 상태 관리
    const [searchQuery, setSearchQuery] = useState(""); // 검색 쿼리 상태 관리
    const [selectedReviewId, setSelectedReviewId] = useState<
        string | null | undefined
    >(null); // 선택된 리뷰 아이디 상태
    const { reviewId } = useParams<{ reviewId: string | undefined }>();
    const navigate = useNavigate();

    const { data } = useQuery<GetSideDTO[]>({
        queryKey: ["side"],
        queryFn: getSideData,
    });

    const formattedMenuItems = data?.map((item) => ({
        id: item.reviewId,
        label: `${item.interviewDetail.companyName} | ${item.interviewDetail.category}`,
    }));

    const filteredItems = formattedMenuItems?.filter((item) =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    useEffect(() => {
        setSelectedReviewId(reviewId);
    }, [reviewId]);

    return (
        <Flex height="100vh">
            {/* Toggle Button */}
            <IconButton
                aria-label="Toggle Sidebar"
                onClick={() => setSidebarVisible(!isSidebarVisible)}
                position="fixed"
                top="15px"
                left="20px"
                zIndex="10"
                size="sm"
            >
                <FiMenu />
            </IconButton>

            {/* Sidebar */}
            {isSidebarVisible && (
                <Box
                    position="fixed" // 화면에 고정
                    w="250px"
                    bg="gray.200" // 밝은 회색 배경
                    color="black" // 글자는 검정색
                    padding="20px"
                    display="flex"
                    flexDirection="column"
                    gap="10px"
                    height="100vh" // 화면을 가득 채움
                    overflowY="auto" // 스크롤 기능 추가
                >
                    <SidebarHeader title={"목록"} />

                    <ButtonItem
                        label={"새 작성"}
                        onClick={() => {
                            navigate("/");
                        }}
                        justifyContent={"center"}
                    />

                    <SearchBar
                        isSearchOpen={isSearchOpen}
                        toggleSearch={() => setIsSearchOpen(!isSearchOpen)}
                        searchQuery={searchQuery}
                        onSearchChange={(e) => setSearchQuery(e.target.value)}
                    />

                    <ReviewList
                        filteredItems={filteredItems}
                        selectedReviewId={selectedReviewId}
                        setSelectedReviewId={setSelectedReviewId}
                    />
                </Box>
            )}
        </Flex>
    );
};

export default Sidebar;
