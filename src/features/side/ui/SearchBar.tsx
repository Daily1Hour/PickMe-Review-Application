import { IconButton, Input } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { useSideStore } from "../store/useSideStore";

const SearchBar = () => {
    const { isSearchOpen, setIsSearchOpen, searchQuery, setSearchQuery } =
        useSideStore();
    return (
        <>
            {/* Search Button inside the Sidebar */}
            <IconButton
                aria-label="Search database"
                size="sm"
                onClick={() => setIsSearchOpen(!isSearchOpen)} // 클릭 시 검색창 토글
                position="absolute"
                top="80px"
                right="20px"
            >
                <LuSearch />
            </IconButton>

            {/* 검색창 표시 */}
            {isSearchOpen && (
                <Input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} // 검색어 입력 시 상태 업데이트
                    placeholder="면접 회고 검색..."
                    size="sm"
                    border="2px solid teal"
                    borderRadius="md"
                />
            )}
        </>
    );
};

export default SearchBar;
