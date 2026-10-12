import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";
import { saveCart } from "../utils/cart";

const Cart = () => {
  const [cart, setCart] = useState(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    return Array.isArray(storedCart)
      ? storedCart.map((item) => ({
          ...item,
          quantity:
            Number.isInteger(item.quantity) && item.quantity > 0
              ? item.quantity
              : 1,
        }))
      : [];
  });

  useEffect(() => {
    saveCart(cart);
  }, [cart]);

  const subtotal = cart.reduce((acc, item) => {
    const discountPercentage = Number(item.discountPercentage);
    const originalPrice =
      discountPercentage > 0 && discountPercentage < 100
        ? item.price / (1 - discountPercentage / 100)
        : item.price;
    return acc + originalPrice * item.quantity;
  }, 0);
  const discount = cart.reduce((acc, item) => {
    const discountPercentage = Number(item.discountPercentage);
    if (!(discountPercentage > 0 && discountPercentage < 100)) {
      return acc;
    }

    const originalPrice = item.price / (1 - discountPercentage / 100);
    return acc + (originalPrice - item.price) * item.quantity;
  }, 0);
  const shipping = cart.length > 0 ? 10 : 0;
  const itemCount = cart.reduce((count, item) => count + item.quantity, 0);
  const total = subtotal + shipping - discount;

  const incquan = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item,
      ),
    );
  };

  const decquan = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeCartItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div className="cart-wrapper">
      <div className="container my-4">
        <div className="row g-4">
          {/* Cart Items Section */}
          <div className="col-lg-8">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="mb-0">Shopping Cart</h4>
              <div className="d-flex gap-2 align-items-center">
                <button
                  onClick={clearCart}
                  className="btn btn-outline-danger border"
                >
                  Clear Cart
                </button>
                <span className="text-muted">{itemCount} items</span>
              </div>
            </div>

            {cart.length !== 0 ? (
              // product card
              <div className="d-flex flex-column gap-3">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="product-card p-3 shadow-sm border rounded"
                  >
                    <div className="row align-items-center">
                      <div className="col-md-2">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="product-image img-fluid rounded"
                          style={{ maxHeight: "80px", width: "80px" }}
                        />
                      </div>
                      <div className="col-md-4">
                        <h6 className="mb-1">{item.title}</h6>
                        <p className="text-muted mb-0">{item.category}</p>
                        {Number(item.discountPercentage) > 0 &&
                          Number(item.discountPercentage) < 100 && (
                            <span
                              className="badge mt-2"
                              style={{
                                fontSize: "10px",
                                backgroundColor: "#9ef4a789",
                                color: "#26671bf6",
                              }}
                            >
                              {Math.round(item.discountPercentage)}% OFF
                            </span>
                          )}
                      </div>
                      <div className="col-md-3">
                        <div className="d-flex align-items-center gap-2">
                          <button
                            onClick={() => {
                              decquan(item.id);
                            }}
                            className="btn btn-outline-secondary btn-sm"
                          >
                            -
                          </button>
                          Quantity: {item.quantity || 1}
                          <button
                            onClick={() => {
                              incquan(item.id);
                            }}
                            className="btn btn-outline-secondary btn-sm"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="fw-bold">
                          $ {(item.price * item.quantity).toFixed(2)}
                        </div>
                        {Number(item.discountPercentage) > 0 &&
                          Number(item.discountPercentage) < 100 && (
                            <small className="text-muted text-decoration-line-through">
                              $
                              {(
                                (item.price /
                                  (1 - item.discountPercentage / 100)) *
                                item.quantity
                              ).toFixed(2)}
                            </small>
                          )}
                      </div>
                      <button
                        type="button"
                        onClick={() => removeCartItem(item.id)}
                        className="col-md-1 btn p-0"
                        aria-label={`Remove ${item.title} from cart`}
                      >
                        <MdOutlineDelete className="text-danger fs-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="d-flex flex-column gap-3 align-items-center mt-5">
                <h3 className="text-danger">The cart is Empty</h3>
                <Link
                  to={"/"}
                  className="btn btn-light border border-secondary"
                >
                  Back to shop
                </Link>
              </div>
            )}
          </div>

          {/* Summary Section */}
          <div className="col-lg-4">
            <div className="summary-card p-4 shadow-sm border rounded">
              <h5 className="mb-4">Order Summary</h5>

              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">Subtotal</span>
                <span>$ {subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">Discount</span>
                <span className="text-success">-$ {discount.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">Shipping</span>
                <span>$ {shipping.toFixed(2)}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4">
                <span className="fw-bold">Total</span>
                <span className="fw-bold">$ {total?.toFixed(2)}</span>
              </div>

              {cart.length > 0 && (
                <Link
                  to="/checkout"
                  className="btn btn-primary checkout-btn w-100 mb-3"
                >
                  Proceed to Checkout
                </Link>
              )}

              <div className="d-flex justify-content-center gap-2">
                <i className="bi bi-shield-check text-success"></i>
                <small className="text-muted">Secure checkout</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
