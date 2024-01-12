interface Property {
  id: number;
  uuid: string;
  user_id: number;
  images: Images[];
  title_ads: string;
  type_ads: string;
  type_property: string;
  address: string;
  condition: string;
  description: string;
  price: number;
  rent_type: string;
  building_type: string;
  surface_area: number;
  building_area: number;
  bath_rooms: number;
  bed_rooms: number;
  floors: number;
  park_area: number;
  furniture: boolean;
  electrical_power: number;
  oriented: string;
  certificate: string;
  facility_in_door: string[];
  facility_out_door: string[];
  full_name: string;
  phone_number: string;
  email: string;
  kelurahan: string;
  kecamatan: string;
  city: string;
  center_point: number[];
  geometry: number[][][];
  user: User;
}

export interface User {
  Email: string;
  Name: string;
  Id: number;
}

interface Images {
  id: number;
  image: string;
  property_id: number;
}

interface IBaseResponse {
  status: number;
  message: string;
}

interface IPropertyResponse extends IBaseResponse {
  data?: Property;
}

interface IPropertyListResponse extends IBaseResponse {
  data?: Property[];
}

interface IPropertyUpdateResponse extends IBaseResponse {
  data?: Property;
}

interface GeoJSON {
  type: string;
  features: Feature[];
}

interface Feature {
  type: string;
  properties: Property;
  geometry: number[][][];
}

export type {
  GeoJSON,
  IPropertyListResponse,
  IPropertyResponse,
  IPropertyUpdateResponse,
  Images,
  Property,
};
