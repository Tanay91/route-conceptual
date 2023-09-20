import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ProductCard from './ProductCard'

const Products = () => {
    const {products}=useLoaderData()
  return (
    <div className='grid grid-cols-3 gap-5 mt-10'>
        {
           products ?.map((product=> <ProductCard key={product.id} product={product}></ProductCard>))
        }
    </div>
  )
}

export default Products
