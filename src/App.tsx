import ThemeProvider from "./contextApi/ThemeContext"
import AppRoutes from "./route/AppRoute"


const App = () => {
  return (
    <ThemeProvider>
      <main className="flex flex-1 flex-col h-screen min-h-0 bg-offWhiteBg  dark:bg-offBlackBg   font-Sora  text-textBlack  dark:text-textWhite">


      <AppRoutes/>

      
      </main>
    </ThemeProvider>
  )
}

export default App