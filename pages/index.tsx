import { Inter } from 'next/font/google'
import HomePage from '@/src/screens/homepage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (<HomePage/>)
}
