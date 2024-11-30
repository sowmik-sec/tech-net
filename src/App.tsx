import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="m-5 flex">
        <button
          onClick={() => dispatch(increment())}
          className="border border-purple-500 px-3 py-2 rounded-md"
        >
          increment
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(3))}
          className="border border-purple-500 px-3 py-2 rounded-md"
        >
          Increment by amount
        </button>
        <div className="mx-5 py-2">{count}</div>
        <button
          onClick={() => dispatch(decrement())}
          className="border border-purple-500 px-3 py-2 rounded-md"
        >
          decrement
        </button>
      </div>
    </>
  );
}

export default App;
