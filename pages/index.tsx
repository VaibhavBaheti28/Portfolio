import HomePage from '@/src/screens/homepage'
import MyContextProvider from "../src/modules/App-context"

export default function Home() {
  return (<MyContextProvider><HomePage /></MyContextProvider>);
}
