import { CiStopwatch } from "react-icons/ci";
import { FaFire } from "react-icons/fa6";
const Products = ({ cart, handleAddProduct }) => {
  const {
    calories,
    ingredients,
    preparing_time,
    recipe_image,
    recipe_name,
    short_description,
  } = cart;
  return (
    <>
      <div className="card  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={recipe_image}
            alt="Shoes"
            className="rounded-xl w-full h-52"
          />
        </figure>
        <div className="card-body  text-start	">
          <h2 className="text-2xl font-bold	">{recipe_name}</h2>
          <p className="text-lg font-normal	 	 text-gray-500">
            {short_description}
          </p>
          <hr className="my-2" />
          <div className="text-lg font-normal		 text-gray-500">
            <p className="text-xl font-bold">
              Ingredients: {ingredients.length}
            </p>
            {ingredients.slice(0, 3).map((ingredient, i) => (
              <li key={i}>{ingredient}</li>
            ))}
          </div>
          <hr className="my-2" />
          <div className="flex">
            <p className="flex items-center text-lg font-normal		 text-gray-500">
              <CiStopwatch className="mr-2" />
              {preparing_time}
            </p>
            <p className="flex items-center text-lg font-normal		 text-gray-500">
              <FaFire className="mr-2" />
              {calories}
            </p>
          </div>
          <div className="card-actions">
            <button
              onClick={() => handleAddProduct(cart)}
              className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-4"
            >
              Want to cook
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
