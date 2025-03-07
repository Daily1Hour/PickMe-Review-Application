import React from "react";
import { Link } from "react-scroll";
import { dict } from "@/shared/data/ReviewDict";
import { Flex } from "@chakra-ui/react";

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
            style={{
                width: "250px",
                backgroundColor: "#F8C471",
                padding: "20px",
                borderRight: "2px solidrgb(80, 49, 44)", // 부드러운 테두리
                position: "fixed",
                top: "100px", // 화면에서 약간 떨어지도록 설정
                right: "0",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.15)", // 부드러운 그림자
                borderRadius: "8px 0 0 8px", // 둥근 모서리
                zIndex: 1000,
                transition: "transform 0.3s ease-in-out", // 애니메이션
            }}
        >
            {reviewDetailKeyMap.map(({ name, title }) => (
                <div key={name}>
                    <Link
                        to={name}
                        smooth={true}
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
