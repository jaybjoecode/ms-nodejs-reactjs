// import './App.css'
import { Toaster } from 'react-hot-toast'
import { GlobalProvider } from './context/GlobalContext';
import AppRoutes from './routes/AppRoutes'
import { BrowserRouter } from 'react-router-dom';
import AppTheme from './routes/AppTheme';
import './App.css'

function App() {

  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <AppTheme>
            <AppRoutes />
          </AppTheme>
          <Toaster />
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
