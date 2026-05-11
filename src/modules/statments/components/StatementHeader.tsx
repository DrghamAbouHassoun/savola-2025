import { useTranslation } from "../../common/hooks/useTranslation";

const StatementHeader = ({ title }: { title: string }) => {
  const { t } = useTranslation("financial-statements");
  return (
    <div className="w-full">
      <h3 className="text-lg text-savola-cool-grey font-semibold mb-2">
        {t("savolaGroup")}
      </h3>
      <h2 className="text-2xl font-bold text-savola-green mb-4">{title}</h2>
      <p className="text-sm font-semibold text-savola-cool-grey">{t("date")}</p>
      <p
        className="text-sm text-savola-cool-grey"
        dangerouslySetInnerHTML={{ __html: t("currancy") }}
      ></p>
    </div>
  );
};

export default StatementHeader;
