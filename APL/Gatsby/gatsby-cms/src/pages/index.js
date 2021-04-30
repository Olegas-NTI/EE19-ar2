import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

const pageQuery = graphql`
  {
    gcms {
      products {
        name
        slug
        price
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
  console.log(products)
  
  return (
    <div>
      {products.map(({ slug, ...product }) => (
        <div>
          <Link key={slug} to={`/products/${slug}`}>
          {product.name}
        </Link>
        <div><img src={product.images == null ? `https://layali.se/wp-content/plugins/lightbox/images/No-image-found.jpg` : product.images.thumbnail} alt={product.name}/></div>
        </div>
      
        
      ))}
    </div>
  
  )
}

export default IndexPage
