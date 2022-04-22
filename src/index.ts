export type AsyncStatus = 'IDLE' | 'PENDING' | 'SUCCESS' | 'ERROR';

export type NumberOrNull = number | null;
export type StringOrNull = string | null;
export type StringOrNumber = string | number;

export type AnyObject<T = any> = Record<string, T>;
export type PlainObject<T extends AnyObject> = Exclude<
  T,
  // eslint-disable-next-line @typescript-eslint/ban-types
  Array<unknown> | Function | Map<unknown, unknown> | Set<unknown>
>;

export interface AsyncFlow {
  message: string;
  status: AsyncStatus;
}

export interface AsyncFlowWithData<T = any> extends AsyncFlow {
  data: T;
}

export interface AsyncFlowWithDataAndCache<T = any> extends AsyncFlowWithData<T> {
  updatedAt: number;
}

export type GenericFunction<T = void> = (...arguments_: any[]) => T;

export interface IdName {
  id: string;
  name: string;
}

export interface LabelValue {
  label: string;
  value: string;
}
