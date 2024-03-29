export interface ITopic {
  by?: string;
  descendants?: number;
  id?: number;
  kids?: number[];
  score?: number;
  text?: string;
  time?: number;
  title?: string;
  type?: string;
  deleted?: boolean;
  parent?: number;
}
