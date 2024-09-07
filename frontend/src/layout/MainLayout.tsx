import { Outlet } from "react-router-dom"
import { Header } from "@/layout/Header"
export const MainLayout: React.FC = () => {
  return (
    <div className='container-fluid p-0 m-0 '>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
