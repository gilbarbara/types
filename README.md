# @gilbarbara/types

Reusable typescript typings.

## Setup

```sh
npm i @gilbarbara/types
```

## Types

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

### Aliases

```typescript
type NumberOrNull = number | null;
type StringOrNull = string | null;
type StringOrNumber = string | number;
```

### Async

```typescript
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
type GenericFunction<T = void> = (...arguments_: any[]) => T;

interface IdName {
  id: string;
  name: string;
}

interface LabelValue {
  label: string;
  value: string;
}

```
