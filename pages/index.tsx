import HomePage from '@/src/screens/homepage'
import {MyContextProvider} from "../src/"

export default function Home() {
  return (<MyContextProvider><HomePage /></MyContextProvider>);
}
