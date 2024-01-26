import React, { useEffect, useState } from "react";
import { products } from "../data/data";
import ProductCard from "../components/ProductCard";
import { styles } from "../styles";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const Saved = ({ setRender, render }) => {
  const navigate = useNavigate();
  const [savedProducts, setSavedProducts] = useState(
    products.filter((product) => product.saved)
  );
  useEffect(() => {
    setSavedProducts(products.filter((product) => product.saved));
  }, [render]);
  return (
    <div className={`${styles.container} flex flex-col justify-stretch`}>
      {!savedProducts.length == 0 && (
        <ul className="pt-6 pb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {savedProducts.map((product) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
                rendered={setRender}
              />
            );
          })}
        </ul>
      )}
      {savedProducts && savedProducts.length == 0 && (
        <div className="w-full h-96 flex flex-col justify-center items-center gap-5">
          <h2 className="text-2xl text-jet-black">Saqlanganlar bo'sh</h2>
          <Button onClick={() => navigate("/")} variant="gradient" color="blue">
            Bosh sahifa
          </Button>
        </div>
      )}
    </div>
  );
};

export default Saved;
