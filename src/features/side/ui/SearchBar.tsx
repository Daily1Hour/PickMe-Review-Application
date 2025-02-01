import { IconButton, Input } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

interface SearchBarProps {
    isSearchOpen: boolean;
    toggleSearch: () => void;
    searchQuery: string;
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({
    isSearchOpen,
    toggleSearch,
    searchQuery,
    onSearchChange,
}: SearchBarProps) => {
    return (
        <>
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
                <Input
                    value={searchQuery}
                    onChange={onSearchChange} // 검색어 입력 시 상태 업데이트
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
