import { Routes, Route } from "react-router-dom"
import { MainLayout } from "@/layout/MainLayout"
import { Accueil } from "@/pages/public/Accueil"
import { NotFound } from "@/pages/NotFound"

export const PublicRouteur = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Accueil />} />
        <Route path='accueil' element={<Accueil />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}
