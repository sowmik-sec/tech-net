import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

function App() {
  const { count } = useSelector((state: RootState) => state.counter);
  return (
    <>
      <div className="m-5 flex">
        <button className="border border-purple-500 px-3 py-2 rounded-md">
          increment
        </button>
        <div className="mx-5 py-2">{count}</div>
        <button className="border border-purple-500 px-3 py-2 rounded-md">
          decrement
        </button>
      </div>
    </>
  );
}

export default App;
