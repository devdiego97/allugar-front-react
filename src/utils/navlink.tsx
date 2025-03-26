
import { BrokerId } from "../pages/brokerId"
import { Brokers } from "../pages/brokers"
import { Home } from "../pages/home"
import { Login } from "../pages/login"
import { PropertyId } from "../pages/propertyId"
import { Propertys } from "../pages/propertys"
import { Register } from "../pages/register"


export interface INavLink{
    name:string,
    path:string,
    private:boolean,
    nav:boolean,
    element:React.ReactElement
}


export const navLinks:INavLink[]=[
    {  
        name:"Inicio",
        path:"",
        private:false,
        nav:true,
        element:<Home />
   },  {  
    name:"Imóveis",
    path:"/imoveis",
    private:false,
    nav:true,
    element:<Propertys />
},
{  
    name:"Entrar",
    path:"/entrar",
    private:false,
    nav:true,
    element:<Login/>
},
{  
    name:"criar conta",
    path:"/cadastro",
    private:false,
    nav:true,
    element:<Register/>
},
{  
    name:"Propriedade Idd",
    path:"/imoveis/:id",
    private:true,
    nav:false,
    element:<PropertyId/>
},
{  
    name:"corretores",
    path:"/corretores",
    private:true,
    nav:true,
    element:<Brokers/>
},
{  
    name:"corretores",
    path:"/corretores/:id",
    private:true,
    nav:true,
    element:<BrokerId />
}
]