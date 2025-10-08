import React, { useState } from 'react';
import ProductList from './components/ProductList';
import { products, categories } from './data/products';

function App() {
  const [cart, setCart] = useState([]);

  // เพิ่มสินค้า: ถ้ามีแล้ว เพิ่มจำนวน, ถ้าไม่มี เพิ่มใหม่
  const handleAddToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      if (exist) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    alert(`เพิ่ม ${product.name} ในตะกร้าแล้ว!`);
  };

  const handleViewDetails = (product) => {
    alert(
      `ดูรายละเอียด: ${product.name}\n` +
      `ราคา: ฿${product.price.toLocaleString()}\n` +
      `คำอธิบาย: ${product.description}\n` +
      `คะแนน: ${product.rating.toFixed(1)}`
    );
  };

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="app">
      <div className="cart-info">
        <h4>🛒 ตะกร้า: {totalQuantity} ชิ้น</h4>
        {cart.length > 0 && (
          <div className="cart-details">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <span>{item.name}</span><br />
                <span>{item.quantity} ชิ้น × ฿{item.price.toLocaleString()} = <strong>฿{(item.price * item.quantity).toLocaleString()}</strong></span>
              </div>
            ))}
            <div className="cart-total">
              รวมราคา: <strong>฿{totalPrice.toLocaleString()}</strong>
            </div>
          </div>
        )}
      </div>

      <ProductList
        products={products}
        categories={categories}
        onAddToCart={handleAddToCart}
        onViewDetails={handleViewDetails}
      />
    </div>
  );
}

export default App;
