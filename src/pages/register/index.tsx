import { Button, Form, Input, InputGroup, Radio, RadioGroup } from "rsuite"
import { Layout } from "../../components/layout"
import FormGroup from "rsuite/esm/FormGroup"
import FormControlLabel from "rsuite/esm/FormControlLabel"
import FormControl from "rsuite/esm/FormControl"
import { useState } from "react"
import EyeCloseIcon from '@rsuite/icons/EyeClose'
import VisibleIcon from '@rsuite/icons/Visible'

export const Register=()=>{

    const [visible, setVisible] =useState(false)

    const handleChange = () => {
      setVisible(!visible)
    }



    return <Layout>
        <div className="row">
            <div className="col-12 col-md-6">
                <img src="/house.jpg"  width={"100%"} height={"100%"} alt="" />
            </div>
           <div className="col-12 col-md-6 border p-5 border-radius">
             <h1>Cadastrar</h1>
             <p>Preencha os campos para criar na sua conta</p>
              <Form fluid >
                <FormGroup className="my-2">
                    <FormControlLabel>Nome</FormControlLabel>
                    <FormControl  name="name" errorMessage=""   />
                </FormGroup>
                <FormGroup className="my-2">
                    <FormControlLabel>Sobrenome</FormControlLabel>
                    <FormControl  name="lastname" errorMessage=""   />
                </FormGroup>
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