import { ResponseGeoJsonType } from './responseGeoJsonType';

interface Search {
  name: string;
  center_point: number[];
}

interface IBaseResponse {
  status: number;
  message: string;
}

interface ISearchResponse extends IBaseResponse {
  data?: Search[];
}

interface IGeojsonSearchResponse extends IBaseResponse {
  data?: ResponseGeoJsonType;
}

export type { IGeojsonSearchResponse, ISearchResponse, Search };
