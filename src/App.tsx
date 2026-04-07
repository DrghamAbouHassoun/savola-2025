import "./App.css";
import Layout from "./modules/common/components/layout/Layout";
import { RouterProvider } from "./modules/common/contexts/RouterProvider";
import LangProvider from "./modules/common/contexts/LangProvider";
import Router from "./router/Router";
import MenuProvider from "./modules/common/contexts/MenuProvider";

function App() {
  return (
    <>
      <LangProvider>
        <RouterProvider>
          <MenuProvider>
            <Layout>
              <Router />
            </Layout>
          </MenuProvider>
        </RouterProvider>
      </LangProvider>
    </>
  );
}

export default App;
