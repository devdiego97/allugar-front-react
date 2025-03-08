import React from 'react'
import { Route,Routes} from 'react-router-dom'
import {navRoutes} from '../utils/navRoutes'


export const Rotas=()=>{
    return <Routes>
        {
           navRoutes.map(i=><Route path={i.path} Component={i.component} />)
        }
    </Routes>
}