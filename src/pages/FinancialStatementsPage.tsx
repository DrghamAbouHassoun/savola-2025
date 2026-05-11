import { useState, useContext } from 'react';
import NewHeader from '../modules/common/components/headers/NewHeader';
import HeaderImage from "../assets/images/headers/financial-statements.jpeg";
import { useTranslation } from '../modules/common/hooks/useTranslation';
import Container from '../modules/common/components/container/Container';
import PositionTable from '../modules/statments/components/tables/PositionTable';
import ProfitTable from '../modules/statments/components/tables/ProfitTable';
import EquityTable from '../modules/statments/components/tables/EquityTable';
import CashFlowsTable from '../modules/statments/components/tables/CashFlowsTable';
import { LangContext } from '../modules/common/contexts/LangProvider';

const TABS = [
  {
    key: 'position',
    label: "headers.position",
    component: <PositionTable />,
  },
  {
    key: 'profit',
    label: "headers.profit",
    component: <ProfitTable />,
  },
  {
    key: 'equity',
    label: "headers.equity",
    component: <EquityTable />,
  },
  {
    key: 'cashFlows',
    label: "headers.cashFlows",
    component: <CashFlowsTable />,
  },
];

const FinancialStatementsPage = () => {
  const { t } = useTranslation("common");
  const { t: tFS } = useTranslation("financial-statements"); 
  const { lang } = useContext(LangContext);
  const isRtl = lang === 'ar';
  const [activeTab, setActiveTab] = useState('position');

  const activeContent = TABS.find((tab) => tab.key === activeTab)?.component;

  return (
    <div>
      <NewHeader
        imageUrl={HeaderImage}
        title={t("nav.sections.financial-statements")}
      />
      <Container>
        <div
          className={`flex flex-col lg:flex-row gap-6 py-10 `}
        >
          {/* Sticky sidebar */}
          <aside className="lg:sticky top-24 h-fit w-full lg:w-72 shrink-0">
            <nav className="flex flex-col">
              {TABS.map((tab) => {
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`w-full px-4 py-3 text-sm font-medium transition-colors duration-200 cursor-pointer outline-none ${
                      isRtl ? 'text-right' : 'text-left'
                    } ${
                      isActive
                        ? 'bg-savola-green text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-savola-green-20'
                    }`}
                  >
                    {tFS(tab.label)}
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Content area */}
          <div className="min-w-0 flex-1">
            {activeContent}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FinancialStatementsPage;
