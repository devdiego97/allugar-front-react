import { Route} from "react-router-dom"
import { Routes as Router} from "react-router-dom"
import { INavLink,navLinks } from "../utils/navlink"


export const Routes=()=>{
    return <Router>
        return (
    <>
      {navLinks.map((i: INavLink) => (
        <Route key={i.path} path={i.path} element={i.element!} />
      ))}
    </>
    </Router>
}