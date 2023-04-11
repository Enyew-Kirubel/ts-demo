//  keyof
interface someRandomObject {
    propJuan: string;
    propToo: number;
}

type KeyofRandomObject = keyof someRandomObject // "propJuan" | "propToo"
