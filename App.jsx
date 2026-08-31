import { useState } from 'react'
import './App.css'

const formatPrice = (price) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price)

const products = [
  {
    id: 1,
    name: 'Classic Watch',
    description: 'Minimal stainless steel watch for everyday elegance.',
    price: 12900,
    image:
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    name: 'Nike Shoes',
    description: 'Spacious and durable carry-all for work and travel.',
    price: 8900,
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    name: 'Wireless Headphones',
    description: 'Immersive sound with all-day comfort and deep bass.',
    price: 1490,
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    name: 'Smart Speaker',
    description: 'Voice-controlled audio with crisp sound and smart home support.',
    price: 9900,
    image:
      'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 5,
    name: 'Running Shoes',
    description: 'Lightweight comfort built for speed and all-day movement.',
    price: 11900,
    image:
      'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 6,
    name: 'Leather Tote',
    description: 'Refined carry style with roomy storage and polished finish.',
    price: 139000,
    image:
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 7,
    name: 'Camera Kit',
    description: 'Capture sharp moments with a compact camera setup.',
    price: 219000,
    image:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 8,
    name: 'Desk Lamp',
    description: 'Warm modern lighting with adjustable glow for focused work.',
    price: 790,
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 9,
    name: 'Travel Mug',
    description: 'Insulated cup for coffee, tea, and all-day hydration.',
    price: 390,
    image:
      'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=900&q=80',
  },
]

function App() {
  const [cartCount, setCartCount] = useState(0)

  const handleAddToCart = () => {
    setCartCount((count) => count + 1)
  }

  const handleBuyNow = () => {
    setCartCount((count) => count + 1)
  }

  return (
    <div className="page-shell">
      <header className="topbar">
        <div>
          <p className="brand-kicker">New Collection</p>
          <h1>Urban Cart</h1>
        </div>

        <div className="cart-pill" aria-label="shopping cart">
          Cart <span>{cartCount}</span>
        </div>
      </header>
      

      <main className="product-section">
        <div className="section-heading">
          <div>
            <p>Featured finds</p>
            <h2>Best sellers</h2>
          </div>
          <button type="button" className="view-all-btn">
            View all
          </button>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />

              <div className="product-body">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="price-row">
                  <span className="price">{formatPrice(product.price)}</span>
                  <span className="rating">★ 4.8</span>
                </div>

                <div className="action-row">
                  <button type="button" className="secondary" onClick={handleAddToCart}>
                    Add to cart
                  </button>
                  <button type="button" className="primary" onClick={handleBuyNow}>
                    Buy now
                  </button>
                </div>
              </div>
            </article>
          ))}
          <div>
            
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
