import React from "react";
import { Heading, Button, Box, HStack } from "@chakra-ui/react";

interface ActionButtonProps {
    reviewId: string | undefined;
    handleDelete: () => void;
}

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
