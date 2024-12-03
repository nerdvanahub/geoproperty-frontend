import { AxiosInstance } from 'axios';
import axiosIntance from '../../../lib/axios';
import {
  IPropertyListResponse,
  IPropertyResponse,
  Property,
} from '../../../types/propertyType';
import useUserStore from '../../authentication/store/useUserStore';
import { IPOIResponse } from '../../detail/types/poiType';

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

  public async editAds(property: Property): Promise<IPropertyListResponse> {
    const formData = new FormData();
    formData.append('data', JSON.stringify(property));

    const response = await this.axiosIntance.put<IPropertyListResponse>(
      'property/own',
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
