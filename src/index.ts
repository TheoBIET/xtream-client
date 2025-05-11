import axios, { AxiosInstance } from "axios";
import { XtreamAction } from "./enums";
import { XtreamLoginResponse } from "./schemas";

export class Xtream {
  private api: AxiosInstance

  constructor(
    private readonly url: string,
    private readonly username: string,
    private readonly password: string,
  ) {
    this.api = axios.create({
      baseURL: `${this.url}/player_api.php`,
      params: {
        username: this.username,
        password: this.password,
      },
    })
  }

  private async get<T>(action?: XtreamAction): Promise<T> {
    const response = await this.api.get<T>('', {
      params: {
        action,
      },
    })

    return response.data;
  }

  async login() {
    return this.get<XtreamLoginResponse>()
  }
}
