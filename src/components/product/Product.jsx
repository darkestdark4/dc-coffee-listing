
import { lazy } from 'react'

const ProductPopular = lazy(() => import('./ProductPopular.jsx'))
const ProductSoldOut = lazy(() => import('./ProductSoldOut.jsx'))
const ProductVotes = lazy(() => import('./ProductVotes.jsx'))

function Products({ data }) {
  return data.map((coffee, index) => {
    return (
      <>
        <div className="product-item" key={index}>
          <div className="product-header">
            <img src={coffee.image} alt="product image" />
            <ProductPopular data={coffee.popular} />
          </div>
          <div className="product-body">
            <div>
              <p className="product-name">{coffee.name}</p>
              <p className="product-price">{coffee.price}</p>
            </div>
            <div>
              <ProductVotes votes={coffee.votes} rating={coffee.rating} />
              <ProductSoldOut data={coffee.available} />
            </div>
          </div>
        </div>
      </>
    )
  })
}

export default Products