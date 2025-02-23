import React, { useEffect } from 'react'
import "./style.css";

const ProductList = ({ state, dispatch }) => {

  const { products, cart } = state
  useEffect(() => {
    console.log('state: >>>>', state);
  }, [state])
  return (
    <div className="p-4">
      <div className="text-2xl font-bold mb-6 text-center">Product List</div>
      <div className="flex flex-wrap gap-6 justify-center items-center">
        {products?.map((product) => (
          <div
            key={product.id}
            className="product-card w-80 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
          >
            <div className="relative">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {product.title}
                </h2>
                <p className="text-xl font-bold text-green-600">${product.price}</p>
              </div>
              <div className="space-y-2">
                {cart.some((card) => card.id === product.id) ? (
                  <button
                    className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition duration-300"
                    onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: product.id })}
                  >
                    Remove Item
                  </button>
                ) : (
                  <button
                    className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                    onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product.id})}
                  >
                    Add to Cart
                  </button>
                  )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default ProductList