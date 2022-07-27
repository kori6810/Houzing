import React from 'react'
import { navbar } from '../utils/navbar'
import { Navbar } from '../components/navbar/navbar'
import { Route,Routes,Navigate } from 'react-router-dom'
import { ErrorPage } from '../page/error/Error'
import {QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient()
export const Root = () => {
  return (

    <QueryClientProvider client={queryClient}>
      <Routes>
      <Route path='/' element={<Navigate to="/home"/>}/>
      <Route   element={<Navbar/>}>
        {navbar.map(({title,id,element,path})=>{
          return (
            <Route path={path} id ={id} element={element}/>
          )
        })}
      </Route>
      <Route path='*' element={<ErrorPage/>}/>
      {/* <Route path='/' element={<Navbar/>}/> */}
      </Routes>
    </QueryClientProvider>
  
    
      
    
    
    
  )
}
