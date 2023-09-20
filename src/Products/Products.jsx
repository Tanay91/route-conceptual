import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ProductCard from './ProductCard'

const Products = () => {
    const {products}=useLoaderData()
  return (
    <div className='grid md:grid-cols-3 gap-5 mt-10 grid-cols-1 '>
        {
           products ?.map((product=> <ProductCard key={product.id} product={product}></ProductCard>))
        }
    </div>
  )
}

export default Products
