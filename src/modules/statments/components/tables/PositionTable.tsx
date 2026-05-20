import { useContext } from "react";
import { LangContext } from "../../../common/contexts/LangProvider";
import { financialPositionEn, financialPositionAr } from "../../data/position";
import StatementHeader from "../StatementHeader";
import { useTranslation } from "../../../common/hooks/useTranslation";

const BOLD_COL_INDEX = 2;

const PositionTable = () => {
  const { t } = useTranslation("financial-statements");
  const { lang } = useContext(LangContext);
  const data = lang === "ar" ? financialPositionAr : financialPositionEn;
  const isRtl = lang === "ar";

  return (
    <div>
      <StatementHeader title={t("headers.position")} dateType="date2" />
      <div className="overflow-auto w-full">
        <table className="min-w-175 w-full text-sm" dir={isRtl ? "rtl" : "ltr"}>
          <thead>
            <tr className="">
              {data.headers.map((header, i) => (
                <th
                  key={i}
                  className={`px-4 py-3 border-b-2 border-b-savola-orange whitespace-nowrap ${
                    i === 0
                      ? "text-start min-w-70"
                      : lang === "ar"
                        ? "text-start min-w-20"
                        : "text-end min-w-20"
                  } ${i === BOLD_COL_INDEX && "bg-savola-orange"}`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className={``}>
                {row.data.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`px-4 py-2 border-b border-gray-500 ${
                      (row.isBold && cellIndex != 3) || cellIndex === BOLD_COL_INDEX ?  "font-semibold" : "font-normal"
                    } ${cellIndex === 0 ? "text-start" : lang === "ar" ? "text-start" : "text-end"} ${
                      cellIndex === BOLD_COL_INDEX && "bg-savola-orange-20"
                    }`}
                  >
                    <span dangerouslySetInnerHTML={{ __html: cell || "" }} className="h-full min-h-3 block" />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm py-8">
        {t("note")}
      </p>
    </div>
  );
};

export default PositionTable;
