export type AnyObject<T = any> = Record<string, T>;
export type PlainObject<T extends AnyObject> = Exclude<
  T,
  // eslint-disable-next-line @typescript-eslint/ban-types
  Array<unknown> | Function | Map<unknown, unknown> | Set<unknown>
>;

export type GenericFunction<T = void> = (...arguments_: any[]) => T;
export type VoidFunction = () => void;

export type HttpMethods =
  | 'CONNECT'
  | 'DELETE'
  | 'GET'
  | 'HEAD'
  | 'OPTIONS'
  | 'PATCH'
  | 'POST'
  | 'PUT';

/**
 * Primitive types
 */
export type Primitive = bigint | boolean | null | number | string | symbol | undefined;

/**
 * A union of all possible strings returned by the typeof operator.
 */
export type TypeName =
  | 'bigint'
  | 'boolean'
  | 'function'
  | 'number'
  | 'object'
  | 'string'
  | 'symbol'
  | 'undefined';
