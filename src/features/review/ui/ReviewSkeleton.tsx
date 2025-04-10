import { Flex, Skeleton } from "@chakra-ui/react";

const ReviewSkeleton = () => {
    return (
        <Flex direction="column" height="500px" gap="50px" marginTop="50px">
            <Flex alignSelf="center">
                <Skeleton height="50px" width="300px" />
            </Flex>
            <Skeleton height="200px" />
            <Skeleton height="200px" />
            <Skeleton height="200px" />
        </Flex>
    );
};

export default ReviewSkeleton;
