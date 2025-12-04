import { useState } from 'react'
import { AlertBox } from './components/AlertBox/AlertBox';
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard';
import { ProductDisplay } from './components/ProductDisplay/ProductDisplay';
import './App.css'

function App() {
  
  const [showAlert, setShowAlert] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>([]);

  const user = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'Software Engineer',
  avatarUrl: 'https://example.com/avatar.jpg'
};
const product = {
  id: '1',
  name: 'Wireless Headphones',
  price: 199.99,
  description: 'High-quality wireless headphones with noise cancellation.',
  imageUrl: './images/headphone.jpeg',
  inStock: true
};
 
  const handleAddToCart = (productId: string) => {
    setCartItems([...cartItems, productId]);
    setShowAlert(true);
  }
 
  return (
    <>
      <div className="p-4">
        {showAlert && (
          <AlertBox
            type="success"
            message="Product added to cart!"
            onClose={() => setShowAlert(false)}
          />
        )}
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <UserProfileCard
            id={user.id}
            name={user.name}
            email={user.email}
            role={user.role}
          />
  
          <ProductDisplay
            product={product}
            showDescription={true}
            showStockStatus={product.inStock}
            onAddToCart={handleAddToCart}
           />
           
        </div>
      </div>
    </>
  )
}

export default App

 
