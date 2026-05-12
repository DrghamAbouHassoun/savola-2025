import { useState } from "react";

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

const Map = () => {
  const { t } = useTranslation("overview");
  const [active, setActive] = useState<LayerKey | null>(null);

  const toggle = (key: LayerKey) =>
    setActive((prev) => (prev === key ? null : key));

  const isVisible = (key: LayerKey) => active === null || active === key;

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
        {(
          [
            { key: "manufacturing" as LayerKey, icon: ManufactoringIcon, label: t("geographicalFootprint.manufacturing") },
            { key: "distribution" as LayerKey, icon: CentersIcon, label: t("geographicalFootprint.distribution") },
            { key: "stores" as LayerKey, icon: StoresIcon, label: t("geographicalFootprint.stores") },
            { key: "markets" as LayerKey, icon: MarketsIcon, label: t("geographicalFootprint.markets") },
          ] as const
        ).map(({ key, icon, label }) => (
          <button
            key={key}
            type="button"
            onClick={() => toggle(key)}
            className={[
              "bg-transparent flex items-center gap-2 transition-opacity duration-300",
              active !== null && active !== key ? "opacity-40" : "opacity-100",
            ].join(" ")}
          >
            <img src={icon} className="w-8 h-8 object-contain" />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Map;
