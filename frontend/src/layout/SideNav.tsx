import { Bouton } from "@/components/Bouton"
import yoga from "@/assets/images/yoga.png"
import swim from "@/assets/images/swim.png"
import ride from "@/assets/images/ride.png"
import dumbbell from "@/assets/images/dumbbell.png"
export const SideNav = () => {
  return (
    <aside className='aside bg-dark' style={{ width: "120px" }}>
      <nav className='d-flex flex-column align-items-center justify-content-around h-100'>
        <div className='d-flex flex-column '>
          <Bouton icon={yoga} />
          <Bouton icon={swim} />
          <Bouton icon={ride} />
          <Bouton icon={dumbbell} />
        </div>
        <div>
          <p className='rotated-text text-light'>Copyright SportSee 2020</p>
        </div>
      </nav>
    </aside>
  )
}
