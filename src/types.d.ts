export interface ICityPayload {
  date: string;
  maxTemp: number;
  maxWindSpeed: number;
  minTemp: number;
  precipProb: number;
  symbol: string;
  symbolPhrase: string;
}

export interface IState {
  loading: boolean;
  activeCity: string | null;
  cities: Partial<{
    [key: string]: ICityPayload[];
  }>;
}
