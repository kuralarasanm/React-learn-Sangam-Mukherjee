// import { useDispatch } from "react-redux";
// import { handleIncreaseCountAction } from "../store/slices/counter";

// function CounterButton() {
//   const dispatch = useDispatch();

//   function handleClick() {
//     dispatch(
//       handleIncreaseCountAction({
//         id: 1,
//         name: "sangam",
//       })
//     );
//   }

//   return (
//     <button
//       onClick={handleClick}
//       style={{ backgroundColor: "black", color: "white", fontWeight: "bold" }}
//     >
//       Increase Count
//     </button>
//   );
// }

// export default CounterButton;

import { useDispatch, useSelector } from "react-redux";
import { handleIncreaseCountAction } from "../store/slices/counter";

function CounterButton() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
    const { countValue } = state.count.countValue;
    const countvalue=countValue
    console.log(state);
    console.log(countValue);
    
    
  function handleClick() {
    dispatch(handleIncreaseCountAction());
  }

  return (
    <div>
      <p>Counter value is {countvalue}</p>;
      <button
        onClick={handleClick}
        style={{ backgroundColor: "black", color: "white", fontWeight: "bold" }}
      >
        Increase Count
      </button>
    </div>
  );
}

export default CounterButton;
