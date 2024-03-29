interface SunsetCity {
  city: string;
  country: string;
  coordinates: [number, number];
  timezone: string;
  colors: [
    [number, number, number],
    [number, number, number],
    [number, number, number],
    [number, number, number]
  ];
}

const sunsetCities: SunsetCity[] = [
  {
    city: "Tokyo",
    country: "Japan",
    coordinates: [35.6895, 139.6917],
    timezone: "UTC+9",
    colors: [
      [1, 0.42, 0.42],
      [1, 0.82, 0.4],
      [0.3, 0.85, 0.39],
      [0, 0.48, 1],
    ],
  },
  {
    city: "Paris",
    country: "France",
    coordinates: [48.8566, 2.3522],
    timezone: "UTC+1 (UTC+2 DST)",
    colors: [
      [1, 0.68, 0.79],
      [1, 0.8, 0.36],
      [0.36, 0.74, 0.82],
      [0.17, 0.24, 0.31],
    ],
  },
  {
    city: "Ottawa",
    country: "Canada",
    coordinates: [45.4215, -75.6972],
    timezone: "UTC-5 (UTC-4 DST)",
    colors: [
      [1, 0.61, 0.33],
      [0.98, 0.82, 0.17],
      [0.1, 0.71, 1],
      [0.56, 0.07, 1],
    ],
  },
  {
    city: "Nairobi",
    country: "Kenya",
    coordinates: [-1.2864, 36.8172],
    timezone: "UTC+3",
    colors: [
      [0.99, 0.37, 0.33],
      [1, 0.76, 0],
      [0.34, 0.87, 1],
      [0.52, 0.58, 0.6],
    ],
  },
  {
    city: "Canberra",
    country: "Australia",
    coordinates: [-35.2835, 149.128],
    timezone: "UTC+10 (UTC+11 DST)",
    colors: [
      [1, 0.44, 0.81],
      [1, 0.62, 0.04],
      [0, 0.85, 0.84],
      [0.02, 0.22, 0.42],
    ],
  },
  {
    city: "Buenos Aires",
    country: "Argentina",
    coordinates: [-34.6037, -58.3816],
    timezone: "UTC-3",
    colors: [
      [1, 0.53, 0.48],
      [1, 0.85, 0.47],
      [0.29, 0.56, 0.89],
      [0.47, 0.16, 0.55],
    ],
  },
];

export default sunsetCities;
