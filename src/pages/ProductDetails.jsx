import { singleProduct } from ".."
import Single from "../components/Single"

const ProductDetails = () => {

  // fetch data and send to single component
  return (
    <div>
      <Single {...singleProduct}/>
    </div>
  )
}

export default ProductDetails