import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaStar, FaShareAlt, FaPlay } from 'react-icons/fa';
import fastDeliveryImage from '../assets/fast-delivery.svg'
import { saveCart } from "../utils/cart";

const ProductDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [addGiftWrap, setAddGiftWrap] = useState(false);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.error("Error fetching product details:", err);
      });
  }, [id]);

  const atc = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const findItemIndex = cart.findIndex((item) => item.id === product.id);

    if (findItemIndex === -1) {
      const updateCart = [...cart, { ...product, quantity: 1, giftWrap: addGiftWrap }];
      saveCart(updateCart);
      alert("Product added to cart!");
      return;
    }

    const updatedCart = [...cart];
    updatedCart[findItemIndex] = {
      ...updatedCart[findItemIndex],
      quantity: (updatedCart[findItemIndex].quantity || 1) + 1,
      giftWrap: addGiftWrap || updatedCart[findItemIndex].giftWrap,
    };

    saveCart(updatedCart);
    alert("Product quantity increased in cart!");
  };

  if (!data) {
    return (
      <div className="container my-5 text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // Combine images array or fallback to thumbnail
  const imageList = data.images && data.images.length > 0 ? data.images : [data.thumbnail];
  const originalPrice = (data.price / (1 - data.discountPercentage / 100)).toFixed(0);

  return (
    <div className="container my-5">
      <div className="row g-4 justify-content-center">
        
        {/* LEFT COLUMN: Gallery */}
        <div className="col-lg-5">
          {/* Main Display Image */}
          <div className="position-relative border rounded-4 overflow-hidden mb-3 bg-light text-center">
            <img
              src={imageList[activeImageIndex] || data.thumbnail}
              alt={data.title}
              className="img-fluid"
              style={{ maxHeight: "420px", objectFit: "contain", width: "100%" }}
            />
            {/* Image Counter Badge */}
            <span
              className="position-absolute bottom-0 end-0 m-3 bg-secondary bg-opacity-75 text-white px-2 py-1 rounded-3 fs-7"
              style={{ fontSize: "0.85rem" }}
            >
              {activeImageIndex + 1} / {imageList.length}
            </span>
          </div>

          {/* Image Thumbnails Strip */}
          <div className="d-flex gap-2 overflow-auto align-items-center pb-2">
            {/* Video Play Button Thumbnail Placeholder */}
            <button
              type="button"
              className="btn border rounded-3 p-0 flex-shrink-0 d-flex align-items-center justify-content-center bg-light"
              style={{ width: "50px", height: "50px" }}
            >
              <FaPlay className="text-secondary" style={{ fontSize: "14px" }} />
            </button>

            {/* Thumbnail Images */}
            {imageList.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImageIndex(idx)}
                className={`btn p-0 border rounded-3 overflow-hidden flex-shrink-0 ${
                  activeImageIndex === idx ? 'border-primary border-2' : ''
                }`}
                style={{ width: "50px", height: "50px" }}
              >
                <img
                  src={img}
                  alt={`thumbnail-${idx}`}
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Product Summary */}
        <div className="col-lg-6 ps-lg-4">
          {/* Product Title */}
          <h2 className="fw-bold text-dark mb-3 fs-3">{data.title}</h2>

          {/* Rating Badge & Fast Delivery Label */}
          <div className="d-flex align-items-center gap-2 mb-3">
            <div
              className="d-inline-flex align-items-center gap-1 bg-warning bg-opacity-10 px-2 py-1 rounded-2"
              style={{ fontSize: "0.9rem" }}
            >
              <div className="text-warning d-flex align-items-center gap-1">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </div>
              <span className="fw-bold ms-1">{data.rating?.toFixed(1) || data.rating}</span>
              <span className="text-muted">| {data.reviews?.length || 0} Reviews</span>
            </div>
              <img alt="fast-delivery" src={fastDeliveryImage} />
          </div>

          {/* Pricing & Share */}
          <div className="d-flex align-items-baseline gap-2 mb-4">
            <span className="display-6 fw-bold text-dark me-2">
              ${data.price}
            </span>
            <span className="text-muted text-decoration-line-through me-2">
              ${originalPrice}
            </span>
            {data.discountPercentage && (
              <span className="badge bg-success bg-opacity-10 text-success fw-bold px-2 py-1">
                {Math.round(data.discountPercentage)}% OFF
              </span>
            )}
            
            <button className="btn btn-light rounded-circle ms-auto p-2 border">
              <FaShareAlt className="text-secondary" />
            </button>
          </div>

          {/* Colors Selection Section */}
          <div className="mb-4">
            <label className="fw-bold d-block mb-2 text-dark">Colors</label>
            <div
              className="border border-primary rounded-3 p-2 text-center d-inline-flex flex-column align-items-center bg-light"
              style={{ width: "70px", cursor: "pointer" }}
            >
              <img
                src={data.thumbnail}
                alt="color option"
                className="rounded mb-1"
                style={{ width: "35px", height: "35px", objectFit: "cover" }}
              />
              <span className="small text-muted" style={{ fontSize: "0.75rem" }}>
                {data.category || "Standard"}
              </span>
            </div>
          </div>

          {/* Gift Wrap Section */}
          <div
            className={`border rounded-3 p-3 mb-4 d-flex align-items-center justify-content-between ${
              addGiftWrap ? 'border-warning bg-warning bg-opacity-10' : 'border-warning-subtle'
            }`}
            style={{ backgroundColor: "#FFFBF2" }}
          >
            <div className="d-flex align-items-start gap-3">
              <input
                className="form-check-input mt-1 border-warning"
                type="checkbox"
                id="giftWrapCheck"
                checked={addGiftWrap}
                onChange={(e) => setAddGiftWrap(e.target.checked)}
                style={{ width: "20px", height: "20px", cursor: "pointer" }}
              />
              <div>
                <label htmlFor="giftWrapCheck" className="fw-bold text-dark d-block cursor-pointer">
                  Add Gift Wrap
                </label>
                <div className="small text-muted mb-1">
                  Cost: <strong className="text-dark">Rs. 199</strong>
                </div>
                <div className="text-secondary" style={{ fontSize: "0.85rem" }}>
                  Make it Memorable - Add Gift Wrapping!
                </div>
              </div>
            </div>
            
            <div className="bg-white p-1 border rounded shadow-sm">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3081/3081378.png"
                alt="Gift Wrap"
                style={{ width: "45px", height: "45px", objectFit: "contain" }}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="row g-2">
            <div >
              <button
                onClick={() => atc(data)}
                className="btn w-100 fw-bold py-2 text-white"
                style={{ backgroundColor: "#FF8C2A", borderColor: "#FF8C2A", fontSize: "1rem" }}
              >
                Add to Cart
              </button>
            </div>
            {/* <div className="col-6">
              <button
                className="btn btn-primary w-100 fw-bold py-2 text-white"
                style={{ backgroundColor: "#42A5F5", borderColor: "#42A5F5", fontSize: "1rem" }}
              >
                Compare
              </button>
            </div> */}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;