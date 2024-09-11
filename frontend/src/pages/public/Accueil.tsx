import { Link } from "react-router-dom"
import construction from "@/assets/images/construction.png"
export const Accueil: React.FC = () => {
  return (
    <div className='container p-5 text-center'>
      <p className='fs-1 fw-bold m-0' style={{ color: "#ff0000" }}>
        {`en construction`.toUpperCase()}
      </p>
      <img src={construction} alt='en travaux' style={{ width: "300px" }} />
      <p className='fs-4 p-5 m-0 lh-sm '>
        Le site est en cours de construction, votre profil et toutes les
        informations concernant vos sessions sont dors et déjà accessibles sur
        la page{" "}
        <Link className='text-dark' to='/profil'>
          Profil
        </Link>
      </p>
    </div>
  )
}
