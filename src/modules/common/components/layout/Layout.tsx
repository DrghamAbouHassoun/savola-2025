import Menu from "./Menu";
import Navbar from "./Navbar";
import NavigationArrows from "./NavigationArrows";
import SocialLinks from "./SocialLinks";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full">
      <Navbar />
      <Menu />
      <SocialLinks />
      <NavigationArrows />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
