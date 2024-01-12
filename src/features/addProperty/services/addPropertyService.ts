import { AxiosInstance } from 'axios';
import axiosIntance from '../../../lib/axios';

import useUserStore from '../../authentication/store/useUserStore';
import {
  IAddPropertyFieldRequest,
  IAddPropertyFieldResponse,
} from '../types/addPropertyResponse';

class AddPropertyService {
  axiosIntance: AxiosInstance;

  constructor() {
    this.axiosIntance = axiosIntance;
  }
  public async addProperty({
    photos,
    ...data
  }: IAddPropertyFieldRequest & {
    photos: File[];
  }): Promise<IAddPropertyFieldResponse> {
    const token = useUserStore.getState().token;

    const formData = new FormData();
    formData.append('data', JSON.stringify(data));
    photos.forEach((photo) => {
      formData.append('files', photo);
    });

    const reesponse = await this.axiosIntance.post<IAddPropertyFieldResponse>(
      'property',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return reesponse.data;
  }
}

const addPropertyService = new AddPropertyService();
export default addPropertyService;
