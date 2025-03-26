import {Container} from "rsuite"
import { Layout } from "../../components/layout"
import { useEffect, useState } from "react"
import properties from "../../data"
import { CardProperty } from "../../components/cardProperty"
import { IProperty } from "../../interfaces/property.interface"
import { CardPlaceholder } from "../../components/cardPropertyPlaceholder"


export const Propertys=()=>{
  
  const [propertysList,setPropertysList]=useState<IProperty[] | []>([])
  const [loading,setLoadings]=useState(true)


  useEffect(()=>{
    setTimeout(()=>{
      setLoadings(false)
      setPropertysList(properties)
    },1200)
  })

    return <Layout>
        <Container>
         <div className="row d-flex justify-content-center">
           {
            !loading && propertysList.length > 0 ? propertysList.map((i,k)=>
                 <CardProperty key={k}   property={i} /> ): <div className="row d-flex justify-content-center">
                      <CardPlaceholder />
                      <CardPlaceholder />
                      <CardPlaceholder />
                      <CardPlaceholder />
                      <CardPlaceholder />
               </div>
          
          
           }
            </div>
        </Container>
    </Layout>
}