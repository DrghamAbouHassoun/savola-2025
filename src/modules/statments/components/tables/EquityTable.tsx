import { useContext } from "react";
import { LangContext } from "../../../common/contexts/LangProvider";
import {
  equityStatements2025En,
  equityStatements2025Ar,
  equityStatements2024En,
  equityStatements2024Ar,
} from "../../data/equity";
import type { EquityYearData } from "../../data/equity";
import StatementHeader from "../StatementHeader";
import { useTranslation } from "../../../common/hooks/useTranslation";

const BOLD_PREFIXES = [
  "January",
  "December",
  "Total",
  "يناير",
  "ديسمبر",
  "إجمالي",
];

const isBoldRow = (firstCell: string) =>
  BOLD_PREFIXES.some((prefix) => firstCell.startsWith(prefix));

// Rows between the opening and closing balance rows get bold number cells.
const getBoldNumberRows = (raws: string[][]): Set<number> => {
  const indices = new Set<number>();
  // First row is always the opening balance; last row is always the closing balance.
  for (let j = 1; j < raws.length - 1; j++) indices.add(j);
  return indices;
};

type Props = { data: EquityYearData; lang: string };

const YearTable = ({ data, lang }: Props) => {
  const boldNumberRows = getBoldNumberRows(data.raws);
  const isRtl = lang === "ar";

  return (
    <div className="overflow-auto w-full py-8">
      <table className="min-w-175 w-full text-sm" dir={isRtl ? "rtl" : "ltr"}>
        <thead>
          <tr>
            <td></td>
            <td
              colSpan={data.colSpans[0]}
              className="font-bold border-b border-white text-center p-2 bg-savola-orange"
              dangerouslySetInnerHTML={{ __html: data.topGroupLabel }}
            />
            <td
              colSpan={data.colSpans[1]}
              className="font-bold border-b border-white text-center p-2 bg-savola-orange"
              dangerouslySetInnerHTML={{ __html: data.topGroupLabel }}
            />
            <td className="bg-savola-orange"></td>
            <td className="bg-savola-orange"></td>
          </tr>
          <tr>
            {data.headers.map((header, i) => (
              <th
                key={i}
                className={`px-4 py-3 border-b-2 border-b-savola-orange whitespace-nowrap ${
                  i === 0
                    ? "text-start min-w-70"
                    : lang === "ar"
                      ? "text-start min-w-20 bg-savola-orange"
                      : "text-end min-w-20 bg-savola-orange"
                }`}
                dangerouslySetInnerHTML={{ __html: header }}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {data.raws.map((row, rowIndex) => {
            const boldRow = isBoldRow(row[0]);
            const boldNumbers = boldNumberRows.has(rowIndex);
            return (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => {
                  const isBold = boldRow || (boldNumbers && cellIndex > 0);
                  return (
                    <td
                      key={cellIndex}
                      className={`px-4 py-2 border-b border-gray-500 ${
                        isBold ? "font-semibold" : "font-normal"
                      } ${cellIndex === 0 ? "text-start" : lang === "ar" ? "text-start" : "text-end"}`}
                      dangerouslySetInnerHTML={{ __html: cell }}
                    />
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const EquityTable = () => {
  const { t } = useTranslation("financial-statements");
  const { lang } = useContext(LangContext);

  const data2025 = lang === "ar" ? equityStatements2025Ar : equityStatements2025En;
  const data2024 = lang === "ar" ? equityStatements2024Ar : equityStatements2024En;

  return (
    <div>
      <StatementHeader title={t("headers.equity")} />
      <YearTable data={data2025} lang={lang} />
      <YearTable data={data2024} lang={lang} />
    </div>
  );
};

export default EquityTable;
