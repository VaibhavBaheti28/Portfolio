import "src/screens/homepage/styles.css";
import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import MyContextProvider from "@/src/modules/my-context";
import { AppBody } from "../src/components/styles";

function App({ Component, pageProps }: AppProps) {
  const [render, setRender] = useState(false);
  const [loading, setLoading] = useState(true);
  const [initialTabs, setInitialTab] = useState(["home"]);
  const [initialSelectedTab, setInitialSelectedTab] = useState(0);

  useEffect(() => {
    setRender(true);
    setInitialTab(
      (JSON.parse(localStorage.getItem("tabs") || '["home"]') as string[]) ||
        initialTabs
    );
    setInitialSelectedTab(
      (JSON.parse(localStorage.getItem("selected-tab") || "0") as number) ||
        initialSelectedTab
    );
    setLoading(false);
  }, []);
  return render ? (
    <AppBody>
      {loading ? (
        <>loading</>
      ) : (
        <MyContextProvider
          initialTabs={initialTabs}
          initialSelectedTab={initialSelectedTab}
        >
          <Component {...pageProps} />
        </MyContextProvider>
      )}
    </AppBody>
  ) : null;
}
export default App;
