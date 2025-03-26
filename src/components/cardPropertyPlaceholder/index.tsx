import { Card, Placeholder } from "rsuite"



export const CardPlaceholder=()=>{
    return  <Card width={270}  shaded  className="col-12 col-md-6 m-1">
               <Card.Header className="m-0">
                   <Placeholder.Graph height={300} active />
              </Card.Header>
              <Card.Body>
                 <Placeholder.Paragraph active />
                 <Placeholder.Paragraph active />
               </Card.Body>
    </Card>
}