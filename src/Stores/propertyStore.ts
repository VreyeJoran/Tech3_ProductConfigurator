import { create } from "zustand";

export type ConfigureOption = "Format" | "Color" | "Cushion Material";
export type Format = "Round" | "Oval";
export type Color = "White" | "Blue" | "Pink" | "Green";
export type Material = "Polyester" | "Cotton" | "Leather";

// Typescript
interface PropertiesStore {
  configureOption: ConfigureOption;
  setConfigureOption: (option: ConfigureOption) => void;

  format: Format;
  setFormat: (option: Format) => void;

  color: Color;
  setColor: (color: Color) => void;

  material: Material;
  setMaterial: (material: Material) => void;

  // Pricing
  basePrice: number;
  formatPrices: Record<Format, number>;
  colorPrices: Record<Color, number>;
  materialPrices: Record<Material, number>;
  getTotalPrice: () => number;
}

// Store zelf
const usePropertiesStore = create<PropertiesStore>((set, get) => ({
  configureOption: "Format",
  setConfigureOption: (configureOption: ConfigureOption) =>
    set({ configureOption }),

  format: "Round",
  setFormat: (format: Format) => set({ format }),

  color: "White",
  setColor: (color: Color) => set({ color }),

  material: "Polyester",
  setMaterial: (material: Material) => set({ material }),

  // Pricing: base price is for Round + White + Polyester
  basePrice: 399,
  formatPrices: {
    Round: 0,
    Oval: 20,
  },
  colorPrices: {
    White: 0,
    Blue: 10,
    Pink: 10,
    Green: 10,
  },
  materialPrices: {
    Polyester: 0,
    Cotton: 15,
    Leather: 40,
  },

  getTotalPrice: () => {
    const state = get() as PropertiesStore;
    const {
      basePrice,
      formatPrices,
      colorPrices,
      materialPrices,
      format,
      color,
      material,
    } = state;
    const total =
      basePrice +
      (formatPrices[format] ?? 0) +
      (colorPrices[color] ?? 0) +
      (materialPrices[material] ?? 0);
    return total;
  },
}));

export default usePropertiesStore;
