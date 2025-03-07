
import './App.css'
import { CarProvider } from './context/CarProvider'
import { AppRouter } from './route/AppRouter'

function App() {

  return (
    <CarProvider>
      <AppRouter/>
    </CarProvider>
  )
}

export default App
