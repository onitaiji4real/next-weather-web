// 根據傳入風速（m/h）對照蒲福風級，取得對應風級
interface WindRange {
  min: number;
  max: number;
  level: number;
}
export const beaufortScaleMap: WindRange[] = [
  { min: 0, max: 0.3, level: 0 },
  { min: 0.3, max: 1.5, level: 1 },
  { min: 1.6, max: 3.3, level: 2 },
  { min: 3.4, max: 5.4, level: 3 },
  { min: 5.5, max: 7.9, level: 4 },
  { min: 8.0, max: 10.7, level: 5 },
  { min: 10.8, max: 13.8, level: 6 },
  { min: 13.9, max: 17.1, level: 7 },
  { min: 17.2, max: 20.7, level: 8 },
  { min: 20.8, max: 24.4, level: 9 },
  { min: 24.5, max: 28.4, level: 10 },
  { min: 28.5, max: 32.6, level: 11 },
  { min: 32.7, max: 36.9, level: 12 },
  { min: 37.0, max: 41.4, level: 13 },
  { min: 41.5, max: 46.1, level: 14 },
  { min: 46.2, max: 50.9, level: 15 },
  { min: 51.0, max: 56.0, level: 16 },
  { min: 56.1, max: 61.2, level: 17 },
];
