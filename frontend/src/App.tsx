import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PublicRouteur } from "@/routes/PublicRouteur"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<PublicRouteur />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
