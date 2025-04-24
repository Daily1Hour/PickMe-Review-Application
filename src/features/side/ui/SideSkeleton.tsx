import { Skeleton, VStack } from "@chakra-ui/react";
import { Item } from "@styleguide/react";

/**
 * SideSkeleton 컴포넌트
 *
 * 이 컴포넌트는 사이드바에 표시할 인터뷰 리뷰 목록을 불러오는 동안 보여주는 스켈레톤 UI입니다.
 *
 * 기능:
 * - 사이드바 데이터가 로딩 중일 때 임시로 스켈레톤 항목을 4개 렌더링하여 비어 있는 UI를 대체합니다.
 * - 로딩 완료 후에는 실제 사이드바 항목(`Item`)으로 대체됩니다.
 *
 * UI 컴포넌트:
 * - `VStack`: 스켈레톤 항목들을 수직으로 정렬합니다.
 * - `Item`: 각 항목의 레이아웃을 구성하는 컨테이너입니다.
 * - `Skeleton`: 로딩 상태를 나타내는 박스 컴포넌트로, 각 항목에 대해 1개씩 렌더링됩니다.
 *
 * @remarks
 * - `Sidebar` 컴포넌트에서 `isLoading`이 true일 때 조건부로 렌더링됩니다.
 * - 사용자 경험을 부드럽게 하기 위해 실제 데이터가 도착하기 전까지 시각적인 자리 표시자로 사용됩니다.
 *
 * @example
 * ```tsx
 * {isLoading ? <SideSkeleton /> : filteredItems.map(...)}
 * ```
 */
const SideSkeleton = () => {
    return (
        <VStack width="100%">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Item key={idx}>
                    <Skeleton height="50px" width="100%" borderRadius="md" />
                </Item>
            ))}
        </VStack>
    );
};

export default SideSkeleton;
