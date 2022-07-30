export type Unwrap<T> =
  T extends Array<infer U>
    ? U
    : never;
