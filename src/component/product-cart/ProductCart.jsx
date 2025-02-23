import axios from 'axios'
import React ,{ useEffect, useReducer}from 'react'
import Cart from './cart'
import ProductList from './productList'
import { CartReducer } from './reducer/CartReducer'

const ProductCart = () => {

  const [ state , dispatch ] = useReducer(CartReducer,{
    products: [],
    cart:[],
  })


  const fetchProduct = async () => {
    const responce = await axios.get('https://dummyjson.com/products')
    const product = responce?.data?.products

    dispatch({
      type:"ADD_PRODUCT",
      payload : product
    })
      
  }
  useEffect(()=>{
    fetchProduct()
  },[])

  useEffect(()=>{
  },[state])

  return (
    <div className='flex'>
      {/* <Cart state={state} dispatch={dispatch} /> */}
      <ProductList state={state} dispatch={dispatch} />
    </div>
  )
}

export default ProductCart


// thing which i learn

// how to make file as function like cartreducer
  // export const CartReducer = (state,action)=>{

  // }

// how to call the reducer in main compont
  // const [ state , dispatch ] = useReducer(CartReducer,{
  //   products: [],
  //   cart:[],
  // })