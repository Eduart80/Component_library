import { useState } from 'react'
import { AlertBox } from './components/AlertBox/AlertBox';
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard';
import { ProductDisplay } from './components/ProductDisplay/ProductDisplay';
import './App.css'

function App() {
  
  const [showAlert, setShowAlert] = useState(false);
  const [showUserAlert, setShowUserAlert] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>([]);
  const [updateUser, setUpdateUser] = useState<string[]>([]);
  
  const user = {
  id: '1',
  name: 'Jake Sully',
  email: 'jake.sully@example.com',
  role: 'Software Engineer',
  avatarUrl: '/public/images/jakesully1.jpeg'
};
const product = {
  id: '1',
  name: 'Wireless Headphones',
  price: 199.99,
  description: 'High-quality wireless headphones with noise cancellation.',
  imageUrl: '/public/images/headphone.jpeg',
  inStock: true
};
const product2 = {
  id: '2',
  name: 'Apple Earphones',
  price: 139.99,
  description: 'High-quality wireless earphones with noise cancellation.',
  imageUrl: '/public/images/earphones2.jpeg',
  inStock: false
};

const userUpdateAlert = (user: string)=>{
    setUpdateUser([...updateUser, user ])
    setShowUserAlert(true)
}
 
  const handleAddToCart = (productId: string) => {
    setCartItems([...cartItems, productId]);
    setShowAlert(true);
  }
 
  return (
    <>
      <div className="p-4">
        {showAlert && (
          <AlertBox
            type='success'
            message={`${product.name} was added to cart! `}
            onClose={() => setShowAlert(false)}
          />
        )}
        {showUserAlert && (
          <AlertBox
            type='success'
            message={`${user.name} profile has been updated successfully! `}
            onClose={() => setShowUserAlert(false)}
          >
          <p className="text-sm">You can now continue using the application.</p>
          </AlertBox>
        )}
   
          <UserProfileCard
            id={user.id}
            name={user.name}
            email={user.email}
            role={user.role}
            avatarUrl={user.avatarUrl}
            onUpdate={userUpdateAlert}
          />
        <div className="d-flex align-items-center">
          <div style={{ flex: '1', textAlign: 'center' }}>
            <ProductDisplay
              product={product}
              showDescription={true}
              showStockStatus={product.inStock}
              onAddToCart={handleAddToCart}
            />
          </div>
          <div style={{flex:'2',paddingLeft:'1rem', textAlign:'center'}}>
            <ProductDisplay
              product={product2}
              showDescription={true}
              showStockStatus={product2.inStock}
              onAddToCart={handleAddToCart}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App

 