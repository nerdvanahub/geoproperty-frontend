import { AxiosInstance } from "axios";
import axiosIntance from "../../../lib/axios";
import {
  IPropertyListResponse,
  IPropertyResponse,
} from "../../../types/propertyType";
import useUserStore from "../../authentication/store/useUserStore";
import { IPOIResponse } from "../../detail/types/poiType";

class ListAddsService {
  axiosIntance: AxiosInstance;
  token = useUserStore.getState().token;

  constructor() {
    this.axiosIntance = axiosIntance;
  }
  public async listAdds(): Promise<IPropertyListResponse> {
    const response = await this.axiosIntance.post<IPropertyListResponse>(
      "property/own",
      {},
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

  public async poi(centroid: number[]): Promise<IPOIResponse> {
    const response = await this.axiosIntance.post<IPOIResponse>("poi", {
      center_point: centroid,
    });

    return response.data;
  }
}

const listAddsService = new ListAddsService();
export default listAddsService;
