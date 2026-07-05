import usePropertiesStore from "../../Stores/propertyStore";
import ConfigOption from "../ConfigOption/ConfigOption";
import MainButton from "../MainButton/MainButton";

interface ConfigurationOptionsProps {
  isSmallWindow: boolean;
}

const configureOptions = ["Format", "Color", "Cushion Material"];
const formats = ["Round", "Oval"];
const colors = ["White", "Blue", "Pink", "Green"];
const materials = ["Polyester", "Cotton", "Leather"];

const ConfigurationOptions = ({ isSmallWindow }: ConfigurationOptionsProps) => {
  const {
    configureOption,
    setConfigureOption,
    format,
    setFormat,
    color,
    setColor,
    material,
    setMaterial,
  } = usePropertiesStore();

  return (
    <div className="flex flex-col items-center lg:items-start gap-(--spacing-base) lg:gap-0 py-(--spacing-m) lg:py-0 border-t border-b border-(--color-border-primary)/10 lg:border-0">
      {isSmallWindow && (
        <>
          <ConfigOption
            isSmallWindow={isSmallWindow}
            title={configureOption}
            selectedConfigureOption={configureOption}
            setSelectedConfigureOption={setConfigureOption}
            formats={formats}
            selectedFormat={format}
            onSelectFormat={setFormat}
            colors={colors}
            selectedColor={color}
            onSelectColor={setColor}
            materials={materials}
            selectedMaterial={material}
            onSelectMaterial={setMaterial}
          />
          <div className="w-full flex justify-center items-center gap-(--spacing-base)">
            {configureOptions.map((option) => (
              <MainButton
                key={option}
                label={option}
                isTitle
                selected={configureOption === option}
                onClick={() => setConfigureOption(option as any)}
              />
            ))}
          </div>
        </>
      )}
      {!isSmallWindow && (
        <>
          {configureOptions.map((option) => (
            <ConfigOption
              key={option}
              isSmallWindow={isSmallWindow}
              title={option}
              selectedConfigureOption={configureOption}
              setSelectedConfigureOption={setConfigureOption}
              formats={formats}
              selectedFormat={format}
              onSelectFormat={setFormat}
              colors={colors}
              selectedColor={color}
              onSelectColor={setColor}
              materials={materials}
              selectedMaterial={material}
              onSelectMaterial={setMaterial}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ConfigurationOptions;
