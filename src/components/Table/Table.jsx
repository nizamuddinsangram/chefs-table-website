const Table = ({ products }) => {
  return (
    <>
      <p>
        Want to Cook: <span>{index + 1}</span>
      </p>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="bg-base-200">
                <th>{index + 1}</th>
                <td>{product.recipe_name}</td>
                <td>{product.preparing_time}</td>
                <td>{product.calories}</td>
                <td className="btn bg-red-400">Pending</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
{
  /* <tr className="bg-base-200">
<th>1</th>
<td>Cy Ganderton</td>
<td>Quality Control Specialist</td>
<td>Blue</td>
</tr> */
}
