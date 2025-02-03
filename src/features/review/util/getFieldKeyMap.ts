import { z } from "zod";

interface RecursiveObject {
    [key: string]: RecursiveObject | null;
}

const getFieldKeyMap = (schema: z.ZodObject<any>): RecursiveObject =>
    // 스키마 형태에서 필드 이름과 값 추출
    Object.entries(schema.shape).reduce((acc, [key, value]) => {
        return {
            ...acc,
            // 중첩된 ZodObject는 재귀적으로 처리
            [key]: value instanceof z.ZodObject ? getFieldKeyMap(value) : null,
        };
    }, {});

export default getFieldKeyMap;
