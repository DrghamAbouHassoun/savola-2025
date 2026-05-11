import "./App.css";
import "./Animations.css";
import "./AnimationDelay.css";
import "./AnimationDuration.css";
import Layout from "./modules/common/components/layout/Layout";
import { RouterProvider } from "./modules/common/contexts/RouterProvider";
import LangProvider from "./modules/common/contexts/LangProvider";
import Router from "./router/Router";
import MenuProvider from "./modules/common/contexts/MenuProvider";
import InfoModalProvider from "./modules/common/contexts/InfoModalProvider";

function App() {
  return (
    <>
      <LangProvider>
        <InfoModalProvider>
          <RouterProvider>
            <MenuProvider>
              <Layout>
                <Router />
              </Layout>
            </MenuProvider>
          </RouterProvider>
        </InfoModalProvider>
      </LangProvider>
    </>
  );
}

export default App;
