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
          <img src={recipe_image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{recipe_name}</h2>
          <p>{short_description}</p>
          <div className="flex">
            <p>{preparing_time}</p>
            <p>{calories}</p>
          </div>
          <div className="card-actions">
            <button
              onClick={() => handleAddProduct(cart)}
              className="btn btn-primary"
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
