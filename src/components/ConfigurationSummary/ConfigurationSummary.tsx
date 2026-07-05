import usePropertiesStore from "../../Stores/propertyStore";
import MainButton from "../MainButton/MainButton";

const configureOptions = ["Format", "Color", "Cushion Material"];

const ConfigurationSummary = () => {
  const {
    format,
    color,
    material,
    formatPrices,
    colorPrices,
    materialPrices,
    getTotalPrice,
  } = usePropertiesStore();
  const total = getTotalPrice();
  const priceString = `$${total.toFixed(2)}`;

  return (
    <section className="flex flex-col justify-center items-center gap-(--spacing-l)">
      <div className="w-full flex flex-col justify-center gap-(--spacing-base) p-(--spacing-m) rounded-3xl bg-linear-to-br from-(--color-bg-secondary)/50 to-(--color-bg-primary)/50 border-2 border-(--color-border-primary)/20 shadow-lg shadow-blue-500/50">
        <div className="flex items-center gap-(--spacing-s)">
          <img className="w-6 h-6" src="icons/stars.svg" alt="Stars" />
          <h2 className="font-primary text-lg lg:text-xl text-(--color-text-primary)">
            Your Configuration
          </h2>
        </div>
        <div className="flex flex-col justify-center gap-(--spacing-s)">
          {configureOptions.map((option) => (
            <div key={option} className="flex justify-between">
              <p className="font-secondary text-xs lg:text-sm text-(--color-text-secondary)">
                {option}:
              </p>
              <p className="font-secondary text-xs lg:text-sm text-(--color-text-primary)">
                {option === "Format"
                  ? `${format} ${
                      formatPrices[format] !== 0
                        ? `(+$${formatPrices[format]?.toFixed(2)})`
                        : ""
                    }`
                  : option === "Color"
                  ? `${color} ${
                      colorPrices[color] !== 0
                        ? `(+$${colorPrices[color]?.toFixed(2)})`
                        : ""
                    }`
                  : `${material} ${
                      materialPrices[material] !== 0
                        ? `(+$${materialPrices[material]?.toFixed(2)})`
                        : ""
                    }`}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-between border-t border-(--color-border-primary)/10 pt-(--spacing-base)">
          <p className="font-secondary text-xs lg:text-sm text-(--color-text-secondary)">
            Price:
          </p>
          <p className="font-secondary text-xs lg:text-sm text-(--color-text-primary)">
            {priceString}
          </p>
        </div>
      </div>
      <MainButton
        label={`Add to Cart — ${priceString}`}
        icon="shopping-cart"
        selected={false}
        onClick={() => {}}
      />
      <p className="font-secondary font-light text-2xs lg:text-xs text-(--color-text-tertiary)">
        Free shipping on all custom orders • 30-day return policy
      </p>
    </section>
  );
};

export default ConfigurationSummary;
