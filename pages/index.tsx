import HomePage from '@/src/screens/homepage'
import MyContextProvider from "../src/modules/app-context"

export default function Home() {
  return (<MyContextProvider><HomePage /></MyContextProvider>);
}
