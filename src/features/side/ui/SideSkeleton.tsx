import { Skeleton } from "@chakra-ui/react";
import { Item } from "@styleguide/react";

const SideSkeleton = () => {
    return Array.from({ length: 4 }).map((_, idx) => (
        <Item key={idx}>
            <Skeleton height="50px" width="100%" borderRadius="md" />
        </Item>
    ));
};

export default SideSkeleton;
