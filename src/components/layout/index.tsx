import { ReactNode } from "react"
import { Container } from "rsuite"
import { Header } from "../partials/header"
import "./style.css"


type Props={
    children:ReactNode
}

export const Layout=({children}:Props)=>{
    return <div>
      <Header />
       <Container className="container py-5">
         <main className="py-5">
           {children}
         </main>
       </Container>
     </div>

}