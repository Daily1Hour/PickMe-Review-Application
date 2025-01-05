import { Text } from "@chakra-ui/react";
import { getReviewApi } from "../api/getReviewApi";
import { useEffect, useState } from "react";

interface Props {
    selectedItem: string;
}

const ClickList = ({ selectedItem }: Props) => {
    useEffect(() => {
        const fetchData = async () => {
            const getdata = await getReviewApi(selectedItem);
            console.log(getdata); // 콘솔 로그가 호출
        };

        fetchData(); // getSideData 호출
    }, [selectedItem]);

    return (
        // 사이드바에서 목록 클릭 시
        <>
            <Text
                fontSize="2xl"
                fontWeight="bold"
                marginBottom="10px"
                textAlign="center"
            >
                {selectedItem}
            </Text>
            <Text textAlign="center">
                This is the detailed content for <strong></strong>.
            </Text>
        </>
    );
};

export default ClickList;
