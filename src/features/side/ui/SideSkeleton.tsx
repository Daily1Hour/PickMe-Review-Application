import { Skeleton, VStack } from "@chakra-ui/react";
import { Item } from "@styleguide/react";

const SideSkeleton = () => {
    return (
        <VStack width="100%">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Item key={idx}>
                    <Skeleton height="50px" width="100%" borderRadius="md" />
                </Item>
            ))}
        </VStack>
    );
};

export default SideSkeleton;
