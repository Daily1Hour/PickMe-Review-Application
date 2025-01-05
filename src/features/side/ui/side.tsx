import { useState, useEffect } from "react";
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

interface SidebarProps {
    selectedItem: string;
    setSelectedItem: (item: string) => void;
}

const Sidebar = ({ selectedItem, setSelectedItem }: SidebarProps) => {
    const [isSidebarVisible, setSidebarVisible] = useState(true);
    const [menuItems, setMenuItems] = useState<{ id: string; label: string }[]>(
        [],
    );
    const [isSearchOpen, setIsSearchOpen] = useState(false); // 검색창 상태 관리
    const [searchQuery, setSearchQuery] = useState(""); // 검색 쿼리 상태 관리
    const [filteredItems, setFilteredItems] = useState(menuItems); // 필터링된 메뉴 항목

    useEffect(() => {
        const fetchData = async () => {
            const data = await getSideData();
            console.log(data); // 콘솔 로그가 호출
            const formattedMenuItems = data.interviewReviews.map(
                (item: any) => ({
                    id: item.reviewId,
                    label: `${item.interviewDetail.companyName} | ${item.interviewDetail.category}`,
                }),
            );
            console.log(formattedMenuItems);
            setMenuItems(formattedMenuItems);
        };

        fetchData(); // getSideData 호출
    }, []); // 빈 배열로 설정하면 컴포넌트가 마운트될 때만 호출됨

    // menuItems 상태가 변경되면 filteredItems 상태도 업데이트
    useEffect(() => {
        setFilteredItems(menuItems); // menuItems가 업데이트될 때 filteredItems도 갱신
    }, [menuItems]);

    // 검색창 토글 함수
    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    useEffect(() => {
        const filtered = menuItems.filter((item) =>
            item.label.toLowerCase().includes(searchQuery.toLowerCase()),
        );
        setFilteredItems(filtered);
    }, [searchQuery]); // searchQuery가 변경될 때마다 실행됨

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
                        left="195px"
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
                        {filteredItems.length === 0 ? (
                            <Text>검색된 항목이 없습니다.</Text>
                        ) : (
                            filteredItems.map((item) => (
                                <Button
                                    key={item.id}
                                    variant="ghost"
                                    colorScheme="teal"
                                    mb="10px"
                                    onClick={() => setSelectedItem(item.id)}
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
