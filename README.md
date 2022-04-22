# @gilbarbara/types

[![npm version](https://badge.fury.io/js/%40gilbarbara%2Ftypes.svg)](https://badge.fury.io/js/%40gilbarbara%2Ftypes) [![CI](https://github.com/gilbarbara/types/actions/workflows/main.yml/badge.svg)](https://github.com/gilbarbara/types/actions/workflows/main.yml)

Reusable typescript typings.

## Setup

```sh
npm i @gilbarbara/types
```

## Types

### Aliases

```typescript
type NumberOrNull = number | null;
type StringOrNull = string | null;
type StringOrNumber = string | number;
```


### Async

```typescript
type AsyncStatus = 'IDLE' | 'PENDING' | 'SUCCESS' | 'ERROR';

interface AsyncFlow {
  message: string;
  status: AsyncStatus;
}

interface AsyncFlowWithData<T = any> extends AsyncFlow {
  data: T;
}

interface AsyncFlowWithDataAndCache<T = any> extends AsyncFlowWithData<T> {
  updatedAt: number;
}
```

### Generic

```typescript
type AnyObject<T = any> = Record<string, T>;
type PlainObject<T extends AnyObject> = Exclude<
  T,
  Array<unknown> | Function | Map<unknown, unknown> | Set<unknown>
>;
```

`AnyObject` includes arrays, functions and other types because of the prototype. If you really wants to use just plain objects you'll need to narrow it down:

```typescript
function parseParams <T extends AnyObject>(input: PlainObject<T>) {
  // now you can be sure the input is a plain object
  return input;
}
```

```typescript
type GenericFunction<T = void> = (...arguments: any[]) => T;

type VoidFunction = () => void;

type HttpMethods =
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
type Primitive = bigint | boolean | null | number | string | symbol | undefined;

/**
 * A union of all possible strings returned by the typeof operator.
 */
type TypeName =
  | 'bigint'
  | 'boolean'
  | 'function'
  | 'number'
  | 'object'
  | 'string'
  | 'symbol'
  | 'undefined'
```

### Interfaces

```typescript
interface IdName {
  id: string;
  name: string;
}

interface LabelValue {
  label: string;
  value: string;
}

```

