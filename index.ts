type ExtractPathParams<T> =
  T extends `${infer _Start}:${infer Param}/${infer Rest}`
    ? { [k in Param | keyof ExtractPathParams<Rest>]: string }
    : T extends `${infer _Start}:${infer Param}`
    ? { [k in Param]: string }
    : void;

export const pathBuilder =
  <T extends string>(path: T) =>
  (params: ExtractPathParams<T>) => {
    let res: string = path;
    if (params) {
      for (const key of Object.keys(params)) {
        res = res.replace(`:${key}`, params[key]);
      }
    }
    return res;
  };
