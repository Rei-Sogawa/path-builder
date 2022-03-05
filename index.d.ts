export declare type ExtractPathParams<T> = T extends `${infer _Start}:${infer Param}/${infer Rest}` ? {
    [k in Param | keyof ExtractPathParams<Rest>]: string;
} : T extends `${infer _Start}:${infer Param}` ? {
    [k in Param]: string;
} : void;
export declare const pathBuilder: <T extends string>(path: T) => (params: ExtractPathParams<T>) => string;
