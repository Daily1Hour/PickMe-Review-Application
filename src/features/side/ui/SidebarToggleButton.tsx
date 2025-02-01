import { IconButton } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

interface SidebarToggleButtonProps {
    onClick: () => void;
}

const SidebarToggleButton = ({ onClick }: SidebarToggleButtonProps) => {
    return (
        <IconButton
            aria-label="Toggle Sidebar"
            onClick={onClick}
            position="fixed"
            top="15px"
            left="20px"
            zIndex="10"
            size="sm"
        >
            <FiMenu />
        </IconButton>
    );
};

export default SidebarToggleButton;
