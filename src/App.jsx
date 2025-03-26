import { lazy, useEffect, useState } from 'react'
import bgCafe from './assets/bg-cafe.jpg'
import vectorHeader from './assets/vector.svg'
import './app.css'

const Products = lazy(() => import('./components/product/Product.jsx'))

function App() {
  const [filter, setFilter] = useState('all')
  const [coffees, setCoffees] = useState([])
  const [coffeeFilter, setCoffeeFilter] = useState([])
  
  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json'
      )

      if(!response.ok) {
        throw new Error('Network response was not ok.')
      }

      const data = await response.json()

      setCoffees(data)
      setCoffeeFilter(data)
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const filterProducts = (value) => {
    if(value == 'all') {
      setFilter('all')
      setCoffeeFilter(coffees)
    } else {
      setFilter('available')
      const filterCoffees = coffees.filter(coffee => coffee.available)
      setCoffeeFilter(filterCoffees)
    }
  }

  return (
    <>
      <div>
        <img src={bgCafe} alt="background" className='image-bg' />
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h1>Our Collection</h1>
              <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
              <div className="filter">
                <span className={filter == 'all' ? 'active' : ''} onClick={() => filterProducts('all')}>
                  All Product
                </span>
                <span className={filter == 'available' ? 'active' : ''} onClick={() => filterProducts('available')}>
                  Available Now
                </span>
              </div>
              <img src={vectorHeader} alt="vector header" className="vector-header" />
            </div>
            <div className="card-body">
              <div className="products">
                <Products data={coffeeFilter} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
