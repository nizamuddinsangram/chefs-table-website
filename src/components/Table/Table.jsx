const Table = ({ cooks, wantToCookCount, handlePreparing, currentCooking }) => {
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
                  className="btn bg-red-400"
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
        <p className="text-center">
          Current cooking: 0<span>0</span>
          {currentCooking.map((item, index) => (
            <span key={index}>{item.recipe_name}, </span>
          ))}
        </p>
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
