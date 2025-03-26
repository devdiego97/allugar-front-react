import {Card, Container, HStack, Image, Tag, TagGroup, Text} from "rsuite"
import { IProperty } from "../../interfaces/property.interface"
import { Link } from "react-router-dom"

type Props={
    property:IProperty
}
export const CardProperty=({property}:Props)=>{
    
    return (
        <Card width={270} shaded  className="col-12 p-0 col-md-3 m-2">
          <Image
            src={property.gallery[0]}
            alt="imagem da casa"
            zoomed
            height={300}
          />
          <Card.Header as="h5">
            <Text maxLines={2} className="my-2">{property.title}</Text>
          </Card.Header>
          <Card.Body>
              <TagGroup>
                <HStack className="d-flex flex-wrap">
                  <Tag color="blue" className="p-1" size="sm">comprar</Tag>
                  <Tag color="green" className="p-1" size="sm">{property.city}-{property.state}</Tag>
                </HStack>
              </TagGroup>
          </Card.Body>
          <Card.Footer>
              <Container className="d-flex my-5 justify-content=center align-center">
                <Link className="btn btn-primary " to={`/imoveis/${property.id}`} >detalhes</Link>
              </Container>
          </Card.Footer>
        </Card>
      )
}