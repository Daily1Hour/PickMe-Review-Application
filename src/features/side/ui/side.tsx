import { MdAdd } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Text } from "@chakra-ui/react";
import {
    DrawerLayout,
    DrawerHeader,
    DrawerBody,
    IconButton,
    List,
    Item,
} from "@styleguide/react";

import { getSideData } from "../api/sideApi";
import { GetSideDTO } from "../api/getSideDTO";
import { useSideStore } from "../store/useSideStore";
import SideSkeleton from "./SideSkeleton";

/**
 * Sidebar 컴포넌트
 *
 * 이 컴포넌트는 인터뷰 리뷰 목록을 사이드 메뉴 형태로 렌더링합니다.
 * React Query를 사용해 서버로부터 리뷰 데이터를 불러오고, 필터링하여 출력합니다.
 *
 * 기능:
 * - 서버에서 인터뷰 리뷰 리스트를 조회하여 사이드바 항목으로 구성합니다.
 * - 로딩 중일 경우에는 `SideSkeleton`을 표시하며, 완료되면 필터된 결과를 렌더링합니다.
 * - 상단에 "작성하기" 버튼을 통해 새 리뷰 등록 페이지로 이동할 수 있습니다.
 *
 * UI 컴포넌트:
 * - `DrawerLayout`, `DrawerHeader`, `DrawerBody`: 사이드바의 전체 레이아웃을 구성합니다.
 * - `List`, `Item`: 사이드바 항목 리스트와 개별 항목을 구성합니다.
 * - `NavLink`: 리뷰 상세 페이지로 이동하는 링크입니다.
 * - `SideSkeleton`: 로딩 상태일 때 보여주는 스켈레톤 UI입니다.
 * - `IconButton`: 새 리뷰 작성 버튼입니다.
 *
 * @remarks
 * - 서버 응답 데이터는 `GetSideDTO[]` 형식이며, 각 항목은 리뷰 ID와 인터뷰 세부 정보를 포함합니다.
 * - React Router의 `NavLink`를 사용하여 클릭 시 해당 리뷰 상세 페이지로 이동합니다.
 *
 * @example
 * ```tsx
 * <Sidebar />
 * ```
 */
const Sidebar = () => {
    const searchQuery = useSideStore((state) => state.searchQuery); // 객체 형태 말고 변수로 받음

    const { data, isLoading } = useQuery<GetSideDTO[]>({
        queryKey: ["side"],
        queryFn: getSideData,
    });

    const formattedMenuItems = data?.map((item) => ({
        id: item.reviewId,
        label: `${item.interviewDetail.companyName} | ${item.interviewDetail.category}`,
    }));

    const filteredItems =
        formattedMenuItems?.filter((item) =>
            item.label.toLowerCase().includes(searchQuery.toLowerCase()),
        ) || [];

    return (
        <DrawerLayout>
            <DrawerHeader>
                <Text textStyle="xl" fontWeight="semibold">
                    목록
                </Text>
            </DrawerHeader>

            <DrawerBody>
                <List separator>
                    <Item justify="center" as={NavLink} to={`/`}>
                        <IconButton size="xs" title="작성하기">
                            <MdAdd />
                        </IconButton>
                    </Item>

                    {isLoading ? (
                        <SideSkeleton />
                    ) : (
                        filteredItems.map((item) => (
                            <Item key={item.id} as={NavLink} to={`/${item.id}`}>
                                <Text m={3}>{item.label}</Text>
                            </Item>
                        ))
                    )}
                </List>
            </DrawerBody>
        </DrawerLayout>
    );
};

export default Sidebar;
