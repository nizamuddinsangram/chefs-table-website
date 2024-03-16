const Table = ({
  cooks,
  count,
  wantToCookCount,
  handlePreparing,
  currentCooking,
}) => {
  return (
    <>
      <p>
        Want to Cook: <span>{wantToCookCount}</span>
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
            {cooks.map((cook, index) => (
              <tr key={index} className="bg-base-200">
                <th>{index + 1}</th>
                <td>{cook.recipe_name}</td>
                <td>{cook.preparing_time}</td>
                <td>{cook.calories}</td>
                <td
                  onClick={() => handlePreparing(cook.recipe_id)}
                  className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-4"
                >
                  Pending
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* comment */}
      <div>
        {/* <p className="text-center">
          Current cooking: 0<span>{count}</span>
          {currentCooking.map((item, index) => (
            <span key={index}>{item.recipe_name}, </span>
          ))}
        </p> */}
        <p>
          Current cooking: 0<span>{count}</span>
        </p>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {currentCooking.map((item, index) => (
                <tr key={index} className="bg-base-200">
                  <th>{index + 1}</th>
                  <td>{item.recipe_name}</td>
                  <td>{item.preparing_time}</td>
                  <td>{item.calories}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
