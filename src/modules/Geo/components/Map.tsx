import { useState, useEffect } from "react";

// Layers
import WholeMapLayer from "../../../assets/vectors/geo/map-layers/whole-map.png";
import ManufacturingLayer from "../../../assets/vectors/geo/map-layers/manufacturing.png";
import DistributionCentersLayer from "../../../assets/vectors/geo/map-layers/distribution-centers.png";
import RetailStoresLayer from "../../../assets/vectors/geo/map-layers/retail-stores.png";
import ExportMarketsLayer from "../../../assets/vectors/geo/map-layers/export-markets.png";

// Keys Icons
import ManufactoringIcon from "../../../assets/vectors/geo/map-keys/manufacturing.svg";
import CentersIcon from "../../../assets/vectors/geo/map-keys/centers.svg";
import MarketsIcon from "../../../assets/vectors/geo/map-keys/markets.svg";
import StoresIcon from "../../../assets/vectors/geo/map-keys/stores.svg";
import { useTranslation } from "../../common/hooks/useTranslation";

type LayerKey = "manufacturing" | "distribution" | "stores" | "markets";

const LAYERS: { key: LayerKey; src: string }[] = [
  { key: "manufacturing", src: ManufacturingLayer },
  { key: "distribution", src: DistributionCentersLayer },
  { key: "stores", src: RetailStoresLayer },
  { key: "markets", src: ExportMarketsLayer },
];

const BUTTONS: { key: LayerKey; icon: string; labelKey: string }[] = [
  { key: "manufacturing", icon: ManufactoringIcon, labelKey: "geographicalFootprint.manufacturing" },
  { key: "distribution", icon: CentersIcon, labelKey: "geographicalFootprint.distribution" },
  { key: "stores", icon: StoresIcon, labelKey: "geographicalFootprint.stores" },
  { key: "markets", icon: MarketsIcon, labelKey: "geographicalFootprint.markets" },
];

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(
    () => window.matchMedia("(min-width: 1024px)").matches
  );
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isDesktop;
};

const Map = () => {
  const { t } = useTranslation("overview");
  const isDesktop = useIsDesktop();

  // click-based state (mobile/tablet)
  const [active, setActive] = useState<LayerKey | null>(null);
  // hover-based state (desktop)
  const [hovered, setHovered] = useState<LayerKey | null>(null);

  const focused = isDesktop ? hovered : active;
  const isVisible = (key: LayerKey) => focused === null || focused === key;

  const handleClick = (key: LayerKey) => {
    if (!isDesktop) setActive((prev) => (prev === key ? null : key));
  };

  return (
    <div>
      <div className="w-full h-auto relative">
        <img
          src={WholeMapLayer}
          alt=""
          className="w-full h-auto object-contain"
        />
        {LAYERS.map(({ key, src }) => (
          <img
            key={key}
            src={src}
            alt=""
            className={[
              "w-full h-full object-contain absolute top-0 left-0",
              "transition-opacity duration-500",
              isVisible(key) ? "opacity-100" : "opacity-0",
            ].join(" ")}
          />
        ))}
      </div>

      <div className="flex gap-4 items-center justify-center mt-8 text-sm flex-wrap">
        {BUTTONS.map(({ key, icon, labelKey }) => (
          <button
            key={key}
            type="button"
            onClick={() => handleClick(key)}
            onMouseEnter={() => isDesktop && setHovered(key)}
            onMouseLeave={() => isDesktop && setHovered(null)}
            className={[
              "bg-transparent flex items-center gap-2 transition-opacity duration-300",
              focused !== null && focused !== key ? "opacity-40" : "opacity-100",
            ].join(" ")}
          >
            <img src={icon} className="w-8 h-8 object-contain" />
            <span>{t(labelKey)}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Map;
