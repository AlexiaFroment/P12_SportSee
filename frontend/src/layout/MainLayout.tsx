import { Outlet } from "react-router-dom"
import { TopNav } from "@/layout/TopNav"
import { SideNav } from "@/layout/SideNav"
export const MainLayout: React.FC = () => {
  return (
    <div
      className='container-fluid p-0 m-0 d-flex flex-column'
      style={{ height: "100vh" }}>
      <TopNav />

      <div className='d-flex flex-grow-1'>
        <SideNav />
        <main className='flex-grow-1'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
