import React from "react";
import { addCounter, reduceCounter } from "../Redux/action";
import { AppContext } from "../Redux/AppContextProvider";
import './Counter.css'

export const  Counter=()=> {
  const { dispatch, getState } = React.useContext(AppContext);
  const { counter } = getState();

  const handleAdd = () => {
    dispatch(addCounter(1));
  };

  const handleReduce = () => {
    dispatch(reduceCounter(1));
  };

  return (
    <div style={{marginTop:"100px"}}>
      <h1>Counter: <p style={{fontSize:"5rem",color:"blue",}}>{counter}</p></h1>
      <button onClick={handleAdd}>ADD</button>
      <button onClick={handleReduce}>REDUCE</button>
    </div>
  );
}

