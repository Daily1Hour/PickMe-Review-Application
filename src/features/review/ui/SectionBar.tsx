import React from "react";
import { Link } from "react-scroll";
import { dict } from "@/shared/data/ReviewDict";
import { Flex } from "@chakra-ui/react";

/**
 * SectionBar 컴포넌트
 *
 * 이 컴포넌트는 인터뷰 리뷰 폼의 각 섹션으로 이동할 수 있는 고정형 네비게이션 바를 제공합니다.
 * `dict` 객체를 기반으로 각 섹션의 ID와 제목을 추출하여 링크 목록을 동적으로 렌더링합니다.
 *
 * 기능:
 * - `dict`에서 추출한 각 섹션(title)을 리스트로 렌더링합니다.
 * - 클릭 시 해당 섹션(anchor ID)로 스크롤 이동합니다.
 * - `isLoading`이 true인 경우 렌더링을 생략하여 로딩 중에는 UI가 표시되지 않도록 합니다.
 * - 마우스 hover 시 애니메이션 효과로 사용자 경험을 향상시킵니다.
 *
 * UI 컴포넌트:
 * - `Flex`: 섹션 목록을 수직으로 정렬하며, 화면 상단에 고정(`position: fixed`)됩니다.
 * - `Link`: 각 섹션으로 스크롤 이동하기 위한 앵커 링크입니다.
 * - `span`: 텍스트에 hover 효과(확대, 색상 변경)를 적용합니다.
 *
 * @remarks
 * - 이 컴포넌트는 리뷰 폼(`ReviewForm`)의 각 입력 섹션을 빠르게 탐색할 수 있는 도구로 사용됩니다.
 * - 각 링크는 `to={sectionName}` 형태로 렌더링되며, 해당 섹션 컴포넌트에는 `id` 속성이 필요합니다.
 * - 스크롤 오프셋(`offset: -50`)은 고정된 헤더 등을 고려한 위치 보정을 위한 값입니다.
 *
 * @example
 * ```tsx
 * <SectionBar />
 * ```
 */
const SectionBar = () => {
    // dict 객체에서 최상위 키와 title만 추출
    const reviewDetailKeyMap: { name: string; title: string }[] =
        Object.entries(dict).map(([name, { title }]) => ({
            name,
            title,
        }));
    return (
        <Flex
            direction="column"
            position="fixed"
            top="120px"
            alignSelf="flex-start"
        >
            {reviewDetailKeyMap.map(({ name, title }) => (
                <div key={name}>
                    <Link
                        to={name}
                        smooth={false}
                        offset={-50}
                        style={{
                            display: "block",
                            marginBottom: "10px",
                            padding: "10px",
                            fontWeight: "bold",
                            fontSize: "0.9em",
                            color: "#000000", // 기본 텍스트 색상 (검정색)
                            textDecoration: "none", // 링크 텍스트의 밑줄 제거
                            borderRadius: "4px", // 둥근 모서리
                            transition: "all 0.3s ease", // 부드러운 애니메이션
                        }}
                    >
                        <span
                            style={{
                                display: "inline-block",
                                transition: "all 0.3s ease", // 부드러운 애니메이션
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = "#2ecc71"; // 텍스트 색상 변경 (hover)
                                e.currentTarget.style.transform = "scale(1.05)"; // 텍스트 크기 확장 (hover)
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = "#000000"; // 기본 텍스트 색상으로 돌아가기
                                e.currentTarget.style.transform = "scale(1)"; // 크기 원상복귀
                            }}
                        >
                            {title}
                        </span>
                    </Link>
                </div>
            ))}
        </Flex>
    );
};

export default React.memo(SectionBar);
