import { Button } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

interface ButtonItemProps {
    itemId: string;
    label: string;
    justifyContent?: string;
}

const ButtonItem = ({
    itemId,
    label,
    justifyContent = "start",
}: ButtonItemProps) => {
    const navigate = useNavigate();

    const { reviewId } = useParams<{ reviewId: string | undefined }>();

    // 클릭된 아이템의 ID가 현재 reviewId와 같으면 navigate를 호출하지 않음
    const handleButtonClick = (itemId: string) => {
        navigate(`${itemId}`); // 클릭 시 item.id 값을 URL에 추가하여 해당 경로로 이동
    };
    return (
        <Button
            variant={reviewId === itemId ? "solid" : "ghost"}
            colorScheme={reviewId === itemId ? "teal" : "gray"}
            mb="10px"
            onClick={() => handleButtonClick(itemId)}
            justifyContent={justifyContent} // 텍스트를 왼쪽 정렬
        >
            {label}
        </Button>
    );
};

export default ButtonItem;
