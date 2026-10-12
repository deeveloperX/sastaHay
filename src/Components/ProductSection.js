import { useId } from "react";
import { Link } from "react-router-dom";
import fastDeliveryImage from "../assets/fast-delivery.svg";

const PRODUCTS_PER_SLIDE = 10;

function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="d-block h-100 rounded bg-light py-1 px-3 text-decoration-none text-reset"
    >
      <img
        src={product.image || product.thumbnail}
        alt={product.title}
        style={{ width: "100%", height: "130px", objectFit: "contain" }}
      />
      <p
        className="w-fit p-1 rounded mb-2"
        style={{
          fontSize: "14px",
          fontWeight: "bold",
          backgroundColor: "#fbf2d2",
          marginTop: "-15px",
        }}
      >
        ⭐{product.rating.toFixed(1)}{" "}
        <span style={{ fontSize: "10px", fontWeight: "normal" }}>
          {product.reviews ? product.reviews.length : 0} Reviews
        </span>
      </p>
      <p className="fw-bold mb-1">{product.title}</p>
      <div className="d-flex flex-row align-items-center justify-content-between">
        <p className="p-0 m-0">
          $<span className="fw-bold fs-4">{product.price}</span>
        </p>
        <p
          className="rounded p-1 fw-bold m-0"
          style={{
            fontSize: "10px",
            backgroundColor: "#9ef4a789",
            color: "#26671bf6",
          }}
        >
          {product.discountPercentage.toFixed(0)}% OFF
        </p>
      </div>
      <div className="fast-delivery">
        <img alt="fast-delivery" src={fastDeliveryImage} />
      </div>
    </Link>
  );
}

function ProductGrid({ products }) {
  return (
    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3">
      {products.map((product) => (
        <div className="col" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default function ProductSection({
  title,
  products,
  showViewAll = true,
  backgroundImage,
  enableCarousel = true,
}) {
  const carouselId = `product-carousel-${useId().replace(/:/g, "")}`;
  const hasCarousel = enableCarousel && products.length > PRODUCTS_PER_SLIDE;
  const productSlides = hasCarousel
    ? Array.from(
        { length: Math.ceil(products.length / PRODUCTS_PER_SLIDE) },
        (_, index) =>
          products.slice(
            index * PRODUCTS_PER_SLIDE,
            (index + 1) * PRODUCTS_PER_SLIDE
          )
      )
    : [products];

  return (
    <div
      className="mb-4 py-5"
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      <div className="container-fluid px-5 w-75">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h4 className="fw-bold">{title}</h4>
          {showViewAll && (
            <Link to="/products" className="btn btn-light border-secondary">
              View All
            </Link>
          )}
        </div>
        {hasCarousel ? (
          <div id={carouselId} className="carousel slide">
            <div className="carousel-inner">
              {productSlides.map((slideProducts, index) => (
                <div
                  className={`carousel-item${index === 0 ? " active" : ""}`}
                  key={slideProducts[0]?.id ?? index}
                >
                  <ProductGrid products={slideProducts} />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target={`#${carouselId}`}
              data-bs-slide="prev"
              aria-label="Previous products"
              style={{width: "5%"}}
            >
              <span
                className="carousel-control-prev-icon bg-secondary"
                aria-hidden="true"
              />
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target={`#${carouselId}`}
              data-bs-slide="next"
              aria-label="Next products"
              style={{width: "5%"}}
            >
              <span
                className="carousel-control-next-icon bg-secondary"
                aria-hidden="true"
              />
            </button>
          </div>
        ) : (
          <ProductGrid products={products} />
        )}
      </div>
    </div>
  );
}
