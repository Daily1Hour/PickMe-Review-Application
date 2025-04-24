/**
 * 사이드바에 표시되는 인터뷰 리뷰 정보를 나타내는 데이터 구조입니다.
 *
 * 기능:
 * - 각 사이드바 항목을 구성하는 리뷰 ID와 인터뷰 정보(회사명, 면접 유형)를 포함합니다.
 * - 서버로부터 받은 리뷰 리스트 데이터를 기반으로 사이드바를 구성할 때 사용됩니다.
 *
 * @property reviewId - 리뷰의 고유 식별자입니다. 클릭 시 해당 리뷰 상세 페이지로 이동하는 데 사용됩니다.
 * @property interviewDetail - 회사명과 면접 유형을 포함한 간략한 인터뷰 정보입니다.
 */
export interface GetSideDTO {
    reviewId: string;
    interviewDetail: InterviewDetailDTO;
}

/**
 * 인터뷰의 간단한 정보를 담는 구조입니다.
 *
 * 기능:
 * - 사이드바 항목의 텍스트 정보를 표현할 때 사용됩니다.
 *
 * @property companyName - 인터뷰가 진행된 회사명입니다.
 * @property category - 면접 유형(예: 실무, 임원 등)입니다.
 */
interface InterviewDetailDTO {
    companyName: string;
    category: string;
}
