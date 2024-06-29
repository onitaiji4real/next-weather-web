export interface CityResult {
  results: {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    elevation: number;
    feature_code: string;
    country_code: string;
    timezone: string;
    population: number;
    country_id: number;
    country: string;
  }[];
  generationtime_ms: number;
}
