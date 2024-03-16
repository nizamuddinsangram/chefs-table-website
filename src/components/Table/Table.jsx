const Table = ({
  cooks,
  count,
  wantToCookCount,
  handlePreparing,
  currentCooking,
}) => {
  return (
    <>
      <p className="text-2xl  my-4 font-bold	">
        Want to Cook: <span>{wantToCookCount}</span>
      </p>
      <hr className="w-1/2 mx-auto my-4 " />
      <div className="overflow-x-auto px-6">
        <table className="table px-10">
          <thead>
            <tr className="text-lg text-gray-400">
              <th></th>
              <th>Name</th>
              <th>TIme</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>

          <tbody className="bg-gray-300">
            {cooks.map((cook, index) => (
              <tr key={index} className="bg-base-200 p-6 mb-2 text-xl">
                <th className="p-6 mb-2 text-xl">{index + 1}</th>
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
        <p className="mt-8 mb-4 text-2xl   font-bold">
          Current cooking: 0<span>{count}</span>
        </p>
        <hr className="w-1/2 mx-auto my-4 " />

        <div className="overflow-x-auto px-10">
          <table className="table px-10">
            <thead>
              <tr className="text-lg text-gray-400">
                <th></th>
                <th>Name</th>
                <th>TIme</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {currentCooking.map((item, index) => (
                <tr key={index} className=" bg-base-200 p-6 mb-2 text-xl">
                  <th className="p-6 mb-2 text-xl">{index + 1}</th>
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
