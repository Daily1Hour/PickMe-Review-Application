import { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { getSideData } from "../api/sideApi";
import { useQuery } from "@tanstack/react-query";
import { GetSideDTO } from "../api/getSideDTO";
import { useNavigate, useParams } from "react-router-dom";
import ButtonItem from "./ButtonItem";
import ReviewList from "./ReviewList";
import SearchBar from "./SearchBar";
import SidebarHeader from "./SidebarHeader";
import SidebarToggleButton from "./SidebarToggleButton";
import SidebarContainer from "./SidebarContainer";

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
                </SidebarContainer>
            )}
        </Flex>
    );
};

export default Sidebar;
