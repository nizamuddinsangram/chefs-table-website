import { useEffect, useState } from "react";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Table from "./components/Table/Table";

function App() {
  const [carts, setCarts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("../public/data.json")
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);
  const handleAddProduct = (item) => {
    setProducts([...products, item]);
  };
  // want to cook

  return (
    <>
      <Header />
      <Banner />
      <div className=" mb-10">
        <h1>Our Recipes</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.{" "}
        </p>
        <div className="flex  justify-between w-full">
          <div className="grid grid-cols-2 gap-10 w-3/5 p-4">
            {carts.map((cart) => (
              <Products
                handleAddProduct={handleAddProduct}
                key={cart.recipe_id}
                cart={cart}
              ></Products>
            ))}
          </div>
          <div className="w-2/5 bg-green-200">
            <Table products={products} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
// {products.map((product) => (
//   <Table product={product} key={product.recipe_id}></Table>
// ))}
