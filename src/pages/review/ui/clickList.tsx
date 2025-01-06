import { Heading } from "@chakra-ui/react";
import { getReviewApi } from "../api/getReviewApi";
import { useEffect, useState } from "react";
import InterviewDetail from "@/features/create/ui/InterviewDetail";
import { initialFormData } from "@/features/create/api/initialFormData";
import {
    InterviewDetailDTO,
    ReviewDetailDTO,
} from "@/features/create/api/reviewDTOList";
import Preparation from "@/features/create/ui/Preparation";
import InterviewProcess from "@/features/create/ui/InterviewProcess";
import QuestionsAnswers from "@/features/create/ui/QuestionsAnswers";
import Communication from "@/features/create/ui/Communication";
import InterviewAnalysis from "@/features/create/ui/InterviewAnalysis";
import NextPreparation from "@/features/create/ui/NextPreparation";

interface Props {
    selectedItem: string;
}

const ClickList = ({ selectedItem }: Props) => {
    const [interviewDetailData, setInterviewDetailData] =
        useState<InterviewDetailDTO>(initialFormData.interviewDetail);
    const [reviewDetailData, setReviewDetailData] = useState<ReviewDetailDTO>(
        initialFormData.reviewDetail,
    );
    useEffect(() => {
        const fetchData = async () => {
            const getdata = await getReviewApi(selectedItem);
            console.log(getdata); // 콘솔 로그가 호출
            setInterviewDetailData(getdata.interviewReviews[0].interviewDetail);
            setReviewDetailData(getdata.interviewReviews[0].reviewDetail);
        };

        fetchData(); // getSideData 호출
    }, [selectedItem]);

    return (
        // 사이드바에서 목록 클릭 시
        <>
            <Heading textAlign="center" size="3xl" marginTop="50px">
                {interviewDetailData.companyName}
            </Heading>
            <InterviewDetail
                currentData={interviewDetailData}
                isReadOnly={true}
            />
            <Preparation
                currentData={reviewDetailData.preparation}
                isReadOnly={true}
            />
            <InterviewProcess
                currentData={reviewDetailData.interviewProcess}
                isReadOnly={true}
            />
            <QuestionsAnswers
                currentData={reviewDetailData.questionsAnswers}
                isReadOnly={true}
            />
            <Communication
                currentData={reviewDetailData.communication}
                isReadOnly={true}
            />
            <InterviewAnalysis
                currentData={reviewDetailData.interviewAnalysis}
                isReadOnly={true}
            />
            <NextPreparation
                currentData={reviewDetailData.nextPreparation}
                isReadOnly={true}
            />
        </>
    );
};

export default ClickList;
