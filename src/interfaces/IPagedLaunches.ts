import { ILaunch } from "./ILaunch";

export interface IPagedLaunches {
  launches: ILaunch[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
}