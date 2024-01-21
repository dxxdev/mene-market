import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { useParams } from "react-router-dom";
import { products } from "../data/data";
import ProductCard from "../components/ProductCard";

const CategoryProducts = () => {
  const [render, setRender] = useState(false);
  const { category } = useParams();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className={`${styles.container}`}>
      <ul className="pt-6 pb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products
          .filter(
            (product) =>
              product.category.categoryName == category.replaceAll("%20", " ")
          )
          .map((product) => {
            return (
              <ProductCard
                key={product.id}
                rendered={setRender}
                product={product}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default CategoryProducts;
