import React  from "react"
import { Home } from "../pages/home"
import { Properties } from "../pages/properties"
import { PropertyId } from "../pages/propertyId"
import { Login } from "../pages/login"
import { Register } from "../pages/register"

type TNavRoutes={
    name:string,
    path:string,
    navLink:boolean,
    private:boolean,
    component:()=>JSX.Element
}


export const navRoutes:TNavRoutes[]=[
    { name:'inicio', path:'',navLink:true,private:false, component:Home},
    { name:'imoveis', path:'/imoveis',navLink:true,private:false, component:Properties},
    { name:'imovel-id', path:'/imoveis/:id',navLink:true,private:false, component:PropertyId},
    { name:'login', path:'/entrar',navLink:true,private:false, component:Login},
    { name:'criar conta', path:'/cadastro',navLink:true,private:false, component:Register}
]