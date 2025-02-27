import { Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

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
    const { reviewId } = useParams<{ reviewId: string | undefined }>();

    return (
        <NavLink to={`${itemId}`}>
            <Button
                variant={reviewId === itemId ? "solid" : "ghost"}
                colorScheme={reviewId === itemId ? "teal" : "gray"}
                mb="10px"
                justifyContent={justifyContent} // 텍스트를 왼쪽 정렬
            >
                {label}
            </Button>
        </NavLink>
    );
};

export default ButtonItem;
