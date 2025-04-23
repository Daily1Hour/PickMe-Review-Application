import { FormProvider, useForm } from "react-hook-form";
import { Heading, Box } from "@chakra-ui/react";
import { ScrollRestoration } from "react-router-dom";

import InterviewReviewParts from "./InterviewReviewParts";
import {
    FlattenedInterviewReviewsSchema,
    InterviewReviewsType,
} from "../schema/reviewSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import ActionButton from "./ActionButton";
import { initialFormData } from "../api/initialFormData";
import React from "react";
import { useReviewMutation } from "../hook/useReviewMutation";
import { useReviewStore } from "../store/useReviewStore";
import { navigateTo } from "@/shared/api/router";

/**
 * ReviewForm 컴포넌트
 *
 * 이 컴포넌트는 인터뷰 리뷰를 생성, 수정 및 삭제할 수 있는 폼 인터페이스를 제공합니다.
 * React Hook Form을 사용하여 폼 상태를 관리하고, Zod 스키마를 통해 유효성 검사를 수행합니다.
 * 리뷰 관련 작업을 위한 커스텀 훅들과 통합되어 있습니다.
 *
 * 기능:
 * - 리뷰 작성 또는 수정이 가능한 입력 폼을 제공합니다.
 * - 저장, 수정, 삭제 기능을 위한 액션 버튼을 제공합니다.
 * - 리뷰 ID의 존재 여부에 따라 생성 또는 수정 요청을 구분하여 처리합니다.
 *
 * 훅:
 * - `useReviewStore`: 상태 저장소에서 현재 리뷰 데이터를 가져오고 갱신합니다.
 * - `useForm`: `zodResolver`와 함께 `FlattenedInterviewReviewsSchema`를 사용하여 폼 유효성을 검증합니다.
 * - `useReviewMutation`: 리뷰 생성, 수정, 삭제를 위한 mutation 함수를 제공합니다.
 *
 * 메서드:
 * - `onSubmit(data: InterviewReviewsType)`: 리뷰 생성 또는 수정을 위한 폼 제출을 처리합니다.
 *   - `reviewId`가 없으면 새 리뷰가 생성되며, 생성된 ID로 이동합니다.
 *   - `reviewId`가 있으면 기존 리뷰가 수정됩니다.
 * - `handleDelete()`: 현재 리뷰를 삭제하고, 홈 화면(`/`)으로 이동합니다.
 *
 * UI 컴포넌트:
 * - `Heading`: 현재 선택된 리뷰의 회사명과 카테고리를 제목으로 표시합니다.
 * - `InterviewReviewParts`: 리뷰 내용을 입력받는 폼 섹션입니다.
 * - `ActionButton`: 저장, 수정, 삭제 버튼을 조건에 따라 렌더링합니다.
 * - `FormProvider`: React Hook Form의 context를 하위 컴포넌트에 제공합니다.
 * - `ScrollRestoration`: 페이지 이동 시 스크롤 위치를 복원합니다.
 *
 * 스타일링:
 * - `Box` 컴포넌트를 이용해 전체 폼을 그리드 형태로 배치하고, 간격을 조정합니다.
 *
 * 참고:
 * - 이 폼은 새 리뷰 생성 시에는 저장 버튼만, 기존 리뷰 수정 시에는 수정 및 삭제 버튼을 표시합니다.
 * - 제출 성공 후에는 상태가 초기화되거나, 수정된 내용으로 갱신됩니다.
 */
const ReviewForm = () => {
    const { review, setReview } = useReviewStore();
    const methods = useForm<InterviewReviewsType>({
        mode: "onChange", // 실시간 유효성 검증
        resolver: zodResolver(FlattenedInterviewReviewsSchema),
        defaultValues: review || initialFormData,
    });

    const reviewId = review.reviewId;

    const { createMutation, updateMutation, deleteMutation } =
        useReviewMutation();

    const { handleSubmit } = methods;

    const onSubmit = handleSubmit(async (data) => {
        if (!reviewId) {
            const newReview = await createMutation({ data });
            navigateTo(`/${newReview.interviewDetailId}`);
        } else {
            updateMutation({ reviewId, data });
            setReview(data);
        }
    });

    const handleDelete = async () => {
        deleteMutation(reviewId);
        navigateTo("/");
    };

    const title = review ? `${review?.companyName} - ${review?.category}` : "-";

    return (
        <>
            <FormProvider {...methods}>
                <form onSubmit={onSubmit}>
                    <Box display="grid" gap="50px">
                        <Heading textAlign="center" size="3xl" marginTop="50px">
                            {title}
                        </Heading>

                        <InterviewReviewParts />

                        <ActionButton
                            reviewId={reviewId}
                            handleDelete={handleDelete}
                        />
                    </Box>
                </form>
            </FormProvider>
            <ScrollRestoration />
        </>
    );
};

export default React.memo(ReviewForm);
