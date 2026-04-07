import { useContext } from "react";
import { RouterContext } from "../modules/common/contexts/RouterProvider";
import Home from "../pages/Home";

import ThemeOfTheYearPage from "../pages/ThemeOfTheYearPage";
import AtAGlancePage from "../pages/AtAGlancePage";

import YearInReviewPage from "../pages/YearInReviewPage";
import GeographicalFootprintPage from "../pages/GeographicalFootprintPage";
import InvestmentCasePage from "../pages/InvestmentCasePage";
import StakeholderEngagementPage from "../pages/StakeholderEngagementPage";

import StrategyAndBusinessModelPage from "../pages/StrategyAndBusinessModelPage";
import StrategyGroupsTransformationJourneyPage from "../pages/StrategyGroupsTransformationJourneyPage";
import SaudiVision2030Page from "../pages/SaudiVision2030Page";
import TechnologyAndInnovationPage from "../pages/TechnologyAndInnovationPage";

import ChairmanStatementPage from "../pages/ChairmanStatementPage";
import GroupCEOMessagePage from "../pages/GroupCEOMessagePage";
import ChiefFinancialOfficerReviewPage from "../pages/ChiefFinancialOfficerReviewPage";

import SavolaFoodPage from "../pages/SavolaFoodPage";
import PandaRetailCompanyPage from "../pages/PandaRetailCompanyPage";
import AlKabeerGroupPage from "../pages/AlKabeerGroupPage";
import HerfyFoodServicePage from "../pages/HerfyFoodServicePage";

import OurESGApproachPage from "../pages/OurESGApproachPage";
import OurESGStrategyPage from "../pages/OurESGStrategyPage";
import MaterialityAssessmentPage from "../pages/MaterialityAssessmentPage";
import DrivingEnvironmentalStewardshipPage from "../pages/DrivingEnvironmentalStewardshipPage";
import FosteringCommunityWellnessPage from "../pages/FosteringCommunityWellnessPage";

import DownloadCenterPage from "../pages/DownloadCenterPage";

export interface Page {
  id: string;
  path: string;
  name: string;
  appearName?: string;
}

export interface Section {
  id: string;
  name: string;
  pages: Page[];
}

export interface StandalonePage {
  id: string;
  path: string;
  name: string;
}

export const pages: Section[] = [
  {
    id: "table-of-content",
    name: "Table Of Content",
    pages: [
      { id: "theme-of-the-year", path: "theme-of-the-year", name: "Theme of the Year" },
      { id: "2025-at-a-glance", path: "2025-at-a-glance", name: "2025 at a Glance" },
    ],
  },
  {
    id: "overview",
    name: "Overview",
    pages: [
      { id: "year-in-review", path: "year-in-review", name: "Year in Review" },
      { id: "geographical-footprint", path: "geographical-footprint", name: "Geographical Footprint" },
      { id: "investment-case", path: "investment-case", name: "Investment Case" },
      { id: "stakeholder-engagement", path: "stakeholder-engagement", name: "Stakeholder Engagement" },
    ],
  },
  {
    id: "strategic-review",
    name: "Strategic Review",
    pages: [
      { id: "strategy-and-business-model", path: "strategy-and-business-model", name: "Strategy and Business Model" },
      { id: "strategy-groups-transformation-journey", path: "strategy-groups-transformation-journey", name: "Strategy Group's Transformation Journey" },
      { id: "saudi-vision-2030", path: "saudi-vision-2030", name: "Saudi Vision 2030" },
      { id: "technology-and-innovation", path: "technology-and-innovation", name: "Technology and Innovation" },
    ],
  },
  {
    id: "leadership",
    name: "Leadership",
    pages: [
      { id: "chairmans-statement", path: "chairmans-statement", name: "Chairman's Statement" },
      { id: "group-ceos-message", path: "group-ceos-message", name: "Group CEO's Message" },
      { id: "chief-financial-officers-review", path: "chief-financial-officers-review", name: "Chief Financial Officer's Review" },
    ],
  },
  {
    id: "business-review",
    name: "Business Review",
    pages: [
      { id: "savola-food", path: "savola-food", name: "Savola Food" },
      { id: "panda-retail-company", path: "panda-retail-company", name: "Panda Retail Company" },
      { id: "al-kabeer-group", path: "al-kabeer-group", name: "Al Kabeer Group" },
      { id: "herfy-food-service", path: "herfy-food-service", name: "Herfy Food Service" },
    ],
  },
  {
    id: "esg-review",
    name: "ESG Review",
    pages: [
      { id: "our-esg-approach", path: "our-esg-approach", name: "Our ESG Approach" },
      { id: "our-esg-strategy", path: "our-esg-strategy", name: "Our ESG Strategy" },
      { id: "materiality-assessment", path: "materiality-assessment", name: "Materiality Assessment" },
      { id: "driving-environmental-stewardship", path: "driving-environmental-stewardship", name: "Driving Environmental Stewardship and Innovation", appearName: "Driving Environmental Stewardship <br /> and Innovation" },
      { id: "fostering-community-wellness", path: "fostering-community-wellness", name: "Fostering Community Wellness and Employee Welfare", appearName: "Fostering Community Wellness <br /> and Employee Welfare" },
    ],
  },
];

export const standalonePages: StandalonePage[] = [
  { id: "download-center", path: "download-center", name: "Download Center" },
];

const Router = () => {
  const { currentRoute, homeKey } = useContext(RouterContext);

  switch (currentRoute) {
    // Table Of Content
    case "theme-of-the-year":
      return <ThemeOfTheYearPage />;
    case "2025-at-a-glance":
      return <AtAGlancePage />;

    // Overview
    case "year-in-review":
      return <YearInReviewPage />;
    case "geographical-footprint":
      return <GeographicalFootprintPage />;
    case "investment-case":
      return <InvestmentCasePage />;
    case "stakeholder-engagement":
      return <StakeholderEngagementPage />;

    // Strategic Review
    case "strategy-and-business-model":
      return <StrategyAndBusinessModelPage />;
    case "strategy-groups-transformation-journey":
      return <StrategyGroupsTransformationJourneyPage />;
    case "saudi-vision-2030":
      return <SaudiVision2030Page />;
    case "technology-and-innovation":
      return <TechnologyAndInnovationPage />;

    // Leadership
    case "chairmans-statement":
      return <ChairmanStatementPage />;
    case "group-ceos-message":
      return <GroupCEOMessagePage />;
    case "chief-financial-officers-review":
      return <ChiefFinancialOfficerReviewPage />;

    // Business Review
    case "savola-food":
      return <SavolaFoodPage />;
    case "panda-retail-company":
      return <PandaRetailCompanyPage />;
    case "al-kabeer-group":
      return <AlKabeerGroupPage />;
    case "herfy-food-service":
      return <HerfyFoodServicePage />;

    // ESG Review
    case "our-esg-approach":
      return <OurESGApproachPage />;
    case "our-esg-strategy":
      return <OurESGStrategyPage />;
    case "materiality-assessment":
      return <MaterialityAssessmentPage />;
    case "driving-environmental-stewardship":
      return <DrivingEnvironmentalStewardshipPage />;
    case "fostering-community-wellness":
      return <FosteringCommunityWellnessPage />;

    // Standalone
    case "download-center":
      return <DownloadCenterPage />;

    default:
      return <Home key={homeKey} />;
  }
};

export default Router;
