import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import ProductSection from "../Components/ProductSection";

const categoryTitles = {
  beauty: "Beauty & Cosmetics",
  fragrances: "Fragrances",
  furniture: "Home & Furniture",
  groceries: "Fresh Groceries",
};

const ProductsPage = () => {
  const [data, setData] = useState([]);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const products = category
    ? data.filter((product) => product.category === category)
    : data;
  const title = categoryTitles[category] || "All Products";

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=100")
      .then((response) => {
        setData(response.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ProductSection
      title={title}
      products={products}
      showViewAll={false}
      enableCarousel={false}
    />
  );
};

export default ProductsPage;
