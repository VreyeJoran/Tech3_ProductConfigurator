import { useEffect, useState } from "react";
import ConfigurationOptions from "../components/ConfigurationOptions/ConfigurationOptions";
import ConfigurationSummary from "../components/ConfigurationSummary/ConfigurationSummary";
import Header from "../components/Header/Header";
import ProductConfiguratorWindow from "../components/ProductConfiguratorWindow/ProductConfiguratorWindow";
import TopText from "../components/TopText/TopText";

const Configurator = () => {
  const [isSmallWindow, setIsSmallWindow] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => setIsSmallWindow(window.innerWidth <= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header />
      {isSmallWindow && (
        <section className="flex flex-col justify-center px-(--spacing-l) pt-(--spacing-l) pb-(--spacing-m) gap-(--spacing-l)">
          <TopText />
          <ProductConfiguratorWindow />
          <ConfigurationOptions isSmallWindow={isSmallWindow} />
          <ConfigurationSummary />
        </section>
      )}

      {!isSmallWindow && (
        <div className="flex p-(--spacing-l) gap-(--spacing-l)">
          <div className="flex flex-col items-center gap-(--spacing-m) lg:flex-2 min-w-0">
            <ProductConfiguratorWindow />
          </div>
          <div className="flex-3 min-w-0 flex flex-col gap-(--spacing-m)">
            <TopText />
            <ConfigurationOptions isSmallWindow={isSmallWindow} />
            <ConfigurationSummary />
          </div>
        </div>
      )}
    </>
  );
};

export default Configurator;
