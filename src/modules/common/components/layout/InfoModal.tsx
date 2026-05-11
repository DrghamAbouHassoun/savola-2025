import { X } from "lucide-react";
import {
  ADDRESS_AR_HTML,
  ADDRESS_EN_HTML,
  EMAIL_ADDRESS,
  PHONE_NUMBER,
  PHONE_NUMBER_COVER,
  PO_BOX_AR,
  PO_BOX_EN,
} from "../../../../config/constants";
import { useLocale } from "../../hooks/useLocale";
import { useTranslation } from "../../hooks/useTranslation";
import { useContext } from "react";
import { InfoModalContext } from "../../contexts/InfoModalProvider";

const InfoModal = () => {
  const { t } = useTranslation("common");
  const { lang } = useLocale();
  const { isOpen, toggleModal } = useContext(InfoModalContext);

  return (
    <div
      className={`w-full h-full fixed top-0 left-0 bg-black/60 z-60 flex justify-end items-center ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} transition-all duration-700`}
    >
      <div className="w-full h-full sm:h-auto sm:max-w-120 flex flex-col gap-2 relative bg-savola-green p-4 py-12 justify-center sm:justify-start">
        <button
          type="button"
          className={`absolute ${lang === "ar" ? "left-4" : "right-4"} top-4 `}
          onClick={() => toggleModal(false)}
        >
          <X size={32} />
        </button>
        <h4 className="text-xl font-bold">{t("investors")}</h4>
        <p>
          <b>{t("address")}: </b>
          <span
            dangerouslySetInnerHTML={{
              __html: lang === "ar" ? ADDRESS_AR_HTML : ADDRESS_EN_HTML,
            }}
          ></span>
        </p>
        <p>
          <b>{t("poBox")}: </b>
          {lang === "ar" ? PO_BOX_AR : PO_BOX_EN}
        </p>
        <p>
          <b>{t("email")}: </b>
          <a href={`mailto:${EMAIL_ADDRESS}`} className="text-blue-700">
            {EMAIL_ADDRESS}
          </a>
        </p>
        <p>
          <b>{t("phone")}: </b>
          <a href={`tel:${PHONE_NUMBER}`} className={`text-blue-700`}>
            {PHONE_NUMBER_COVER}
          </a>
        </p>
      </div>
    </div>
  );
};

export default InfoModal;
