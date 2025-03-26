function ProductSoldOut({ data }) {
  if (!data) {
    return (
      <div className="product-info">
        <span>Sold Out</span>
      </div>
    )
  }
}

export default ProductSoldOut