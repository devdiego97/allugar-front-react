import { Link, useParams } from "react-router-dom"
import { Layout } from "../../components/layout"
import properties from "../../data"
import { IProperty } from "../../interfaces/property.interface"
import { Avatar, Card, Carousel, Container,HStack,Image, Placeholder, Text, VStack } from "rsuite"
import { useEffect, useState } from "react"
import { Helmet } from "react-helmet"


export const PropertyId=()=>{
  const [propertyId,setPropertyId]=useState<IProperty | null>(null)
  const params=useParams()
 const  propertyFindId=properties.find(i=>i.id == parseInt(params.id as string)) as IProperty
 const [loading,setLoading]=useState(true)


 useEffect(()=>{
  setTimeout(()=>{
    setLoading(false)
    setPropertyId(propertyFindId!)
  },1200)
 })
    return <Layout>
       <Helmet>
        <title>Allugar/Imóveis</title>
        <meta name="description" content="pagina inicial dda plataforma de divulgacao de imoveis e corretores " />
        <meta name="keywords" content="corretores,imoveis,alugueis,comprar casa, seo, meta tags" />
      </Helmet>
        <div className="my-3">
          <div className="row">
            <div className="col-md-6">
              <h2>{propertyId?.title}</h2>
              <p className="my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, in? Alias quasi hic libero, dicta 
                voluptates recusandae expedita eveniet ad quisquam laboriosam amet eum placeat 
                laborum! Ullam libero aliquid cumque?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, in? Alias quasi hic libero, dicta 
                voluptates recusandae expedita eveniet ad quisquam laboriosam amet eum placeat 
                laborum! Ullam libero aliquid cumque?
              </p>
              <section className="my-5">
                <h4>Detalhes</h4>
                <div className="my-1 border-bottom"><p>Disponivel para alugar</p></div>
                <div className="my-1 border-bottom"><p>Localizada em {propertyId?.city}-{propertyId?.state}</p></div>
                <div className="my-1 border-bottom"><p>Valor do Imóvel : {propertyId?.price}</p></div>
                <div className="my-1 border-bottom "><p>N° de cômodos : 6</p></div>
                <div className="my-1 border-bottom "><p>Com Quintal ?: Não</p></div>
                <div className="my-4">
                  <VStack>
                    <h4>Endereço Completo:</h4>
                     <p><strong>Rua </strong></p>
                     <p><strong>Bairro</strong></p>
                     <p><strong>Cidade</strong></p>
                     <p><strong>Estado</strong></p>
                  </VStack>
                </div>
              </section>
               <Link to={`/corretore/${Math.floor(Math.random() * 99)}`}>
                <Card className="my-5 p-3">
                  <VStack>
                    <div>
                      <p>Gostou do Imóvel ? Clique abaixo:</p>
                    </div>
                    <HStack>
                      <Avatar size="md" className="mr-3" circle /><Text as="h4">Entrar em contatos do corretor</Text> 
                    </HStack>
                  </VStack>
                </Card>
               </Link>
            </div>
            <div className="col-md-6 ">
               <h4>Imagens do Imóvel</h4>
               <Container>
                 <Carousel autoplay className="custom-slider my-4">
                 {
                  propertyId !== null && !loading ?  propertyId?.gallery?.map((f,k)=><Image key={k} alt={f} src={f} height="250" />) :
                  <Placeholder>
                    <Placeholder.Graph height={250} active />
                  </Placeholder>
                 }
                 
               </Carousel>
               </Container>
            </div>
            <section className="bg-success my-5" style={{height:600}}>
               
            </section>
          </div>
        </div>
    </Layout>
}