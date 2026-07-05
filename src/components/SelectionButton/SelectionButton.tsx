import { useState } from "react";

interface SelectionButtonProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

const SelectionButton = ({
  label,
  selected,
  onClick,
}: SelectionButtonProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const bgImageOptions: Record<string, string> = {
    Round: "bg-[url(/images/selection-bg-round.png)]",
    Oval: "bg-[url(/images/selection-bg-oval.png)]",
    White: "bg-[url(/images/selection-bg-white.png)]",
    Blue: "bg-[url(/images/selection-bg-blue.png)]",
    Pink: "bg-[url(/images/selection-bg-pink.png)]",
    Green: "bg-[url(/images/selection-bg-green.png)]",
    Polyester: "bg-[url(/images/selection-bg-polyester.png)]",
    Cotton: "bg-[url(/images/selection-bg-cotton.png)]",
    Leather: "bg-[url(/images/selection-bg-leather.png)]",
  };

  return (
    <button
      className="flex flex-col justify-center gap-(--spacing-s) relative overflow-visible pb-(--spacing-m) hover:cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200"
      onClick={() => onClick()}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className={`flex justify-center items-center p-(--spacing-base) rounded-xl ${
          bgImageOptions[label]
        } bg-cover bg-center
        } border-2 ${
          selected
            ? "border-(--color-bg-tertiary)"
            : "border-(--color-border-primary)/20"
        } ${selected ? "shadow-lg shadow-blue-500/50" : "shadow-none"}`}
      >
        <img
          className={`w-10 h-10 bg-(--color-bg-tertiary) p-2 rounded-3xl ${
            selected ? "visible" : "opacity-0"
          }`}
          src="icons/check.svg"
          alt="Check"
        />
      </div>
      {isHovering && (
        <p className="absolute top-19 self-center text-nowrap bg-(--color-bg-primary)/50 py-(--spacing-xxs) px-(--spacing-s) rounded-sm font-secondary text-2xs lg:text-xs text-(--color-text-primary)">
          {label}
        </p>
      )}
    </button>
  );
};

export default SelectionButton;
