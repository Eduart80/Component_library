import { type ProductDisplayProps } from "../../types/index";


export const ProductDisplay: React.FC<ProductDisplayProps> = ({
    product,
    onAddToCart,
}) => {
  const cardStyle = {
    background: 'white',
    color : 'blue',
    width: '100%',
    height: '100vh'
  }
  return(
    <>
     <div className={`d-flex justify-content-center align-items-center ${cardStyle.height}`} >
        <div className="card p-4 border-l-4 text-center" >
            <div className="flex align-items-center justify-between items-center">
                <div className="card-image mx-auto">
                    <img src='src/images/headphone.jpeg' className="img-fluid rounded-start d-block mx-auto" alt="headphone" />
                </div>
                    <h2>{product.name}</h2>
                    <p className="text-primary fw-bolder">${product.price}</p>
                    <p>{product.description}</p>
                    <p>{product.inStock?"In Stock":"Out of Stock"}</p>
                <button className='btn btn-primary' style={{width:'80%'}} onClick={() => onAddToCart && onAddToCart(product.name)} >
                    Add to Cart
                </button>
            </div>
        </div>
     </div>
   
    </>
  )
}
