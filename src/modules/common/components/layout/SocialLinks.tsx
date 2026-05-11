import CommunityIcon from "../../../../assets/icons/social/community.svg?react";
import PlanetIcon from "../../../../assets/icons/social/planet.svg?react";
import FacebookIcon from "../../../../assets/icons/social/facebook.svg?react";
import InstagramIcon from "../../../../assets/icons/social/instagram.svg?react";
import TwitterIcon from "../../../../assets/icons/social/twitter.svg?react";
// import LinkedInIcon from "../../../../assets/icons/social/linkedin.svg?react";
import YoutubeIcon from "../../../../assets/icons/social/youtube.svg?react";
import { useContext } from "react";
import { RouterContext } from "../../contexts/RouterProvider";
import { useLocale } from "../../hooks/useLocale";
import { InfoModalContext } from "../../contexts/InfoModalProvider";
import { FACEBOOK_URL, INSTAGRAM_URL, MAIN_SITE_URL_AR, MAIN_SITE_URL_EN, TWITTER_URL, YOUTUBE_URL } from "../../../../config/constants";

export const socialLinksData = [
  {
    name: "Global Community",
    icon: <CommunityIcon />,
    href: "",
    type: "button",
  },
  {
    name: "Planet",
    icon: <PlanetIcon />,
    href: MAIN_SITE_URL_EN,
    hrefAr: MAIN_SITE_URL_AR,
    type: "link",
  },
  {
    name: "Facebook",
    icon: <FacebookIcon />,
    href: FACEBOOK_URL,
    type: "link",
  },
  {
    name: "Instagram",
    icon: <InstagramIcon />,
    href: INSTAGRAM_URL,
    type: "link",
  },
  {
    name: "Twitter",
    icon: <TwitterIcon />,
    href: TWITTER_URL,
    type: "link",
  },
  // {
  //   name: "LinkedIn",
  //   icon: <LinkedInIcon />,
  //   href: "",
  //   type: "link",
  // },
  {
    name: "YouTube",
    icon: <YoutubeIcon />,
    href: YOUTUBE_URL,
    type: "link",
  },
];

const SocialLinks = () => {
  const { toggleModal } = useContext(InfoModalContext)
  const { currentRoute, homeKey } = useContext(RouterContext);
  const isHome = currentRoute === "Home" || currentRoute === "";
  const { lang } = useLocale();
  const socialAnimationKey = `${homeKey}-${currentRoute}-${lang}`;

  return (
    <div
      key={socialAnimationKey}
      className={`fixed z-40 top-1/2 ${lang === "ar" ? `right-4 animate-fade-right-50 active ${currentRoute === "home" && "animate-delay-6_8s"}` : `left-4 animate-fade-left-50 active ${currentRoute === "" && "animate-delay-6_8s"}`} -translate-y-1/2`}
    >
      <div
        key={`${socialAnimationKey}-pill`}
        className={`hidden lg:flex flex-col bg-savola-green rounded-full py-2 ${lang === "ar" ? "animate-fade-right-50" : "animate-fade-left-50"} active ${isHome ? "animate-delay-6s" : ""}`}
      >
        {socialLinksData.map((link) => (
          <>
            {link.type === "button" ? (
              <button
                key={link.name}
                className="flex items-center p-2 w-8.5 h-8.5"
                onClick={() => toggleModal(true)}
              >
                {link.icon}
              </button>
            ) : (
              <a
                href={link.hrefAr && lang === "ar" ? link.hrefAr : link.href}
                target="_blank"
                key={link.name}
                className="flex items-center p-2 w-8.5 h-8.5"
              >
                {link.icon}
              </a>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
