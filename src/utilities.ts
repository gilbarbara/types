/**
 * An object without excluded types.
 */
export type RemoveType<TObject, TExclude = undefined> = {
  [Key in keyof TObject as TObject[Key] extends TExclude ? never : Key]: TObject[Key];
};

/**
 * A strict plain object with a specific set of keys.
 */
export type StrictObject<TObject extends object, TExpected> = TExpected & {
  [Key in keyof TObject]: Key extends keyof TExpected ? TExpected[Key] : never;
};
