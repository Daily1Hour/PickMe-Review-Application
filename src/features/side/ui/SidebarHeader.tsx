import { Text } from "@chakra-ui/react";

interface SidebarHeaderProps {
    title: string;
}

const SidebarHeader = ({ title }: SidebarHeaderProps) => {
    return (
        <Text fontSize="xl" fontWeight="bold" textAlign="center">
            {title}
        </Text>
    );
};

export default SidebarHeader;
