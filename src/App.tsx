import { useState } from "react";
import './index.css'
import { decrement, increment, incrementByValue } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";
// import { RootState } from "./redux/store";

function App() {
  const {count} = useAppSelector((state)=> state.counter );
  const dispatch = useAppDispatch();

  return (
    <>
      <h1> react with redux </h1>

      <div className="h-screen w-full flex justify-center items-center" >
        <div className="flex border-blue-400 rounded-md bg-slate-50 p-10  ">
          <button  onClick={()=> dispatch(increment()) }
           className="px-3 py-2 rounded-md bg-green-500 text-2xl font-semibold text-white" >
            increment
          </button>

          <br /><br />
          {/* payload */}
          <button  onClick={()=> dispatch( incrementByValue(5) ) }
           className="px-3 py-2 rounded-md bg-green-500 text-2xl font-semibold text-white" >
            increment by 5
          </button>

          <h1 className="text-3xl mx-10" >{count}</h1>

          <button  onClick={()=> dispatch(decrement()) }
           className="px-3 py-2 rounded-md bg-red-500 text-2xl font-semibold text-white" >
            decrement
          </button>
          
        </div>
      </div>

    </>
  );
}

export default App;
