import SecondaryBtn from "../SecondaryBtn/SecondaryBtn";

const Header = () => {
  return (
    <section className="w-full flex justify-between items-center px-(--spacing-l) py-(--spacing-m) bg-(--color-bg-primary)/20 border-b border-(--color-border-primary)/10">
      <div className="flex items-center gap-(--spacing-m)">
        <SecondaryBtn label="Leave" icon="arrow-left.svg" isLink linkTo="/" />
        <div className="flex flex-col items-start">
          <p className="font-primary font-semibold text-xl lg:text-2xl text-(--color-text-primary)">
            SONIC X PRO
          </p>
          <p className="font-secondary text-sm lg:text-base text-(--color-text-secondary)">
            Custom Edition
          </p>
        </div>
      </div>
      <SecondaryBtn label="Share" icon="share.svg" />
    </section>
  );
};

export default Header;
