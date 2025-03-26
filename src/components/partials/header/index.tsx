import { Link } from "react-router-dom"
import { INavLink, navLinks} from "../../../utils/navlink"
import { Image } from "rsuite"



export const Header=()=>{
    return  <header className="bg-success py-2" >
     <div>
     <nav className="navbar navbar-expand-lg">
  <div className="container-fluid text-white">
    <a className="navbar-brand" href="#">
      <Image src="/logo.jpg"  style={{height:"80px"}} height={90} />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
       {navLinks.filter(i=>i.nav).map((i:INavLink)=><li className="nav-item">
          <Link className="nav-link  text-white active" aria-current="page" to={i.path}>{i.name}</Link>
        </li>)}
      </ul>
    </div>
  </div>
</nav>
     </div>

    </header>
}