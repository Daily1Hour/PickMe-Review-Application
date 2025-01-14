import { useEffect, useState } from "react";
import {
    Box,
    Flex,
    Text,
    VStack,
    Button,
    IconButton,
    Input,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { LuSearch } from "react-icons/lu";
import { getSideData } from "../api/sideApi";
import { useQuery } from "@tanstack/react-query";
import { GetSideDTO } from "../api/getSideDTO";

interface SidebarProps {
    reviewId: string | null | undefined;
    onSelect: (reviewId: string) => void;
}

const Sidebar = ({ reviewId, onSelect }: SidebarProps) => {
    const [isSidebarVisible, setSidebarVisible] = useState(true);
    const [isSearchOpen, setIsSearchOpen] = useState(false); // 검색창 상태 관리
    const [searchQuery, setSearchQuery] = useState(""); // 검색 쿼리 상태 관리
    const [selectedReviewId, setSelectedReviewId] = useState<
        string | null | undefined
    >(null); // 선택된 리뷰 아이디 상태

    const { data } = useQuery<GetSideDTO[]>({
        queryKey: ["side"],
        queryFn: getSideData,
    });

    const formattedMenuItems = data?.map((item) => ({
        id: item.reviewId,
        label: `${item.interviewDetail.companyName} | ${item.interviewDetail.category}`,
    }));

    // 검색창 토글 함수
    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

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
                    {/* Sidebar Header */}

                    <Text fontSize="xl" fontWeight="bold" textAlign="center">
                        목록
                    </Text>

                    {/* Search Button inside the Sidebar */}
                    <IconButton
                        aria-label="Search database"
                        size="sm"
                        onClick={toggleSearch} // 클릭 시 검색창 토글
                        position="absolute"
                        top="15px"
                        right="20px"
                    >
                        <LuSearch />
                    </IconButton>

                    {/* 검색창 표시 */}
                    {isSearchOpen && (
                        <Box>
                            <Input
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)} // 검색어 입력 시 상태 업데이트
                                placeholder="면접 회고 검색..."
                                size="sm"
                                border="2px solid teal"
                                borderRadius="md"
                            />
                        </Box>
                    )}

                    {/* 메뉴 항목 리스트 */}
                    <VStack align="stretch">
                        {!filteredItems || filteredItems.length === 0 ? (
                            <Text>검색된 항목이 없습니다.</Text>
                        ) : (
                            filteredItems.map((item) => (
                                <Button
                                    key={item.id}
                                    variant={
                                        selectedReviewId === item.id
                                            ? "solid"
                                            : "ghost"
                                    }
                                    colorScheme={
                                        selectedReviewId === item.id
                                            ? "teal"
                                            : "gray"
                                    }
                                    mb="10px"
                                    onClick={() => {
                                        onSelect(item.id);
                                        setSelectedReviewId(item.id);
                                    }}
                                    justifyContent="flex-start" // 텍스트를 왼쪽 정렬
                                >
                                    {item.label}
                                </Button>
                            ))
                        )}
                    </VStack>
                </Box>
            )}
        </Flex>
    );
};

export default Sidebar;
