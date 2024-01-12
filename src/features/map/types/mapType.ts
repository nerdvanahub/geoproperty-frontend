import { Map } from 'mapbox-gl';

export interface MapState {
  center: [number, number];
  zoom: number;
  map?: Map;
  centroid?: [number, number];
  geometry?: number[][][];
  setMap: (map: Map) => void;
  setCentroid: (centroid: [number, number], geometry: number[][][]) => void;
}
