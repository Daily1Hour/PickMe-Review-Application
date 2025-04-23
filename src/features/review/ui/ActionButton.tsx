import { Button, Box, HStack } from "@chakra-ui/react";
interface ActionButtonProps {
    reviewId: string | undefined;
    handleDelete: () => void;
}

/**
 * 인터뷰 리뷰 폼에서 레코드를 저장, 수정 또는 삭제할 수 있는 버튼을 제공하는 React 컴포넌트입니다.
 *
 * @param {Object} props - 컴포넌트의 props입니다.
 * @param {string | undefined} props.reviewId - 존재할 경우 수정 및 삭제 버튼을, 없을 경우 저장 버튼을 표시하는 기준이 되는 리뷰 ID입니다.
 * @param {() => void} props.handleDelete - 리뷰 삭제를 처리하는 이벤트 핸들러입니다.
 *
 * @returns {JSX.Element} 저장, 수정, 삭제 중 적절한 버튼들을 포함하는 JSX 엘리먼트를 반환합니다.
 *
 * @remarks
 * - `reviewId`가 존재하면 "수정하기"와 "삭제하기" 버튼이 렌더링되며, 그렇지 않으면 "저장하기" 버튼만 렌더링됩니다.
 * - 삭제 버튼 클릭 시 `handleDelete` 함수가 호출됩니다.
 * - 이 컴포넌트는 주로 인터뷰 리뷰 폼 하단의 액션 영역에서 사용됩니다.
 *
 * @example
 * ```tsx
 * <ActionButton
 *   reviewId={formState.reviewId}
 *   handleDelete={() => deleteReviewMutation(formState.reviewId)}
 * />
 * ```
 */
const ActionButton = ({ reviewId, handleDelete }: ActionButtonProps) => {
    return (
        <>
            {reviewId ? (
                <HStack justify="flex-end">
                    <Button colorPalette="green" type="submit" width="100px">
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
                    <Button colorPalette="green" type="submit" width="100px">
                        저장하기
                    </Button>
                </Box>
            )}
        </>
    );
};

export default ActionButton;
