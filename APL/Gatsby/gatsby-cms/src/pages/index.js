import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import * as mainStyles from "./index.module.css"
import "./index.css"

const pageQuery = graphql`
  {
    gcms {
      products {
        name
        slug
        price
        category
        stock
        images {
        thumbnail: url(
        transformation: {
          image: { resize: { width: 250, height: 250, fit: clip } }
          document: { output: { format: jpg } }
        }
      )
      url(transformation: { document: { output: { format: jpg } } })
    }
      }
    }
  }
`



const IndexPage = () => {
  const {
    gcms: { products },
  } = useStaticQuery(pageQuery)
  return (
    <div>
      <h1 className={mainStyles.productsHeader}>Products</h1>
      <div className={mainStyles.container}>
        {products.map(({ slug, ...product }) => (
          <div className={mainStyles.cardStyle}>
            <div className={mainStyles.cardImagebox}>
            <img
              src={
                product.images == null
                  ? `https://dummyimage.com/250/ffffff/000000`
                  : product.images.thumbnail
              }
              alt={product.name}
            />  
            </div>
            <div className={mainStyles.productNameBlock}>
              <Link
                class={mainStyles.productName}
                key={slug}
                to={`/products/${slug}`}
              >
                {product.name}
              </Link>
              <div className={mainStyles.greyline}></div>
              <div>
                {<span className={product.category}>{product.category}</span>}
                <span className={product.stock ? mainStyles.inStock : mainStyles.outOfStock}>{product.stock ? 'In stock' : 'Out of stock'}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default IndexPage
