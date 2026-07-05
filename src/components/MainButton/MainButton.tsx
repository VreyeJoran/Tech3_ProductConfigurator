interface MainButtonProps {
  label: string;
  isTitle?: boolean;
  icon?: string;
  selected?: boolean;
  onClick?: () => void;
}

const MainButton = ({
  label,
  isTitle,
  icon,
  selected,
  onClick,
}: MainButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center gap-(--spacing-s) w-full py-(--spacing-base) rounded-xl bg-linear-to-br from-(--color-bg-tertiary) to-(--color-bg-quaternary) ${
        isTitle
          ? "font-primary text-lg lg:text-xl"
          : "font-secondary text-xs lg:text-sm"
      } text-(--color-text-primary) text-nowrap hover:cursor-pointer border-2 ${
        selected ? "border-(--color-border-primary)/50" : "border-transparent"
      } hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 active:scale-95 transition-all duration-200`}
      onClick={onClick ? () => onClick() : undefined}
    >
      {icon && <img className="w-4 h-4" src={`icons/${icon}.svg`} alt={icon} />}
      <p>{label}</p>
    </button>
  );
};

export default MainButton;
