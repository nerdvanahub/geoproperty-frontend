import { AxiosInstance } from "axios";
import axiosIntance from "../../../lib/axios";
import { ISearchResponse } from "../types/search-type";
import { ResponseGeoJsonType } from "../types/responseGeoJsonType";

class SearchService {
  axiosIntance: AxiosInstance;

  constructor() {
    this.axiosIntance = axiosIntance;
  }
  public async searchProperty(keyword: string): Promise<ISearchResponse> {
    const response = await this.axiosIntance.get<ISearchResponse>(
      `/search/${keyword}`
    );

    return response.data;
  }
  public async searchPropertyByPrompt(
    prompt: string
  ): Promise<ResponseGeoJsonType> {
    const response = await this.axiosIntance.post<ResponseGeoJsonType>(
      `/property/prompt`,
      {
        prompt: prompt,
      }
    );

    return response.data;
  }
  public async searchPropertyByLocation(
    location: number[]
  ): Promise<ResponseGeoJsonType> {
    const response = await this.axiosIntance.post<ResponseGeoJsonType>(
      `/property/point`,
      {
        center_point: location,
      }
    );

    return response.data;
  }
  public async searchPropertyByArea(
    location: number[][]
  ): Promise<ResponseGeoJsonType> {
    const response = await this.axiosIntance.post<ResponseGeoJsonType>(
      `/property/area`,
      {
        polygon: location,
      }
    );

    return response.data;
  }
}

const searchService = new SearchService();
export default searchService;
