export interface Unit {
  name: string;
  symbol: string;
  toBase: number;
}

export interface CategoryData {
  title: string;
  slug: string;
  description: string;
  baseUnit: string;
  units: Unit[];
}

export const categoriesData: Record<string, CategoryData> = {
  length: {
    title: "Length Converter",
    slug: "length",
    description: "Convert meters, kilometers, miles, feet, and more instantly.",
    baseUnit: "meters",
    units: [
      { name: "Meters", symbol: "m", toBase: 1 },
      { name: "Kilometers", symbol: "km", toBase: 1000 },
      { name: "Centimeters", symbol: "cm", toBase: 0.01 },
      { name: "Millimeters", symbol: "mm", toBase: 0.001 },
      { name: "Miles", symbol: "mi", toBase: 1609.34 },
      { name: "Feet", symbol: "ft", toBase: 0.3048 },
      { name: "Inches", symbol: "in", toBase: 0.0254 },
    ],
  },
  weight: {
    title: "Weight Converter",
    slug: "weight",
    description: "Convert kilograms, grams, pounds, ounces easily.",
    baseUnit: "grams",
    units: [
      { name: "Grams", symbol: "g", toBase: 1 },
      { name: "Kilograms", symbol: "kg", toBase: 1000 },
      { name: "Pounds", symbol: "lb", toBase: 453.592 },
      { name: "Ounces", symbol: "oz", toBase: 28.3495 },
    ],
  },
  time: {
    title: "Time Converter",
    slug: "time",
    description:
      "Convert nanoseconds, microseconds, milliseconds, seconds, minutes, hours, days, weeks.",
    baseUnit: "seconds",
    units: [
      { name: "Nanoseconds", symbol: "ns", toBase: 0.000000001 },
      { name: "Microseconds", symbol: "μs", toBase: 0.000001 },
      { name: "Milliseconds", symbol: "ms", toBase: 0.001 },
      { name: "Seconds", symbol: "s", toBase: 1 },
      { name: "Minutes", symbol: "min", toBase: 60 },
      { name: "Hours", symbol: "h", toBase: 3600 },
      { name: "Days", symbol: "day", toBase: 86400 },
      { name: "Weeks", symbol: "week", toBase: 604800 },
    ],
  },
  power: {
    title: "Power Converter",
    slug: "power",
    description: "Convert watts, kilowatts, horsepower and more.",
    baseUnit: "watts",
    units: [
      { name: "Watts", symbol: "W", toBase: 1 },
      { name: "Kilowatts", symbol: "kW", toBase: 1000 },
      { name: "Horsepower", symbol: "hp", toBase: 745.7 },
    ],
  },
  temperature: {
    title: "Temperature Converter",
    slug: "temperature",
    description: "Convert Celsius, Fahrenheit, and Kelvin.",
    baseUnit: "celsius",
    units: [
      { name: "Celsius", symbol: "°C", toBase: 1 },
      { name: "Fahrenheit", symbol: "°F", toBase: 1 }, // Note: Temp formulas can be adjusted if needed
      { name: "Kelvin", symbol: "K", toBase: 1 },
    ],
  },
};
