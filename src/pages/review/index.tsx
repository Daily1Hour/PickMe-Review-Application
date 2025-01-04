import { useState } from "react";
import { Box } from "@chakra-ui/react";
import Sidebar from "../../features/side";
import FirstRender from "./ui/firstRender";
import ClickList from "./ui/clickList";

const ReviewPage = () => {
    const [selectedItem, setSelectedItem] = useState<string>("");

    return (
        <div style={{ display: "flex" }}>
            <Sidebar
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
            />

            <Box
                flex="1"
                bg="gray.100"
                padding="20px"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                height="100vh" // 화면 전체 높이를 채움
            >
                {selectedItem === "" ? (
                    <FirstRender />
                ) : (
                    <ClickList selectedItem={selectedItem} />
                )}
            </Box>
        </div>
    );
};

export default ReviewPage;
