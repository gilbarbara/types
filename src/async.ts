export type AsyncStatus = 'IDLE' | 'PENDING' | 'SUCCESS' | 'ERROR';

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
