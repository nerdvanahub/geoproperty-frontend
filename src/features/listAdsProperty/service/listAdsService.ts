import { AxiosInstance } from 'axios';
import axiosIntance from '../../../lib/axios';
import {
  IPropertyListResponse,
  IPropertyResponse,
} from '../../../types/propertyType';
import useUserStore from '../../authentication/store/useUserStore';
import { IPOIResponse } from '../../detail/types/poiType';
import { Property as UpdatedProperty } from '../types';

class ListAddsService {
  axiosIntance: AxiosInstance;
  token = useUserStore.getState().token;

  constructor() {
    this.axiosIntance = axiosIntance;
  }
  public async listAdds(): Promise<IPropertyListResponse> {
    const response = await this.axiosIntance.post<IPropertyListResponse>(
      'property/own',
      {},
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }
    );

    return response.data;
  }

  public async editAds(
    property: UpdatedProperty
  ): Promise<IPropertyListResponse> {
    const formData = new FormData();
    formData.append(
      'data',
      JSON.stringify({
        ...property,
        furniture: property.furniture === 'full perabot',
        bath_rooms: parseInt(property.bath_rooms.toString()),
        bed_rooms: parseInt(property.bed_rooms.toString()),
        floors: parseInt(property.floors.toString()),
        park_area: parseInt(property.park_area.toString()),
        electrical_power: parseInt(property.electrical_power.toString()),
        surface_area: parseInt(property.surface_area.toString()),
        building_area: parseInt(property.building_area.toString()),
        price: parseInt(property.price.toString()),
      })
    );

    const response = await this.axiosIntance.put<IPropertyListResponse>(
      'property/' + property.id,
      formData,
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }
    );

    return response.data;
  }

  public async listAddsById(id: string): Promise<IPropertyResponse> {
    const response = await this.axiosIntance.get<IPropertyResponse>(
      `property/${id}`,
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }
    );

    return response.data;
  }

  public async deleteProperty(id: string): Promise<void> {
    await this.axiosIntance.delete(`property/${id}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  public async poi(centroid: number[]): Promise<IPOIResponse> {
    const response = await this.axiosIntance.post<IPOIResponse>('poi', {
      center_point: centroid,
    });

    return response.data;
  }
}

const listAddsService = new ListAddsService();
export default listAddsService;
