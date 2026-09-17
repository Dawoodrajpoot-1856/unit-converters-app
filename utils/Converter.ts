// converters.ts

export interface Unit {
  name: string;
  symbol: string;
  factor?: number;
}

export interface ConversionCategory {
  title: string;
  units: Unit[];
  isFormulaBased?: boolean;
}

export interface ConversionData {
  [category: string]: ConversionCategory;
}

export const conversionData: ConversionData = {
  length: {
    title: "Length",
    units: [
      { name: "Meter", symbol: "m", factor: 1 },
      { name: "Millimeter", symbol: "mm", factor: 0.001 },
      { name: "Centimeter", symbol: "cm", factor: 0.01 },
      { name: "Kilometer", symbol: "km", factor: 1000 },
      { name: "Inch", symbol: "in", factor: 0.0254 },
      { name: "Foot", symbol: "ft", factor: 0.3048 },
      { name: "Yard", symbol: "yd", factor: 0.9144 },
      { name: "Mile", symbol: "mi", factor: 1609.344 },
      { name: "Nautical Mile", symbol: "nmi", factor: 1852 },
      { name: "Micrometer", symbol: "μm", factor: 1e-6 },
      { name: "Nanometer", symbol: "nm", factor: 1e-9 },
      { name: "Light-Year", symbol: "ly", factor: 9.461e15 },
    ],
  },
  weight: {
    title: "Weight",
    units: [
      { name: "Kilogram", symbol: "kg", factor: 1 },
      { name: "Gram", symbol: "g", factor: 0.001 },
      { name: "Milligram", symbol: "mg", factor: 1e-6 },
      { name: "Metric Ton", symbol: "t", factor: 1000 },
      { name: "Pound", symbol: "lb", factor: 0.45359237 },
      { name: "Ounce", symbol: "oz", factor: 0.02834952 },
      { name: "Stone", symbol: "st", factor: 6.35029 },
    ],
  },
  temperature: {
    title: "Temperature",
    isFormulaBased: true,
    units: [
      { name: "Celsius", symbol: "°C" },
      { name: "Fahrenheit", symbol: "°F" },
      { name: "Kelvin", symbol: "K" },
    ],
  },
  area: {
    title: "Area",
    units: [
      { name: "Square Meter", symbol: "m²", factor: 1 },
      { name: "Square Kilometer", symbol: "km²", factor: 1e6 },
      { name: "Square Foot", symbol: "ft²", factor: 0.092903 },
      { name: "Acre", symbol: "ac", factor: 4046.86 },
      { name: "Hectare", symbol: "ha", factor: 10000 },
    ],
  },
  volume: {
    title: "Volume",
    units: [
      { name: "Liter", symbol: "L", factor: 1 },
      { name: "Milliliter", symbol: "mL", factor: 0.001 },
      { name: "Cubic Meter", symbol: "m³", factor: 1000 },
      { name: "US Gallon", symbol: "gal", factor: 3.78541 },
      { name: "Fluid Ounce", symbol: "fl oz", factor: 0.0295735 },
    ],
  },
  speed: {
    title: "Speed",
    units: [
      { name: "Meter per second", symbol: "m/s", factor: 1 },
      { name: "Kilometer per hour", symbol: "km/h", factor: 0.277778 },
      { name: "Mile per hour", symbol: "mph", factor: 0.44704 },
      { name: "Knot", symbol: "kn", factor: 0.514444 },
    ],
  },
  time: {
    title: "Time",
    units: [
      { name: "Second", symbol: "s", factor: 1 },
      { name: "Minute", symbol: "min", factor: 60 },
      { name: "Hour", symbol: "hr", factor: 3600 },
      { name: "Day", symbol: "d", factor: 86400 },
      { name: "Week", symbol: "wk", factor: 604800 },
      { name: "Year", symbol: "yr", factor: 31536000 },
    ],
  },
  data: {
    title: "Data",
    units: [
      { name: "Byte", symbol: "B", factor: 1 },
      { name: "Kilobyte", symbol: "KB", factor: 1024 },
      { name: "Megabyte", symbol: "MB", factor: 1048576 },
      { name: "Gigabyte", symbol: "GB", factor: 1073741824 },
      { name: "Terabyte", symbol: "TB", factor: 1099511627776 },
    ],
  },
  pressure: {
    title: "Pressure",
    units: [
      { name: "Pascal", symbol: "Pa", factor: 1 },
      { name: "Bar", symbol: "bar", factor: 100000 },
      { name: "PSI", symbol: "psi", factor: 6894.76 },
      { name: "Atmosphere", symbol: "atm", factor: 101325 },
    ],
  },
  power: {
    title: "Power",
    units: [
      { name: "Watt", symbol: "W", factor: 1 },
      { name: "Kilowatt", symbol: "kW", factor: 1000 },
      { name: "Horsepower", symbol: "hp", factor: 735.499 },
    ],
  },
  energy: {
    title: "Energy",
    units: [
      { name: "Joule", symbol: "J", factor: 1 },
      { name: "Kilojoule", symbol: "kJ", factor: 1000 },
      { name: "Calorie", symbol: "cal", factor: 4.184 },
      { name: "Kilocalorie", symbol: "kcal", factor: 4184 },
    ],
  },
  angle: {
    title: "Angle",
    units: [
      { name: "Degree", symbol: "°", factor: 1 },
      { name: "Radian", symbol: "rad", factor: 57.2958 },
      { name: "Gradian", symbol: "grad", factor: 0.9 },
    ],
  },
  mechanics: {
    title: "Engineering & Mechanics",
    units: [
      { name: "Newton", symbol: "N", factor: 1 },
      { name: "Kilonewton", symbol: "kN", factor: 1000 },
      { name: "Pound-force", symbol: "lbf", factor: 4.44822 },
      { name: "Dyne", symbol: "dyn", factor: 1e-5 },
      { name: "Kilogram-force", symbol: "kgf", factor: 9.80665 },
      { name: "Newton-meter (Torque)", symbol: "N·m", factor: 1 },
      { name: "Foot-pound (Torque)", symbol: "ft·lbf", factor: 1.35582 },
    ],
  },
  thermal: {
    title: "Thermal & Heat",
    units: [
      { name: "Joule (Heat)", symbol: "J", factor: 1 },
      { name: "Kilojoule", symbol: "kJ", factor: 1000 },
      { name: "Calorie (Thermochemical)", symbol: "cal", factor: 4.184 },
      { name: "Kilocalorie", symbol: "kcal", factor: 4184 },
      { name: "British Thermal Unit", symbol: "BTU", factor: 1055.06 },
      { name: "Watt per meter-kelvin", symbol: "W/(m·K)", factor: 1 },
    ],
  },
  "fluid-flow": {
    title: "Flow & Fluid Mechanics",
    units: [
      { name: "Cubic Meter per second", symbol: "m³/s", factor: 1 },
      { name: "Liter per second", symbol: "L/s", factor: 0.001 },
      { name: "Liter per minute", symbol: "L/min", factor: 0.0000166667 },
      { name: "Cubic Foot per second", symbol: "ft³/s", factor: 0.0283168 },
      { name: "Gallon per minute (US)", symbol: "GPM", factor: 0.00006309 },
      { name: "Cubic Meter per hour", symbol: "m³/h", factor: 0.000277778 },
    ],
  },
  fuel: {
    title: "Fuel & Efficiency",
    units: [
      { name: "Kilometer per liter", symbol: "km/L", factor: 1 },
      { name: "Miles per gallon (US)", symbol: "mpg (US)", factor: 0.425144 },
      { name: "Miles per gallon (UK)", symbol: "mpg (UK)", factor: 0.354006 },
      { name: "Liters per 100km (Base)", symbol: "L/100km", factor: 1 },
    ],
  },
  optics: {
    title: "Light & Optics",
    units: [
      { name: "Lux", symbol: "lx", factor: 1 },
      { name: "Lumen per sq meter", symbol: "lm/m²", factor: 1 },
      { name: "Foot-candle", symbol: "fc", factor: 10.764 },
      { name: "Phot", symbol: "ph", factor: 10000 },
      { name: "Candela (Intensity)", symbol: "cd", factor: 1 },
    ],
  },
  electricity: {
    title: "Electricity & Magnetism",
    units: [
      { name: "Ampere (Current)", symbol: "A", factor: 1 },
      { name: "Milliampere", symbol: "mA", factor: 0.001 },
      { name: "Kiloampere", symbol: "kA", factor: 1000 },
      { name: "Volt (Voltage)", symbol: "V", factor: 1 },
      { name: "Kilovolt", symbol: "kV", factor: 1000 },
      { name: "Ohm (Resistance)", symbol: "Ω", factor: 1 },
      { name: "Coulomb (Charge)", symbol: "C", factor: 1 },
      { name: "Tesla (Magnetic Flux)", symbol: "T", factor: 1 },
      { name: "Gauss", symbol: "G", factor: 0.0001 },
    ],
  },
  radiation: {
    title: "Radiation & Nuclear",
    units: [
      { name: "Becquerel (Activity)", symbol: "Bq", factor: 1 },
      { name: "Curie", symbol: "Ci", factor: 3.7e10 },
      { name: "Gray (Absorbed dose)", symbol: "Gy", factor: 1 },
      { name: "Rad", symbol: "rad", factor: 0.01 },
      { name: "Sievert (Equivalent dose)", symbol: "Sv", factor: 1 },
      { name: "Rem", symbol: "rem", factor: 0.01 },
    ],
  },
};

export const categoriesData = conversionData;

const convertTemperature = (val: number, from: string, to: string): number => {
  if (from === to) return val;
  let celsius: number = val;

  if (from === "°C") celsius = val;
  else if (from === "°F") celsius = (val - 32) * (5 / 9);
  else if (from === "K") celsius = val - 273.15;

  if (to === "°C") return celsius;
  if (to === "°F") return celsius * (9 / 5) + 32;
  if (to === "K") return celsius + 273.15;
  return val;
};

export const calculateConversion = (
  category: string,
  fromUnit: string,
  toUnit: string,
  inputValue: string | number,
): string => {
  const strVal = String(inputValue).trim();
  if (strVal === "" || isNaN(Number(strVal))) return "0";

  const val = parseFloat(strVal);
  const safeCategory = category.toLowerCase().trim();

  if (safeCategory === "temperature") {
    const res = convertTemperature(val, fromUnit, toUnit);
    return Number(res.toFixed(6)).toString();
  }

  const categoryData = conversionData[safeCategory];
  if (!categoryData) return "0";

  const fromObj = categoryData.units.find((u) => u.symbol === fromUnit);
  const toObj = categoryData.units.find((u) => u.symbol === toUnit);

  const fromFactor = fromObj?.factor ?? 1;
  const toFactor = toObj?.factor ?? 1;

  if (toFactor === 0) return "0";

  const inBase = val * fromFactor;
  const result = inBase / toFactor;

  return Number(result.toPrecision(8)).toString();
};
