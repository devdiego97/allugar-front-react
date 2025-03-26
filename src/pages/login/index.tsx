
import { Button, Form, Input, InputGroup, Radio, RadioGroup } from "rsuite"
import { Layout } from "../../components/layout"
import FormGroup from "rsuite/esm/FormGroup"
import FormControl from "rsuite/esm/FormControl"
import FormControlLabel from "rsuite/esm/FormControlLabel"
import { useState } from "react"
import EyeCloseIcon from '@rsuite/icons/EyeClose'
import VisibleIcon from '@rsuite/icons/Visible'



export const Login=()=>{

      const [visible, setVisible] =useState(false)
    
        const handleChange = () => {
          setVisible(!visible)
        }
    
    
        
    return <Layout>
        <div className="d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-6 border p-5 border-radius">
             <h1>Entrar</h1>
             <p>Preencha os campos para entrar na sua conta</p>
              <Form fluid >
                <FormGroup className="y-2">
                    <FormControlLabel>Email</FormControlLabel>
                    <FormControl  name="email" type="email" errorMessage=""   />
                </FormGroup>
                <FormGroup className="my-2">
                    <FormControlLabel>Senha</FormControlLabel>
                    <InputGroup inside >
                        <Input type={visible ? 'text' : 'password'} />
                        <InputGroup.Button onClick={handleChange}>
                            {visible ? <VisibleIcon /> : <EyeCloseIcon />}
                        </InputGroup.Button>
                        </InputGroup>
                </FormGroup>
                <FormGroup className="my-3">
                    <FormControlLabel>Cadastrar como : </FormControlLabel>
                    <RadioGroup name="radio-group-inline" inline defaultValue="A">
                        <Radio value="A">usuário</Radio>
                        <Radio value="B">corretor</Radio>
                   </RadioGroup>
                </FormGroup>
                <div className="my-5 d-flex justify-content-center">
                    <Button appearance="primary" color="green">criar conta</Button>
                </div>
              </Form>
           </div>
        </div>
    </Layout>
}