import { useContext } from "react";
import { useTranslation } from "../../common/hooks/useTranslation";
import { LangContext } from "../../common/contexts/LangProvider";

const StatementHeader = ({ title, dateType = "date" }: { title: string, dateType?: string }) => {
  const { t } = useTranslation("financial-statements");
  const { lang } = useContext(LangContext);
  
  return (
    <div className="w-full">
      <h3 className="text-lg text-savola-cool-grey font-semibold mb-2">
        {t("savolaGroup")}
      </h3>
      <h2 className="text-2xl font-bold text-savola-green mb-4">{title}</h2>
      <p className="text-sm font-semibold text-savola-cool-grey">{lang === "en" && dateType === "date2" ? t(dateType) : t("date")}</p>
      <p
        className="text-sm text-savola-cool-grey"
        dangerouslySetInnerHTML={{ __html: t("currancy") }}
      ></p>
    </div>
  );
};

export default StatementHeader;
