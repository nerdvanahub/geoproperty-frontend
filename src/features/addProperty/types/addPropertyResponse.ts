interface Image {
  image: string;
}

export interface IAddPropertyFieldRequest {
  user_id: number;
  images: Image[];
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
  furniture: boolean;
  electrical_power: number;
  oriented: string;
  certificate: string;
  facility_in_door: string[];
  facility_out_door: string[];
  center_point: number[];
  geometry: number[][][];
  full_name: string;
  email: string;
  phone_number: string;
}

export interface IAddPropertyFieldResponse {
  status: string;
  message: string;
  data: IAddPropertyFieldRequest;
}
