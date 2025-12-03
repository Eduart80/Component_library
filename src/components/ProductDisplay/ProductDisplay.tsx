import { type ProductDisplayProps } from "../../types/index";

export const handleAddToCard = (prod:string)=>{
  alert(`Your ${prod} was added to cart`)
}
export const ProductDisplay: React.FC<ProductDisplayProps> = ({
    product,
    onAddToCart,
}) => {
  return(
    <>
      <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <button onClick={() => onAddToCart && onAddToCart(product.name)}>
        Add to Cart
      </button>
    </div>
    </>
  )
}
