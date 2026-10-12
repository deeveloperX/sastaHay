import React, { useEffect, useState } from "react";
import { CART_UPDATED_EVENT, getCart } from "../utils/cart";

const OrderSuccess = () => {
  const [cart, setCart] = useState(getCart);

  useEffect(() => {
    const updateCart = () => setCart(getCart());
    window.addEventListener(CART_UPDATED_EVENT, updateCart);
    window.addEventListener("storage", updateCart);

    return () => {
      window.removeEventListener(CART_UPDATED_EVENT, updateCart);
      window.removeEventListener("storage", updateCart);
    };
  }, []);

  const subtotal = cart.reduce((sum, item) => {
    const discountPercentage = Number(item.discountPercentage);
    const originalPrice =
      discountPercentage > 0 && discountPercentage < 100
        ? item.price / (1 - discountPercentage / 100)
        : item.price;
    return sum + originalPrice * item.quantity;
  }, 0);
  const discount = cart.reduce((sum, item) => {
    const discountPercentage = Number(item.discountPercentage);
    if (!(discountPercentage > 0 && discountPercentage < 100)) {
      return sum;
    }

    const originalPrice = item.price / (1 - discountPercentage / 100);
    return sum + (originalPrice - item.price) * item.quantity;
  }, 0);
  const shipping = cart.length > 0 ? 10 : 0;
  const total = subtotal + shipping - discount;

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="text-center mb-5">
            <div className="mb-3">
              <i className="bi bi-check-circle-fill success-icon"></i>
            </div>
            <h1 className="fw-bold">Thank you for your order!</h1>
            <p className="text-muted">Your order has been confirmed.</p>
          </div>

          <div className="row g-4">
            <div className="col-md-7">
              <div className="card border-0 shadow-sm p-4 mb-4">
                <h4 className="mb-4 fw-semibold">Order Details</h4>
                {cart.length > 0 ? (
                  cart.map((item) => (
                    <div
                      key={item.id}
                      className="d-flex align-items-center mb-3 pb-3 border-bottom"
                    >
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="product-img me-3"
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "contain",
                        }}
                      />
                      <div className="flex-grow-1">
                        <h6 className="mb-1 fw-medium">{item.title}</h6>
                        <small className="text-muted">
                          Quantity: {item.quantity}
                        </small>
                      </div>
                      <span className="fw-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-muted">
                    No items are currently available for this order.
                  </p>
                )}

                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Discount</span>
                  <span className="text-success">-${discount.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-3 pb-3 border-bottom">
                  <span className="text-muted">Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between fw-bold fs-5">
                  <span>Total</span>
                  <span className="text-primary">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Shipping & Metadata Info */}
            <div className="col-md-5">
              {/* Order Info Card */}
              <div className="card border-0 shadow-sm p-4 mb-4">
                <h5 className="mb-3 fw-semibold">Summary Info</h5>
                <ul className="list-unstyled mb-0 text-muted">
                  <li className="mb-2">
                    <span className="fw-medium text-dark">Order ID:</span>{" "}
                    #UK-984310
                  </li>
                  <li className="mb-2">
                    <span className="fw-medium text-dark">Date:</span> Sept 15,
                    2026
                  </li>
                  <li>
                    <span className="fw-medium text-dark">Payment:</span> Visa
                    ending in 4242
                  </li>
                </ul>
              </div>

              {/* Shipping Address Card */}
              <div className="card border-0 shadow-sm p-4">
                <h5 className="mb-3 fw-semibold">Delivery Address</h5>
                <address className="text-muted mb-0">
                  <strong>Jane Doe</strong>
                  <br />
                  123 Main Street, Apt 4B
                  <br />
                  New York, NY 10001
                  <br />
                  United States
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
