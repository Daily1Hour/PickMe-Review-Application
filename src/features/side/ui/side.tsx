import { getSideData } from "../api/sideApi";
import { useQuery } from "@tanstack/react-query";
import { GetSideDTO } from "../api/getSideDTO";
import { useSideStore } from "../store/useSideStore";
import SideDrawer from "./SideDrawer";

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

    const filteredItems = formattedMenuItems?.filter((item) =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    return <SideDrawer filteredItems={filteredItems} />;
};

export default Sidebar;
