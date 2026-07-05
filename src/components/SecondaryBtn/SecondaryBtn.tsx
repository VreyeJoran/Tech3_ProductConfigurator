import { useState } from "react";
import { Link } from "react-router";

interface SecondaryBtnProps {
  label: string;
  icon: string;
  onClick?: () => void;
  isLink?: boolean;
  linkTo?: string;
}

const SecondaryBtn = ({
  label,
  icon,
  onClick,
  isLink,
  linkTo = "/",
}: SecondaryBtnProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const content = (
    <>
      <img
        src={`icons/${icon}`}
        alt={label}
        className="w-6 h-6 lg:w-8 lg:h-8 fill-(--color-text-primary)"
      />
      {isHovering && (
        <p className="absolute mt-3 justify-self-center text-nowrap bg-(--color-bg-primary)/50 py-(--spacing-xxs) px-(--spacing-s) rounded-sm font-secondary text-2xs lg:text-xs text-(--color-text-primary)">
          {label}
        </p>
      )}
    </>
  );
  return (
    <>
      {isLink ? (
        <Link
          to={linkTo}
          className="p-(--spacing-s) bg-(--color-bg-secondary)/50 rounded-lg hover:bg-(--color-bg-secondary)/70 transition-colors hover:scale-105 hover:cursor-pointer active:scale-95"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {content}
        </Link>
      ) : (
        <button
          className="p-(--spacing-s) bg-(--color-bg-secondary)/50 rounded-lg hover:bg-(--color-bg-secondary)/70 transition-colors hover:scale-105 hover:cursor-pointer active:scale-95"
          onClick={onClick}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {content}
        </button>
      )}
    </>
  );
};

export default SecondaryBtn;
