import { Property } from '../../../types/propertyType';

export interface ResponsePromptType {
  type: string;
  features: Feature[];
  prompt: string;
}

export interface Feature {
  type: string;
  properties: Property & {
    images: Image[];
    user: User;
  };
  geometry: Geometry;
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

export interface Geometry {
  type: string;
  coordinates: number[][][];
}
