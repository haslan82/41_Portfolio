import { ThemeProvider } from "next-themes"
import "./index.css"
import {fuchsia} from "tailwindcss/colors";



const MyApp = ({Component, pageProps}) => {
  return (
    <ThemeProvider attribute="class">
   <Component {...pageProps}/>
   </ThemeProvider>
  )
}

export default MyApp
