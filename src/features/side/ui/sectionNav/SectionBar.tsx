import React from "react";
import { Link } from "react-scroll";
import { dict } from "@/features/review/ui/ReviewDict";

const SectionBar = () => {
    // dict 객체에서 최상위 키와 title만 추출
    const reviewDetailKeyMap: { name: string; title: string }[] =
        Object.entries(dict).map(([name, { title }]) => ({
            name,
            title,
        }));
    return (
        <>
            <div
                style={{
                    width: "250px",
                    backgroundColor: "#f4f4f4",
                    padding: "20px",
                    borderRight: "1px solid #ddd",
                    position: "fixed", // 사이드바가 화면에서 고정되도록 설정
                    top: "200px", // 페이지 상단에 위치하도록 설정
                    right: "0", // 페이지 왼쪽에 위치하도록 설정
                }}
            >
                {reviewDetailKeyMap.map(({ name, title }) => (
                    <div key={name}>
                        <Link to={name} smooth={true} offset={-50}>
                            <span
                                style={{
                                    cursor: "pointer",
                                    display: "block",
                                    margin: "10px 0",
                                    padding: "5px",
                                    fontWeight: "bold",
                                }}
                            >
                                {title}
                            </span>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};

export default React.memo(SectionBar);
