import { useState, useEffect } from 'react';
import ProductSection from './ProductSection';
import ShopMoreCategories from '../Components/ShopMoreCategories'
import orangeBg from '../assets/bg-orange.png';
import pinkBg from '../assets/bg-pink.png';
import yellowBg from '../assets/bg-yellow.png'
import buyNowPayLater from '../assets/buy-now-pay-later.jpg'

export default function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // limit=100 pulls exactly 100 items in one single request
    fetch('https://dummyjson.com/products?limit=100')
      .then(res => res.json())
      .then(data => {
        // DummyJSON wraps the array inside a "products" object key
        setAllProducts(data.products); 
        setLoading(false);
      })
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  if (loading) return <h1>Loading Products...</h1>;

  // Filter out at least 3 distinct categories from the 100 products
  const beautyProducts = allProducts.filter(p => p.category === 'beauty');
  const groceryProducts = allProducts.filter(p => p.category === 'groceries');
  const furnitureProducts = allProducts.filter(p => p.category === 'furniture');
  const fragrancesProducts = allProducts.filter(p => p.category === 'fragrances');

  return (
    <div>
      {/* Feed the filtered lists into your single reusable section component */}
      {furnitureProducts.length > 0 && <ProductSection title="Home & Furniture" products={furnitureProducts} backgroundImage={orangeBg} />}
      {beautyProducts.length > 0 && <ProductSection title="Beauty & Cosmetics" products={beautyProducts} backgroundImage={pinkBg}/>}
      <div className='mb-4'>
        <img className='w-100 ' alt='buy-now-pay-later' src={buyNowPayLater} />
      </div>
      {groceryProducts.length > 0 && <ProductSection title="Fresh Groceries" products={groceryProducts} backgroundImage={yellowBg} />}
        <ShopMoreCategories />
      {fragrancesProducts.length > 0 && <ProductSection title="Fragrances" products={fragrancesProducts} backgroundImage={pinkBg} />}
    </div>
    
  );
}
