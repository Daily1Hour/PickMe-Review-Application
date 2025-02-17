import { Button, Box, HStack } from "@chakra-ui/react";
import { useReviewMutation } from "../hook/useReviewMutation";
import { UseFormReturn } from "react-hook-form"; // 필요한 타입을 import
import { InterviewReviewsType } from "../schema/reviewSchema";

interface ActionButtonProps {
    reviewId: string | undefined;
    methods: UseFormReturn<InterviewReviewsType>; // methods 타입 추가
}

const ActionButton = ({ reviewId, methods }: ActionButtonProps) => {
    const { mutation, deleteMutation } = useReviewMutation();

    const handleSave = () => {
        const formData = methods.getValues(); // form data 가져오기
        mutation.mutate({ reviewId, data: formData }); // 제출 시 mutation 호출
    };

    const handleDelete = async () => {
        deleteMutation.mutate(reviewId); // 삭제 시 deleteMutation 호출
    };

    return (
        <>
            {reviewId ? (
                <HStack justify="flex-end">
                    <Button
                        colorPalette="green"
                        onClick={handleSave}
                        width="100px"
                    >
                        수정하기
                    </Button>
                    <Button
                        colorPalette="red"
                        onClick={handleDelete} // 삭제 처리 함수
                        type="button"
                        width="100px"
                    >
                        삭제하기
                    </Button>
                </HStack>
            ) : (
                <Box display="flex" justifyContent="flex-end">
                    <Button
                        colorPalette="green"
                        onClick={handleSave}
                        width="100px"
                    >
                        저장하기
                    </Button>
                </Box>
            )}
        </>
    );
};

export default ActionButton;
