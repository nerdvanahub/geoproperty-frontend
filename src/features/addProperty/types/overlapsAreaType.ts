export interface IOverlapsCondition {
  overlaps: boolean;
}

export interface IOverlapsAreaResponse {
  status: string;
  message: string;
  data: IOverlapsCondition;
}
