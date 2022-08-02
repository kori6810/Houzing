import React from 'react'
import { navbar } from '../utils/navbar'
import { Navbar } from '../components/navbar/navbar'
import { Route,Routes,Navigate } from 'react-router-dom'
import { ErrorPage } from '../page/error/Error'
import {QueryClient, QueryClientProvider} from 'react-query'
import { ProductPage } from '../page/Product/ProductPage'

const queryClient = new QueryClient()
export const Root = () => {
  return (

    <QueryClientProvider client={queryClient}>
      <Routes>
      <Route
        path='/profile'
        element={<Navigate to={"/profile/properties"} />}
      />

      <Route element={<Navbar />}>
        {navbar.map(({ path, Element, id, param }) => {
          return param && <Route key={id} path={path} element={Element} />;
        })}
      </Route>
      <Route element={<Navbar />}>
        {navbar.map(({ path, Element, id, hidden }) => {
          return !hidden && <Route key={id} path={path} element={Element} />;
        })}
        <Route path='/' element={<Navigate to={"/home"} />} />
      </Route>
      <Route path='*' element={<div>Page Not Found...</div>} />
    </Routes>
    </QueryClientProvider>
  
    
      
    
    
    
  )
}
