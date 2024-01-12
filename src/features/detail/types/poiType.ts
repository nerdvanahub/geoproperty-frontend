export interface PoiType {
  type: string;
  features: Feature[];
}

export interface Feature {
  type: string;
  properties: Properties;
  geometry: Geometry;
}

export interface Properties {
  nama: string;
  jarak: number;
  kategori: string;
}

export interface Geometry {
  crs: Crs;
  type: string;
  coordinates: number[][];
}

export interface Crs {
  type: string;
  properties: Properties2;
}

export interface Properties2 {
  name: string;
}

export interface IPOIResponse {
  status: number;
  message: string;
  data?: PoiType;
}
