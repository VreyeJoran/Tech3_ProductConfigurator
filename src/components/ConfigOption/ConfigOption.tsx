import type {
  Color,
  ConfigureOption,
  Format,
  Material,
} from "../../Stores/propertyStore";
import usePropertiesStore from "../../Stores/propertyStore";
import SelectionButton from "../SelectionButton/SelectionButton";

interface ConfigOptionProps {
  isSmallWindow: boolean;
  title: string;
  selectedConfigureOption: ConfigureOption;
  setSelectedConfigureOption: (option: ConfigureOption) => void;
  formats: string[];
  selectedFormat: Format;
  onSelectFormat: (format: Format) => void;
  colors: string[];
  selectedColor: Color;
  onSelectColor: (color: Color) => void;
  materials: string[];
  selectedMaterial: Material;
  onSelectMaterial: (material: Material) => void;
}

const ConfigOption = ({
  isSmallWindow,
  title,
  selectedConfigureOption,
  formats,
  selectedFormat,
  onSelectFormat,
  colors,
  selectedColor,
  onSelectColor,
  materials,
  selectedMaterial,
  onSelectMaterial,
}: ConfigOptionProps) => {
  const { formatPrices, colorPrices, materialPrices } = usePropertiesStore();

  return (
    <div className="flex flex-col items-center lg:items-start gap-(--spacing-base)">
      <div className="flex flex-col items-center lg:items-start">
        <h2 className="font-primary font-semibold lg:font-normal text-xl lg:text-l text-(--color-text-primary)">
          {isSmallWindow ? selectedConfigureOption : title}
        </h2>
        <p className="font-secondary text-xs lg:text-sm text-(--color-text-secondary)">
          {title === "Format"
            ? `${selectedFormat} ${
                formatPrices[selectedFormat] !== 0
                  ? `(+$${formatPrices[selectedFormat]?.toFixed(2)})`
                  : ""
              }`
            : title === "Color"
            ? `${selectedColor} ${
                colorPrices[selectedColor] !== 0
                  ? `(+$${colorPrices[selectedColor]?.toFixed(2)})`
                  : ""
              }`
            : `${selectedMaterial} ${
                materialPrices[selectedMaterial] !== 0
                  ? `(+$${materialPrices[selectedMaterial]?.toFixed(2)})`
                  : ""
              }`}
        </p>
      </div>
      <div className="flex justify-center lg:justify-start items-center gap-(--spacing-base)">
        {title === "Format" &&
          formats.map((format) => (
            <SelectionButton
              key={format}
              label={format}
              selected={selectedFormat === format}
              onClick={() => onSelectFormat(format as Format)}
            />
          ))}
        {title === "Color" &&
          colors.map((color) => (
            <SelectionButton
              key={color}
              label={color}
              selected={selectedColor === color}
              onClick={() => onSelectColor(color as Color)}
            />
          ))}
        {title === "Cushion Material" &&
          materials.map((material) => (
            <SelectionButton
              key={material}
              label={material}
              selected={selectedMaterial === material}
              onClick={() => onSelectMaterial(material as Material)}
            />
          ))}
      </div>
    </div>
  );
};

export default ConfigOption;
