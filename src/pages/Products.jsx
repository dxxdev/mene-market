import React, { useState } from "react";
import { styles } from "../styles";
import { category, products } from "../data/data";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [categoryTabValue, setCategoryTabValue] = useState("all");
  const [render, setRender] = useState(false);
  return (
    <div className={`${styles.container}`}>
      <div className="pt-12">
        <div className="pb-0 flex flex-row gap-2.5 w-full overflow-auto">
          <button
            onClick={() => setCategoryTabValue("all")}
            className={`!px-6 !py-3 ${
              categoryTabValue == "all"
                ? "gradient-btn font-medium text-white"
                : "text-jet-black border active:scale-90 border-jet-black rounded-full"
            }`}
          >
            Barchasi
          </button>
          {category.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setCategoryTabValue(item)}
                className={`!px-6 !py-3 ${
                  categoryTabValue == item
                    ? "gradient-btn font-medium text-white"
                    : "text-jet-black border active:scale-90 border-jet-black rounded-full"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
      <ul className="pt-6 pb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categoryTabValue != "all"
          ? products
              .filter(
                (product) => product.category.categoryName == categoryTabValue
              )
              .map((product) => {
                return (
                  <ProductCard
                    key={product.id}
                    rendered={setRender}
                    product={product}
                  />
                );
              })
          : products.map((product) => {
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

export default Products;
