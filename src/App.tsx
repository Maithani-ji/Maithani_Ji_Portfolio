import ThemeProvider from "./contextApi/ThemeContext"
import AppRoutes from "./route/AppRoute"


const App = () => {
  return (
    <ThemeProvider>
      <main className="flex flex-1 flex-col min-h-screen  bg-offWhiteBg  dark:bg-offBlackBg   font-Sora  text-textBlack  dark:text-textWhite">


      <AppRoutes/>

      
      </main>
    </ThemeProvider>
  )
}

export default App