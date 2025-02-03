// key가 obj에 있는지 확인하고 있으면 값을 반환하고, 없으면 null을 반환
export default function safeReadDictionary<T extends object>(
    obj: T | undefined,
    key: string,
): T[keyof T] | null {
    return obj && key in obj ? obj[key as keyof typeof obj] : null;
}
