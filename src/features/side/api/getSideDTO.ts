export interface GetSideDTO {
    reviewId: string;
    interviewDetail: InterviewDetailDTO;
}

interface InterviewDetailDTO {
    companyName: string;
    category: string;
}
