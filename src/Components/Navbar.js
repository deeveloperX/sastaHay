import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { RiMenu2Fill } from "react-icons/ri";
import { RiShoppingCartLine } from "react-icons/ri";import { MdMic } from "react-icons/md";
import Logo from '../assets/sastahay-logo.png'
import { CART_UPDATED_EVENT, getCartItemCount } from "../utils/cart";
import Sidebar from "./Sidebar";



const Navbar = () => {
  const [cartCount, setCartCount] = useState(getCartItemCount);

  useEffect(() => {
    const updateCartCount = () => setCartCount(getCartItemCount());
    window.addEventListener(CART_UPDATED_EVENT, updateCartCount);
    window.addEventListener("storage", updateCartCount);

    return () => {
      window.removeEventListener(CART_UPDATED_EVENT, updateCartCount);
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-myPrimary sticky-top" style={{ height: "72px" }}>
            <div className="container-fluid">
                <div className="d-flex align-items-center flex-grow-1 gap-2 mb-2">
                    {/* sidebar button */}
                    <button 
                        className="bg-transparent border-0 text-light fs-3 p-0"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasExample"
                        aria-controls="offcanvasExample"
                    >
                        <RiMenu2Fill />
                    </button>
                    <Link to={`/`} className="navbar-brand fs-2 fw-bold mb-0">
                        <img alt='logo' src={Logo} style={{width: "150px"}} />
                    </Link>
                </div>

                <div className="d-none d-lg-flex justify-content-center flex-grow-1">
                    <form className="d-flex w-60" role="search">
                        <div className="position-relative w-100">
                            <input 
                            className="form-control pe-5"
                            style={{ height: '52px' }}
                            type="search" 
                            placeholder="Search products..." 
                            aria-label="Search" 
                            />
                            <MdMic 
                            className="position-absolute top-50 end-0 translate-middle-y me-3 text-myPrimary" 
                            style={{ cursor: 'pointer', fontSize: '1.3rem', zIndex: 5 }} 
                            />
                            
                        </div>
                    </form>

                </div>

                <div className="d-flex align-items-center justify-content-end flex-grow-1 gap-3">
                    <div className="d-flex align-items-center gap-4">
                        <Link
                            to={'/cart'}
                            className="nav-link position-relative"
                            aria-label={`Shopping cart, ${cartCount} items`}
                        >
                            <RiShoppingCartLine style={{ fontSize: "25px", color: "white" }} />
                            {cartCount > 0 && (
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                        <Link to={'/login'} className="btn btn-outline-light border px-4 fw-bold">Login</Link>
                    </div>
                </div>
            </div>
        </nav>

        <Sidebar />
    </>
  )
}

export default Navbar