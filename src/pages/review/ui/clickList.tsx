import { Heading, Button } from "@chakra-ui/react";
import { getReviewApi } from "../api/getReviewApi";
import { useEffect, useState } from "react";
import InterviewDetail from "@/features/review/ui/InterviewDetail";
import { initialFormData } from "@/features/review/api/initialFormData";
import {
    InterviewDetailDTO,
    ReviewDetailDTO,
} from "@/features/review/api/reviewDTOList";
import Preparation from "@/features/review/ui/Preparation";
import InterviewProcess from "@/features/review/ui/InterviewProcess";
import QuestionsAnswers from "@/features/review/ui/QuestionsAnswers";
import Communication from "@/features/review/ui/Communication";
import InterviewAnalysis from "@/features/review/ui/InterviewAnalysis";
import NextPreparation from "@/features/review/ui/NextPreparation";

interface Props {
    selectedItem: string;
}

const ClickList = ({ selectedItem }: Props) => {
    const [interviewDetailData, setInterviewDetailData] =
        useState<InterviewDetailDTO>(initialFormData.interviewDetail);
    const [reviewDetailData, setReviewDetailData] = useState<ReviewDetailDTO>(
        initialFormData.reviewDetail,
    );
    const [readState, setReadState] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            const getdata = await getReviewApi(selectedItem);
            console.log(getdata); // 콘솔 로그가 호출
            setInterviewDetailData(getdata.interviewReviews[0].interviewDetail);
            setReviewDetailData(getdata.interviewReviews[0].reviewDetail);
        };

        fetchData(); // getSideData 호출
    }, [selectedItem]);

    const handleReadState = () => {
        setReadState(!readState);
    };

    return (
        // 사이드바에서 목록 클릭 시
        <>
            <Heading textAlign="center" size="3xl" marginTop="50px">
                {interviewDetailData.companyName}
            </Heading>
            <InterviewDetail
                currentData={interviewDetailData}
                isReadOnly={readState}
            />
            <Preparation
                currentData={reviewDetailData.preparation}
                isReadOnly={readState}
            />
            <InterviewProcess
                currentData={reviewDetailData.interviewProcess}
                isReadOnly={readState}
            />
            <QuestionsAnswers
                currentData={reviewDetailData.questionsAnswers}
                isReadOnly={readState}
            />
            <Communication
                currentData={reviewDetailData.communication}
                isReadOnly={readState}
            />
            <InterviewAnalysis
                currentData={reviewDetailData.interviewAnalysis}
                isReadOnly={readState}
            />
            <NextPreparation
                currentData={reviewDetailData.nextPreparation}
                isReadOnly={readState}
            />
            <Button colorPalette="green" onClick={handleReadState}>
                수정
            </Button>
        </>
    );
};

export default ClickList;
