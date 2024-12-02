import { AxiosInstance } from "axios";
import axiosIntance from "../../../lib/axios";
import { IOverlapsAreaResponse } from "../types/overlapsAreaType";

class OverlapsAreaService {
  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axiosIntance;
  }

  public async overlapsProperty(
    polygon: number[][]
  ): Promise<IOverlapsAreaResponse> {
    const response = await this.axiosInstance.post<
      Promise<IOverlapsAreaResponse>
    >(`/area/overlaps`, {
      geom: polygon,
    });

    return response.data;
  }
}

const overlapsAreaService = new OverlapsAreaService();
export default overlapsAreaService;
