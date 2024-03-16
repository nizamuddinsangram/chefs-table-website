import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Table from "./components/Table/Table";

function App() {
  const [carts, setCarts] = useState([]);
  const [cooks, setCooks] = useState([]);
  const [currentCooking, setCurrentCooking] = useState([]);
  const [wantToCookCount, setWantToCookCount] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch("../public/data.json")
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);
  const handleAddProduct = (item) => {
    console.log(item);
    const isExits = cooks.find((p) => p.recipe_id == item.recipe_id);
    if (!isExits) {
      setCooks([...cooks, item]);
      setWantToCookCount(wantToCookCount + 1);
    } else {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Already added",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  // pending
  const handlePreparing = (id) => {
    console.log("allah help me ", id);
    const newCook = cooks.filter((p) => p.recipe_id !== id);
    const deletedCook = cooks.find((p) => p.recipe_id === id);
    setCooks(newCook);
    setCurrentCooking([...currentCooking, deletedCook]);
    setWantToCookCount(wantToCookCount - 1);
    setCount(count + 1);
  };

  return (
    <>
      <Header />
      <Banner />
      <div className=" mb-10 text-center">
        <h1 className="text-5xl font-black mb-6">Our Recipes</h1>
        <p className="mb-8 text-xl text-gray-500">
          Experience diverse cuisines for free with our online recipes, each a
          cultural masterpiece. Free online recipes celebrate cultural
          <br /> diversity through global flavors for the family.
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
          <div className="w-2/5 bg-green-200 mt-10">
            <Table
              handlePreparing={handlePreparing}
              wantToCookCount={wantToCookCount}
              cooks={cooks}
              currentCooking={currentCooking}
              count={count}
            />
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
