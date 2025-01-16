export interface Response {
  status: number;
  message: string;
  data: Property;
}

export interface Property {
  id: number;
  uuid: string;
  user_id: number;
  user: User;
  images: Image[];
  deleted_image: unknown[];
  address: string;
  title_ads: string;
  type_ads: string;
  type_property: string;
  condition: string;
  description: string;
  price: number;
  building_type: string;
  surface_area: number;
  building_area: number;
  bath_rooms: number;
  bed_rooms: number;
  floors: number;
  park_area: number;
  furniture: string;
  electrical_power: number;
  oriented: string;
  facility_in_door: string[];
  facility_out_door: string[];
  full_name: string;
  phone_number: string;
  email: string;
  center_point: number[];
  geometry: number[][][];
  kelurahan: string;
  kecamatan: string;
  kota: string;
}

export interface User {
  ID: number;
  Name: string;
  Email: string;
  Password: string;
}

export interface Image {
  id: number;
  property_id: number;
  image: string;
}
