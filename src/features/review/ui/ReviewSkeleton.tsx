import { Flex, Skeleton } from "@chakra-ui/react";

/**
 * ReviewSkeleton 컴포넌트
 *
 * 이 컴포넌트는 리뷰 데이터를 로딩 중일 때 보여주는 스켈레톤 UI입니다.
 * `ReviewPage` 컴포넌트에서 인터뷰 리뷰 데이터를 가져오는 동안 로딩 상태를 시각적으로 표시하기 위해 사용됩니다.
 *
 * 기능:
 * - 제목 및 주요 입력 필드들을 가리키는 스켈레톤 박스를 수직 레이아웃으로 렌더링합니다.
 * - 사용자는 로딩 중이라는 것을 인식할 수 있으며, 데이터가 로드되면 `ReviewForm`으로 대체됩니다.
 *
 * UI 컴포넌트:
 * - `Flex`: 스켈레톤들을 수직 정렬하며, 가운데 정렬을 위한 컨테이너입니다.
 * - `Skeleton`: 제목과 입력 필드를 대체하는 로딩 뷰 컴포넌트입니다.
 *
 * @remarks
 * - `ReviewPage`에서 `isLoading`이 true일 때 조건부로 렌더링됩니다.
 * - 전체 인터뷰 폼을 로딩 상태로 표현하기 위한 구조로 설계되었습니다.
 *
 * @example
 * ```tsx
 * return isLoading ? (
 *   <ReviewSkeleton />
 * ) : (
 *   <ReviewForm />
 * );
 * ```
 */
const ReviewSkeleton = () => {
    return (
        <Flex direction="column" height="500px" gap="50px" marginTop="50px">
            <Flex alignSelf="center">
                <Skeleton height="50px" width="300px" />
            </Flex>
            <Skeleton height="200px" />
            <Skeleton height="200px" />
            <Skeleton height="200px" />
        </Flex>
    );
};

export default ReviewSkeleton;
