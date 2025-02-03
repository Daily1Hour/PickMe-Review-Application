import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import { getSideData } from "../api/sideApi";
import { useQuery } from "@tanstack/react-query";
import { GetSideDTO } from "../api/getSideDTO";
import { useNavigate } from "react-router-dom";
import ButtonItem from "./ButtonItem";
import ReviewList from "./ReviewList";
import SearchBar from "./SearchBar";
import SidebarHeader from "./SidebarHeader";
import SidebarToggleButton from "./SidebarToggleButton";
import SidebarContainer from "./SidebarContainer";
import { useReviewIdStore } from "@/shared/store/useReviewIdStore";

const Sidebar = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(true);
    const [isSearchOpen, setIsSearchOpen] = useState(false); // 검색창 상태 관리
    const [searchQuery, setSearchQuery] = useState(""); // 검색 쿼리 상태 관리

    const { setReviewId } = useReviewIdStore();

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

    return (
        <Flex height="100vh">
            <SidebarToggleButton
                onClick={() => setSidebarVisible(!isSidebarVisible)}
            />

            {isSidebarVisible && (
                <SidebarContainer>
                    <SidebarHeader title={"목록"} />
                    <ButtonItem
                        label={"새 작성"}
                        onClick={() => {
                            navigate("/");
                            setReviewId(undefined);
                        }}
                        justifyContent={"center"}
                    />
                    <SearchBar
                        isSearchOpen={isSearchOpen}
                        toggleSearch={() => setIsSearchOpen(!isSearchOpen)}
                        searchQuery={searchQuery}
                        onSearchChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <ReviewList filteredItems={filteredItems} />
                </SidebarContainer>
            )}
        </Flex>
    );
};

export default Sidebar;
