import React from "react"
import { graphql } from "gatsby"

const ProductsPage = ({
  data: {
    gcms: { product },
  },
}) => (
  <React.Fragment>
    <h1>{product.name}</h1>
    <p>{product.description}</p>
    <h1>{product.price}</h1>
  </React.Fragment>
)


export const pageQuery = graphql`
    query ProductPageQuery($id: ID!) {
        gcms {
            product(where: {id: $id}) {
                name
                description
                price
            }
        }
    }
`;
export default ProductsPage