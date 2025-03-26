import starFill from '../../assets/Star_fill.svg'
import starEmpty from '../../assets/Star.svg'

function ProductVotes({ votes, rating }) {
  if (votes > 0) {
    return (
      <div className="product-rating">
        <img src={starFill} alt="star fill" />
        <span className="rating-info">{rating}</span>
        <span className="product-votes">({votes} votes)</span>
      </div>
    )
  } else {
    return (
      <div className="product-rating">
        <img src={starEmpty} alt="star empty" />
        <span className="product-votes">No ratings</span>
      </div>
    )
  }
}

export default ProductVotes