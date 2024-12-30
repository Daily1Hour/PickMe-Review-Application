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

const Sidebar = () => {
    const [selectedItem, setSelectedItem] = useState("면접 회고 1");

    const [isSidebarVisible, setSidebarVisible] = useState(true);

    // 메뉴 항목
    const menuItems = [
        "면접 회고 1",
        "면접 회고 2",
        "면접 회고 3",
        "면접 회고 4",
        "면접 회고 5",
    ];

    const [isSearchOpen, setIsSearchOpen] = useState(false); // 검색창 상태 관리
    const [searchQuery, setSearchQuery] = useState(""); // 검색 쿼리 상태 관리
    const [filteredItems, setFilteredItems] = useState(menuItems); // 필터링된 메뉴 항목

    // 검색창 토글 함수
    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    useEffect(() => {
        const filtered = menuItems.filter((item) =>
            item.toLowerCase().includes(searchQuery.toLowerCase()),
        );
        setFilteredItems(filtered);
    }, [searchQuery]); // searchQuery가 변경될 때마다 실행됨

    return (
        <Flex height="100vh">
            {/* Toggle Button */}
            <IconButton
                aria-label="Toggle Sidebar"
                onClick={() => setSidebarVisible(!isSidebarVisible)}
                position="absolute"
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
                    w="250px"
                    bg="gray.200" // 밝은 회색 배경
                    color="black" // 글자는 검정색
                    padding="20px"
                    display="flex"
                    flexDirection="column"
                    gap="10px"
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
                                    key={item}
                                    variant="ghost"
                                    colorScheme="teal"
                                    mb="10px"
                                    onClick={() => setSelectedItem(item)}
                                    justifyContent="flex-start" // 텍스트를 왼쪽 정렬
                                >
                                    {item}
                                </Button>
                            ))
                        )}
                    </VStack>
                </Box>
            )}

            {/* Main Content */}
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
        </Flex>
    );
};

export default Sidebar;
