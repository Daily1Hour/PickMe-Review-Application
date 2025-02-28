import { MdAdd } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Text } from "@chakra-ui/react";
import {
    DrawerLayout,
    DrawerHeader,
    DrawerBody,
    IconButton,
    List,
    Item,
} from "@styleguide/react";

import { getSideData } from "../api/sideApi";
import { GetSideDTO } from "../api/getSideDTO";
import { useSideStore } from "../store/useSideStore";

const Sidebar = () => {
    const { searchQuery } = useSideStore();

    const { data } = useQuery<GetSideDTO[]>({
        queryKey: ["side"],
        queryFn: getSideData,
    });

    const formattedMenuItems = data?.map((item) => ({
        id: item.reviewId,
        label: `${item.interviewDetail.companyName} | ${item.interviewDetail.category}`,
    }));

    const filteredItems =
        formattedMenuItems?.filter((item) =>
            item.label.toLowerCase().includes(searchQuery.toLowerCase()),
        ) || [];

    return (
        <DrawerLayout>
            <DrawerHeader>
                <Text textStyle="xl" fontWeight="semibold">
                    목록
                </Text>
            </DrawerHeader>

            <DrawerBody>
                <List separator>
                    <Item justify="center" as={NavLink} to={`/`}>
                        <IconButton size="xs" title="작성하기">
                            <MdAdd />
                        </IconButton>
                    </Item>

                    {filteredItems.map((item) => (
                        <Item key={item.id} as={NavLink} to={`/${item.id}`}>
                            <Text m={3}>{item.label}</Text>
                        </Item>
                    ))}
                </List>
            </DrawerBody>
        </DrawerLayout>
    );
};

export default Sidebar;
