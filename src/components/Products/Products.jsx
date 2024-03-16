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
          <h2 className="card-title">{recipe_name}</h2>
          <p>{short_description}</p>
          <div>
            {ingredients.map((ingredient, i) => (
              <li key={i}>{ingredient}</li>
            ))}
          </div>
          <div className="flex">
            <p>{preparing_time}</p>
            <p>{calories}</p>
          </div>
          <div className="card-actions">
            <button
              onClick={() => handleAddProduct(cart)}
              className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-4"
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
