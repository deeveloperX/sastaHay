import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ProductsPage from "./Pages/ProductsPage";
import CartPage from "./Pages/CartPage";
import CheckoutPage from "./Pages/CheckoutPage";
import OrderSuccess from "./Pages/OrderSuccess";
import Home from './Pages/Home';
import Footer from './Components/Footer'
import LoginPage from './Pages/LoginPage';
import ProductDetails from './Pages/ProductDetails';
import RegisterPage from './Pages/RegisterPage';
import FaqPage from './Pages/FaqPage';
import ContactPage from './Pages/ContactPage';
import TermsAndConditions from './Pages/TermsAndConditions';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Installments from './Pages/Installments'
import SellerRegistration from './Pages/SellerRegistration'

function RouteFooter() {
  const { pathname } = useLocation();

  return ['/login', '/register'].includes(pathname) ? null : <Footer />;
}

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path='/faqs' element={<FaqPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/terms' element={<TermsAndConditions />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
        <Route path='/installments' element={<Installments />} />
        <Route path='/seller-registration' element={<SellerRegistration />} />
      </Routes>
      <RouteFooter />
    </BrowserRouter>
  );
}

export default App;
