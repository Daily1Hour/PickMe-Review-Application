import { Button } from "@chakra-ui/react";

interface ButtonItemProps {
    label: string;
    isSelected?: boolean;
    justifyContent?: string;
    onClick: () => void;
}

const ButtonItem = ({
    label,
    isSelected,
    justifyContent = "start",
    onClick,
}: ButtonItemProps) => {
    return (
        <Button
            variant={isSelected ? "solid" : "ghost"}
            colorScheme={isSelected ? "teal" : "gray"}
            mb="10px"
            onClick={onClick}
            justifyContent={justifyContent} // 텍스트를 왼쪽 정렬
        >
            {label}
        </Button>
    );
};

export default ButtonItem;
