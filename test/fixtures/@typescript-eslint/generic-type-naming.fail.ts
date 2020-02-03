type ReadOnly<T extends object> = { readonly [Key in keyof T]: T[Key] };

interface SimpleMap<T> {
  [key: string]: T;
}
