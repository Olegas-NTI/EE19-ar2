import React from "react"
import { graphql, Link} from "gatsby"
import * as mainStyles from "./ProductPage.module.css"
import './productpage.css'
import '../pages/index.css'
const ProductsPage = ({
  data: {
    gcms: { product },
  },
}) => (
  <React.Fragment>
    <div className={mainStyles.imageContainer}>
      <img src={product.images == null ? 'https://i.stack.imgur.com/6M513.png' : product.images.url} alt={product.name}/>
    </div>

    <div className={mainStyles.container}>
      <div className={`${mainStyles.linkBackBlock} ${product.category}`} >
      <Link className={mainStyles.linkBack} to={'/'}>Go back</Link>
      </div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <h1>{product.price} kr</h1>
    </div>
  </React.Fragment>
)

export const pageQuery = graphql`
  query ProductPageQuery($id: ID!) {
    gcms {
      product(where: { id: $id }) {
        name
        description
        price
        category
        images {
          thumbnail: url(
            transformation: {
              image: { resize: { width: 1250, height: 750, fit: clip } }
              document: { output: { format: jpg } }
            }
          )
          url(transformation: { document: { output: { format: jpg } } })
        }
      }
    }
  }
`
export default ProductsPage
