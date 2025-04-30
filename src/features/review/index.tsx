import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getReviewApi } from "./api";
import { FlattenedReview } from "@/entities/review/model/review";
import { ReviewForm } from "./ui";
import { useReviewStore } from "./store/useReviewStore";
import { initialFormData } from "./api/initialFormData";
import { useEffect } from "react";
import ReviewSkeleton from "./ui/ReviewSkeleton";
import SectionBar from "./ui/SectionBar";
import { Flex, Box } from "@chakra-ui/react";

/**
 * ReviewPage 컴포넌트
 *
 * 이 컴포넌트는 URL 파라미터에서 인터뷰 리뷰 ID를 받아 해당 리뷰 데이터를 조회하고,
 * 로딩 상태에 따라 `ReviewSkeleton` 또는 `ReviewForm`을 조건부로 렌더링합니다.
 *
 * 기능:
 * - `reviewId`를 기준으로 인터뷰 리뷰 데이터를 가져옵니다.
 * - 데이터를 성공적으로 가져오면 Zustand의 `useReviewStore`를 통해 전역 상태에 저장합니다.
 * - 로딩 중일 땐 `ReviewSkeleton`, 로딩 완료 시엔 `ReviewForm`을 렌더링합니다.
 * - `ReviewForm`에는 `key={review.updatedAt}`을 지정하여 데이터가 변경된 경우에만 리렌더링이 일어나도록 제어합니다.
 *
 * UI 컴포넌트:
 * - `ReviewSkeleton`: 로딩 중일 때 보여주는 스켈레톤 컴포넌트입니다.
 * - `ReviewForm`: 리뷰 데이터를 기반으로 렌더링되는 메인 폼 컴포넌트입니다.
 *
 * @remarks
 * - `useQuery`는 React Query를 사용해 비동기 리뷰 데이터를 가져오며, 캐시와 `staleTime`을 활용하여 최적화를 수행합니다.
 * - 동일한 리뷰를 다시 클릭했을 때는 `review.updatedAt`이 변경되지 않으므로 `ReviewForm`이 리렌더링되지 않고 재사용됩니다.
 * - 반대로, 리뷰가 수정되어 `updatedAt`이 변경된 경우에는 `key`가 바뀌어 컴포넌트가 새로 마운트되어 최신 상태를 반영합니다.
 *
 * @example
 * ```tsx
 * <Route path="/:reviewId" element={<ReviewPage />} />
 * ```
 */
const ReviewPage = () => {
    const { review, setReview } = useReviewStore();

    // useParams로 url의 reviewId값 가져옴
    const { reviewId } = useParams<{ reviewId: string | undefined }>();

    // reviewId가 있을 경우에만 작동
    const { data: fetchedReview, isLoading } = useQuery<FlattenedReview>({
        queryKey: ["review", reviewId],
        queryFn: () => getReviewApi(reviewId as string),
        enabled: !!reviewId,
        staleTime: 1000 * 60 * 60,
        initialData: reviewId ? undefined : initialFormData,
    });

    useEffect(() => {
        if (fetchedReview) {
            setReview(fetchedReview);
        }
    }, [fetchedReview, setReview]);

    return isLoading ? (
        <ReviewSkeleton />
    ) : (
        <Flex gap="100px" align="flex-start">
            <Box flex="3">
                <ReviewForm key={review.updatedAt} />
            </Box>
            <Box flex="1">
                <SectionBar />
            </Box>
        </Flex>
    );
};

export default ReviewPage;
