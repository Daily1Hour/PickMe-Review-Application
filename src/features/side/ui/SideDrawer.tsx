import { useNavigate } from "react-router-dom";
import { useReviewIdStore } from "@/shared/store/useReviewIdStore";
import SearchBar from "./SearchBar";
import ReviewList from "./ReviewList";
import ButtonItem from "./ButtonItem";
import {
    DrawerBackdrop,
    DrawerBody,
    DrawerCloseTrigger,
    DrawerContent,
    DrawerHeader,
    DrawerRoot,
    DrawerTitle,
    DrawerTrigger,
} from "@/shared/chakra-ui/drawer";
import { Button } from "@chakra-ui/react";
import { CiMenuBurger } from "react-icons/ci";

interface SideDrawerProps {
    filteredItems: { id: string; label: string }[] | undefined;
}

const SideDrawer = ({ filteredItems }: SideDrawerProps) => {
    const navigate = useNavigate();

    const { setReviewId } = useReviewIdStore();

    return (
        <DrawerRoot placement={"start"}>
            <DrawerBackdrop />
            <DrawerTrigger asChild>
                <Button variant="outline" size="lg">
                    <CiMenuBurger />
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>면접 리뷰 목록</DrawerTitle>
                </DrawerHeader>
                <DrawerBody>
                    <ButtonItem
                        label={"새 작성"}
                        onClick={() => {
                            navigate("/");
                            setReviewId(undefined);
                        }}
                        justifyContent={"center"}
                    />
                    <SearchBar />
                    <ReviewList filteredItems={filteredItems} />
                </DrawerBody>
                <DrawerCloseTrigger />
            </DrawerContent>
        </DrawerRoot>
    );
};

export default SideDrawer;
