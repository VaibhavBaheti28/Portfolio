import "src/screens/homepage/styles.css";
import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import MyContextProvider from "@/src/modules/my-context";
import { AppBody } from "../src/components/styles";

function App({ Component, pageProps }: AppProps) {
  const [render, setRender] = useState(false);
  useEffect(() => setRender(true), []);
  return render ? (
    <AppBody>
      <MyContextProvider>
        <Component {...pageProps} />
      </MyContextProvider>{" "}
    </AppBody>
  ) : null;
}
export default App;
